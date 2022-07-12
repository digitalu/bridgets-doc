import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
// etc
import { NewsLetter } from '../components/sections/Newsletter';
import { PrimaryButton, SecondaryButton } from '../components/main/Buttons';

import { useRouter } from 'next/router';
// import sdk from '@stackblitz/sdk';

export const Index = (): JSX.Element => {
  // useEffect(() => {
  //   sdk.embedProjectId('blitz', 'express-simple-xix2nt', {
  //     forceEmbedLayout: true,
  //     openFile: 'index.js',
  //     height: '100%',
  //   });
  // }, []);

  return (
    <Layout>
      {/* <Editor /> */}
      <First />
      {/* <div className="py-32 section" id="13333" style={{ height: 900 }}>
        <div id="blitz" />
      </div> */}
      <FrontTeam />
      <NewsLetter />
    </Layout>
  );
};

const First = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="">
      <div className="pt-0 pb-12 sm:pt-20 sm:pb-32 section">
        <h1
          className="text-4xl font-black text-center dark:text-neutral-50 sm:px-12 sm:text-5xl text-neutral-900 section"
          style={{ lineHeight: 1.3 }}
        >
          The <span className="text-theme-main">Typescript</span> API
          framework that automatically generates your SDK{' '}
        </h1>
        <p className="mt-8 mb-8 text-lg text-center sm:text-xl sm:px-32 text-neutral-700 dark:text-neutral-300">
          BridgeTS gives you the best developer experience by using the power of
          Typescript to generate typesafe API&apos;s.
        </p>
        <div className="flex gap-3 mx-auto max-w-max">
          <PrimaryButton
            text="Get Started"
            className="w-48"
            onClick={() => router.push('/documentation')}
          />
          <SecondaryButton
            text="Discover"
            className="w-48"
            onClick={() => router.push('/documentation')}
          />
        </div>

        <div className="grid gap-4 mt-20 sm:mt-40 sm:gap-16 sm:grid-cols-3">
          <HomeCard
            title="Designed for scalability"
            description="BridgeTS is designed to scale with your application. It's easy to add new features and it's easy to maintain."
          />
          <HomeCard
            title="Designed for scalability"
            description="BridgeTS is designed to scale with your application. It's easy to add new features and it's easy to maintain."
          />
          <HomeCard
            title="Designed for scalability"
            description="BridgeTS is designed to scale with your application. It's easy to add new features and it's easy to maintain."
          />
        </div>
      </div>
    </div>
  );
};

const HomeCard = (props: {
  title: string;
  description: string;
}): JSX.Element => {
  return (
    <div className="px-6 py-4 border-t-2 border-neutral-200 dark:border-neutral-700">
      <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">{props.title}</h2>
      <p className="mt-1 mb-0 text-base text-neutral-600 dark:text-neutral-400">{props.description}</p>
    </div>
  );
};

// const Editor = (): JSX.Element => {
//   const [value, setValue] = React.useState('');
//   const [pos, setPos] = React.useState(0);
//   const y = `
//   import { NextApiRequest, NextApiResponse } from 'next'; 
//   import { NextApiHandler } from 'next-server/dist/server/utils'
  
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");`;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (pos <= y.length) {
//         setValue(y.slice(0, pos));
//         setPos(pos + 1);
//       } else {
//         clearInterval(intervalId);
//       }
//     }, 10);

//     return () => clearInterval(intervalId);
//   });

