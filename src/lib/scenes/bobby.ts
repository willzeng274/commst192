import type { Scene } from '../types';

export const scenes: Record<number, Scene> = {
	1: {
		imgUrl: '/bob_s1.png',
		text: 'The plane just crashed. Shattered luggage litters the snowy ground, survivors stumble in shock',
		choices: [
			{
				imgUrl: '/bob_s1c1.png',
				text: ' Actively contributes by carrying items, helping others dig, and melting snow. (Did not happen)',
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
		text: 'The group asks Bobby to help search missing luggage containing critical supplies. He is walking around the plane aimlessly right now.',
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
				modal_text: 'Bobby dodges dying in the avalanche from the expedition, but the overall morale of the group is dropped. This didn`t happen in reality, but it could have. (Made up)',
				morale: -1,
				health: 0,
				survivor: 0,
				next_scene: 5
			}
		]
	},
	3: {
		imgUrl: '/bob_s3.png',
		text: 'The group begins to resent Bobby for his selfish behaviour. The group is more stressed about his survival than himself. He is holding the group back in some ways, but in others he is sort of their puppy as they all have to take turns taking care for him.',
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
				modal_text: `Group tensions worsen as Bobby’s selfishness becomes a source of frustration and division. (Happened in reality)

				From The Society of the Snow by Pablo Vierci:

				"One day in the fuselage somebody hit me in the face and I asked him, without the slightest bit of anger:
				'Was that on purpose or by accident?'.
				'By accident', he answered.
				'Oh OK' I said.
				Daniel Fernandez is sure I would have responded exactly the same if he had said that the punch had been intentional - 'Oh OK'. And he reiterates that that attitude made the madness we all shared more tolerable."
				`, 
				morale: -1,
				health: 0,
				survivor: 0,
				next_scene: 7
			}
		]
	},
	4: {
		imgUrl: '/end_without_people.png',
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
		text: 'Even though the group does eventually survive and Bobby is also rescued, his lack of participation endangered the group’s survival and caused a rift. He didn’t really contribute and he was primarily a waste of resources.',
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
				modal_text: 'The group proceeds without Bobby. He stays behind and continues to hoard resources while others succeed in securing rescue. (Happened in reality)',
				morale: 0,
				health: 0,
				survivor: 0,
				next_scene: 11
			}
		]
	},
	9: {
		imgUrl: '/bob_s9.png',
		text: 'Even with rationing, food supplies are running dangerously low. The group needs a resolution and Bobby takes part in the decision-making.',
		choices: [
			{
				imgUrl: '/bob_s9c1.png',
				text: 'Bobby refuses to practice anthropophagy, and convinces the rest of the group to do the same.',
				modal_text: 'The group hesitates too long due to the moral conflict, and their health conditions worsen. (Made up)',
				morale: 0,
				health: -1,
				survivor: -1,
				next_scene: 12
			},
			{
				imgUrl: '/bob_s9c2.png',
				text: 'Bobby is very passionate about anthropophagy and starts hoarding the human food resources.',
				modal_text: 'Bobby’s consumes all the human flesh available and the group is left with no food, again. (Made up)',
				morale: -1,
				health: -1,
				survivor: -1,
				next_scene: 13
			}
		]
	},
	10: {
		imgUrl: '/end_with_people.png',
		text: 'Even though Bobby’s health has gotten worse, the expedition team successfully finds help. Bobby’s contribution is critical, earning him gratitude from the group. Note that in reality, they probably did not have enough food for 3 people to survive the expedition all the way the Chile since it barely lasted them in the real scenario.',
		choices: null
	},
	11: {
		imgUrl: '/end_with_people.png',
		text: 'The group is rescued due to the efforts of Nando and Canessa. Bobby survives, but his efforts were not as significant. However, he is still recognized as a contributor.',
		choices: null
	},
	12: {
		imgUrl: '/end_without_people.png',
		text: 'With no food, the group grows too weak and starvation claims everyone’s lives one by one (Made up).',
		choices: null
	},
	13: {
		imgUrl: '/end_without_people.png',
		text: 'Bobby hoards too much human flesh and the group eventually runs out of food. Everyone dies due to starvation (Made up). ',
		choices: null
	},
};