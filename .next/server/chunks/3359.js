exports.id = 3359;
exports.ids = [3359];
exports.modules = {

/***/ 6222:
/***/ ((module) => {

// Exports
module.exports = {
	"headerMenu": "HeaderNavbar_headerMenu__UGoH7",
	"newOption": "HeaderNavbar_newOption__bw5x6",
	"ListYourPlaceBtn": "HeaderNavbar_ListYourPlaceBtn__VXTAm",
	"ActivitiesOptions": "HeaderNavbar_ActivitiesOptions__8l5pI",
	"FlagImg": "HeaderNavbar_FlagImg__qQNuQ",
	"RsText": "HeaderNavbar_RsText__YcPOc",
	"SignInBtn": "HeaderNavbar_SignInBtn__mdeLe",
	"CreateAccountBtn": "HeaderNavbar_CreateAccountBtn__EwWII",
	"AirportsTransferOptions": "HeaderNavbar_AirportsTransferOptions__p5tNh",
	"CouponsAndDealsOptions": "HeaderNavbar_CouponsAndDealsOptions__5p_Ng",
	"FlightsOptions": "HeaderNavbar_FlightsOptions__tJhh6",
	"OtherOptions": "HeaderNavbar_OtherOptions__nk2p_",
	"ShoppingCartBtnOption": "HeaderNavbar_ShoppingCartBtnOption__WEiLs",
	"hideAfterSMScrn": "HeaderNavbar_hideAfterSMScrn__2miae"
};


/***/ }),

/***/ 3359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6865);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6222);
/* harmony import */ var _styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7__);








function HeaderNavbar() {
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default()), {
                expand: "sm",
                className: "px-md-5 px-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Brand), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg",
                                alt: "#ImgNotFound",
                                width: "70px"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Toggle), {
                        onClick: ()=>handleShow()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Collapse), {
                        id: "basic-navbar-nav",
                        className: (_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().hideAfterSMScrn),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "me-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: `pt-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().FlightAndHotelOptions)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default().Link), {
                                        href: "/FlightAndHotel",
                                        className: `ms-4 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerMenu)}`,
                                        children: "Flight + Hotel"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: `pt-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().HotelsAndHomesOptions)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default().Link), {
                                        href: "/",
                                        className: `mx-3 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerMenu)}`,
                                        children: "Hotels & Homes"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: `pt-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().FlightsOptions)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default().Link), {
                                        href: "/Flight",
                                        className: `mx-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerMenu)}`,
                                        children: "Flights"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: `pt-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().CouponsAndDealsOptions)}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default().Link), {
                                        href: "#CouponsAndDeals",
                                        className: `mx-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerMenu)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `p-0 px-1 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().newOption)}`,
                                                children: "New!"
                                            }),
                                            " Coupons & Deals"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: `pt-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().AirportsTransferOptions)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default().Link), {
                                        href: "#AirportsTransfer",
                                        className: `mx-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerMenu)}`,
                                        children: "Airport transfer"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: `pt-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().ActivitiesOptions)}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default().Link), {
                                        href: "#Activities",
                                        className: `mx-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerMenu)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `p-0 px-1 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().newOption)}`,
                                                children: "New!"
                                            }),
                                            " Activities"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: `pt-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().OtherOptions)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default().Link), {
                                        href: "#OtherOptions",
                                        className: `mx-2 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerMenu)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            class: "fa fa-ellipsis-h"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default().Collapse), {
                        className: `justify-content-end ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().hideAfterSMScrn)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                class: `btn btn-outline-danger mx-3 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().ListYourPlaceBtn)}`,
                                children: "List You Place"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: `mx-3 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().FlagImg)}`,
                                src: "https://cdn6.agoda.net/images/mobile/flag-us@2x.png",
                                alt: "#ImgNotFound",
                                width: "30px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: `mx-3 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().RsText)}`,
                                children: "Rs."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/loginPage",
                                type: "button",
                                class: `btn btn-outline-primary mx-3 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().SignInBtn)}`,
                                children: "Sign In"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/signUpPage",
                                type: "button",
                                class: `btn btn-outline-primary mx-3 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().CreateAccountBtn)}`,
                                children: "Create Account"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                class: `fa fa-shopping-cart mx-3 ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().ShoppingCartBtnOption)}`,
                                style: {
                                    fontSize: "20px"
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                                drop: "start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Toggle), {
                                        id: "dropdown-basic",
                                        style: {
                                            background: "transparent",
                                            color: "black",
                                            border: "none"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            class: `fa fa-bars ${(_styles_HeaderNavbar_module_css__WEBPACK_IMPORTED_MODULE_7___default().MenuBarsOption)}`,
                                            style: {
                                                fontSize: "20px"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Menu), {
                                        className: "mt-5",
                                        style: {
                                            marginRight: "-50px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/Profile",
                                                    children: "My Profile"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/Booking",
                                                    children: "My Bookings"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_6___default()), {
                show: show,
                onHide: handleClose,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_6___default().Header), {
                        closeButton: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_6___default().Title), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_6___default().Body), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            style: {
                                listStyleType: "none"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/FlightAndHotel",
                                        style: {
                                            textDecoration: "none",
                                            fontSize: "20px"
                                        },
                                        children: "Flight + Hotel"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        style: {
                                            textDecoration: "none",
                                            fontSize: "20px"
                                        },
                                        children: "Hotels & Homes"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/Flight",
                                        style: {
                                            textDecoration: "none",
                                            fontSize: "20px"
                                        },
                                        children: "Flights"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#",
                                        style: {
                                            textDecoration: "none",
                                            fontSize: "20px"
                                        },
                                        children: "Coupons & Deals"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#",
                                        style: {
                                            textDecoration: "none",
                                            fontSize: "20px"
                                        },
                                        children: "Airport transfer"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#",
                                        style: {
                                            textDecoration: "none",
                                            fontSize: "20px"
                                        },
                                        children: "Activities"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#",
                                        style: {
                                            textDecoration: "none",
                                            fontSize: "20px"
                                        },
                                        children: "Airport transfer"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Toggle), {
                                                variant: "secondary",
                                                id: "dropdown-basic",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Menu), {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                        href: "#/action-1",
                                                        children: "Action"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                        href: "#/action-2",
                                                        children: "Another action"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                                                        href: "#/action-3",
                                                        children: "Something else"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        class: `btn btn-outline-danger`,
                                        children: "List You Place"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        class: `btn btn-outline-primary`,
                                        children: "Create Account"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavbar);


/***/ })

};
;