import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from './Table.module.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export default function ProductTable({ title, result }){
  return (
      <div className={montserrat.variable} style={{ maxWidth: '100%', overflow: 'scroll'}}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {title}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {result}
        </tbody>
      </table> 
        </div>
  );
}; 