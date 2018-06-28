import _regeneratorRuntime from 'babel-runtime/regenerator';

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import humps from 'humps';

export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$camelizeKeys = _ref.camelizeKeys,
      camelizeKeys = _ref$camelizeKeys === undefined ? true : _ref$camelizeKeys;

  return function (fetchObject) {
    return Promise.resolve(fetchObject).then(function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(r) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = r.ok;
                _context.t1 = r.status;
                _context.t2 = r.statusText;
                _context.next = 5;
                return r.json().catch(function (_) {
                  return null;
                });

              case 5:
                _context.t3 = _context.sent;
                return _context.abrupt('return', {
                  ok: _context.t0,
                  status: _context.t1,
                  statusText: _context.t2,
                  jsonBody: _context.t3
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()).then(camelizeKeys ? humps.camelizeKeys : function (_) {
      return _;
    }).catch(function (error) {
      console.error('fetchObject', fetchObject);
      console.error(error);
      return { ok: false, exception: error && error.message };
    });
  };
});