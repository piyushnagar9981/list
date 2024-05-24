// Employee data
const employees = [
    { name: 'Omprakash', salary: 8000 },
    { name: 'Lalit', salary: 12000 },
    { name: 'Rajesh', salary: 12000 },
    { name: 'Hira', salary: 15000 },
    { name: 'Sunil', salary: 12000 },
    { name: 'Hariom', salary: 10000 },
    { name: 'Pawan', salary: 12000 }
  ];
  
  // Function to create a list
  function createList() {
    const list = document.createElement('ul');
  
    employees.forEach(employee => {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = employee.name;
      const label = document.createElement('label');
      label.setAttribute('for', employee.name);
      label.textContent = `- [ ] ${employee.name.padEnd(25)}${employee.salary}/-`;
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      list.appendChild(listItem);
    });
  
    return list;
  }
  
  // Display the list
  const listContainer = document.getElementById('list-container');
  listContainer.appendChild(createList());
  