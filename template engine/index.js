const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path")

// let user = {
//   id: 0,
//   name: "Igor Faxina",
//   phone: "(123)232-8237",
// };

// function render(data, obj){
//     for (let index in obj){
//         data = data.replace(`{{{${index}}}}`, obj[index])
//     }
//     return data
// }

// app.get("/", (req, res) => {
    
//     fs.readFile("./templates/user.html", "utf8", (err, data)=>{
//         if(!err){        
            
//             res.send(render(data, user));
//         }
//     });

// });

let users = [
  {
    id: 0,
    name: "Guizinho",
    phone: "(85)912839122",
  },
  {
    id: 1,
    name: "Denis",
    phone: "(21)1237366666",
  },
  {
    id: 2,
    name: "Robertinho",
    phone: "(50)2131245221",
  }
]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("user", {users:users})
})

app.listen(4001, () => {
  console.log("Server running on port 4001");
});
