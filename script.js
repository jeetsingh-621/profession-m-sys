const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addButton = document.getElementById("add");
const messageBox = document.getElementById("message");
const details = document.getElementById("details");
const zeroText = document.getElementById("zero");

const employees = [];

// Function to show messages
function showMessage(type, text) {
  messageBox.className = `message ${type}`;
  messageBox.textContent = text;

  setTimeout(() => {
    messageBox.textContent = "";
    messageBox.className = "message";
  }, 3000);
}

// Function to add an employee
function addEmployee() {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !profession || !age) {
    showMessage("error", "All fields are required!");
    return;
  }

  const employee = {
    id: Date.now(),
    name,
    profession,
    age,
  };

  employees.push(employee);
  renderEmployees();
  showMessage("success", "Employee added successfully!");

  // Clear inputs
  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";
}

// Function to delete an employee
function deleteEmployee(id) {
  const index = employees.findIndex((emp) => emp.id === id);
  if (index > -1) {
    employees.splice(index, 1);
    renderEmployees();
    showMessage("success", "Employee deleted successfully!");
  }
}

// Function to render employees
function renderEmployees() {
  const employeeList = document.querySelector(".employee-list");
  employeeList.innerHTML = employees
    .map(
      (employee) => `
        <div class="employee">
          <span>${employee.name} - ${employee.profession} - Age: ${employee.age}</span>
          <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
        </div>
      `
    )
    .join("");

  // Show or hide "0 Employees" text
  zeroText.style.display = employees.length === 0 ? "block" : "none";
}

// Event listener for adding employees
addButton.addEventListener("click", addEmployee);
