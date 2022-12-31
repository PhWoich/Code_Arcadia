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

function oreEstrela(estrela){
    if(estrela.toLowerCase() == 'helias'){
        return(<Highlight color='#ff2b2b'><b>{estrela.toUpperCase()}</b></Highlight>);
    }
    
    if(estrela.toLowerCase() == 'materia'){
        return(<Highlight color='#333333'><b>{estrela.toUpperCase()}</b></Highlight>);
    }

    if(estrela.toLowerCase() == 'ether'){
        return(<Highlight color='#50c878'><b>{estrela.toUpperCase()}</b></Highlight>);
    }

    if(estrela.toLowerCase() == 'vacum'){
        return(<Highlight color='#491c75'><b>{estrela.toUpperCase()}</b></Highlight>);
    }

    if(estrela.toLowerCase() == 'sanctum'){
        return(<Highlight color='#ffbf00'><b>{estrela.toUpperCase()}</b></Highlight>);
    }
    
    return(<Highlight color='#5c5c5c'><b>{estrela.toUpperCase()}</b></Highlight>);
}

function valorQuartzo(recursos){
    return (recursos * 11);
}

export default function OreCard({children, nome, raridade, estrelas, recursos}) {
    var listaEstrelas = estrelas.split(","); 

    return (
        <div style={{
            borderStyle: 'solid', 
            borderColor: getCorPorRaridade(raridade),
            borderRadius: '7px',
            padding: '15px',
            marginBottom: '20px'
        }}>
            <h2>
                {nome} <Highlight color={getCorPorRaridade(raridade)}>{raridade.toUpperCase()}</Highlight>
            </h2>
            <div style={{fontSize:"14pt"}}>
                {children}
            </div>
            <hr/>
            <div>
                <b>Recursos Necessários:</b> {recursos}   |   <b>Custo em Quartzos:</b> {valorQuartzo(recursos)}
            </div>
            <br/>
            <div>
                <b>Grupos de Estrela que se encontra:</b> {listaEstrelas.map(oreEstrela)}
            </div>
        </div>
  );
}