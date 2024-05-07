<!-- src/routes/courses.svelte -->

<script>
	// Import dependencies
	import { courses } from '../../data'; // Contoh data kursus
</script>

<h1 class="text-2xl font-bold mb-4">Daftar Kursus</h1>

<ul>
	{#each courses as course}
		<li>
			<a href="courses/{course.id}" class="text-blue-500 hover:underline">{course.title}</a>
		</li>
	{/each}
</ul>
