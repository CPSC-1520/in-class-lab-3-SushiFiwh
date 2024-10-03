// Exercise 1
const showResourcesButton = document.getElementById('show-resources');
const resourcesDiv = document.querySelector('.javascript-resources');

// Exercise 1
showResourcesButton.addEventListener('click', () => {
  resourcesDiv.classList.remove('d-none');
});

// Exercise 2 & 3
resourcesDiv.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('list-group-item')) {
    event.target.classList.add('fw-bold');
  }
});

resourcesDiv.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('list-group-item')) {
    event.target.classList.remove('fw-bold');
  }
});

// Exercise 4
resourcesDiv.addEventListener('click', (event) => {
    const listItem = event.target.closest('.list-group-item');
    console.log(listItem);
    
    if (listItem && !listItem.classList.contains('fst-italic')) {
      listItem.classList.add('fst-italic');
    }
  });
  
