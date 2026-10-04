function getToDo () { 
    return fetch (`https://jsonplaceholder.typicode.com/todos/1`)
.then(response => response.json())
 
}

  function getUsers () {  
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
  .then(response => response.json())
  
}
const allData = Promise.all([
  getToDo(),
  getUsers()
]);

allData
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

  const data = Promise.race (
[    getToDo(),
    getUsers()
]
  );
  data
  .then(result => {
    console.log("Promise.race:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
   
  




