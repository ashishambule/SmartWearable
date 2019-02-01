const mqtt = require('mqtt');
const Influx = require('influxdb-nodejs');
const client = new Influx('http://127.0.0.1:8086/project');

const twilio = require('twilio');
const accountSid = 'AC1b180faf825d4f97a50530ba097f4b7e';
const authToken = '5074ef4b2ca02c9eee690afdaf3c368d';
const twilioClient = require('twilio')(accountSid, authToken);

const User = require('./model/userSchema');
const Device = require('./model/deviceSchema');

var sendRes = (success, msg) => {
    res.json({
        success: success,
        msg: msg
    })
}

var sendError = (err) => {
    sendRes(false, "Error " + err);
}

var userName = '';

const mqttClient =
    mqtt.connect({
        host: '127.0.0.1',
        port: 1883
    });

const client =
    mqtt.connect({
        host: 'm16.cloudmqtt.com',
        port: 19418,
        username: 'ddbfoeoe',
        password: 'BQRtXmNjwIeK'
    });

var sub = (topic) => {
    try {
        mqttClient.subscribe(topic, {
            qos: 2
        }, (error, msg) => {
            if (error) console.log('Error');
            else console.log('Subscribed');
        })
    } catch (error) {
        mqttClient.error(error);
    }
}

mqttClient.on('message', (topic, message) => {
    msg = JSON.parse(message);
    Device.getDevicebymacID(msg.macID, (err, resDevice) => {
        if (err) sendError(err)
        else {
            if (!resDevice) sendRes(true, "Device does not exists")
            else {
                User.findbyUsername(resDevice.macID, (err, resUser) => {
                    if (err) sendError(err)
                    else {
                        if (!resUser) sendRes(true, "User does not exists")
                        else {
                            if (topic == 'test/switch') {
                                twilioClient.messages
                                    .create({
                                        body: `Emergency Alert from ${resUser.name}`,
                                        from: +'12108793438',
                                        to: '+918668456614'
                                    })
                                    .then(message => console.log(message.sid))
                                    .done();
                            }
                            else {
                                if (msg.heartRate < 60 || msg.heartRate > 150) {
                                    twilioClient.messages
                                        .create({
                                            body: `Emergency Alert from ${resUser.name}`,
                                            from: +'12108793438',
                                            to: '+918668456614'
                                        })
                                        .then(message => console.log(message.sid))
                                        .done();
                                }
                                if (msg.heartRate < 50 || msg.heartRate > 180) {
                                    twilioClient.messages
                                        .create({
                                            body: `Emergency Alert from ${resUser.name}`,
                                            from: +'12108793438',
                                            to: '+918668456614'
                                        })
                                        .then(message => console.log(message.sid))
                                        .done();
                                }
                                client.write(`${resDevice.userName}`)
                                    .field({
                                        temp: resDevice.temp,
                                        heartRate: resDevice.heartRate,
                                        o2level: resDevice.o2level
                                    })
                                    .then(() => console.info('write point success'))
                                    .catch(console.error);
                            }
                        }
                    }
                })
            }
        }
    })
})

mqttClient.on('connect', () => {
    console.log('Connected');
    sub('health/switch');
    sub('health');
});

mqttClient.on('error', (error) => {
    console.log('Error' + error);
})