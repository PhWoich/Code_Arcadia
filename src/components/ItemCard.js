import React from 'react';

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
        borderRadius: '5px',
        padding: '5px'
    }}>
        <h2>
            {nome}
        </h2>
        <div>
            {children}
        </div>
    </div>
  );
}