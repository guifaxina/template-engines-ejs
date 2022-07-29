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

let user = {
  name: "Guizinho123"
  phone: ""
}

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("user", { name: "Guilherme", phone: "(85)9892162520000"})
})

app.listen(4001, () => {
  console.log("Server running on port 4001");
});
