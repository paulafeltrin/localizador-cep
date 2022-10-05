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
                rua: response.data.logradouro,
                cidade: response.data.localidade,
                bairro: response.data.bairro
            })
        })
    }

    return(
        <>
            <S.Input value={input} onChange={e => {setInput(e.target.value)}} />
            <S.Button onClick={() => {getApi()}}>Procurar</S.Button>
            <S.P>Rua: {endereco.rua}</S.P>
            <S.P>Bairro: {endereco.bairro}</S.P>
            <S.P>Cidade: {endereco.cidade}</S.P>
        </>
    )
}