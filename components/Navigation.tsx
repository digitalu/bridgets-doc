import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const Navigation = ({ opened, setOpened }: any): JSX.Element => {
  return (
    <>
      {/* Mobile */}
      <nav className="flex items-center justify-between w-full md:hidden">
        <Link href="/">
          <>
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="block h-5 my-3 cursor-pointer md:my-5 dark:hidden"
            />
            <img
              src="/assets/logo-white.svg"
              alt="logo"
              className="hidden h-5 my-3 cursor-pointer md:my-5 dark:block"
            />
          </>
        </Link>

        <div className="flex">
          <Link href="/documentation">
            <button className="px-5 py-2 my-1.5 md:my-3 text-sm font-semibold text-white rounded-md bg-theme-main">
              {' '}
              Get started{' '}
            </button>
          </Link>
          <div
            className="self-center py-3 pl-5 pr-5"
            onClick={() => setOpened(!opened)}
          >
            <svg
              className="w-4 h-4 text-neutral-800 dark:text-neutral-100"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="30"
                y1="2"
                x2="18"
                y2="2"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="16"
                x2="2"
                y2="16"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="30"
                x2="2"
                y2="30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </nav>
      {/* Desktop */}
      <nav className="items-center justify-between hidden w-full my-1 md:flex">
        <div className="flex items-center gap-8">
          <Link href="/">
            <>
              <img
                src="/assets/logo.svg"
                alt="logo"
                className="block h-6 cursor-pointer dark:hidden"
              />

              <img
                src="/assets/logo-white.svg"
                alt="logo"
                className="hidden h-6 cursor-pointer dark:block"
              />
            </>
          </Link>

          <Link href="/">
            <a className="text-sm text-neutral-800 dark:text-white hover:text-neutral-400">
              Home
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm text-neutral-800 dark:text-white hover:text-neutral-400">
              About
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <ThemeSwitch />
          <a href="">
            <img src="/icons/socials/twitter.svg" className="h-4" />
          </a>
          <a href="https://discord.gg/8TjNYgKuta">
            <img src="/icons/socials/discord.svg" className="h-4" />
          </a>
          <a href="">
            <img src="/icons/socials/github.svg" className="h-4" />
          </a>
          <Link href="/documentation">
            <button className="px-8 py-2 text-sm font-semibold text-white rounded-md bg-theme-main">
              {' '}
              Get started{' '}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
