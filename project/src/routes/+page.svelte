<script>
	import { Link } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let imagesLoaded = false;
	let images = [];

	onMount(() => {
		images = [
			'https://picsum.photos/400/400',
			'https://picsum.photos/401/400'
		];

		Promise.all(
			images.map(src => {
				return new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve();
				});
			})
		).then(() => {
			imagesLoaded = true;
		});
	});
</script>

<svelte:head>
	<title>Choose Your Adventure: Alive 1993 Edition</title>
	<meta name="description" content="An interactive story adventure" />
</svelte:head>

<div class="container">
	<h1 class="title">Choose your adventure:<br />Alive 1993 Edition</h1>

	{#if !imagesLoaded}
		<div class="loading">
			<div class="spinner"></div>
			<span>Loading adventure...</span>
		</div>
	{:else}
		<div class="character-grid">
			<a href="/carlitos/scene/1" class="character-card">
				<img
					src="https://picsum.photos/400/400"
					alt="Carlitos"
					class="character-image"
				/>
				<span class="character-name">Carlitos</span>
			</a>

			<a href="/bobby/scene/1" class="character-card">
				<img
					src="https://picsum.photos/401/400"
					alt="Bobby Francois"
					class="character-image"
				/>
				<span class="character-name">Bobby Francois</span>
			</a>
		</div>
	{/if}

	<a href="/citations" class="citations-link">
		<Link size={24} />
		<span>Go to citations</span>
	</a>
</div>

<style>
	.title {
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 2rem;
		line-height: 1.2;
	}

	.loading {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 3px solid var(--muted);
		border-top-color: var(--accent);
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 768px) {
		.title {
			font-size: 2rem;
		}
	}
</style>