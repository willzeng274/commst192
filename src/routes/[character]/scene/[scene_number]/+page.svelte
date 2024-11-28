<script lang="ts">
	import { ArrowLeft, Heart, Smile, Shield } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import type { Choice } from '$lib/types.js';
	import { goto, afterNavigate } from '$app/navigation';
	import { base } from '$app/paths'

	let previousPage : string = base ;

	afterNavigate(({from}) => {
		previousPage = from?.url.pathname || previousPage
	}) 

	export let data;

	let showDialog = false;

	let selectedChoice: Choice | null = null;

	function handleChoiceClick(choice: Choice) {
		selectedChoice = choice;
		showDialog = true;
	}
</script>

<svelte:head>
	<title>Scene {data.scene_number}</title>
</svelte:head>

<svelte:window on:keydown={e => (e.key === "Backspace" || e.key === "Delete" && !showDialog) ? goto(previousPage) : (e.key === ' ' || e.key === 'Enter' && showDialog) ? ((showDialog = false) || (selectedChoice && goto(`/${data.character}/scene/${selectedChoice.next_scene}`))) : data.scene.choices && ((e.key === '1') ? (handleChoiceClick(data.scene.choices[0])) : (e.key === '2') && (handleChoiceClick(data.scene.choices[1])))} />

<div class="w-full m-2">
	<button class="btn btn-ghost back-button" on:click={() => goto(previousPage)}>
		<ArrowLeft size={20} />
		<span>Back</span>
	</button>

	<div class="p-2 mt-24 w-full">
		<img src={data.scene.imgUrl} alt="Scene" class="aspect-square max-w-[600px] mr-auto ml-auto" />
		<p class="text-center text-xl">{data.scene.text}</p>

		{#if data.scene.choices}
			<div class="flex flex-row justify-evenly items-stretch w-full gap-4 mt-4">
				{#each data.scene.choices as choice}
					<button class="self-start" on:click={() => handleChoiceClick(choice)}>
						<img src={choice.imgUrl} alt="Choice" class="w-full aspect-square object-cover">
						<p class="text-lg mt-2">{choice.text}</p>
					</button>
				{/each}
			</div>
		{:else}
			<div class="w-full flex items-center justify-center mt-4">
				<a href="/" class="btn btn-primary">Return to Home</a>
			</div>
		{/if}
	</div>
</div>

{#if showDialog && selectedChoice}
	<div class="dialog-overlay overflow-y-scroll pt-20" transition:fade>
		<div class="dialog-content min-w-[48rem]">
			<img src={selectedChoice.imgUrl} alt="Choice" class="choice-image" />
			<p class="choice-text text-center">{selectedChoice.text}</p>

			<!-- a paragraph of text that respects new lines as line breaks, class name in tailwind -->
			<p class="whitespace-pre-line text-lg">{selectedChoice.modal_text}</p>

			<div class="metrics">
				<div class="metric">
					<Heart size={24} />
					<span>{selectedChoice.health > 0 ? '+' : ''}{selectedChoice.health}</span>
				</div>
				<div class="metric">
					<Smile size={24} />
					<span>{selectedChoice.morale > 0 ? '+' : ''}{selectedChoice.morale}</span>
				</div>
				<div class="metric">
					<Shield size={24} />
					<span>{selectedChoice.survivor > 0 ? '+' : ''}{selectedChoice.survivor}</span>
				</div>
			</div>

			<a href="/{data.character}/scene/{selectedChoice.next_scene}" class="btn btn-primary" on:click={() => (showDialog = false)}>Continue</a>
		</div>
	</div>
{/if}

<style>
	.back-button {
		position: absolute;
		top: 2rem;
		left: 2rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.metrics {
		display: flex;
		gap: 2rem;
		margin: 1.5rem 0;
		justify-content: center;
	}

	.metric {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--foreground);
	}
</style>