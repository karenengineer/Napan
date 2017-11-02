const AppConstants = {
    LIMIT_DEFAULT_VALUE: 20,
    OFFSET_DEFAULT_VALUE: 1,
    DB_URL: '127.0.0.1:27017/mic',
    USERNAME_MIN_LENGTH: 4,
    USERNAME_MAX_LENGTH: 20,
    PASSWORD_MIN_LENGTH: 6,
    PASSWORD_MAX_LENGTH: 80,
    EMAIL_MIN_LENGTH: 5,
    EMAIL_MAX_LENGTH: 50,
    AGE_MIN_RANGE: 14,
    AGE_MAX_RANGE:101,
    NAME_MIN_LENGTH: 4,
    NAME_MAX_LENGTH: 50,
    NUMBER_REG_EXP: /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/,
    SYMB_REG: /([^a-zA-Z\d])g/,
    USER_SYMB_VALID: /([^a-zA-Z\d][.][-_])g/,
    EMAIL_VALID: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/,

}

module.exports = AppConstants;
