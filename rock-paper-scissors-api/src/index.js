const USER_CHOICES = [
	{
		name: 'rock',
		counter: 'paper'
	}, {
		name: 'paper',
		counter: 'scissors'
	}, {
		name: 'scissors',
		counter: 'rock'
	}
];

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
	async function handleRequest(request) {
		const { searchParams } = new URL(request.url);
		const requestChoice = searchParams.get('choice');
		const userChoice = USER_CHOICES.find((choice) => choice.name === requestChoice);

		return new Response(JSON.stringify(getResults([userChoice, getRandom()]),
			{ headers: { 'content/type': 'application/json' }, }
		));
	};
});

function getRandom() {
	const random = Math.floor(Math.random() * USER_CHOICES.length);
	return USER_CHOICES[random];
};

function getResults(choices) {
	const userWins = isWinner(choices);
	const aiWins = isWinner([...choices].reverse());
	const resultMessage = userWins ? "You win!" : aiWins ? "You lose!" : "Draw";

	const results = {
		user: choices[0],
		ai: choices[1],
		result: resultMessage
	};

	return results;
};

function isWinner(choices) {
	return choices[0]?.counter === choices[1]?.name;
};