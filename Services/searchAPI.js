var exp = require("express")
var nodemailer = require('nodemailer');
router = exp.Router()
mg = require("mongojs")
con = mg("mongodb://localhost:27017/nalax")
bp = require("body-parser")
// ======================= Search Product ===================//
router.post("/searchproduct", function (req, res) {
    data = req.body
    data = data.pname
    // console.log(data)
    con.product.find({ "pname": { $regex: data } }, function (err, result) {
        res.send(result)
    })
})

router.post("/getOTP", function (req, res) {
    var cond = req.body.email;
    console.log('Email ', cond);
        con.userReg.find({ email: cond }, function (err,result) {
           if(result.length==1){
            otp = Math.random();
            otp = 10000 * otp;
            otp = parseInt(otp);
            newotp={otp:otp};
            con.userReg.update({ email: cond },{ $set: newotp}, function (err,result){
                if(err){
                    res.send({
                        success: false,
                        status: 401,
                    })
                }
                else{
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                          user: 'avaneeshp92@gmail.com',
                          pass: 'Avaneeshp507'
                        }
                      });
                    var mailOptions = {
                        from: 'avaneeshp92@gmail.com',
                        to:cond,
                        subject: 'OTP For Reset Password',
                        text:'Your OTP : ' +otp
                      };
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          res.send({
                        success: true,
                        status: 201,
                        otp:otp
                    })
                        }
                      });
                    
                }
            });
           } 
           else{
               res.send({
                success: false,
                status: 401,
            })
           }
        })
   });
router.post("/resetPassword" , function(req,res){
    console.log('in reset')
    data=req.body;
    // console.log(data);
    cond=data[0].email;
    cond1=data[0].otp;
    console.log(cond);
    con.userReg.find({ email:cond,otp:cond1}, function (err,result){
        console.log(result.length);
        if(result.length==1){
            con.userReg.update(data[0],{$set:{password:data[1].password,otp:'0'}},function(err,result){
                if(err){
                    res.send({
                        success: false,
                        status: 401,
                    })  
                }
                else{
                    res.send({
                        success: true,
                        status: 201,
                    }) 
                }
            })
        }
        else{
            res.send({
                success: false,
                status: 401,
            })  
        } 
    })
})

module.exports = router;