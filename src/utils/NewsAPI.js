import axios from 'axios';

const apiUrl = 'http://localhost:3500';

export {newsData, premiumNewsData};

function newsData() {
  const url = `${apiUrl}/news`;
  return axios.get(url).then(response => response.data);
}

function premiumNewsData() {
  const url = `${apiUrl}/premiumnews`;
  return axios.get(url).then(response => response.data);
}