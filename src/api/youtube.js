import axios from 'axios';

const KEY = 'AIzaSyAn1ehsOJpioN2lPBW__NEDxngRR5XUL28';

export default axios.create({
  baseURL : "https://www.googleapis.com/youtube/v3",
  params :{
    part : 'snippet',
    maxResults: 5,
    key : KEY
  }
});