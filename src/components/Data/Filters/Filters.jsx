import React from "react";
import styled from './Filters.module.css';

export default function Filters() {
    const [ config, setConfig ] =React.useState('');
    const [ list, setList ] = React.useState([]);
    const [value, setValue ] = React.useState('');
  const getConfig = [
    {
      id: 1,
      config: "decisionMakers",
      inputOne: "email",
      inputTwo: "CNPJ",
      inputThree: "departament",
      inputFour: "office",
    },
    {
      id: 2,
      config: "company",
      inputOne: "document",
      inputTwo: "companyName",
      inputThree: "cnae",
      inputFour: "sector",
    },
    {
      id: 3,
      config: "departament",
      inputOne: "name",
      inputTwo: null,
      inputThree: null,
      inputFour: null,
    },
    {
      id: 4,
      config: "sector",
      inputOne: "name",
      inputTwo: null,
      inputThree: null,
      inputFour: null,
    },
    {
      id: 5,
      config: "cnae",
      inputOne: "name",
      inputTwo: "code",
      inputThree: null,
      inputFour: null,
    },
  ];

  const handleSetConfig = (e) => {
    setConfig(e.target.value)
  }

  React.useEffect(() => {
    setList(getConfig.filter(element => element.config === config));
  }, [config])

  const Inputs = (props) => {
    return (
        <div className={styled.form}>
              {props.list[0]?.inputOne ? (
                <input
                  type="text"
                  name={props.list[0]?.inputOne}
                  placeholder={props.list[0]?.inputOne}
                  value = {value}
                  onChange={(e) => setValue(e.target.value)}
                />
              ) : (
                ""
              )}
              {props.list[0]?.inputTwo ? (
                <input
                  type="text"
                  name={props.list[0]?.inputTwo}
                  placeholder={props.list[0]?.inputTwo}
                  value = ''
                />
              ) : (
                ""
              )}
              {props.list[0]?.inputThree ? (
                <input
                  type="text"
                  name={props.list[0]?.inputThree}
                  placeholder={props.list[0]?.inputThree}
                  value = ''
                />
              ) : (
                ""
              )}
              {props.list[0]?.inputFour ? (
                <input
                  type="text"
                  name={props.list[0]?.inputFour}
                  placeholder={props.list[0]?.inputFour}
                  value = ''
                />
              ): ("")}
        </div>
    )
  }

  return (
    <section>
        <div className={styled.div}>
            <Inputs list = {list} />
            <select name="cars" id="cars" onChange={(e) => handleSetConfig(e)} className={styled.select}>
                <option selected disabled>Escolha um filtro </option>
                <option value="decisionMakers" >Decisores</option>
                <option value="company">Empresa</option>
                <option value="departament">Departamento</option>
                <option value="sector">Setor</option>
            </select>
        </div>
    </section>
  );
}
