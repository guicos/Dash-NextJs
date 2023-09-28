import ProductTable from "../../UI/Table/Table";
import table from "../../UI/Table/Table.module.css";
import Link from "next/link";
import useSortableData from "../../UI/SortTable/SortTable";
import React from "react";
import AuthContext from "../../UI/Contexts/MyContext";
import Modal from "../../UI/Modal/Modal";
import input from "../../UI/Input/Input.module.css";
import button from "../../UI/Button/Button.module.css";

export default function ListCompany(props) {
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState({});
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleSetOpen = (item) => {
    setMounted(true);
    setData(item);
  };
  return (
    <AuthContext.Provider
      value={{
        mounted,
        setMounted,
      }}
    >
      <ProductTable
        title={
          <>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("edit")}
                className={getClassNamesFor("edit")}
              >
                Editar
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("fantasyName")}
                className={getClassNamesFor("fantasyName")}
              >
                Nome Fantasia
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("document")}
                className={getClassNamesFor("document")}
              >
                Documento
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("telephone")}
                className={getClassNamesFor("telephone")}
              >
                Telefone
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("setor")}
                className={getClassNamesFor("setor")}
              >
                Setor
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("code")}
                className={getClassNamesFor("code")}
              >
                Code Cnae
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("cnae")}
                className={getClassNamesFor("cnae")}
              >
                Cnae
              </button>
            </th>
            <th className={table.th}>
              <button
                type="button"
                onClick={() => requestSort("site")}
                className={getClassNamesFor("site")}
              >
                Site
              </button>
            </th>
          </>
        }
        result={items.map((item) => (
          <tr key={item.id}>
            <td>
              <button
                style={{ background: "none", border: "none" }}
                onClick={() => handleSetOpen(item)}
              >
                <img src="/icons/edit.svg" />
              </button>
            </td>
            <td>{item.companyName}</td>
            <td>{item.fantasyName}</td>
            <td>{item.document}</td>
            <td>
              ({item.areaCode}) {item.telephone}
            </td>
            <td>{item?.sector?.name}</td>
            <td>{item?.cnae?.code}</td>
            <td>{item?.cnae?.name}</td>
            <td>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                href={`${item.site}`}
              >
                <img src="/icons/navegation.svg" />
              </Link>
            </td>
            <Modal
              children={
                <div>
                    <label>Nome da Empresa</label>
                  <input className={input.input} value={data.companyName} name="companyName" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                  <label>Nome Fantasia</label>
                  <input className={input.input} value={data.fantasyName} name="fantasyName" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                  <label>CNPJ</label>
                  <input className={input.input} value={data.document} name="document" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                  <label>Telefone</label>
                  <input className={input.input} value={data.telephone} name="telephone" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                  <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                    <button
                        className={button.button}
                        onClick={() => handleDeleteItem(item.id)}
                    >
                        Salvar
                    </button>
                    <button
                        style={{ background: "none", border: "none" }}
                        onClick={() => handleDeleteItem(item.id)}
                    >
                        <img src="/icons/trash-2.svg" alt="lixeira" />
                    </button>
                  </div>
                </div>
              }
            />
          </tr>
        ))}
      />
    </AuthContext.Provider>
  );
}
