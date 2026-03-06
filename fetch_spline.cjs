const https = require('https');

const options = {
  hostname: 'www.youtube.com',
  path: '/watch?v=iqcAi-MqbV8',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/https:\/\/prod\.spline\.design\/[a-zA-Z0-9-]+\/scene\.splinecode/g);
    console.log(matches ? [...new Set(matches)] : 'No matches found');
  });
});
