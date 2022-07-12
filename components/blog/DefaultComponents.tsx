import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import {  useState } from 'react';
import RecursiveTree from './RecrusiveTree';

export const List = (props: any): JSX.Element => {
  return (
    <li className="flex gap-2 mb-4">
      <svg
        className="self-center text-blue-700"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: '1.5rem' }}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
      <p
        className="mb-0 ml-1 text-base text-slate-800 dark:text-slate-300"
        {...props}
      ></p>
    </li>
  );
};

export const CodeElement = (props: any): JSX.Element => {
  return <code className="" {...props} />;
};

export const Paragraph = (props: any): JSX.Element => {
  return (
    <p
      className="mb-4 text-base leading-8 text-slate-800 dark:text-slate-300"
      {...props}
    />
  );
};

export const Info = (props: any): JSX.Element => {
  return (
    <div className="relative px-8 py-6 mt-12 mb-8 border-l-4 border-orange-300 rounded-sm bg-orange-50 dark:bg-orange-300">
      <div className="absolute top-0 left-0 w-8 h-8 p-0.5 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border-2 border-orange-300 rounded-full">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="w-full h-full text-orange-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4H8.01M9 12H8V8H7L9 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex">
        <div>
          <p className="mb-1 text-sm font-semibold text-orange-400 uppercase dark:text-orange-700">
            INFO
          </p>
          <p className="mb-0 text-neutral-800">{props?.text}</p>
        </div>
      </div>
    </div>
  );
};

export const Notice = (props: any): JSX.Element => {
  return (
    <div className="relative px-8 py-6 mt-8 mb-8 border-l-4 border-blue-300 rounded-sm bg-blue-50">
      <div className="absolute top-0 left-0 w-8 h-8 p-0.5 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-blue-300 rounded-full">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="w-full h-full text-blue-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4H8.01M9 12H8V8H7L9 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex">
        <div>
          <p className="mb-1 text-sm font-semibold text-blue-400 uppercase">
            INFO
          </p>
          <p className="mb-0 text-neutral-800">{props?.text}</p>
        </div>
      </div>
    </div>
  );
};

export const Em = (props: any): JSX.Element => {
  return (
    <em
      className="px-1.5 py-0.5 mx-0.5 border dark:border-opacity-20 rounded-md border-opacity-10 bg-gray-100 dark:bg-gray-900 border-theme-main text-neutral-800 dark:text-slate-300"
      style={{ fontStyle: 'normal' }}
      {...props}
    />
  );
};

export const Em2 = (props: any): JSX.Element => {
  return (
    <em
      className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-md text-slate-800 dark:text-slate-300"
      style={{ fontStyle: 'normal' }}
      {...props}
    />
  );
};

export const H3 = (props: any): JSX.Element => {
  return (
    <h3
      className="mt-12 mb-3 text-lg font-bold text-slate-800 dark:text-slate-200"
      {...props}
    />
  );
};

export const H5 = (props: any): JSX.Element => {
  return (
    <h5
      className="mt-8 mb-3 text-base italic text-red-600 dark:text-red-600"
      {...props}
    />
  );
};

export const ImageBuild = (props: any): JSX.Element => {
  return (
    <div className="relative w-full mt-8 mb-8 sm:mt-12">
      <img
        className="w-full"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        {...props}
      />
      <p className="mt-2 text-sm text-center text-neutral-500">
        {props?.description}
      </p>
    </div>
  );
};

export const H2 = (props: any): JSX.Element => {
  return (
    <h2
      className="mt-8 mb-4 text-2xl font-bold sm:mt-12 md:mt-16 text-slate-900 dark:text-yellow-400"
      {...props}
    />
  );
};

export const Structure = (props: any): JSX.Element => {
  return (
    <div className="px-5 py-6 mt-8 mb-12 bg-gray-900 rounded-md">
      <RecursiveTree listMeta={props?.data} />
    </div>
  );
};

export const LinkHref = (props: any): JSX.Element => {
  return (
    <a
      className="font-semibold transition-opacity text-theme-main hover:opacity-95 hover:underline"
      {...props}
    />
  );
};

