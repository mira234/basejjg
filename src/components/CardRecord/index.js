import './CardRecord.css';
const CardRecord =({imagem,nome,cargo,colorCabecario})=>{
    return(
      <div className='cardRecord'>
        <div className='cabecalho' style={{backgroundColor:colorCabecario}}>
           <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
           <h4>{nome}</h4>
           <h5>{cargo}</h5>
        </div>
      </div>
    )
}

export default CardRecord