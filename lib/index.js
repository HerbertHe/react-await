import React, { Fragment } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Await = /*#__PURE__*/function (_React$Component) {
  _inherits(Await, _React$Component);

  var _super = _createSuper$2(Await);

  function Await(_props) {
    var _this;

    _classCallCheck(this, Await);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "updateResolveChild", function (children, val) {
      if (children instanceof Array) {
        var _resolveChild = [];

        for (var i = 0; i < children.length; i++) {
          var _tmp$type, _tmp$type2;

          var tmp = children[i];

          if (!!((_tmp$type = tmp.type) !== null && _tmp$type !== void 0 && _tmp$type.name) && ((_tmp$type2 = tmp.type) === null || _tmp$type2 === void 0 ? void 0 : _tmp$type2.name) === "Then") {
            var props = {
              key: "Then",
              value: val
            };
            _resolveChild = [/*#__PURE__*/React.cloneElement(tmp, _objectSpread({}, props))];

            _this.setState({
              resolveChild: _resolveChild
            });

            break;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateRejectChild", function (children, err) {
      if (children instanceof Array) {
        var _rejectChild = [];

        for (var i = 0; i < children.length; i++) {
          var _tmp$type3, _tmp$type4;

          var tmp = children[i];

          if (!!((_tmp$type3 = tmp.type) !== null && _tmp$type3 !== void 0 && _tmp$type3.name) && ((_tmp$type4 = tmp.type) === null || _tmp$type4 === void 0 ? void 0 : _tmp$type4.name) === "Catch") {
            var props = {
              key: "Catch",
              error: err
            };
            _rejectChild = [/*#__PURE__*/React.cloneElement(tmp, _objectSpread({}, props))];

            _this.setState({
              rejectChild: _rejectChild
            });

            break;
          }
        }
      }
    });

    _this.state = {
      hasError: false,
      pendingChild: [],
      resolveChild: [],
      rejectChild: [],
      status: "pending"
    };
    return _this;
  }

  _createClass(Await, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {// catch error
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // handle string
      var children = this.props.children;

      if (typeof children === "string") {
        this.setState({
          pendingChild: children
        });
      }

      if (children instanceof Array) {
        var _pendingChild = []; // Error if "Then" component is not existed!

        var ifThen = children.filter(function (item) {
          var _item$type, _item$type2;

          return !!(item !== null && item !== void 0 && (_item$type = item.type) !== null && _item$type !== void 0 && _item$type.name) && (item === null || item === void 0 ? void 0 : (_item$type2 = item.type) === null || _item$type2 === void 0 ? void 0 : _item$type2.name) === "Then";
        });

        if (ifThen.length === 0) {
          throw new Error("the \"Then\" Component missing in Await Component!");
        }

        var flagThen = false;

        for (var i = 0; i < children.length; i++) {
          var _tmp$type5, _tmp$type6;

          var tmp = children[i];

          if (!flagThen && (typeof tmp === "string" || typeof tmp.type === "string")) {
            _pendingChild.push(tmp);
          }

          if (!!((_tmp$type5 = tmp.type) !== null && _tmp$type5 !== void 0 && _tmp$type5.name) && ((_tmp$type6 = tmp.type) === null || _tmp$type6 === void 0 ? void 0 : _tmp$type6.name) === "Then") {
            flagThen = true;
            this.setState({
              pendingChild: _pendingChild
            });
            break;
          }
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$props = this.props,
          promise = _this$props.promise,
          children = _this$props.children;
      if (!promise) return;

      if (!!promise) {
        promise.then(function (data) {
          _this2.updateResolveChild(children, data);

          _this2.setState({
            status: "resolve"
          });
        })["catch"](function (error) {
          _this2.updateRejectChild(children, error);

          _this2.setState({
            status: "reject"
          });
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextStates) {
      if (this.state.status === "pending" || nextStates.status !== this.state.status) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          status = _this$state.status,
          pendingChild = _this$state.pendingChild,
          resolveChild = _this$state.resolveChild,
          rejectChild = _this$state.rejectChild,
          hasError = _this$state.hasError;
      return /*#__PURE__*/React.createElement(Fragment, null, hasError && /*#__PURE__*/React.createElement("div", null, "Error occured!!"), status === "pending" && pendingChild, status === "resolve" && resolveChild, status === "reject" && rejectChild);
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return Await;
}(React.Component);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Catch = /*#__PURE__*/function (_React$Component) {
  _inherits(Catch, _React$Component);

  var _super = _createSuper$1(Catch);

  function Catch() {
    _classCallCheck(this, Catch);

    return _super.apply(this, arguments);
  }

  _createClass(Catch, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Fragment, null, this.props.children);
    }
  }]);

  return Catch;
}(React.Component);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Then = /*#__PURE__*/function (_React$Component) {
  _inherits(Then, _React$Component);

  var _super = _createSuper(Then);

  function Then() {
    _classCallCheck(this, Then);

    return _super.apply(this, arguments);
  }

  _createClass(Then, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: "Then"
      }, this.props.children);
    }
  }]);

  return Then;
}(React.Component);

export { Await, Catch, Then };
