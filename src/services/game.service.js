import axios from 'axios'


export default {
  query,
  getById,
}


const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'fb9d024faamsh3ebd216755a26eep1228f6jsnfaea63384c44',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
}

function query() {
  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

function getById(id) {
  return axios.get(`https://www.freetogame.com/api/game?id=${id}`).then((res) => res.data)
}
