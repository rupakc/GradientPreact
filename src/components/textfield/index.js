const TextField = (props) => {
  return (
    <input type="text" placeholder={props.textPlaceholder} onInput={props.textInputHandler} onKeyDown={props.keyPressHandler} />
  );
}

export default TextField
