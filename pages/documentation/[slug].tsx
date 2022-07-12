import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import React, { useEffect, useState } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { Blog1 } from '../../components/blog/Example';
import theme from '../../themes/tokyo.json';

import ts from 'typescript';

import remarkShikiTwoslash, {
  transformAttributesToHTML,
} from 'remark-shiki-twoslash';

import {
  ImageBuild,
  Notice,
  H3,
  H2,
  LinkHref,
  Paragraph,
  List,
  H5,
  Info,
  Structure,
  Em,
  Code,
  TabsCode,
} from '../../components/blog/DefaultComponents';
import { getAllPosts } from '../../lib/api';
import { Card } from '../../components/blog/Example';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

import {
  createDefaultMapFromNodeModules,
} from '@typescript/vfs';

interface PostInterface {
  title: string;
  category: string;
  slug: string;
}

const components = {
  Head,
  Image: ImageBuild,
  Link,
  Blog1,
  h3: H3,
  h2: H2,
  a: LinkHref,
  p: Paragraph,
  Card,
  em: Em,
  h5: H5,
  Info,
  code: Code,
  Notice,
  TabsCode,
  Structure,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
  posts: PostType[];
  fullPosts: PostType[];
  currentSlug: string;
};

const PostPage = ({
  source,
  frontMatter,
  posts,
  fullPosts,
  currentSlug,
}: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} | BridgeTS documentation`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };

  // get the index of the current post
  const currentIndex = fullPosts.findIndex((post) => post.slug === currentSlug);
  const nextIndex = currentIndex + 1;
  const prevIndex = currentIndex - 1;

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.pathname);
  }, [posts]);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [opened]);

  const [value, setValue] = useState('type Lol { name: string; }');

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    // we grab the content insite the lsp from data-lsp element
    const lsp = document.getElementsByTagName('data-lsp');

    if (lsp)
      for (let item of lsp as any) {
        item.addEventListener('mouseenter', (e) => {
          const content = item.getAttribute('lsp') as string;
        
          // the the top & left position of the item
          const top = item.getBoundingClientRect().top + window.scrollY;
          const left = item.getBoundingClientRect().left;

          setPosition({
            top: top + 24,
            left: left,
          });

          setValue(content);
        });
        // item.addEventListener('mouseleave', (e) => {
        //   setValue('');
        // });
      }
  }, []);

  return (
    <Layout customMeta={customMeta}>
      <div className="flex -mt-10 max-w-max">
        <div
          className="sticky hidden gap-2 pt-12 pl-8 border-r border-gray-200 dark:border-gray-800 md:flex top-12"
          style={{ minWidth: 300 }}
        >
          <div className="sticky top-20 h-max">
            {Object.keys(posts).map((key, index) => {
              return (
                <MenuItem
                  url={url}
                  posts={posts}
                  key={index}
                  setOpenedBig={setOpened}
                  category={key}
                />
              );
            })}
          </div>
        </div>
        <article className="w-full max-w-4xl px-0 pb-24 mx-auto md:pt-12 md:px-12 md:w-bar">
          <div
            className="sticky z-10 block w-full px-5 mb-4 overflow-y-auto bg-white border-b border-gray-200 shadow-sm md:hidden dark:border-gray-800 dark:bg-theme-dark top-12"
            style={{ maxHeight: 'calc(100vh - 48px)' }}
          >
            <div
              className="flex pt-4 pb-3 text-sm font-semibold"
              onClick={() => setOpened(!opened)}
            >
              <svg
                fill="none"
                height="10"
                viewBox="0 0 6 10"
                width="6"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-150 mr-2 mt-1 ${
                  opened ? 'rotate-90' : 'rotate-0'
                }`}
              >
                <path
                  className="mt-1"
                  d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                  stroke="#999"
                  strokeLinecap="square"
                ></path>
              </svg>
              Menu
            </div>
            <div
              className={`pt-4 pb-3 border-t border-gray-200 dark:border-gray-800 ${
                opened ? 'block' : 'hidden'
              }`}
            >
              {Object.keys(posts).map((key, index) => {
                return (
                  <MenuItem
                    url={url}
                    setOpenedBig={setOpened}
                    posts={posts}
                    key={index}
                    category={key}
                  />
                );
              })}
            </div>
          </div>

          <h1 className="px-5 mt-8 mb-3 text-3xl font-bold sm:mt-0 text-neutral-900 md:mb-8 dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="px-5 prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
            {/* <div
              className={`interface-preview rounded-sm z-10 overflow-hidden text-neutral-300 absolute bg-neutral-800 ${
                value ? 'block' : 'hidden'
              }`}
              style={{ top: position.top, left: position.left, maxWidth: 400 }}
              dangerouslySetInnerHTML={{ __html: value }}
            /> */}
                        <div
              className={`interface-preview rounded-sm text-sm z-10 overflow-hidden px-2 py-1  text-[#BFC8F3] absolute ${
                value ? 'block' : 'hidden'
              }`}
              style={{ top: position.top, left: position.left, maxWidth: 400, whiteSpace: 'pre-wrap', background: '#16161E', border: 'solid 1px #101014' }}
            >{value}</div>
          </div>

          {/* Show previous and next post */}
          <div className="grid gap-4 px-5 pt-8 mt-12 border-t border-gray-200 sm:grid-cols-2 group dark:border-gray-800">
            {fullPosts[prevIndex] && (
              <Link href={`/documentation/${fullPosts[prevIndex].slug}`}>
                <a className="relative w-full px-6 py-4 text-right transition-all duration-300 border border-gray-200 rounded-md hover:text-theme-main hover:border-theme-main text-neutral-700 hover:bg-opacity-0 dark:text-white dark:border-gray-900 dark:bg-slate-900">
                  <span className="text-sm text-neutral-500">Previous</span>
                  <p className="pl-8 mb-0 text-base font-semibold">
                    {fullPosts[prevIndex].title}
                  </p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    preserveAspectRatio="xMidYMid meet"
                    className="absolute w-6 -translate-y-1/2 left-4 top-1/2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                </a>
              </Link>
            )}
            {fullPosts[nextIndex] && (
              <Link href={`/documentation/${fullPosts[nextIndex].slug}`}>
                <a className="relative w-full px-6 py-4 transition-all duration-300 border border-gray-200 rounded-md hover:text-theme-main text-neutral-700 hover:border-theme-main hover:bg-opacity-0 dark:text-white dark:border-gray-900 dark:bg-slate-900">
                  <span className="text-sm text-neutral-500">Next</span>
                  <p className="pr-8 mb-0 text-base font-semibold ">
                    {fullPosts[nextIndex].title}
                  </p>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    preserveAspectRatio="xMidYMid meet"
                    className="absolute w-6 rotate-180 -translate-y-1/2 right-4 top-1/2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                </a>
              </Link>
            )}
          </div>
        </article>
      </div>
    </Layout>
  );
};

