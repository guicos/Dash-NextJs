import React from 'react';
import Departament from '../../../src/connections/departament'
import Menu from '../../../src/components/UI/Menu/Menu';
import style from './Section.module.css';
import Filters from '../../../src/components/Data/Filters/Filters';
import ListDepartament from '../../../src/components/Data/Departament/ListDepartament';

const getData = await Departament();

export default function Data() {
  return (
      <section className={style.section}>
            <Menu/>
          <main className={style.main}>
            <Filters/>
            <ListDepartament products = {getData} />
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
