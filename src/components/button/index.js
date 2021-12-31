const Button = (props) => {
  return (
      <button class="button button-outline" onClick={props.onClickHandler}> {props.buttonLabel} </button>
  );
}

export default Button
