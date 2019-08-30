var exp = require("express")
router = exp.Router()
mg = require("mongojs")
con = mg("mongodb://jai:jai15507@ds149885.mlab.com:49885/ecodb")
bp = require("body-parser")
// ======================= Get Category ===================//
router.get("/getcato", function (rq, rs) {
    con.category.find(function (err, catresult) {
        // console.log('result  in category');
        rs.send(catresult)
    });
});

router.post("/subcat", function (rqq, rss) {
    con.sub_category.find(function (err, scatresult) {
        rss.send(scatresult)
    })
})

router.get("/ssub", function (r, s) {
    con.ssubcategory.find(function (err, ssresult) {
        //console.log(ssresult)
        s.send(ssresult)
    })
})

// New Product//

router.get("/products", function (req, resp) {
    con.product.find({ "upcoming": "New_Product" }).sort({ upcoming: -1 }).limit(4, function (err, proresult) {
        resp.send(proresult)
        // console.log(proresult)
    })
})

// upcomigg

router.get("/upproducts", function (req, resp) {
    con.product.find({ "upcoming": "Upcomming_Soon" }).sort({ upcoming: -1 }).limit(4, function (err, proresult) {
        resp.send(proresult)
    })
})
router.post("/uproduct", function (req, resp) {
    updt = req.body
    con.product.find(updt, function (err, proresult) {
        resp.send(proresult)
    })
})

router.post("/getPro", function (req, res) {
    var dd = req.body
    con.product.find(dd, function (err, result) {
        res.send(result)
    })
})


router.post("/productss", function (req, res) {
    var pdata = req.body
    con.product.find(function (err, result) {
        parr = []
        for (i = 0; i < result.length; i++) {
            if (result[i].sscatid == pdata.sscatid && result[i].upcoming != "Upcomming_Soon") {
                dt = result[i]
                parr.push(dt)
            }
        }
        res.send(parr)
    })
})
router.post("/getuserdata", function (req, res) {
    var ss = req.body
    con.userReg.find(ss, function (err, result) {
        res.send(result)
    })

})
router.post("/updateProfile", function (req, res) {
    var oid = req.body
    //console.log(oid)
    con.userReg.update(oid[0], { $set: { fullname: oid[1].fullname, email: oid[1].email, Contact: oid[1].Contact, userid: oid[1].userid, password: oid[1].password, "address.BillindAdsress.0.name": oid[1].fullname, "address.BillindAdsress.1.Contact": oid[1].Contact, "address.BillindAdsress.2.biladdress": oid[1].billaddress, "address.Shipping.0.name": oid[1].fullname, "address.Shipping.1.Contact": oid[1].Contact, "address.Shipping.2.shipaddress": oid[1].shipaddress } }, function (err, result) {
        if (err) {
            res.send(err)
        }
        else
            res.send("Your Profile is Updated !")
    })
})

router.post("/addcart_data", function (req, res) {
    var data = req.body
    con.purchase.find({}, { _id: 1 }).sort({ _id: -1 }).limit(1, function (err, resu) {
        if (resu == 0)
            auto = 0
        else
            auto = resu[0]._id
        auto++

        con.purchase.save({ _id: auto, userid: data._id, Total_price: data.Total_price, date: data.date, Products: data.Products, status: 0 })
        res.send("added")

    })
})

router.post("/purdet", function (req, res) {
    urid = req.body
    con.purchase.find(urid, function (err, result) {
        res.send(result)
    })
})
//  Addng atting
router.post("/ratdata", function (req, res) {
    ratt = req.body
    con.product.find({
        _id: ratt[0]._id
    }, function (err, result) {
        // console.log(result)
        var avgrat = (result[0].userrating + ratt[1].userrating) / 2
        console.log(avgrat)
        con.product.update(ratt[0], { $set: { userrating: avgrat } }, function () {
            res.send("added !")
        })

    })

})
// Remove shopping hosrty
router.post("/removehistry", function (req, res) {
    ob = req.body
    con.purchase.remove(ob, function () {
        res.send("Removed !")
    })
})
router.post('/getmorePro', (req, res) => {
    con.product.find(req.body).sort({ _id: 1 }).limit(8, (err, result) => {
        res.send(result)
    })
})

module.exports = router;