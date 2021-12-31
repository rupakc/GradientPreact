import style from './style.css';
import Button from '../../components/button';
import TextField from '../../components/textfield';
import Dropdown from '../../components/dropdown';
import Table from '../../components/table';
import useFetch from '../../hooks/fetchHook.js';
import parseAudio from '../../utils/parseaudio.js';
import formatJsonResponseForTableUI from '../../utils/formatutils.js';
import {useEffect, useState} from "preact/hooks";

const Audio = () => {
	const [searchText, setSearchText] = useState("");
	const [{ data, isLoading, isError }, setUrl] = useFetch("");
	const [tableDataJson,setTableJson] = useState({headerList: [], dataList: [[]]});
	const [dropdownChoice,setDropdownChoice] = useState("artist");
	const dropdownOptionsList = [{key:"artist",value:"Search on Artists"},
															 {key:"album", value:"Search on Albums"}];
	useEffect(() => {
		if(dropdownChoice == "album") {
			setTableJson(formatJsonResponseForTableUI(parseAudio.parseAudioAlbum(data)));
		} else {
			setTableJson(formatJsonResponseForTableUI(parseAudio.parseAudioArtist(data)));
		}
	},[data]);
	const textInputHandler = (event) => {
		setSearchText(event.target.value);
	};
	const dropdownChangeHandler = (event) => {
		setDropdownChoice(event.target.value);
	};
	const clickHandler = () => {
		let url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=";
		if (dropdownChoice == "album") {
				url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=";
		}
		url = url + searchText;
		setUrl(url);
	};
	const keyPressHandler = (event) => {
		if(event.keyCode == 13) {
			clickHandler();
		}
	};
	return (
		<div class={style.home}>
			<div style={{display:"flex", justifyContent:"center", width:"80%", marginLeft:"auto", marginRight:"auto"}}>
				<TextField textPlaceholder="Enter an artist name to search" textInputHandler={textInputHandler} keyPressHandler={keyPressHandler} />
			</div>
			<div>
				<Dropdown dropdownLabel="Please Select A Search Criteria" optionsJsonList={dropdownOptionsList} updateDropdownSelection={dropdownChangeHandler} />
			</div>
			<div style={{display:"flex", justifyContent:"center"}}>
				<Button buttonLabel="Search" onClickHandler={clickHandler}/>
			</div>
				<div style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
				{!isLoading ? <Table tableDataJson={tableDataJson}/> : (<p> Please Wait Loading Data ... </p>)}
			</div>
		</div>
	);
}

export default Audio;

//<Table tableDataJson={setTableJson(formatJsonResponseForTableUI(parseMealDataJson(data)))}/>
//
