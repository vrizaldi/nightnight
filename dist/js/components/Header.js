"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _UserActions = require("../actions/UserActions");

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _reactRedux.connect)(function (store) {
	return {
		loggedIn: store.user.loggedIn,
		username: store.user.userData.username,
		imageurl: store.user.userData.imageurl
	};
}), _dec(_class = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "navbar" },
				_react2.default.createElement(
					"div",
					{ className: "row" },
					_react2.default.createElement("div", { id: "logo", className: "col-md-3" }),
					_react2.default.createElement(
						"div",
						{ className: "col-md-9" },
						this.props.loggedIn ? _react2.default.createElement(
							"p",
							{ className: "nav-item",
								id: "greeting"
							},
							"Hello, ",
							this.props.username
						) : _react2.default.createElement(
							"a",
							{ id: "twitter-button",
								className: "nav-link nav-item",
								href: "/login_twitter"
							},
							_react2.default.createElement(_Button2.default, { className: "btn btn-outline-primary", label: "Login with Twitter" })
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component)) || _class);
exports.default = Header;