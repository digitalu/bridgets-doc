import { MetaProps } from '../types/layout';
import { useEffect, useState } from 'react';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'Oké';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    if (opened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [opened]);

  return (
    <>
      <Head customMeta={customMeta} />
      <header className="fixed z-40 w-full bg-white border-b border-gray-100 dark:border-gray-800 dark:bg-gray-900">
        <div className="max-w-6xl pl-5 mx-auto md:px-8">
          <div className="flex items-center justify-between">
            <Navigation opened={opened} setOpened={setOpened} />
          </div>
        </div>
      </header>
      {opened && (
        <div className="fixed inset-0 z-30 w-screen h-screen pt-12 bg-white dark:bg-theme-dark">
          <ThemeSwitch />
          <div className="flex gap-4">
            <a href="">
              <img src="/icons/socials/twitter.svg" className="h-4" />
            </a>
            <a href="">
              <img src="/icons/socials/discord.svg" className="h-4" />
            </a>
            <a href="">
              <img src="/icons/socials/github.svg" className="h-4" />
            </a>
          </div>
        </div>
      )}
      <main className="pt-24">
        <div className="">{children}</div>
      </main>
    </>
  );
};

export default Layout;
