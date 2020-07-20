const NODE_ENV = process.env.NODE_ENV || 'development'
let ENV_VARIABLES = {}


if (NODE_ENV === 'development') {
    ENV_VARIABLES = {
        API_KEY: "",
        AUTH_DOMAIN: "",
        DATABASE_URL: "",
        PROJECT_ID: "",
        STORAGE_BUCKET: "",
        MESSAGING_SENDER_ID: "",
        APP_ID: ""
    }
}

module.exports = {
    env: ENV_VARIABLES
}