const request = new XMLHttpRequest();

// Regular function approach
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

// Arrow function approach
// request.onreadystatechange = () => {
//   if(request.readyState === 4 && request.status === 200){
//     console.log(request.responseText);
//   }
// }

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
