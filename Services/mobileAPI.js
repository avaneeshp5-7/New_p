var exp = require("express")
router = exp.Router()
mg = require("mongojs")
con = mg("mongodb://localhost:27017/nalax")
router.get("/getmob",function(req,res){
    con.product.find({sscatid:"30"}).sort({_id:1}).limit(6,function(err,mresult){
        res.send(mresult)
       // console.log(mresult.length)
    })
})

module.exports = router;