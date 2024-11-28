import { scenes as carlitosScenes } from '$lib/scenes/carlitos';
import { scenes as bobbyScenes } from '$lib/scenes/bobby';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const scenes = params.character === 'carlitos' ? carlitosScenes : bobbyScenes;
	const scene = scenes[parseInt(params.scene_number)];

	if (!scene) {
		throw error(404, 'Scene not found');
	}

	return {
		scene,
		character: params.character
	};
}