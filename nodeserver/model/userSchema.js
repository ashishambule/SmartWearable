const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    emailadd:{
        type :String,
        required:true
    },
    password: {
        type: String,
        required: true,
    },
    
    address: {
        type: String,
        required: true
    },
    mobNumber: {
        type: String,
        required: true
    },
    altNumber: {
        type: String,
        default: null
    },
    bloodGroup: {
        type: String,
        required: true
    },
    allergies: {
        type: Array,
        default: null
    },
    priorSurgeries: {
        type: Array,
        default: null
    },
    familyHistory: {
        type: Array,
        default: null
    },
    emergencyContacts: {
        type: Array,
        required: true
    },
    doctorContacts: {
        type: Array,
        required: true
    }
   // deleted: {
     //   type: Boolean,
       // default: false
    //}
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.addUser = (user, callback) => {
    User.create(user, callback);
}

module.exports.authenticate = (user, callback) => {
    query = {
        userName: user.userName,
        password: user.password
    }
    User.findOne(query, callback);
}

module.exports.updatePassword = (user, callback) => {
    query = {
        userName: user.userName,
        password: user.password
    }
    update = { password: user.newPassword }
    User.findOneAndUpdate(query, update, callback);
}

module.exports.getUserbyID = (id, callback) => {
    User.findById(id, callback);
}

module.exports.findbyUsername = (user, callback) => {
    query = { userName: user.userName }
    User.findOne(query, callback);
}

module.exports.deleteUser = (user, callback) => {
    query = {
        userName: user.userName,
        password: user.password
    }
    update = { deleted: true }
    User.findOneAndUpdate(query, update, callback)
}
