const axios = require("axios");
const MC_API_KEY = process.env.MC_API_KEY;
const MC_DATA_CENTER = MC_API_KEY.split("-")[1];
const MC_AUDIENCE_ID = process.env.MC_AUDIENCE_ID;

console.log(axios);
console.log(MC_AUDIENCE_ID);
const url = `https://${MC_DATA_CENTER}.api.mailchimp.com/3.0/lists/${MC_AUDIENCE_ID}/members`;

exports.handler = async function(event, context) {
  const email = event.queryStringParameters.email;
  console.log("email: " + email);
  const data = {
    email_address: email,
    status: "subscribed"
  };

  const base64ApiKey = Buffer.from(`anystring:${MC_API_KEY}`).toString(
    "base64"
  );
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`
  };
  let statusCode;
  const list = await axios
    .post(url, data, { headers })
    .then(() => {
      statusCode = 200;
    })
    .catch(() => {
      statusCode = 400;
    });
  console.log("list:" + list);
  console.log("statusCode: " + statusCode);
  return {
    statusCode,
    body: JSON.stringify({ message: "test" })
  };
};
