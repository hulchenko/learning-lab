Here’s a practical guide with **common examples** for the concepts listed:

---

### **General JavaScript Concepts**

1. **Vanilla JavaScript**

   ```javascript
   document.querySelector("#btn").addEventListener("click", () => {
     alert("Button clicked!");
   });
   ```

2. **Hoisting**

   ```javascript
   console.log(a); // undefined
   var a = 10; // Declaration is hoisted, assignment is not
   ```

3. **Closures**

   ```javascript
   function makeCounter() {
     let count = 0;
     return function () {
       count++;
       return count;
     };
   }
   const counter = makeCounter();
   console.log(counter()); // 1
   console.log(counter()); // 2
   ```

4. **Promises**

   ```javascript
   fetch("https://api.example.com/data")
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error(error));
   ```

5. **Async/Await**

   ```javascript
   async function fetchData() {
     try {
       const response = await fetch("https://api.example.com/data");
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error(error);
     }
   }
   fetchData();
   ```

6. **Event Loop**

   ```javascript
   console.log("Start");
   setTimeout(() => console.log("Timeout"), 0);
   Promise.resolve().then(() => console.log("Promise"));
   console.log("End");
   // Output: Start, End, Promise, Timeout
   ```

7. **Higher-Order Functions**

   ```javascript
   const numbers = [1, 2, 3];
   const doubled = numbers.map((num) => num * 2);
   console.log(doubled); // [2, 4, 6]
   ```

8. **Destructuring**

   ```javascript
   const user = { name: "Alice", age: 25 };
   const { name, age } = user;
   console.log(name, age); // Alice 25
   ```

9. **Spread Operator**
   ```javascript
   const arr = [1, 2, 3];
   const newArr = [...arr, 4, 5];
   console.log(newArr); // [1, 2, 3, 4, 5]
   ```

---

### **ES6+ Features**

1. **Arrow Functions**

   ```javascript
   const add = (a, b) => a + b;
   console.log(add(2, 3)); // 5
   ```

2. **Modules (import/export)**

   ```javascript
   // file1.js
   export const greet = () => console.log("Hello!");

   // file2.js
   import { greet } from "./file1.js";
   greet();
   ```

3. **Default Parameters**

   ```javascript
   function greet(name = "Guest") {
     console.log(`Hello, ${name}!`);
   }
   greet(); // Hello, Guest!
   ```

4. **Rest Parameters**

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3)); // 6
   ```

5. **Let and Const**

   ```javascript
   let count = 0;
   const PI = 3.14;
   ```

6. **Symbol**
   ```javascript
   const id = Symbol("id");
   const user = { [id]: 12345 };
   console.log(user[id]); // 12345
   ```

---

### **DOM Manipulation**

1. **Query Selectors**

   ```javascript
   const button = document.querySelector("#btn");
   button.addEventListener("click", () => alert("Clicked!"));
   ```

2. **Event Listeners**

   ```javascript
   window.addEventListener("resize", () => {
     console.log("Window resized!");
   });
   ```

3. **Bubbling and Capturing**

   ```javascript
   document.body.addEventListener(
     "click",
     () => console.log("Body clicked!"),
     true // Capture phase
   );
   ```

4. **Dynamic Content**
   ```javascript
   const div = document.createElement("div");
   div.textContent = "Hello, world!";
   document.body.appendChild(div);
   ```

---

### **Web APIs**

1. **Fetch API**

   ```javascript
   fetch("https://api.example.com")
     .then((response) => response.json())
     .then((data) => console.log(data));
   ```

2. **LocalStorage**

   ```javascript
   localStorage.setItem("user", JSON.stringify({ name: "Alice" }));
   console.log(JSON.parse(localStorage.getItem("user")));
   ```

3. **Canvas API**
   ```javascript
   const canvas = document.querySelector("canvas");
   const ctx = canvas.getContext("2d");
   ctx.fillStyle = "red";
   ctx.fillRect(10, 10, 100, 100);
   ```

---

Would you like examples for testing, styling, or build tools as well?