//   return (
//     <div className="py-32 section">
//       <div className="flex-col bg-hljs-background text-hljs-foreground rounded-[0.3rem] syntax-light border shadow-light ">
//         <div className="flex items-center w-full p-3 py-1 bg-offset">
//           <div className="flex space-x-[5px]">
//             <div className="h-[11px] w-[11px] rounded-full bg-[#FF605C]"></div>
//             <div className="h-[11px] w-[11px] rounded-full bg-[#FFBD44]"></div>
//             <div className="h-[11px] w-[11px] rounded-full bg-[#00CA4E]"></div>
//           </div>
//           <div className="flex-1 -mt-1 -mb-1 text-xs text-center leading-1">
//             Visual Studio Code
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="flex flex-1 border-t border-b themed-border">
//           {/* LEFT BAR */}
//           <div className="p-3 px-[0.6rem] flex flex-col border-r themed-border flex-shrink-0 bg-hljs-offset text-hljs-foreground-light">
//             <div className="flex-col flex-1 space-y-4">
//               <div className="w-5 h-5">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 24 24"
//                   height="100%"
//                   width="100%"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path>
//                 </svg>
//               </div>
//               <div className="w-5 h-5">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 24 24"
//                   height="100%"
//                   width="100%"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"></path>
//                 </svg>
//               </div>
//               <div className="w-5 h-5">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 24 24"
//                   height="100%"
//                   width="100%"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>
//                 </svg>
//               </div>
//               <div className="w-5 h-5">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 24 24"
//                   height="100%"
//                   width="100%"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5 0 14.56l1.72 1.72-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94 1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24 12 22.94 10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3 3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"></path>
//                 </svg>
//               </div>
//               <div className="w-5 h-5">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 24 24"
//                   height="100%"
//                   width="100%"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="flex-shrink-0 space-y-4 ">
//               <div className="w-5 h-5">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 16 16"
//                   height="100%"
//                   width="100%"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"></path>
//                 </svg>
//               </div>
//               <div className="w-5 h-5">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 24 24"
//                   height="100%"
//                   width="100%"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//           {/* RIGHT SIDE */}
//           <div className="flex-1 h-full min-w-0">
//             <div className="relative syntax-light ">
//               <div className="relative w-full max-h-full py-0 border bg-hljs-background border-hljs-background">
//                 <div className="relative">
//                   {/* TABS */}
//                   <div
//                     id="_sl1f8lgzr"
//                     aria-label="Example tabs"
//                     className="relative z-10 flex max-w-full overflow-x-auto bg-hljs-offset"
//                   >
//                     <div className="absolute bottom-0 left-0 right-0 border-b themed-border"></div>
//                     <div className="flex border-r divide-x themed-border divide-hljs-background-selection">
//                       <button
//                         id="runtime.go"
//                         style={{ borderColor: `transparent red` }}
//                         className="relative flex items-center pt-[0.5rem] pb-[0.7rem] px-4 text-hljs-foreground focus:outline-none border-t border-b text-sm flex-shrink-0 focus:bg-hljs-background bg-hljs-offset text-opacity-100"
//                       >
//                         <div className="pt-1 pr-2 text-hljs-comments">
//                           <svg
//                             width="1.3em"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M1.7712 9.67195C1.73804 9.70511 1.7712 9.73827 1.80436 9.73827L6.01563 9.70511C6.08195 9.70511 6.11511 9.67195 6.14827 9.63879L6.34723 9.34035C6.38039 9.30719 6.34723 9.27403 6.31407 9.27403H2.13595C2.06963 9.27403 2.03647 9.30719 2.00331 9.34035L1.7712 9.67195ZM0.0137352 10.7331C-0.0194245 10.7662 0.0137353 10.7994 0.0468949 10.7994H5.58456C5.61772 10.7994 5.68404 10.7662 5.68404 10.7331L5.78351 10.4015C5.78351 10.3683 5.75035 10.3351 5.71719 10.3351H0.378491C0.312172 10.3351 0.279013 10.3683 0.245853 10.4015L0.0137352 10.7331ZM2.83231 11.8273C2.79915 11.8605 2.83231 11.8936 2.86546 11.8936L5.41876 11.8605C5.45192 11.8605 5.48508 11.8273 5.48508 11.7942L5.51824 11.5289C5.51824 11.4957 5.48508 11.4626 5.45192 11.4626H3.13074C3.06442 11.4626 3.03126 11.4957 2.9981 11.5289L2.83231 11.8273ZM13.0455 10.0035L15.0019 9.50615C15.1345 9.47299 15.1677 9.43983 15.1345 9.30719C14.8361 8.61084 14.405 8.04712 13.775 7.64921C12.8465 7.01917 11.7854 6.88654 10.6911 7.08549C9.3316 7.31761 8.23733 8.01396 7.40834 9.10823C6.64567 10.103 6.24775 11.2636 6.41355 12.5237C6.54619 13.5848 7.04358 14.4469 7.90573 15.1101C8.8342 15.8065 9.89531 16.0386 11.0559 15.8728C12.4486 15.6738 13.5429 14.9775 14.3719 13.8832C14.5532 13.6565 14.7075 13.4143 14.8373 13.1605C15.0333 13.8544 15.4259 14.4551 15.9967 14.9443C16.8257 15.6407 17.7873 15.9391 18.8484 15.9723C18.9547 15.9605 19.0653 15.9529 19.18 15.945C19.3873 15.9307 19.6084 15.9155 19.8432 15.8728C20.9043 15.6407 21.866 15.1764 22.6286 14.3806C23.6897 13.2863 24.154 12.0263 23.955 10.4346C23.7892 9.30719 23.2255 8.44504 22.297 7.81501C21.3022 7.11865 20.1748 7.01918 18.9811 7.21813C17.5884 7.48341 16.5604 8.04712 15.6983 9.17455C15.343 9.63347 15.0736 10.1188 14.9019 10.6336H11.1554C10.9896 10.6336 10.8901 10.7662 10.8569 10.8325C10.7135 11.0907 10.4957 11.5721 10.3322 11.9334C10.3067 11.9899 10.2825 12.0433 10.2601 12.0926C10.1937 12.2916 10.2601 12.4574 10.4922 12.4574H12.747C12.6144 12.6232 12.5149 12.7558 12.4154 12.8884C11.8849 13.4853 11.2217 13.7506 10.4259 13.6511C9.49739 13.5185 8.8342 12.7558 8.8342 11.8273C8.8342 10.8657 9.23212 10.103 10.0279 9.60563C10.6911 9.17455 11.4207 9.07507 12.1502 9.43983C12.4154 9.53931 12.5481 9.67195 12.7139 9.8709C12.833 10.0495 12.8719 10.0411 12.9986 10.0135C13.013 10.0103 13.0285 10.0069 13.0455 10.0035ZM21.6007 10.8657C21.6338 10.9983 21.6338 11.0978 21.6338 11.2636C21.5675 12.2584 21.0701 13.0211 20.1085 13.4853C19.5116 13.7837 18.8484 13.8169 18.2184 13.5516C17.3894 13.1537 16.9583 12.2252 17.1573 11.3299C17.4226 10.2357 18.1189 9.53931 19.2132 9.30719C20.3406 9.04191 21.4017 9.70511 21.6007 10.8657Z"></path>
//                           </svg>
//                         </div>
//                         <span className="opacity-100 text-hljs-foreground">
//                           runtime.go
//                         </span>
//                       </button>
//                       <button
//                         id="days_between_dates.js"
//                         className="relative flex items-center pt-[0.5rem] pb-[0.7rem] px-4 text-hljs-foreground focus:outline-none border-t border-b text-sm flex-shrink-0 focus:bg-hljs-background bg-hljs-offset border-transparent hover:bg-hljs-background"
//                       >
//                         <div className="pt-1 pr-2 text-hljs-comments">
//                           <svg
//                             stroke="currentColor"
//                             fill="currentColor"
//                             strokeWidth="0"
//                             viewBox="0 0 512 512"
//                             aria-label="Icon for js language"
//                             height="1em"
//                             width="1em"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path>
//                           </svg>
//                         </div>
//                         <span className="opacity-50 text-hljs-foreground">
//                           days_between_dates.js
//                         </span>
//                       </button>
//                       <button
//                         id="server.go"
//                         className="relative flex items-center pt-[0.5rem] pb-[0.7rem] px-4 text-hljs-foreground focus:outline-none border-t border-b text-sm flex-shrink-0 focus:bg-hljs-background bg-hljs-offset border-transparent hover:bg-hljs-background"
//                       >
//                         <div className="pt-1 pr-2 text-hljs-comments">
//                           <svg
//                             width="1.3em"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                           >
//                             <path d="M1.7712 9.67195C1.73804 9.70511 1.7712 9.73827 1.80436 9.73827L6.01563 9.70511C6.08195 9.70511 6.11511 9.67195 6.14827 9.63879L6.34723 9.34035C6.38039 9.30719 6.34723 9.27403 6.31407 9.27403H2.13595C2.06963 9.27403 2.03647 9.30719 2.00331 9.34035L1.7712 9.67195ZM0.0137352 10.7331C-0.0194245 10.7662 0.0137353 10.7994 0.0468949 10.7994H5.58456C5.61772 10.7994 5.68404 10.7662 5.68404 10.7331L5.78351 10.4015C5.78351 10.3683 5.75035 10.3351 5.71719 10.3351H0.378491C0.312172 10.3351 0.279013 10.3683 0.245853 10.4015L0.0137352 10.7331ZM2.83231 11.8273C2.79915 11.8605 2.83231 11.8936 2.86546 11.8936L5.41876 11.8605C5.45192 11.8605 5.48508 11.8273 5.48508 11.7942L5.51824 11.5289C5.51824 11.4957 5.48508 11.4626 5.45192 11.4626H3.13074C3.06442 11.4626 3.03126 11.4957 2.9981 11.5289L2.83231 11.8273ZM13.0455 10.0035L15.0019 9.50615C15.1345 9.47299 15.1677 9.43983 15.1345 9.30719C14.8361 8.61084 14.405 8.04712 13.775 7.64921C12.8465 7.01917 11.7854 6.88654 10.6911 7.08549C9.3316 7.31761 8.23733 8.01396 7.40834 9.10823C6.64567 10.103 6.24775 11.2636 6.41355 12.5237C6.54619 13.5848 7.04358 14.4469 7.90573 15.1101C8.8342 15.8065 9.89531 16.0386 11.0559 15.8728C12.4486 15.6738 13.5429 14.9775 14.3719 13.8832C14.5532 13.6565 14.7075 13.4143 14.8373 13.1605C15.0333 13.8544 15.4259 14.4551 15.9967 14.9443C16.8257 15.6407 17.7873 15.9391 18.8484 15.9723C18.9547 15.9605 19.0653 15.9529 19.18 15.945C19.3873 15.9307 19.6084 15.9155 19.8432 15.8728C20.9043 15.6407 21.866 15.1764 22.6286 14.3806C23.6897 13.2863 24.154 12.0263 23.955 10.4346C23.7892 9.30719 23.2255 8.44504 22.297 7.81501C21.3022 7.11865 20.1748 7.01918 18.9811 7.21813C17.5884 7.48341 16.5604 8.04712 15.6983 9.17455C15.343 9.63347 15.0736 10.1188 14.9019 10.6336H11.1554C10.9896 10.6336 10.8901 10.7662 10.8569 10.8325C10.7135 11.0907 10.4957 11.5721 10.3322 11.9334C10.3067 11.9899 10.2825 12.0433 10.2601 12.0926C10.1937 12.2916 10.2601 12.4574 10.4922 12.4574H12.747C12.6144 12.6232 12.5149 12.7558 12.4154 12.8884C11.8849 13.4853 11.2217 13.7506 10.4259 13.6511C9.49739 13.5185 8.8342 12.7558 8.8342 11.8273C8.8342 10.8657 9.23212 10.103 10.0279 9.60563C10.6911 9.17455 11.4207 9.07507 12.1502 9.43983C12.4154 9.53931 12.5481 9.67195 12.7139 9.8709C12.833 10.0495 12.8719 10.0411 12.9986 10.0135C13.013 10.0103 13.0285 10.0069 13.0455 10.0035ZM21.6007 10.8657C21.6338 10.9983 21.6338 11.0978 21.6338 11.2636C21.5675 12.2584 21.0701 13.0211 20.1085 13.4853C19.5116 13.7837 18.8484 13.8169 18.2184 13.5516C17.3894 13.1537 16.9583 12.2252 17.1573 11.3299C17.4226 10.2357 18.1189 9.53931 19.2132 9.30719C20.3406 9.04191 21.4017 9.70511 21.6007 10.8657Z"></path>
//                           </svg>
//                         </div>
//                         <span className="opacity-50 text-hljs-foreground">
//                           server.go
//                         </span>
//                       </button>
//                       <button
//                         id="Person.java"
//                         className="relative flex items-center pt-[0.5rem] pb-[0.7rem] px-4 text-hljs-foreground focus:outline-none border-t border-b text-sm flex-shrink-0 focus:bg-hljs-background bg-hljs-offset border-transparent hover:bg-hljs-background"
//                       >
//                         <div className="pt-1 pr-2 text-hljs-comments">
//                           <svg
//                             stroke="currentColor"
//                             fill="currentColor"
//                             strokeWidth="0"
//                             viewBox="0 0 384 512"
//                             aria-label="Icon for java language"
//                             height="1em"
//                             width="1em"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path>
//                           </svg>
//                         </div>
//                         <span className="opacity-50 text-hljs-foreground">
//                           Person.java
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CONTENT */}

