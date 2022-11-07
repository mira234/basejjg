import './Time.css'
import CardRecord from '../CardRecord'

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria }
  const verifique= props.cardRecord?.length;
  return (
    (verifique !== undefined  && verifique>0 ) ? <section className='time' style={css} >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className='CardRecord'>
            {props.cardRecord.map( colaborador => <CardRecord colorCabecario ={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
        </div>
    </section>
    :''
 
 
  )
}

export default Time