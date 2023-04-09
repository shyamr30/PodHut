const crypto = require('crypto');
const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const hashService = require('./hash-service');
const twilio = require('twilio')(smsSid,smsAuthToken, {
    lazyLoading: true
});


class OtpService{

    async generateOtp(){
        const otp = crypto.randomInt(1001, 9998);
        return otp;
    }

    async sendBySms(phone, otp){
        return await twilio.messages.create({

            to: phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `Your PodHut OTP is ${otp}`,
        });
    }

    verifyOtp(hashedOtp, data){

        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }

}

module.exports = new OtpService();