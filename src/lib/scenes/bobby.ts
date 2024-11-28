import type { Scene } from '../types';

export const scenes: Record<number, Scene> = {
	1: {
		imgUrl: '/bob_s1.png',
		text: 'The plane just crashed. (Plane in the background, luggage everywhere, idk picture the movie)',
		choices: [
			{
				imgUrl: '/bob_s1c1.png',
				text: 'Group morale deteriorates, and the death of an injured person weighs heavily on everyone due to poor resource allocation. (Happened in reality)',
				modal_text: 'Resources are better utilized, and the group feels less burdened by Bobby’s cooperation. Bobby is fatigued, but morale improves slightly as others feel supported. (Made up)',
				morale: 1,
				health: 0,
				survivor: 0,
				next_scene: 2
			},
			{
				imgUrl: '/bob_s1c2.png',
				text: 'Spend time smoking cigars and drinking wine, showing little care for the group’s survival.',
				modal_text: 'Group morale deteriorates, and the death of an injured person weighs heavily on everyone due to poor resource allocation. (Happened in reality)',
				morale: -1,
				health: 0,
				survivor: 1,
				next_scene: 3
			}
		]
	},
	2: {
		imgUrl: '/bob_s2.png',
		text: 'The group asks Bobby to help search missing luggage containing critical supplies. (commander, he is walking in the direction opposite of the plane)',
		choices: [
			{
				imgUrl: '/bob_s2c1.png',
				text: 'Bobby agrees to join the expedition',
				modal_text: 'Resources are better utilized, and the group feels less burdened by Bobby’s cooperation. Bobby is fatigued, but morale improves slightly as others feel supported. (Made up)',
				morale: -1,
				health: -1,
				survivor: -1,
				next_scene: 4
			},
			{
				imgUrl: '/bob_s2c2.png',
				text: 'Bobby declines and stays behind.',
				modal_text: 'Bobby dodges dying in the avalanche from the expedition, but the overall morale of the group is dropped. (Made up)',
				morale: -1,
				health: 0,
				survivor: 0,
				next_scene: 5
			}
		]
	},
	3: {
		imgUrl: '/bob_s3.png',
		text: 'The group begins to resent Bobby for his selfish behaviour. The group is more stressed about his survival than himself.',
		choices: [
			{
				imgUrl: '/bob_s3c1.png',
				text: 'Bobby apologizes and shares his cigars',
				modal_text: 'Bobby’s gesture helps mend relationships, slightly lifting the group’s spirits during their difficult time. (Made up)',
				morale: 1,
				health: 0,
				survivor: 0,
				next_scene: 6
			},
			{
				imgUrl: '/bob_s3c2.png',
				text: 'Bobby continues hoarding cigars and wine for himself', 
				modal_text: 'Group tensions worsen as Bobby’s selfishness becomes a source of frustration and division. (Happened in reality)', 
				morale: -1,
				health: 0,
				survivor: 0,
				next_scene: 7
			}
		]
	},
	4: {
		imgUrl: '/bob_s4.png',
		text: 'Bobby’s decision to join the expedition leads to his death in an avalanche. The group is left with fewer members, lost resources from the failed expedition and lowered morale knowing that he won’t be coming back. (Made up)',
		choices: null
	},
	5: {
		imgUrl: '/bob_s5.png',
		text: 'The avalanche strikes the camp. Bobby’s survival depends on the others digging him out.',
		choices: [
			{
				imgUrl: '/bob_s5c1.png',
				text: 'Assist others in digging other people out',
				modal_text: 'Bobby’s contributions after being dug out make a difference earning him some appreciation from the group. (Made up)',
				morale: 1,
				health: -1,
				survivor: 1,
				next_scene: 8
			},
			{
				imgUrl: '/bob_s5c2.png',
				text: 'Bobby does nothing after being dug out, remaining passive.',
				modal_text: 'The group lost a potential extra survivor if Bobby had helped, and the overall morale drops. (Happened in reality)',
				morale: -1,
				health: 0,
				survivor: -1,
				next_scene: 7
			}
		]
	},
	6: {
		imgUrl: '/bob_s6.png',
		text: 'The group suggests strict rationing of resources for better survival chances.',
		choices: [
			{
				imgUrl: '/bob_s6c1.png',
				text: 'Bobby agrees to ration his cigars and wine.',
				modal_text: 'Cooperation improves morale, as Bobby is seen as a team player (Made up)',
				morale: 1,
				health: 0,
				survivor: 0,
				next_scene: 9
			},
			{
				imgUrl: '/bob_s6c2.png',
				text: 'Bobby refuses to ration, hoarding his resources.',
				modal_text: 'Group morale deteriorates, and the death of an injured person weighs heavily on everyone due to poor resource allocation. (Happened in reality)',
				morale: -1,
				health: 0,
				survivor: 0,
				next_scene: 7
			}
		]
	},
	7: {
		imgUrl: '/bob_s7.png',
		text: 'Even though the group does eventually survive and Bobby is also rescued, his lack of participation endangered the group’s survival and caused a rift. He didn’t really contribute and he was primarily a waste of resources. ',
		choices: null
	},
	8: {
		imgUrl: '/bob_s8.png',
		text: 'The group asks Bobby to go with Nando and Canessa to search for help in Chile.',
		choices: [
			{
				imgUrl: '/bob_s8c1.png',
				text: 'Bobby volunteers to join the expedition.',
				modal_text: 'Bobby joins Nando and Canessa in finding help in Chile. (Made up)',
				morale: 0,
				health: -1,
				survivor: 1,
				next_scene: 10
			},
			{
				imgUrl: '/bob_s8c2.png',
				text: 'Bobby refuses to join the stays with the camp.',
				modal_text: 'The group proceeds without Bobby. He stays behind and continues to hoard resources while others succeed in securing  rescue. (Happened in reality)  ',
				morale: 0,
				health: 0,
				survivor: 0,
				next_scene: 11
			}
		]
	},
	9: {
		imgUrl: '/bob_s9.png',
		text: 'The group’s cooperative efforts lead to the eventual rescue. Bobby’s willingness',
		choices: null
	},
	10: {
		imgUrl: '/bob_s10.png',
		text: 'Even though Bobby’s health has gotten worse, the expedition team successfully finds help. Bobby’s contribution is critical, earning him gratitude from the group. Note that in reality, they probably did not have enough food for 3 people to survive the expedition all the way the Chile since it barely lasted them in the real scenario.',
		choices: null
	},
	11: {
		imgUrl: '/bob_s11.png',
		text: 'The group is rescued due to the efforts of Nando and Canessa. Bobby survives, but his efforts were not as significant. However, he is still recognized as a contributor.',
		choices: null
	},
};