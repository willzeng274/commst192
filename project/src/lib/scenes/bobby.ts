export const scenes: Record<number, Scene> = {
	1: {
		imgUrl: 'https://picsum.photos/804/400',
		text: 'Bobby Francois stands before a grand mansion...',
		choices: [
			{
				imgUrl: 'https://picsum.photos/402/300',
				text: 'Enter through the front door',
				morale: 1,
				health: 0,
				survivor: 0,
				next_scene: 2
			},
			{
				imgUrl: 'https://picsum.photos/403/300',
				text: 'Sneak around to the back',
				morale: -1,
				health: 0,
				survivor: 1,
				next_scene: 3
			}
		]
	},
	2: {
		imgUrl: 'https://picsum.photos/805/400',
		text: 'The grand hall welcomes you...',
		choices: null
	},
	3: {
		imgUrl: 'https://picsum.photos/806/400',
		text: 'You discover a secret entrance...',
		choices: null
	}
};