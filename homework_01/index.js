let colors = require("colors");
let users = [{ role: "admin", fullname: "John Doe", username: "qwerty", password: "123qwe" }, { role: "client", fullName: "Bob Bobski", username: "asdasd", password: "zxczxc" }];


const found = (username, password) => {
    return users.find((user) => user.username === username && user.password === password)
}

const foundedUser = found(`qwerty`, `123qwe6`);
if (foundedUser) {
    console.log("User is logged in".green)
}
else
    console.log("User not found".red.bgYellow);

