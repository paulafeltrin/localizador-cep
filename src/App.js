import React, { useState } from 'react';
import Formulario from './Component/Fomulario';
import * as S from './Component/Global/style'
import {GlobalStyle} from './Component/Global/global'

export default function App(){

  const [status, setStatus] = useState(false);

  const clique = () => {
    setStatus(!status);
  };

  return(
    <>
      <S.Div>
        <GlobalStyle />
        <S.Button onClick={() => { clique()}}>{status ? 'Close' : 'Open'}</S.Button>
        {status && <Formulario />}
      </S.Div>
    </>
  )
}