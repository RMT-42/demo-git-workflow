const Controller = require("./controller");

const app = require("express")();

app.post("/login", Controller.login);

app.listen(3000, () => console.log("App running on port:", 3000));