export const Code = (props: any): JSX.Element => {
  const language =
    props.className?.replace('language-', '').trim() || props?.language;
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <>
    <div
      className="m-5 text-sm"
      style={{ scrollbarColor: 'rgb(0,0,0,0)', fontSize: 13 }}
    >
      {props.children}
      <Button
        onClick={() => {
          // copyToClipboard(props.children.trim());
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 3000);
        }}
      >
        {isCopied ? 'Je dois fix ça !' : 'Copy'}
      </Button>
    </div>

    </>
  );
};

export const CodePrev = (props: any): JSX.Element => {
  const language =
    props.className?.replace('language-', '').trim() || props?.language;
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  if (props?.live)
    return (
      <div className="mb-12 w-full rounded-md bg-[#151F28]">
        <div className="w-full px-3 py-1.5 text-sm font-semibold text-slate-400 bg-slate-700 rounded-t-md">
          Code playground
        </div>
        <LiveProvider
          theme={theme}
          code={props?.children || ''}
          noInline={true}
        >
          <div className="grid grid-cols-2">
            <div className="border-r border-slate-700">
              <p className="p-2 mb-0 text-xs font-bold uppercase text-slate-600">
                Code
              </p>
              <LiveEditor
                style={{ background: '#151F28' }}
                className="overflow-x-auto overflow-y-auto text-sm rounded-md max-h-96"
              />
            </div>
            <div className="p-2">
              <p className="text-xs font-bold uppercase text-slate-600">
                Result
              </p>
              <LiveError />
              <LivePreview />
            </div>
          </div>
        </LiveProvider>
      </div>
    );
  // DEFAULT CODE VIEWER
  else
    return (
      <div
        className="mt-8 mb-12 overflow-x-auto rounded-lg"
        style={{ scrollbarColor: 'rgb(0,0,0,0)' }}
      >
        <Highlight
          {...defaultProps}
          theme={theme}
          code={props?.code || props?.children.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <>
              <div
                className={className}
                style={{
                  ...style,
                  overflow: 'scroll',
                  background: '#111827',
                  fontSize: 14,
                  padding: 0,
                  position: 'relative',
                  fontFamily: 'JetBrains Mono',
                }}
              >
                {props?.file && (
                  <div className="w-full text-xs bg-gray-900 border-b border-gray-800 cursor-default text-neutral-300 rounded-t-md">
                    <div
                      style={{ fontSize: 11, borderLeft: '1px #374151' }}
                      className="px-3 py-2.5 text-blue-400 bg-gray-800 border-b border-blue-400 max-w-max"
                    >
                      {props?.file}
                    </div>
                  </div>
                )}
                <div className="p-4">
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                  <Button
                    onClick={() => {
                      copyToClipboard(props.children.trim());
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 3000);
                    }}
                  >
                    {isCopied ? '🎉 Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>
            </>
          )}
        </Highlight>
      </div>
    );
};

const Button = (props): JSX.Element => (
  <button
    style={{
      position: 'absolute',
      bottom: 0,
      right: 0,
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
      margin: '8px',
      padding: '8px 12px',
      background: '#E2E8F022',
      borderRadius: '8px',
      cursor: 'pointer',
      color: '#E2E8F0',
      fontSize: '14px',
      fontFamily: 'sans-serif',
      lineHeight: '1',
    }}
    {...props}
  />
);

export const TabsCode = (props: TabProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(
    props?.tabs[0] || { title: '', content: '', language: ' ' }
  );

  return (
    <div>
      <div className="flex gap-3 -mb-4 rounded-md">
        {props.tabs.map((tab, i) => {
          return (
            <>
              <div
                key={i}
                onClick={() => setSelectedTab(tab)}
                className={`text-xs font-mono border-b-2 cursor-default rounded-t-md ${
                  tab.title == selectedTab.title
                    ? 'border-theme-main bg-neutral-100 text-theme-main font-semibold'
                    : 'border-neutral-200 bg-transparent'
                }`}
              >
                <div
                  className={`py-2 px-8 text-center
                  ${tab.title == selectedTab.title ? '' : ''}
                  `}
                >
                  <p className="w-full pb-0 mb-0 text-center">{tab?.title}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Code code={selectedTab.content} language={selectedTab?.language} />
    </div>
  );
};

interface TabProps {
  tabs: [
    {
      title: string;
      content: string;
      language?: string;
    }
  ];
}
