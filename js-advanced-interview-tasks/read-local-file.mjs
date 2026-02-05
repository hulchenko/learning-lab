import fs from "fs";

const map = (data) => {
  // just some mapping function
  const users = JSON.parse(data);
  const mapped = users.map((user) => ({ ...user, mapped: true }));
  return mapped;
};

// sync approach
console.log("trigger before readFileSync");
const data = fs.readFileSync("./users.json", "utf-8");
const mapped = map(data);
console.log("trigger after readFileSync");

// async approach
console.log("trigger before readFileSync");
fs.readFile("./users.json", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file: ", err);
  }

  const mapped = map(data);
  console.log(mapped);
});
console.log("trigger before readFileSync");
