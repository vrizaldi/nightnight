"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = handleTwitterLogin;

var _TwitterTokenManager = require("./TwitterTokenManager");

var _TwitterTokenManager2 = _interopRequireDefault(_TwitterTokenManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleTwitterLogin(req, res) {
	_TwitterTokenManager2.default.getRequestToken(req, res);
}