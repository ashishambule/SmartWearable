const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema({
    macID: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

const Device = module.exports = mongoose.model("Device", DeviceSchema);

module.exports.addDevice = (device, callback) => {
    Device.create(device, callback);
}

module.exports.getDevicebymacID = (macID, callback) => {
    query = { macID: macID }
    Device.findOne(query, callback);
}

module.exports.getDevicebyID = (id, callback) => {
    Device.findById(id, callback);
}

module.exports.deleteDevice = (device, callback) => {
    query = { macID: device.macID }
    update = { deleted: true }
    Device.findOneAndUpdate(query, update, callback)
}