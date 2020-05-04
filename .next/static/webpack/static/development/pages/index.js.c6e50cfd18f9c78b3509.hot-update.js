webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/RestaurantList/index.js":
/*!********************************************!*\
  !*** ./components/RestaurantList/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\mywork\\next-projects\\shoping\\frontend\\components\\RestaurantList\\index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
//import gql from "graphql-tag";
 //import { graphql } from "react-apollo";




var RestaurantList = function RestaurantList(_ref) {
  var restaurants = _ref.restaurants,
      search = _ref.search;

  //if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (restaurants && restaurants.length) {
    //searchQuery
    var searchQuery = restaurants.filter(function (query) {
      return query.name.toLowerCase().includes(search);
    });

    if (searchQuery.length != 0) {
      return __jsx("div", {
        className: "jsx-1272619790",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1272619790" + " " + "h-100",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }
      }, searchQuery.map(function (res) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          style: {
            width: "30%",
            margin: "0 10px"
          },
          className: "h-100",
          key: res._id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
          top: true,
          style: {
            height: 250
          },
          src: "http://localhost:3030".concat(res.image[0].url),
          alt: "".concat(res.name),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }
        }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 19
          }
        }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 19
          }
        }, res.description)), __jsx("div", {
          className: "jsx-1272619790" + " " + "card-footer",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 17
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          as: "/restaurants/".concat(res._id),
          href: "/restaurants?id=".concat(res._id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 19
          }
        }, __jsx("a", {
          className: "jsx-1272619790" + " " + "btn btn-primary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }
        }, "View"))));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1272619790",
        __self: _this
      }, "a{color:white;}a:link{-webkit-text-decoration:none;text-decoration:none;color:white;}a:hover{color:white;}.card-columns{-webkit-column-count:3;column-count:3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxteXdvcmtcXG5leHQtcHJvamVjdHNcXHNob3BpbmdcXGZyb250ZW5kXFxjb21wb25lbnRzXFxSZXN0YXVyYW50TGlzdFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURhLEFBRzZCLEFBR1MsQUFJVCxBQUdHLFlBVGpCLEFBT0EsMEJBR0EsWUFQYyxZQUNkIiwiZmlsZSI6IkY6XFxteXdvcmtcXG5leHQtcHJvamVjdHNcXHNob3BpbmdcXGZyb250ZW5kXFxjb21wb25lbnRzXFxSZXN0YXVyYW50TGlzdFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy9pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkQ29sdW1ucyxcclxuICBDYXJkSW1nLFxyXG4gIENhcmRTdWJ0aXRsZSxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBSZXN0YXVyYW50TGlzdCA9ICh7IHJlc3RhdXJhbnRzLCBzZWFyY2ggfSkgPT4ge1xyXG4gIC8vaWYgKGVycm9yKSByZXR1cm4gXCJFcnJvciBsb2FkaW5nIHJlc3RhdXJhbnRzXCI7XHJcbiAgLy9pZiByZXN0YXVyYW50cyBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgR3JhcGhRTCBxdWVyeSwgcnVuIHRoZSBmaWx0ZXIgcXVlcnlcclxuICAvL2FuZCBzZXQgZXF1YWwgdG8gdmFyaWFibGUgcmVzdGF1cmFudFNlYXJjaFxyXG5cclxuICBpZiAocmVzdGF1cmFudHMgJiYgcmVzdGF1cmFudHMubGVuZ3RoKSB7XHJcbiAgICAvL3NlYXJjaFF1ZXJ5XHJcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHJlc3RhdXJhbnRzLmZpbHRlcigocXVlcnkpID0+XHJcbiAgICAgIHF1ZXJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpXHJcbiAgICApO1xyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDBcIj5cclxuICAgICAgICAgICAge3NlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiLCBtYXJnaW46IFwiMCAxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAwXCJcclxuICAgICAgICAgICAgICAgIGtleT17cmVzLl9pZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjUwIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMCR7cmVzLmltYWdlWzBdLnVybH1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake3Jlcy5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPntyZXMubmFtZX08L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvcmVzdGF1cmFudHMvJHtyZXMuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9yZXN0YXVyYW50cz9pZD0ke3Jlcy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlZpZXc8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpsaW5rIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPGgxPk5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT47XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiA8aDE+TG9hZGluZzwvaDE+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XHJcbi8qXHJcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gIHtcclxuICAgIHJlc3RhdXJhbnRzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgaW1hZ2Uge1xyXG4gICAgICAgIHVybFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5SZXN0YXVyYW50TGlzdC5nZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7fTtcclxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcclxuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFJlc3RhdXJhbnRMaXN0KVxyXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHF1ZXJ5LCB7XHJcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcclxuICAgIGRhdGEsXHJcbiAgfSksXHJcbn0pKFJlc3RhdXJhbnRMaXN0KTtcclxuKi9cclxuIl19 */\n/*@ sourceURL=F:\\\\mywork\\\\next-projects\\\\shoping\\\\frontend\\\\components\\\\RestaurantList\\\\index.js */"));
    } else {
      return __jsx("h1", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 14
        }
      }, "No Restaurants Found");
    }
  }

  return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 10
    }
  }, "Loading");
};

/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);
/*
const query = gql`
  {
    restaurants {
      _id
      name
      description
      image {
        url
      }
    }
  }
`;
RestaurantList.getStaticProps = async ({ req }) => {};
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default graphql(query, {
  props: ({ data }) => ({
    data,
  }),
})(RestaurantList);
*/

/***/ })

})
//# sourceMappingURL=index.js.c6e50cfd18f9c78b3509.hot-update.js.map