const BaseValidator = require('./base');

class EmailValidator extends BaseValidator {
  isEmail(email){
  if(!email)
    return false;
  let emailRegExp = EMAIL_VALID;
  if(emailRegExp.test(email))
    return false;
    return true;
}
}
module.exports = EmailValidator;
