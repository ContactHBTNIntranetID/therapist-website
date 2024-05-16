// Sample data for therapists (replace with actual data or API call)
const therapists = [
    { name: "Dr. John Doe", location: "123 Main St, City", specialty: "Psychologist" },
    { name: "Dr. Jane Smith", location: "456 Elm St, Town", specialty: "Counselor" },
    { name: "Dr. Michael Johnson", location: "789 Oak St, Village", specialty: "Therapist" }
];

// Function to search therapists
function searchTherapists() {
    const searchTerm = document.getElementById("searchTerm").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    // Filter therapists based on search term
    const filteredTherapists = therapists.filter(therapist =>
        therapist.name.toLowerCase().includes(searchTerm) ||
        therapist.location.toLowerCase().includes(searchTerm) ||
        therapist.specialty.toLowerCase().includes(searchTerm)
    );

    // Display search results
    if (filteredTherapists.length > 0) {
        filteredTherapists.forEach(therapist => {
            const therapistElement = document.createElement("div");
            therapistElement.classList.add("therapist");
            therapistElement.innerHTML = `
                <h3>${therapist.name}</h3>
                <p><strong>Location:</strong> ${therapist.location}</p>
                <p><strong>Specialty:</strong> ${therapist.specialty}</p>
            `;
            resultsContainer.appendChild(therapistElement);
        });
    } else {
        resultsContainer.innerHTML = "<p>No therapists found.</p>";
    }
}
