const parseAudioArtist = (artistResponseJson) => {
  let artistJsonList = [];
  let parsedArtistJsonList = [];
  if(artistResponseJson == null || artistResponseJson == undefined) {
    return [];
  }
  if(artistResponseJson.hasOwnProperty("artists")) {
    artistJsonList = artistResponseJson.artists;
  }
  if(artistJsonList == null || artistJsonList == undefined) {
    return [];
  }
  for(let i = 0; i < artistJsonList.length; i++) {
    let artistJson = artistJsonList[i];
    parsedArtistJsonList[i] = {
      Name: artistJson["strArtist"],
      Label: artistJson["strLabel"],
      Biography: artistJson["strBiographyEN"],
      Year: artistJson["intBornYear"],
      Genre: artistJson["strGenre"],
      Country: artistJson["strCountry"]
    }
  }
  return parsedArtistJsonList;
};

const parseAudioAlbum = (albumResponseJson) => {
  let parsedAlbumList = [];
  let albumResponseJsonList = [];
  if(albumResponseJson === null || albumResponseJson === undefined) {
    return [];
  }
  if(albumResponseJson.hasOwnProperty("album")) {
    albumResponseJsonList = albumResponseJson.album;
  }
  if(albumResponseJsonList == null || albumResponseJsonList == undefined) {
    return [];
  }
  for(let i = 0; i < albumResponseJsonList.length; i++) {
    let albumJson = albumResponseJsonList[i];
    parsedAlbumList[i] = {
      Name: albumJson["strAlbum"],
      Artist: albumJson["strArtist"],
      Description: albumJson["strDescriptionEN"],
      Genre: albumJson["strGenre"],
      Year: albumJson["intYearReleased"]
    }
  }
  return parsedAlbumList;
}

const parseAudio = {
  parseAudioArtist: parseAudioArtist,
  parseAudioAlbum: parseAudioAlbum
}

export default parseAudio
