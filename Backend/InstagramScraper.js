const cheerio = require('cheerio');
const axios = require('axios');
var url = 'https://www.instagram.com/katieroseeeee/';

axios.get(url)
.then(res => {
    const $ = cheerio.load(res.data);

  let script = $('script').eq(4).html();
  let split = script.split(',');

  i = 0;
  numposts = 0;
  let posts = []
  for(i = 0; i < split.length; i++){
    if(split[i].includes("shortcode")){
      if(numposts < 4){
        numposts++;
        posts.push(split[i]);
      }
    }
  }

  for (i = 0; i < posts.length; i++){
    posts[i] = posts[i].split(':')[1].replace(/['"]+/g, '');
  }

  url = url + 'p/';
  for(i = 0; i < posts.length; i++ ){
    posts[i] = url + posts[i];
  }

  console.log(posts);
})
