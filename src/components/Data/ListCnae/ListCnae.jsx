import ProductTable from "../../UI/Table/Table";
import table from "../../UI/Table/Table.module.css";
import Link from 'next/link';
import useSortableData from "../../UI/SortTable/SortTable";

export default function ListCnae(props) {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return(
        <ProductTable title = {
            <>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('nome')}
                    className={getClassNamesFor('nome')}
                    >
                    Nome
                    </button>
                </th>
                <th className={table.th}>
                    <button
                    type="button"
                    onClick={() => requestSort('code')}
                    className={getClassNamesFor('code')}
                    >
                    Code
                    </button>
                </th>
            </>
            } 
            result = {
                items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                    </tr>
                  ))
            }
        />
    )
}