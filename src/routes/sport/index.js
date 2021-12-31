import style from './style.css';
import Button from '../../components/button';
import TextField from '../../components/textfield';
import Dropdown from '../../components/dropdown';
import Table from '../../components/table';
import useFetch from '../../hooks/fetchHook.js';
import parseTeamJson from '../../utils/parsesport.js';
import formatJsonResponseForTableUI from '../../utils/formatutils.js';
import {useEffect, useState} from "preact/hooks";

const Sport = () => {
	const [searchText, setSearchText] = useState("");
	const [{ data, isLoading, isError }, setUrl] = useFetch("");
	const [tableDataJson,setTableJson] = useState({headerList: [], dataList: [[]]});

	useEffect(() => {
		setTableJson(formatJsonResponseForTableUI(parseTeamJson(data)));
	},[data]);
	const textInputHandler = (event) => {
		setSearchText(event.target.value);
	};
	const clickHandler = () => {
		let url = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=";
		url = url + searchText;
		setUrl(url);
	};
	const keyPressHandler = (event) => {
		if(event.keyCode == 13) {
			clickHandler();
		}
	}
	return (
		<div class={style.sport}>
			<div style={{display:"flex", justifyContent:"center", width:"80%", marginLeft:"auto", marginRight:"auto"}}>
				<TextField textPlaceholder="Enter a team name to search" textInputHandler={textInputHandler} keyPressHandler={keyPressHandler} />
			</div>
			<div style={{display:"flex", justifyContent:"center"}}>
				<Button buttonLabel="Search" onClickHandler={clickHandler}/>
			</div>
				<div style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
				{!isLoading ? <p> <Table tableDataJson={tableDataJson}/> </p> : (<p> Please Wait Loading Data ... </p>)}
			</div>
		</div>
	);
}

export default Sport;
