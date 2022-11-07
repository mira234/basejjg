import './Form.css'
import { useState } from 'react'
import FieldText from '../FieldText';
import DropDownList from '../DropDownList';
import Button from '../Button';

const Form = (props) => {

  const salvar = (evento) => {
    evento.preventDefault()
    props.toRegistration({
      nome,
      cargo,
      imagem,
      time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  return (
    <section className='formulario'>
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <FieldText 
          required={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          value={nome} 
          tothechanged={value => setNome(value)} 
        />
        <FieldText 
          required={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          value={cargo} 
          tothechanged={value => setCargo(value)} 
        />
        <FieldText 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          value={imagem} 
          tothechanged={value => setImagem(value)} 
        />
        <DropDownList 
          required={true} 
          label="Time" 
          itens={props.times}
          value={time} 
          tothechanged={value => setTime(value)} 
        />
        <Button >Criar card</Button>
      </form>
    </section>
  )
}
export default Form