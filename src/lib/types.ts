export interface Scene {
	choices: [Choice, Choice] | null;
	imgUrl: string;
	text: string;
}

export interface Choice {
	morale: number;
	health: number;
	survivor: number;
	imgUrl: string;
	text: string;
	modal_text: string;
	next_scene: number;
}