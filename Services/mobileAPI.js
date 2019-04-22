var exp = require("express")
router = exp.Router()
mg = require("mongojs")
con = mg("mongodb://jai:jai15507@ds149885.mlab.com:49885/ecodb")
router.get("/getmob",function(req,res){
    con.product.find({sscatid:"30"}).sort({_id:1}).limit(8,function(err,mresult){
        res.send(mresult)
       // console.log(mresult.length)
    })
})

module.exports = router;