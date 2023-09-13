import React from 'react';
import User from '../src/connections/user'
import Menu from '../src/components/UI/Menu/Menu';
import style from './Section.module.css';
import Count from '../src/components/Data/Count/Count';

export default function Home() {
  return (
      <section className={style.section}>
            <Menu/>
          <main className={style.main}>
            <Count/>
          </main>
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      </section>
  );
}