const MenuItem = ({ posts, category, url, setOpenedBig }) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className={`mt-6 first:mt-0`}>
      <div
        className="flex gap-2 cursor-pointer"
        onClick={() => setOpened(!opened)}
      >
        <svg
          fill="none"
          height="10"
          viewBox="0 0 6 10"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-150 mt-1 ${
            opened ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <path
            className="mt-1"
            d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
            stroke="#999"
            strokeLinecap="square"
          ></path>
        </svg>

        <p
          className={`text-sm mb-2 font-bold uppercase ${
            opened
              ? 'text-neutral-800 dark:text-neutral-100'
              : 'text-neutral-800 dark:text-neutral-100'
          }`}
        >
          {category}
        </p>
      </div>

      {posts[category].map((post: PostInterface, index: number) => {
        return (
          <div
            className={`relative mb-2 ml-4 overflow-y-auto ${
              opened ? 'block' : 'hidden'
            }`}
            key={index}
          >
            <div
              className={`absolute left-0 w-1.5 h-1.5 bg-gray-200 rounded-full
                          ${
                            url == `/documentation/${post.slug}`
                              ? 'font-bold bg-theme-main'
                              : 'bg-gray-100 dark:bg-gray-800 '
                          }
                          `}
              style={{
                transform: `translateX(-16px) translateY(9px)`,
              }}
            ></div>
            <Link href={`/documentation/${post.slug}`}>
              <a
                className={`mb-4 text-sm  hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-blue-400 ${
                  url == `/documentation/${post.slug}`
                    ? 'font-bold text-theme-main dark:text-blue-400'
                    : 'text-neutral-800 '
                }`}
                onClick={() => setOpenedBig(false)}
              >
                {post.title}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const setAllDTSFiles = (
    map: Map<string, string>,
    source = path.resolve(process.cwd(), './node_modules/bridgets/')
  ): void => {
    const files = fs.readdirSync(source);

    files.forEach((file) => {
      if (fs.lstatSync(path.join(source, file)).isDirectory()) {
        setAllDTSFiles(map, path.join(source, file));
      } else if (file.endsWith('.d.ts')) {
        const newName = path
          .join(source, file)
          .replace(
            '/Users/raul/Documents/GitHub/nextjs-typescript-mdx-blog/node_modules/bridgets/dist/Lib/',
            '/node_modules/@types/bridgets/'
          );
        map.set(newName, fs.readFileSync(path.join(source, file), 'utf8')); 
      }
    });
  };

  const setAllDTSFilesZod = (
    map: Map<string, string>,
    source = path.resolve(process.cwd(), './public/dts/node_modules/zod/')
  ): void => {
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      if (fs.lstatSync(path.join(source, file)).isDirectory()) {
       
        setAllDTSFilesZod(map, path.join(source, file));
      } else if (file.endsWith('.d.ts')) {
        const newName = path
          .join(source, file)
          .replace(
            '/Users/raul/Documents/GitHub/nextjs-typescript-mdx-blog/public/dts/node_modules/zod/lib/',
            '/node_modules/@types/zod/'
          );
        map.set(newName, fs.readFileSync(path.join(source, file), 'utf8')); 
      }
    });
  };

  const setAllDTSFilesExpress = (
    map: Map<string, string>,
    source = path.resolve(process.cwd(), './public/dts/node_modules/@types/express/')
  ): void => {
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      if (fs.lstatSync(path.join(source, file)).isDirectory()) {
       
        setAllDTSFilesExpress(map, path.join(source, file));
      } else if (file.endsWith('.d.ts')) {
        const newName = path
          .join(source, file)
          .replace(
            '/Users/raul/Documents/GitHub/nextjs-typescript-mdx-blog/public/dts/node_modules/@types/express/',
            '/node_modules/@types/express/'
          );
        map.set(newName, fs.readFileSync(path.join(source, file), 'utf8')); 
      }
    });
  };

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const posts = getAllPosts(['category', 'slug', 'title', 'order']);

  // we sort the posts by order
  posts.sort((a: any, b: any) => {
    return a.order - b.order;
  });

  // we sort the posts by category order
  const categoryOrder = [
    'Introduction',
    'Controllers',
    'Endpoint',
    'Server',
    'Client',
    'SDK',
  ];

  const fullPosts = {};
  categoryOrder.forEach((category) => {
    fullPosts[category] = posts.filter((post) => post.category == category);
  });

  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const addFilesFromFolder = function addAllFilesFromFolder(map: Map<string, string>, workingDir: string, libName: string) {
    let walk = function walk(dir) {
      let results = [];
      let list = fs.readdirSync(dir);
      list.forEach(function (file) {
        file = path.join(dir, file);
        let stat = fs.statSync(file);
  
        if (stat && stat.isDirectory()) {
          /* Recurse into a subdirectory */
          results = results.concat(walk(file));
        } else {
          /* Is a file */
          results.push(file);
        }
      });
      return results;
    };
  
    let allFiles = walk(workingDir);

    console.log("WorkingDir", workingDir)

    allFiles.forEach(function (lib) {
      let fsPath = "/node_modules/@types" + "/" + libName + lib.replace(workingDir, "");
      let content = fs.readFileSync(lib, "utf8");
      let validExtensions = [".ts", ".tsx", ".d.ts"];
      
      if (validExtensions.includes(path.extname(fsPath))) {
        map.set(fsPath, content);
        console.log("Added to :>", fsPath)
      }
    });
  };


  const fsMap = createDefaultMapFromNodeModules({
    target: ts.ScriptTarget.ES2020,
  });

  addFilesFromFolder(fsMap, 'node_modules/bridgets/dist/Lib', 'bridgets');
  addFilesFromFolder(fsMap, 'node_modules/zod', 'zod');
  addFilesFromFolder(fsMap, 'node_modules/@types/express', 'express');
  addFilesFromFolder(fsMap, 'node_modules/typescript/lib', 'typescript');

  // setAllDTSFiles(fsMap);
  // setAllDTSFilesZod(fsMap);
  // setAllDTSFilesExpress(fsMap);  

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require('remark-code-titles'),
        [
          remarkShikiTwoslash,
          { theme: theme, wrapFragments: true, fsMap: fsMap },
        ],
      ],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      posts: fullPosts,
      fullPosts: posts,
      currentSlug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;

function getAllImportedModules(code: string): Array<string> {
  return code
    .split('\n')
    .filter((line) => {
      return /^import.*from(.*)/.test(line);
    })
    .map((importLine) => {
      return importLine.replace(/^import.*from ('|")(.*)('|");?/, '$2').trim();
    });
}

