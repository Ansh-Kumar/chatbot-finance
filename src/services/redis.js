// Holds all redis calls

function createUser(username, email) {
	const port = process.env.REACT_APP_PORT;
	console.log(port);
	const fetchAddress = `http://localhost:${port}/api/redis/user/createUser`;
	return fetch(fetchAddress, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username: username,
			email: email
		})
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data.successful); // prints true
			return data.successful;
		})
		.catch((err) => {
			console.error(err);
			return false;
		});
}

function getUserEmail(username) {
	const url = process.env.REACT_APP_API_URL;
	return fetch(`${url}/api/redis/user/getUserEmail?username=${username}`)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);
			return data;
		});
}

export { createUser, getUserEmail };
