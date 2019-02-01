const express = require('express');
const router = express.Router();

const Device = require('../model/deviceSchema');

var sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    })
}

var sendError = (res) => {
    sendRes(res, false, "Error");
}

router.post('/getDevicebyID', (req, res) => {
    Device.getDevicebyID(req.body.macID, (err, device) => {
        if (err) sendError(res);
        else {
            if (req.body.macID != Device.findOne(macID))
                sendRes(res, true, device);
            else sendRes(res, false, "Device Already Exists");
        }
    })
});

router.post('/addDevice', (req, res) => {
    Device.addDevice(req.body, (err, device) => {
        if (err) sendError(res);
        else sendRes(res, true, "Device Added");
    })
});

router.post('/getDevicebymacID', (req, res) => {
    Device.getDevicebymacID(req.body.userID, (err, device) => {
        if (err) sendError(res, false, "Error");
        else sendRes(res, true, device);
    })
});

router.delete('/deleteDevice', (req, res) => {
    Device.deleteDevice(req.body, (err, device) => {
        if (err) sendError(res)
        else {
            if(device.deleted == true) sendRes(res, false, "Device does not exists")
            else sendRes(res, true, "Device Deleted")
        }
    })
})

module.exports = router;