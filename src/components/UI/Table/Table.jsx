import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from './Table.module.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default function ProductTable(props){
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
      <div className={montserrat.variable}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <button
                type="button"
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
              >
                Name
              </button>
            </th>
            <th className={styles.th}>
              <button
                type="button"
                onClick={() => requestSort('price')}
                className={getClassNamesFor('price')}
              >
                Price
              </button>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table> 
        </div>
  );
}; 