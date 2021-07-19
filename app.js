require('dotenv').config();

const accountSID = process.env.TWILIO_ACCOUNT_SID;
// console.log(accountSID);
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSID, authToken);

client.messages.create({
    body: '',
    from: '',
    to: ''
})
    .then( message => console.log(message))
    .catch((err) => console.log(err));