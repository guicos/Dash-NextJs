import React from 'react';
import Decision from '../../../src/connections/decision'
import Menu from '../../../src/components/UI/Menu/Menu';
import style from './Section.module.css';
import Filters from '../../../src/components/Data/Filters/Filters';
import ListDecision from '../../../src/components/Data/ListDecision/ListDecision';

const getData = await Decision();

export default function Data() {
  return (
      <section className={style.section}>
            <Menu/>
          <main className={style.main}>
            <Filters/>
            <ListDecision products = {getData} />
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
