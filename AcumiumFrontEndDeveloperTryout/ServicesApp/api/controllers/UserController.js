/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function (req, res) {
        var loginModel = req.body;
        var result = {"authenticationStatus":1};
        if(loginModel.email == 'test@test.com' && loginModel.password == 'test') {
            result.authenticationStatus = 0;
        }
        return res.send(result);
    }
};

