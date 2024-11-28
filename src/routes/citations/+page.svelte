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
	</div>
	<div class="citations">
		<p class="placeholder">{`[1] Piers Paul Read, ¡Viven! Open Road Media, 2017.`}</p>
		<p class="placeholder">{`[2] P. Vierci, Society of the Snow. Constable, 2023.`}</p>
		<p class="placeholder">{`[3] “My Plane Crashed And I Survived 72 Days In The Andes | Minutes With,” www.youtube.com. https://www.youtube.com/watch?v=5aVI-5oZbDA`}</p>
		<p class="placeholder">{`[4] C. Godfrey, “My plane crashed in the Andes. Only the unthinkable kept me and the other starving survivors alive,” The Guardian, Dec. 04, 2023. Accessed: Nov 20th. [Online]. Available: https://www.theguardian.com/world/2023/dec/04/nando-parrado-andes-plane-crash-1972-rugby-team`}</p>
	</div>
</div>

<style>
	.content {
		margin-top: 4rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;  /* Center only the heading */
	}

	.citations {
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.placeholder {
		color: whitesmoke;
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
