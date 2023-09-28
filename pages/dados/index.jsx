import React from 'react';
import User from '../../src/connections/company'
import Menu from '../../src/components/UI/Menu/Menu';
import style from './Section.module.css';
import Filters from '../../src/components/Data/Filters/Filters';
import ListCompany from '../../src/components/Data/ListCompany/ListCompany';

const getUser = await User();

export default function Data() {
  return (
      <section className={style.section}>
            <Menu/>
          <main className={style.main}>
            <Filters/>
            <ListCompany products = {getUser} />
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
