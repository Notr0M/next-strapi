webpackHotUpdate("static\\development\\pages\\test.js",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _jsxFileName = "F:\\mywork\\next-projects\\shoping\\frontend\\pages\\test.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Test() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      person = _useState[0],
      setPerson = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log("called");

    function fetchData() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(node_fetch__WEBPACK_IMPORTED_MODULE_4___default()("https://randomuser.me/api/"));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 5:
              data = _context.sent.results[0];
              setPerson(data);
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
  }, []);
  return __jsx("div", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h4", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "This a test page"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "back to home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "tar-col",
    sm: "12",
    md: {
      size: 6,
      offset: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, loading ? __jsx("p", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "loading") : __jsx("div", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "phone: ", person.phone, " ", __jsx("br", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 39
    }
  }), "email: ", person.email, " ", __jsx("br", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 39
    }
  }), "gender: ", person.gender, " ", __jsx("br", {
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 41
    }
  })))), __jsx("img", {
    src: "/images/pic.jpg",
    alt: "picture",
    className: "jsx-815826557",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "815826557",
    __self: this
  }, ".all-col.jsx-815826557{background-color:red;color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxteXdvcmtcXG5leHQtcHJvamVjdHNcXHNob3BpbmdcXGZyb250ZW5kXFxwYWdlc1xcdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ1MsQUFHa0MscUJBQ1gsVUFDWiIsImZpbGUiOiJGOlxcbXl3b3JrXFxuZXh0LXByb2plY3RzXFxzaG9waW5nXFxmcm9udGVuZFxccGFnZXNcXHRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0KCkge1xyXG4gIGNvbnN0IFtwZXJzb24sIHNldFBlcnNvbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkXCIpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gKGF3YWl0IHJlcy5qc29uKCkpLnJlc3VsdHNbMF07XHJcbiAgICAgIHNldFBlcnNvbihkYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoND5UaGlzIGEgdGVzdCBwYWdlPC9oND5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5iYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0YXItY29sXCIgc209XCIxMlwiIG1kPXt7IHNpemU6IDYsIG9mZnNldDogMyB9fT5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPHA+bG9hZGluZzwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHtwZXJzb24ucGhvbmV9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHtwZXJzb24uZW1haWx9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiB7cGVyc29uLmdlbmRlcn0gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGljLmpwZ1wiIGFsdD1cInBpY3R1cmVcIiAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmFsbC1jb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Jlc3RhdXJhbnRzYCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxufSovXHJcbiJdfQ== */\n/*@ sourceURL=F:\\\\mywork\\\\next-projects\\\\shoping\\\\frontend\\\\pages\\\\test.js */"));
}
/*export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:1337/restaurants`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}*/

/***/ })

})
//# sourceMappingURL=test.js.1416775c6bed957e02af.hot-update.js.map