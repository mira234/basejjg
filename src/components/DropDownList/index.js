import './DropDownList.css';

const DropDownList =(props)=>{
  
  const whentyped =(event)=>{
    props.tothechanged(event.target.value)
  }
  return (
    <div className = 'DropDownList'>
      <label>{props.label}</label>
      <select value={props.value} onChange={whentyped} required={props.required}>
        <option value=""></option>
        {props.itens.map(item => {return <option key ={item}>{item}</option>})}
      </select>
    </div>
  )
}

export default DropDownList