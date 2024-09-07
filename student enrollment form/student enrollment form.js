const enrollmentForm = document.getElementById('enrollment-form');
const enrolledStudentsTable = document.querySelector('.enrolled-students tbody');

enrollmentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const website = document.getElementById('website').value;
  const image = document.getElementById('image').files[0];
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked'))
    .map(checkbox => checkbox.value)
    .join(', ');

  // Create a new row for the enrolled student
  const newRow = document.createElement('tr');

  // Add the description to the row
  const descriptionCell = document.createElement('td');
  descriptionCell.innerHTML = `
    <h3>${name}</h3>
    <p>Gender: ${gender}</p>
    <p>Email: ${email}</p>
    <p>Website: ${website}</p>
    <p>Skills: ${skills}</p>
  `;
  newRow.appendChild(descriptionCell);

  // Add the image to the row
  const imageCell = document.createElement('td');
  const imageElement = document.createElement('img');
  imageElement.src = URL.createObjectURL(image);
  imageElement.alt = `${name}'s profile picture`;
  imageCell.appendChild(imageElement);
  newRow.appendChild(imageCell);

  // Add the new row to the table
  enrolledStudentsTable.appendChild(newRow);

  // Clear the form
  enrollmentForm.reset();
});