//                 <Highlight
//                   {...defaultProps}
//                   theme={theme}
//                   code={value}
//                   language="typescript"
//                 >
//                   {({
//                     className,
//                     style,
//                     tokens,
//                     getLineProps,
//                     getTokenProps,
//                   }) => (
//                     <pre
//                       className={className}
//                       style={{
//                         ...style,
//                         overflow: 'scroll',
//                         marginTop: 0,
//                         borderRadius: 8,
//                         fontSize: 14,
//                         marginBottom: 48,
//                         padding: 16,
//                       }}
//                     >
//                       {tokens.map((line, i) => (
//                         <div key={i} {...getLineProps({ line, key: i })}>
//                           <>
//                             <span className="mr-2 text-right text-hljs-comments">
//                               {i}
//                             </span>
//                             {line.map((token, key) => (
//                               <>
//                                 <span
//                                   key={key}
//                                   className="text-red-400 !last:bg-red-600"
//                                   {...getTokenProps({ token, key })}
//                                 />
//                               </>
//                             ))}
//                           </>
//                         </div>
//                       ))}
//                     </pre>
//                   )}
//                 </Highlight>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-5 flex bg-hljs-offset text-xs leading-1 rounded-b-[0.3rem] overflow-hidden">
//           <div className="flex items-center flex-1 flex-shrink-0 px-2">
//             <div className="h-2 w-2 mr-[0.4rem] -mt-1">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 strokeWidth="0"
//                 viewBox="0 0 24 24"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>
//               </svg>
//             </div>
//             main
//           </div>
//           <div className="flex items-center justify-center flex-shrink-0 bg-hljs-background">
//             <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor">
//               <path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path>
//               <path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path>
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"
//               ></path>
//             </svg>
//           </div>
//           <div className="flex items-center justify-center px-2 min-w-[90px]">
//             {' '}
//             Col 1.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const FrontTeam = (): JSX.Element => {
  return (
    <div
    className="relative py-20 sm:py-32 bg-neutral-900"
    style={{
      backgroundImage: `url('bg.svg')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="grid sm:grid-cols-2 section">
        <div>
          <h2 className="mb-2 text-xs font-semibold tracking-widest text-white uppercase">
            Automatic sdk generator
          </h2>
          <h3 className="text-4xl font-bold text-white sm:text-5xl">
            Your <span className="color-text-gradient">frontend team</span> will
            love BridgeTS
          </h3>
          <p className="mt-4 text-lg text-white opacity-75 sm:text-xl sm:mt-8">
            Automatically generate the API code for the frontend. Works with all
            frontend frameworks (using typescript).
          </p>
        </div>
        <div>
          <img src="/images/frameworks.png" className="w-full max-w-md mx-auto" alt="Frameworks" />
        </div>
      </div>

      <div className="gap-16 mt-8 sm:mt-16 sm:grid sm:grid-cols-3 section">
        <div className="flex flex-col self-center gap-8">
          <AdvantageCard
            icon="/icons/fast.svg"
            title="Faster frontend integration"
            description="Speed up the time it takes to code the frontend with typesafe auto-completion."
          />
          <AdvantageCard
            icon="/icons/notify.svg"
            title="Get notified when something changes"
            description="Never be afraid to update an API, you’ll be notified when something changed and you can make the according changes."
          />
        </div>
        <div className="self-center col-span-2">
          <img src="/images/code.png" className="self-center w-max" />
        </div>
      </div>

      <img src="blur.svg" className="absolute right-0 -bottom-12" />
    </div>
  );
};

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: string;
}

const AdvantageCard = ({
  icon,
  title,
  description,
}: AdvantageCardProps): JSX.Element => {
  return (
    <>
      <div className="w-full">
        <img src={icon} className="w-12 h-12 mb-4" />
        <h4 className="mb-2 text-xl font-semibold text-white sm:text-2xl">{title}</h4>
        <p className="text-white opacity-75 ">{description}</p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
