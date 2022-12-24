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
    //GEM-TECH de RUBI
    if(tag.toLowerCase() == 'arma' || tag.toLowerCase() == 'gt-rubi'){
        return(<Highlight color='#ff2b2b'>{tag.toUpperCase()}</Highlight>);
    }
    
    if(tag.toLowerCase() == 'defesa'){
        return(<Highlight color='#333333'>{tag.toUpperCase()}</Highlight>);
    }
    
    return(<Highlight color='#5c5c5c'>{tag.toUpperCase()}</Highlight>);
}

function valorQuartzo(recursos){
    return (recursos * 11);
}

function recursosEspeciais(recursos_especiais){
    if (recursos_especiais == null || recursos_especiais == ''){
        return;
    }

    return(
        <div>
            <br/>
            <b>Recursos Especiais:</b> {recursos_especiais}
        </div>
    );
}

export default function ItemCard({children, nome, raridade, tags, recursos, recursos_especiais}) {
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
            <div style={{fontSize:"14pt"}}>
                {children}
            </div>
            <br/>
            <div>
                <b>Recursos Necessários:</b> {recursos}   |   <b>Custo em Quartzos:</b> {valorQuartzo(recursos)}
            </div>
            {recursosEspeciais(recursos_especiais)}
        </div>
  );
}