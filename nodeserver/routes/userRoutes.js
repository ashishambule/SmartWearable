const express = require('express');
const router = express.Router();
const Influx = require('influxdb-nodejs');
const client = new Influx('http://127.0.0.1:8086/project');

const User = require('../model/userSchema');

var sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    })
}
var sendError = (res) => {
    console.log("shitt error occurs");
    sendRes(res, false, "Error");
}

router.post('/getUserbyID', (req, res) => {
    User.getUserbyID(req.body.id, (err, user) => {
        if (err) sendError(res, false, "Error");
        else sendRes(res, true, user);
    })
});

router.post('/addUser', (req, res) => {
    console.log(req.body)
    User.addUser(req.body, (err, user) => {
        if (err) sendError(res)
        else {
            if (!req.body.name || !req.body.surName || 
                !req.body.userName || !req.body.emailadd || 
                !req.body.password || !req.body.confirmPassword || 
                !req.body.address || !req.body.mobNumber || 
                !req.body.bloodGroup || !req.body.emergencyContacts ||
                 !req.body.doctorContacts || !req.body.dob)
                  {
                if (req.body.userName != User.findOne(User.userName)) {
                    sendRes(res, true, "User Added");
                    const fieldSchema = {
                        temp: 'i',
                        heartRate: 'i',
                        o2level: 'i',
                    };
                    client.schema(req.body.userName, fieldSchema, {});
                } else sendRes(res, false, "Username not available")
            } else sendRes(res, false, "Some fields are empty")
        }
    })
});

router.post('/authenticate', (req, res) => {
    User.authenticate(req.body, (err, user) => {
        if (err || user == null)
            sendError(res, false, "Authentication failed, invalid Username or Password");
        else {
            let sendUser = {
                name: user.name,
                userName: user.userName,
                _id: user._id
            };
            sendRes(res, true, sendUser)
        }
    })
});

router.put('/updatePassword', (req, res) => {
    User.updatePassword(req.body, (err, user) => {
        if (err) sendError(res, false, "Error");
        else {
            if (user) sendRes(res, true, "Password Updated");
            else sendRes(res, false, "Error Invalid Entry");
        }
    })
});

router.delete('/deleteUser', (req, res) => {
    User.deleteUser(req.body, (err, user) => {
        if (err) sendError(res)
        else {
            if (user.deleted == true) sendRes(res, false, "User does not exists")
            else sendRes(res, true, "User Deleted")
        }
    })
})

module.exports = router;