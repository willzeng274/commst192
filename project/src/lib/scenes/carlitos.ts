export const scenes: Record<number, Scene> = {
	1: {
		imgUrl: 'https://picsum.photos/800/400',
		text: 'Carlitos finds himself at a crossroads...',
		choices: [
			{
				imgUrl: 'https://picsum.photos/400/300',
				text: 'Take the path through the dark forest',
				morale: -1,
				health: 0,
				survivor: 1,
				next_scene: 2
			},
			{
				imgUrl: 'https://picsum.photos/401/300',
				text: 'Follow the well-lit road',
				morale: 1,
				health: 1,
				survivor: 0,
				next_scene: 3
			}
		]
	},
	2: {
		imgUrl: 'https://picsum.photos/802/400',
		text: 'The forest is dense and mysterious...',
		choices: null
	},
	3: {
		imgUrl: 'https://picsum.photos/803/400',
		text: 'The road leads to a friendly village...',
		choices: null
	}
};