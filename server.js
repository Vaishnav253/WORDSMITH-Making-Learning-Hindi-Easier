const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
  params: {langpair: 'en|hi', q: 'Hello World!', mt: '1', onlyprivate: '0', de: 'a@b.c'},
  headers: {
    'X-RapidAPI-Key': 'a80c4af8b0msh6942e237781f3a2p140239jsnbd13b084cde3',
    'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
