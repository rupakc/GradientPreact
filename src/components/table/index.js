const Table = (props) => {
  return(
      <div style={{display:"flex", justifyContent:"center"}}>
      <div>
        <table>
        <thead>
          <tr>
              {props.tableDataJson.headerList.map((header,index) =>
                <th key={index}> {header} </th>
              )}
          </tr>
        </thead>
        <tbody>
          {props.tableDataJson.dataList.map((dataRow,index) =>
            <tr>
                {dataRow.map((data,index) =>
                  <td key={index}> {data} </td>
                )}
            </tr>
          )}
        </tbody>
          </table>
        </div>
      </div>
    );
};

export default Table
