import express from "express";          // in Hyper run npm init
import bodyParser from "body-parser";   // npm install express
import { dirname } from "path";           //npm install body-parser
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var UserIsAuthorized = false;

app.use(bodyParser.urlencoded({ extended:true }));
function passwordCheck(req, res, next) {       // create a function middleware
    const password = req.body["password"];
    if(password === "ILoveProgramming")   {     // if the password the user entered is ILove...
       UserIsAuthorized = true;
        }                                      // we mark this user authorized
       next();
    }

app.use(passwordCheck); //created our own middleware
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
    if(UserIsAuthorized = true) {
        res.sendFile(__dirname + "/public/secret.html");
    }else {
        res.sendFile(__dirname + "/public/index.html");
    }
});
app.listen(port, () => { 
console.log(`listening on port ${port}.`)
});



















//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming