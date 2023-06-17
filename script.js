
// Array to store the added employees
let employees = [];

// Function to generate a unique ID for each employee
function generateID() {
  if (employees.length === 0) {
    return 1;
  } else {
    displayDefaultMessage()
    const lastEmployee = employees[employees.length - 1];
    displayDefaultMessage()
    return lastEmployee.id + 1;
  }
  
}

// Function to add an employee
function addEmployee() {
  const nameInput = document.getElementById('name');
  const professionInput = document.getElementById('profession');
  const ageInput = document.getElementById('age');
  const container = document.getElementById('container');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  // Check if the required fields are empty
  if (nameInput.value === '' || professionInput.value === '' || ageInput.value === '') {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    return;
  }

  // Create a new employee object
  const newEmployee = {
    id: generateID(),
    name: nameInput.value,
    profession: professionInput.value,
    age: parseInt(ageInput.value)
  };

  // Add the new employee to the array
  employees.push(newEmployee);

  // Clear the input fields
  nameInput.value = '';
  professionInput.value = '';
  ageInput.value = '';

  // Display success message
  successMessage.style.display = 'block';
  errorMessage.style.display = 'none';

  // Refresh the list of added employees
  displayEmployees();
}

// Function to delete an employee
function deleteEmployee(id) {
  // Find the index of the employee with the given ID
  const index = employees.findIndex(employee => employee.id === id);

  // Remove the employee from the array
  employees.splice(index, 1);

  // Refresh the list of added employees
  displayEmployees();
}

// Function to display the list of added employees
function displayEmployees() {
  const container = document.getElementById('container');

  // Clear the container
  container.innerHTML = '';

  // Create a div for each employee and append it to the container
  employees.forEach(employee => {
    const div_main = document.createElement("div");
    div_main.className = "main"
    const div = document.createElement('div');
    div.className = "list"
    div.innerHTML = `
     <strong>ID:</strong> ${employee.id}
      <strong>Name: ${employee.name}</strong>
      <strong>Profession: ${employee.profession}</strong>
      <strong>Age: ${employee.age}</strong>
    `;
    div_main.appendChild(div);
    const button = document.createElement("div")
    button.innerHTML = `<button class="del-btn" onclick="deleteEmployee(${employee.id})">Delete</button>`
    div_main.appendChild(button)
    container.appendChild(div_main);

  });
}

// Event listener for the form submit
document.getElementById('employee-form').addEventListener('submit', function(e) {
  e.preventDefault();
  addEmployee();
});

function displayDefaultMessage() {
  const defaultMessage = document.getElementById('default-message');
  if (employees.length === 0) {
    defaultMessage.style.display = 'block';
  } else {
    defaultMessage.style.display = 'none';
  }
}

displayDefaultMessage()