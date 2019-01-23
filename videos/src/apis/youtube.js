import axios from 'axios';

const KEY = 'AIzaSyAk69gmdgLEcZqOLt2FSRfnX_w5aKH5-hE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
