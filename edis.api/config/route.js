module.exports = function (app) {
    var userRoutes = require('./../app/user-management/user.route');
    var accountRoutes = require('./../app/account/account.route');

    app.use('/users', userRoutes)
    app.use('/account', accountRoutes)
}