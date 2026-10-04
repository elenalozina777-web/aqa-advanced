async function getToDo() {
    const response = await fetch (`https://jsonplaceholder.typicode.com/todos/1`);
    const data = await response.json();
    return data;

} 

async function getUsers () {  
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/1`);
  const data = await response.json();
  return data;
  
}

async function allData() {
try {
    const result = await Promise.all ([
      getToDo(),
      getUsers()
    ])
    console.log (result);
}
catch (error) {
    console.error(error);
}
}

async function data() {
    try {
         const result =await Promise.race ([  
              getToDo(),
              getUsers()
    ])
console.log ("Promise.race:",result);
} 
catch (error) {
    console.error("Error : ", error);
}

}
 
allData();
data();
