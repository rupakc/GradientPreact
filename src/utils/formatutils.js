const formatJsonResponseForTableUI = function(parsedResponseJsonList) {
  let headerList = [];
  let dataList = [];
  var formattedTableJson = {
    'headerList': headerList,
    'dataList': dataList
  };
  if(parsedResponseJsonList.length > 0) {
      headerList = Object.keys(parsedResponseJsonList[0]);
      for(var i = 0; i < parsedResponseJsonList.length; i++) {
        dataList.push(Object.values(parsedResponseJsonList[i]));
      }
      formattedTableJson["headerList"] = headerList;
      formattedTableJson["dataList"] = dataList;
   }
  return formattedTableJson;
}

export default formatJsonResponseForTableUI
