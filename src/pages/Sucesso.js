import styled from "styled-components"

export default function Sucesso() {
    return (
        <>
            <MensagemSucesso>
                Pedido feito com sucesso!
            </MensagemSucesso>
            <ContainerCheck>
                <CheckFilme>
                    <h1>Filme e sessão</h1>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </CheckFilme>
                <CheckIngresso>
                    <h1>Ingressos</h1>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </CheckIngresso>
                <CheckComprador>
                    <h1>Comprador</h1>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </CheckComprador>
                <button>Voltar pra Home</button>
            </ContainerCheck>
        </>
    )
}

const MensagemSucesso = styled.div`
    width: 100vw;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`
const ContainerCheck = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 2.5%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    
    h1{
        margin-bottom: 1.5%;
    }

    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    }

    button{
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 6%;
    }
`
const CheckFilme = styled.div`
    margin: 4%;
`
const CheckIngresso = styled.div`
    margin: 4%;
`
const CheckComprador = styled.div`
    margin: 4%;
`