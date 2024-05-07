import { courses } from '../../../data'; // Contoh data kursus

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: { id: string } }) {
	const { id } = params;

	// Cari kursus berdasarkan ID
	const course = courses.find((c) => c.id === parseInt(id));
	if (!course) {
		console.log('Course not found for ID:', id); // Tambahkan console.log di sini
		return {
			status: 404,
			error: new Error(`Course with ID ${id} not found`)
		};
	}
    
	return { course };
}
