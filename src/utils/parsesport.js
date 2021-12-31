const parseTeamJson = (teamResponseJson) => {
  let parsedTeamResponseList = [];
  let teamResponseJsonList = [];
  if(teamResponseJson == null || teamResponseJson == undefined) {
    return [];
  }
  if(teamResponseJson.hasOwnProperty("teams")) {
    teamResponseJsonList = teamResponseJson.teams;
  }
  if(teamResponseJsonList == null || teamResponseJsonList == undefined) {
    return [];
  }
  for(let i = 0; i < teamResponseJsonList.length; i++) {
    let teamJson = teamResponseJsonList[i];
    parsedTeamResponseList[i] = {
      Name: teamJson["strTeam"],
      Year: teamJson["intFormedYear"],
      League: teamJson["strLeague"],
      TeamDescription: teamJson["strDescriptionEN"],
      Stadium: teamJson["strStadium"],
      StadiumDescription: teamJson["strStadiumDescription"]
    }
  }
  return parsedTeamResponseList;
};

export default parseTeamJson
