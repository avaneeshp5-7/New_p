var exp = require("express")
router = exp.Router()
mg = require("mongojs")
con = mg("mongodb://jai:jai15507@ds149885.mlab.com:49885/ecodb")
bp = require("body-parser")
router.post("/userReg", function (rq, rs) {
    usrData = rq.body
    con.userReg.find({}, { _id: 1 }).sort({ _id: -1 }).limit(1, function (e, r) {
        if (r == 0) {
            val = 0
        }
        else {
            val = r[0]._id
        }
        val++
        con.userReg.count({ userid: usrData.userid, password: usrData.password }, function (err, userRes) {
            var uobj = { user: userRes }
            if (uobj.user > 0) {
                rs.send({
                    success:false,
                    message:"Allready Registered!!"
                })
            }
            else {
                con.userReg.save({
                    _id: val, fullname: usrData.fullname, email: usrData.email,
                    userid: usrData.userid, password: usrData.password, Contact: usrData.Contact,
                    address: usrData.address, active: 1
                }, function () {
                    rs.send({
                        success:true,
                        message:"New User Registered!!"
                    })   
                })
            }
        })
    })
})
//============================== LogIn =======================//
router.post("/logData", function (req, res) {
    logdata = req.body
    con.userReg.find(logdata, function (err, result) {
        res.send(result)
    })
})

module.exports = router;