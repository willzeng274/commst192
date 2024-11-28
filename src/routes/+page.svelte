<script>
	import { Link } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Choose Your Adventure: Alive 1993 Edition</title>
	<meta name="description" content="An interactive story adventure" />
</svelte:head>

<div class="w-full">
	<h1 class="title">Choose your adventure:<br />Alive 1993 Edition</h1>
	<div class="character-grid">
		<a href="/carlitos/scene/1" class="character-card">
			<img
				src="carlitos.jpg"
				alt="Carlitos"
				class="character-image"
			/>
			<span class="character-name">Carlitos</span>
		</a>

		<a href="/bobby/scene/1" class="character-card">
			<img
				src="bobby.jpeg"
				alt="Bobby Francois"
				class="character-image"
			/>
			<span class="character-name">Bobby Francois</span>
		</a>
	</div>

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