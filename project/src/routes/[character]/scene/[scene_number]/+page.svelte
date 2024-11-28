<script>
	import { ArrowLeft, Heart, Smile, Shield } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import ImageLoader from '$lib/components/ImageLoader.svelte';

	export let data;

	let showDialog = false;
	let selectedChoice = null;

	function handleChoiceClick(choice) {
		selectedChoice = choice;
		showDialog = true;
	}
</script>

<svelte:head>
	<title>Scene {data.scene_number}</title>
</svelte:head>

<div class="container">
	<button class="btn btn-ghost back-button" onclick="history.back()">
		<ArrowLeft size={20} />
		<span>Back</span>
	</button>

	<div class="scene-content">
		<div class="scene-image-container">
			<ImageLoader src={data.scene.imgUrl} alt="Scene" className="scene-image" />
		</div>
		<p class="scene-text">{data.scene.text}</p>

		{#if data.scene.choices}
			<div class="choices-grid">
				{#each data.scene.choices as choice}
					<button class="choice-card" on:click={() => handleChoiceClick(choice)}>
						<ImageLoader src={choice.imgUrl} alt="Choice" className="choice-image" />
						<p class="choice-text">{choice.text}</p>
					</button>
				{/each}
			</div>
		{:else}
			<a href="/" class="btn btn-primary">Return to Home</a>
		{/if}
	</div>
</div>

{#if showDialog}
	<div class="dialog-overlay" transition:fade>
		<div class="dialog-content">
			<ImageLoader src={selectedChoice.imgUrl} alt="Choice" className="choice-image" />
			<p class="choice-text">{selectedChoice.text}</p>
			
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

			<a href="/{data.character}/scene/{selectedChoice.next_scene}" class="btn btn-primary">Continue</a>
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

	.scene-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 5rem;
	}

	.scene-image-container {
		width: 100%;
		height: 40vh;
	}

	.scene-text {
		font-size: 1.25rem;
		text-align: center;
		max-width: 800px;
	}

	.choices-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		width: 100%;
	}

	.choice-card {
		background: none;
		border: 1px solid var(--muted);
		border-radius: 8px;
		padding: 1rem;
		cursor: pointer;
		transition: all 0.2s;
		height: 300px;
		display: flex;
		flex-direction: column;
	}

	.choice-card:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.choice-text {
		font-size: 1.1rem;
		color: var(--foreground);
		margin-top: 1rem;
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