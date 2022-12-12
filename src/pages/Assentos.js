import { useParams } from "react-router-dom"
import styled from "styled-components"
import Rodape from "../components/Rodape"
import axios from "axios"
import carregando from "../assets/carregando.gif"
import { useEffect, useState } from "react"
import Formulario from "../components/Formulario"

export default function Assentos() {
    const { idSessao } = useParams()
    const [assento, setAssento] = useState(undefined)

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        const requisicao = axios.get(URL);
        requisicao.then(res => setAssento(res.data.seats))
        requisicao.catch((err) => alert(err.response.data.message))

    }, [])
    console.log(assento)
    if (assento === undefined) {
        return <Loading src={carregando} />
    }

    return (
        <>
            <SelecionaAssento>
                Selecione o(s) assento(s)
            </SelecionaAssento>
            <ListaAssentos>
                {assento.map((a) => <Assento key={a.name}>{a.name}</Assento>)}

            </ListaAssentos>
            <Legenda>

                <LegSel>
                    <div></div>
                    <p>Selecionado</p>
                </LegSel>

                <LegDisp>
                    <div></div>
                    <p>Disponível</p>
                </LegDisp>

                <LegInd>
                    <div></div>
                    <p>Indisponível</p>
                </LegInd>

            </Legenda>
           <Formulario/>
            {/* <Rodape/> */}

        </>
    )
}

const SelecionaAssento = styled.div`
    width: 100%;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color:#293845;
`
const ListaAssentos = styled.ul`
    max-width: 380px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin: 0 auto;
`
const Assento = styled.li`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    box-sizing: border-box;
    margin: 5px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;

`
const Legenda = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    
    div{
        margin:2%;
    }

    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
    }
    
`
const LegSel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
    width: 25px;
    height: 25px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    }
`
const LegDisp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
    width: 25px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    }
`
const LegInd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
    width: 25px;
    height: 25px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    }
`
const Loading = styled.img`
    width: 50%;
    margin: 23% 27% 27% 27%;
`