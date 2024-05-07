<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.course}
	<h1 class="text-2xl font-bold mb-4">Detail Kursus: {data.course.title}</h1>
	<p>{data.course.description}</p>
{:else}
	<h1 class="text-2xl font-bold mb-4">Kursus Tidak Ditemukan</h1>
{/if}
