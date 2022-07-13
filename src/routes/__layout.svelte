<script lang="ts">
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1024px;
		min-height: calc(100vh - 75px);
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: orangered;
		height: 25px;
	}

	footer a {
		font-weight: bold;
	}

</style>
