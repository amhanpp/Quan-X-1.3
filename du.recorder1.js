var obj = JSON.parse($response.body);

obj= {
	"code": 200,
	"result": [{
		"expiresDateMs": 1600480559000,
		"productId": "recorder_1_year"
	}],
	"serverTime": 1599925138672
};

$done({body: JSON.stringify(obj)});

//