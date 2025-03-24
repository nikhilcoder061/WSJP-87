const otpGenerator = require('otp-generator')

const newOTP = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });

console.log(newOTP); 