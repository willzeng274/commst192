<script>
	export let src;
	export let alt;
	export let className = '';

	let loaded = false;
</script>

<div class="image-container {className}">
	{#if !loaded}
		<div class="placeholder">
			<div class="spinner"></div>
		</div>
	{/if}
	<img
		{src}
		{alt}
		class="image {loaded ? 'loaded' : ''}"
		on:load={() => (loaded = true)}
	/>
</div>

<style>
	.image-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.placeholder {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: inherit;
	}

	.spinner {
		width: 30px;
		height: 30px;
		border: 2px solid var(--muted);
		border-top-color: var(--accent);
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	.image {
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.3s ease;
		object-fit: cover;
		border-radius: inherit;
	}

	.image.loaded {
		opacity: 1;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>