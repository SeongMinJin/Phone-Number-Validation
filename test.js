const jwt = require('jsonwebtoken');
const { v4 } = require('uuid');

const fs = require('fs');
const path = require('path');

const { WebSocket } = require('ws');

const ws = new WebSocket('wss://api.upbit.com/websocket/v1');

const data = [
	{
		ticket: v4(),
	},
	{
		type: 'ticker',
		codes: ['KRW-BTC'],
		isOnlyRealtime: true,
	},
];

ws.on('open', () => {
	ws.send(JSON.stringify(data));
})

ws.on('message', data => {
	fs.appendFile(path.join(__dirname, 'market.json'), data.toString(), err => {
		if (err) console.log(err);
	})
})



// const payload = {
//   access_key: "LaFQfxBVtGKiPKEBVb80JoFzTsv7G0KQXVwtjcZF",
//   nonce: v4(),
// };

// const jwtToken = jwt.sign(payload, "Y7HnnV5wMvxhVIxxi3gqTTrI4zUqgV9JPjVWxALt");
// const authorizationToken = `Bearer ${jwtToken}`;

fetch('https://api.upbit.com/v1/market/all', {
	headers: {
		// authorizationToken: authorizationToken,
		accept: 'application/json',
	}
}).then(res => res.json())
.then(res => {
	
	fs.writeFile(path.join(__dirname, 'market.json'), JSON.stringify(res), (err) => {
		if (err) console.log(err);
	});
});


