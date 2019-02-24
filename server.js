var exp=require("express")
var app=exp()
var port=process.env.PORT || 8888
var bp=require("body-parser")
var path=require('path');
app.use(bp.json())

cat=require("./Services/catAPI")
reg=require("./Services/registerAPI")
search=require("./Services/searchAPI")
mob = require("./Services/mobileAPI")

app.use(exp.static(__dirname + '/dist/Ecommerce'));
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/Ecommerce/index.html'));
})

app.use("/category",cat)
app.use("/register",reg)
app.use("/searchapi",search)
app.use("/moblile",mob)

app.listen(port)
app.use(exp.static(__dirname))
console.log("Run..8888")