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

function tagItem(tag){
    if(tag.toLowerCase() == 'gem-tech' || tag.toLowerCase() == 'gemtech'){
        return(<Highlight color='#4d9e96'>{tag.toUpperCase()}</Highlight>);
    }
    return(<Highlight color='#5c5c5c'>{tag.toUpperCase()}</Highlight>);
}

export default function ItemCard({children, nome, raridade, tags}) {
    var listaTags = tags.split(","); 

    return (
        <div style={{
            borderStyle: 'solid', 
            borderColor: getCorPorRaridade(raridade),
            borderRadius: '7px',
            padding: '15px'
        }}>
            <h2>
                {nome} <Highlight color={getCorPorRaridade(raridade)}>{raridade.toUpperCase()}</Highlight>{listaTags.map(tagItem)}
            </h2>
            <div>
                {children}
            </div>
        </div>
  );
}