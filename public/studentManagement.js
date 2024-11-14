
// Search student functionality
async function searchStudent() {
    const searchTerm = document.querySelector('#searchBar').value.trim();
    if (!searchTerm) {
        alert("Please enter a name or ID to search.");
        return;
    }

    const response = await fetch(`/api/students?search=${encodeURIComponent(searchTerm)}`);
    
    if (response.ok) {
        const students = await response.json();
        displayStudents(students);
    } else {
        alert('Failed to retrieve student data');
    }
}

// Display search results
function displayStudents(students) {
    const searchResults = document.querySelector('#searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    if (students.length === 0) {
        searchResults.innerHTML = '<p>No students found.</p>';
        return;
    }

    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.classList.add('card', 'mb-3');

        studentCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text"><strong>Date of Birth:</strong> ${student.DateofBirth}</p>
                <p class="card-text"><strong>Gender:</strong> ${student.gender}</p>
                <p class="card-text"><strong>Nationality
:</strong> ${student.nation}</p>
                <p class="card-text"><strong>Father's Name:</strong> ${student.fatherName}</p>
                <p class="card-text"><strong>Mother's Name:</strong> ${student.motherName}</p>
                <p class="card-text"><strong>Address:</strong> ${student.address}</p>
                 <p class="card-text"><strong>City:</strong> ${student.city}</p>
                   <p class="card-text"><strong>State:</strong> ${student.state}</p>
                    <p class="card-text"><strong>Country:</strong> ${student.country}</p>
                <p class="card-text"><strong>Aadhar Number:</strong> ${student.aadhar}</p>
                <p class="card-text"><strong>Email:</strong> ${student.email}</p>
                <p class="card-text"><strong>Phone Number:</strong> ${student.phone}</p>
                <p class="card-text"><strong>PIN Code:</strong> ${student.pin}</p>
                <p class="card-text"><strong>Highest Education Level:</strong> ${student.education}</p>
                <p class="card-text"><strong>Previous Institution/Organization:</strong> ${student.previous}</p>
                <p class="card-text"><strong>Skills:</strong> ${student.skills}</p>
                <p class="card-text"><strong>Course:</strong> ${student.course}</p>
                 <p class="card-text"><strong>Preferred Batch Timings:</strong> ${student.time}</p>
                  <p class="card-text"><strong>Preferred Learning Mode:</strong> ${student.mode}</p>
                  <p class="card-text"><strong>Course:</strong> ${student.course}</p>
                  <p class="card-text"><strong>Fees Payment:</strong> ${student.fees}</p>
                <p class="card-text"><strong>Special Offer/Discount:</strong> ${student.offer || 'None'}</p>
                <p class="card-text"><strong>Duration:</strong> ${student.duration}</p>
            </div>
        `;
        
        searchResults.appendChild(studentCard);
    });
}


