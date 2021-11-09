const dotenv = require('dotenv')
const path = require('path');

if (process.env.NODE_ENV == 'development') {
    dotenv.config({
        path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`)
    })
} else if (process.env.NODE_ENV == 'production') {
    dotenv.config({
        path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`)
    })
} else {
    throw dotenv.config().error
}

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT: process.env.PORT

}