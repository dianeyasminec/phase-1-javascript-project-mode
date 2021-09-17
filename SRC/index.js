const 




fetch ('https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:zodiacName')
  .then(response => response.json())
  .then(data => console.log(data));

