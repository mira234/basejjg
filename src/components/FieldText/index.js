
import './FieldText.css'
const FieldText = (props) => {

  const placehoderModific = `${props.placeholder}........`

  const whentyped =(event)=>{
    props.tothechanged(event.target.value)
  }

  return(
    <div className="field-text">
        <label>{props.label}</label>
        <input value={props.value} onChange={whentyped} required={props.required} placeholder={placehoderModific}/>
    </div>
  )
}
export default FieldText