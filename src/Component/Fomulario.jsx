import React, { useState } from 'react';
import axios from 'axios';
import * as S from './Global/style';

export default function Formulario(){
    const [input, setInput] = useState()
    const [endereco, setEndereco] = useState({
        rua: "",
        cidade: "",
        bairro: ""
      })

    let LinkApi = `https://viacep.com.br/ws/${input}/json/`

    function getApi(){
        axios.get(LinkApi).then((response) => {
            console.log(response)
            setEndereco({
                rua: `Rua: ${response.data.logradouro}`,
                cidade: `Cidade: ${response.data.localidade}`,
                bairro: `Bairro: ${response.data.bairro}`
            })
        })
    }

    return(
        <>
            <S.Input value={input} onChange={e => {setInput(e.target.value)}} placeholder={"Digite aqui seu CEP"} />
            <S.Button onClick={() => {getApi()}}>Procurar</S.Button>
            <S.P>{endereco.rua}</S.P>
            <S.P>{endereco.bairro}</S.P>
            <S.P>{endereco.cidade}</S.P>
        </>
    )
}