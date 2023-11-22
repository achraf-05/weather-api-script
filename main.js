const request = require("request");
const dotenv = require("dotenv").config();

const argument = process.argv[2];

const option = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.APIKEY}`,
  method: "GET",
  json: true,
};

request(option, (error, res, body) => {

      console.log(body.main.temp);
    
})
;