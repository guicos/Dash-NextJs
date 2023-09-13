import styled from './Count.module.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export default function Count(){
    const count = [
        { id: 1, name: 'cnae', count: 10 },
        { id: 2, name: 'company', count: 10 },
        { id: 3, name: 'decisionMakers', count: 10 },
        { id: 4, name: 'departament', count: 10 },
        { id: 5, name: 'office', count: 10 },
        { id: 6, name: 'sector', count: 10 },
    ]
    
    return(
        <section className={montserrat.variable}>
            <div className={styled.div}>
                <h1 className={styled.h1}>Bem-vindo!</h1>
                <span className={styled.span}>Total de cadastros</span>
                <ul className={styled.ul}>
                {
                    count.map(element => (
                            <li key={element?.id} className={styled.li}>
                                <span className={styled.span}>{element.name}</span>
                                <span className={styled.span}>{element.count}</span>
                            </li>
                            ))
                        }
                        </ul>
            </div>
        </section>
    )
}