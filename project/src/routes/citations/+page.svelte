<script>
	import { ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Citations - Choose Your Adventure</title>
</svelte:head>

<div class="container">
	<a href="/" class="btn btn-ghost back-link">
		<ArrowLeft size={20} />
		<span>Back to Home</span>
	</a>

	<div class="content">
		<h1>Works Cited</h1>
		<div class="citations">
			<!-- Citations will be added here -->
			<p class="placeholder">Citations will be added later...</p>
		</div>
	</div>
</div>

<style>
	.content {
		max-width: 800px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3rem;
	}

	.citations {
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.placeholder {
		text-align: center;
		color: var(--muted);
	}

	.back-link {
		position: absolute;
		top: 2rem;
		left: 2rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	@media (max-width: 768px) {
		.content {
			padding: 3rem 1rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>