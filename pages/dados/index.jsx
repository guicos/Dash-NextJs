import React from 'react';
import User from '../../src/connections/user'
import ProductTable from '../../src/components/UI/Table/Table';
import Menu from '../../src/components/UI/Menu/Menu';
import style from './Section.module.css';
import Filters from '../../src/components/Data/Filters/Filters';

const getUser = await User();

export default function Data() {
  return (
      <section className={style.section}>
            <Menu/>
          <main className={style.main}>
            <Filters/>
            <ProductTable products = {getUser} />
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
