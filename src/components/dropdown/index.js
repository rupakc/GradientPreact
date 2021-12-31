import style from "./style.css";

const Dropdown = (props) => {
  return(
    <div className={style.drop}>
        <div>
            <select required id="success_select" onChange={props.updateDropdownSelection}>
              <option value="" disabled selected hidden>{props.dropdownLabel}</option>
              {props.optionsJsonList.map((optionsJson,index) =>
                  <option value={optionsJson.key} key={index}> {optionsJson.value} </option>)}
            </select>
          </div>
      </div>
  );
}

export default Dropdown
