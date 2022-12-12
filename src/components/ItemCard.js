import React from 'react';
import Highlight from '@site/src/components/Highlight';

function getCorPorRaridade(raridade){
    if (raridade.toLowerCase() == 'raro'){
        return '#DAA520';
    }else if (raridade.toLowerCase() == 'incomum'){
        return '#49a8ab';
    }else{
        return '#5c5c5c';
    }
}

export default function ItemCard({children, nome, raridade}) {
  return (
    <div style={{
        borderStyle: 'solid', 
        borderColor: getCorPorRaridade(raridade),
        borderRadius: '7px',
        padding: '15px'
    }}>
        <h2>
            {nome} <Highlight color={getCorPorRaridade(raridade)}>{raridade.toUpperCase()}</Highlight>
        </h2>
        <div>
            {children}
        </div>
    </div>
  );
}