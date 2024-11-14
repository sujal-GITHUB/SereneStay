"use strict";
exports.id = 6500;
exports.ids = [6500];
exports.modules = {

/***/ 6500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckoutHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(793);
/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Step__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9189);
/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5723);
/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_4__);





function CheckoutHeader() {
    const steps = [
        "Customer information",
        "Payment information",
        "Booking is confirmed!"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 8px 2px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-xl pb-2",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row px-md-5 px-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-2 col-6 mt-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg",
                                alt: "#ImgNotFound",
                                width: "70px"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-2 col-6 order-md-2 mt-3",
                        style: {
                            textAlign: "right"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/loginPage",
                            type: "button",
                            class: "btn btn-outline-primary",
                            children: "Sign In"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-8 mt-md-3 mt-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_3___default()), {
                            activeStep: 0,
                            alternativeLabel: true,
                            children: steps.map((label)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Step__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        children: label
                                    })
                                }, label))
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;