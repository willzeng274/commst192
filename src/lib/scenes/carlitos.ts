import type { Scene } from '../types';

export const scenes: Record<number, Scene> = {
	1: {
		imgUrl: '/carl_s1.png',
		text: 'Rafael Echavarren asks Carlitos to swap seats because he wants to take photos with his girlfriend on the plane.',
		choices: [
			{
				imgUrl: '/carl_s1c1.png',
				text: 'Carlitos does not agree to switch seats with Rafael because he prefers the current seating arrangement.',
				modal_text: '',
				morale: 0,
				health: 0,
				survivor: 0,
				next_scene: 8
			},
			{
				imgUrl: '/carl_s1c2.png',
				text: 'Carlitos agrees to swap seats with Rafael',
				modal_text: '',
				morale: 0,
				health: 1,
				survivor: 0,
				next_scene: 2
			}
		]
	},
	2: {
		imgUrl: '/carl_s2.png',
		text: 'The plane is sliding a distance of 2 km after the crash, Carlitos can either pray or scream while the plane is sliding.',
		choices: [
			{
				imgUrl: '/carl_s2c1.png',
				text: 'Carlitos prays, boosting the morale of the group.',
				modal_text: 'He prays vigilantly and realizes that praying the Our Father would take too long so he quickly prayed the Hail Mary',
				morale: 1,
				health: 0,
				survivor: 0,
				next_scene: 3
			},
			{
				imgUrl: '/carl_s2c2.png',
				text: 'Carlitos screams like everyone else',
				modal_text: 'He screams with such vigour and agony as if he was suffering, which he was.',
				morale: -1,
				health: 0,
				survivor: 0,
				next_scene: 3
			}
		]
	},
	3: {
		imgUrl: '/carl_s3.png',
		text: 'The crash happens and he makes it out alive because he swapped into the correct seat. The crash scene is horrible and many passengers die. Rafael tragically ends up dying in the crash scene and he stays alive.',
		choices: [
			{
				imgUrl: '/carl_s3c1.png',
				text: 'Hoard resources, smoke cigarettes, contribute nothing to the group.',
				modal_text: 'He decides to hoard resources along with Bobby Francois and they simply waste them in the vain hope that help is coming to get them.',
				morale: -1,
				health: 0,
				survivor: -1,
				next_scene: 9
			},
			{
				imgUrl: '/carl_s3c2.png',
				text: 'Carlitos goes to help others improve their current situation.',
				modal_text: 'He saves several around him by helping them get out of the crushed seats. The faster he works the better he can attend their wounds. (Did happen)',
				morale: 1,
				health: -1,
				survivor: 0,
				next_scene: 4
			}
		]
	}, 
	4: {
		imgUrl: '/carl_s4.png',
		text: `After many days of harsh survival, Carlitos is still alive but many haven’t made it since. They are starting to feel a horrible hunger as their rations get scarcer and scarcer. 
		
		Carlitos is talking to Nando Parrado and he exclaims that “Entonces cortaré pedazos de carne de uno de los pilotos“, in response to him saying how it would be impossible to climb the mountain without sustenance.`,
		choices: [
			{
				imgUrl: '/carl_s4c1.png',
				text: 'Carlitos brings it up to the rest of the crew',
				modal_text: 'After much discussion they resort to eating human flesh after being initially introduced by Carlitos. (Happened)',
				morale: 1,
				health: 1,
				survivor: 1,
				next_scene: 5
			},
			{
				imgUrl: '/carl_s4c2.png',
				text: 'Carlitos does not bring it up to the crew.',
				modal_text: 'Everyone dies',
				morale: 1,
				health: 1,
				survivor: 0,
				next_scene: 10
			}
		]
	}, 
	5: {
		imgUrl: '/carl_s5.png',
		text: `Carlitos is hit with an avalanche that buries him 1 m deep in the snow. Without hesitation Carlitos goes and saves Zerbino and Parrado from the snow just before they suffocate. Eight more died under the weight of the snow, which greatly affected the group's morale. 

		After being trapped in the plane for 3 days, it becomes October 30th which is Numa’s birthday.`,
		choices: [
			{
				imgUrl: '/carl_s5c1.png',
				text: 'Carlitos bring up that it’s his birthday as well',
				modal_text: 'They celebrate their birthday and it boosts their morale. (real)',
				morale: 131,
				health: 1,
				survivor: 0,
				next_scene: 6
			},
			{
				imgUrl: '/carl_s5c2.png',
				text: 'Don’t mention the birthday',
				modal_text: 'They continue to survive in the cold airplane.',
				morale: -1,
				health: 0,
				survivor: 0,
				next_scene: 6
			}
		]
	}, 
	6: {
		imgUrl: '/carl_s6.png',
		text: 'Canessa, Tin Tin and Parrado brought back 131 packs of cigarettes after finding the tail of the plane. But they had also brought back material from the tail of the plane.',
		choices: [
			{
				imgUrl: '/carl_s6c1.png',
				text: 'Carlitos goes to see what Canessa, Tin Tin and Parrado brought back',
				modal_text: 'Carlitos sees what they brought from the airplane. He notices an insulating material that he can potentially work with. (Real)',
				morale: +1,
				health: 0,
				survivor: 0,
				next_scene: 7
			},
			{
				imgUrl: '/carl_s6c2.png',
				text: 'Carlitos is tired so he decides to stay inside.',
				modal_text: 'He stays inside, and doesn’t make the observation you can use the insulating material to make a sleeping bag.',
				morale: 0,
				health: -1,
				survivor: -1,
				next_scene: 11
			}
		]
	}, 
	7: {
		imgUrl: '/end_with_people.png',
		text: 'After going outside to check out what the group brought back, Carlitos immediately spots the material from the back as the plane and recognizes it as material that can be used as a sleeping bag as it was meant to keep the tail of the plane insulated. They then set out to complete their journey with this new sleeping bag and find someone to save them. He took the initiative to start sewing the insulating material together and taught other members how to sew in order to make a sleeping bag for the trip to find outer contact. They then send Nando, Canessa, and TinTin to search for help. From there they eventually find help and that is the end of the story.',
		choices: null
	}, 
	8: {
		imgUrl: '/end_without_people.png',
		text: 'Carlitos dies in the crash instead of Rafael as the seat is torn off and dies as he falls off the plane. (Did not actually happen)',
		choices: null
	}, 
	9: {
		imgUrl: '/carl_s9.png',
		text: 'Carlitos dies in the crash instead of Rafael as the seat is torn off and dies as he falls off the plane. (Did not actually happen)',
		choices: null
	}, 
	10: {
		imgUrl: '/end_without_people.png',
		text: 'Since human flesh consumption was never an option, the group eventually dies in the Andes due to hunger.',
		choices: null
	}, 
	11: {
		imgUrl: '/end_with_people.png',
		text: 'Carlitos stays inside and they are stuck inside until they go on the expedition to find human contact. They are set out without much gear but they barely make it to the top of the mountain to find that they have much more to traverse. Over the many days they find human contact and call a crew to save the rest of them but with great struggle.',
		choices: null
	}, 
};