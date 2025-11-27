const InputData = ({title, type, value, onChange, onBlur}) => {

  return (
    <div className="input-data">
      <input
        type={type}
        placeholder=""
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label>{title}</label>
    </div>
  )
}

export default InputData