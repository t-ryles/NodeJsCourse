const doWorkPromises = new Promise((res, rej) => {
	setTimeout(() => {
		//res([ 7, 9, 11, 13 ]);
		rej('Something went wrong');
	}, 2000);
});

doWorkPromises
	.then((res) => {
		console.log('Success', res);
	})
	.catch((error) => {
		console.log('Error:', error);
	});
