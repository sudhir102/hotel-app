(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/jfv":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel-home/hotel-home.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _jfv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"home-container\" *ngIf=\"hotel; else errorBlock\">\n\n  <app-left-panel [hotel]=\"hotel\"></app-left-panel>\n\n  <div class=\"right-panel\">\n\n    <nav class=\"tab-menu card\">\n      <button\n        *ngFor=\"let tab of tabs\"\n        class=\"tab-btn\"\n        [class.active]=\"activeTab === tab\"\n        (click)=\"selectTab(tab)\">\n        {{ tab }}\n      </button>\n    </nav>\n\n    <div class=\"tab-content\">\n\n      <!-- HOME TAB -->\n      <div *ngIf=\"activeTab === 'Home'\">\n\n        <div class=\"widgets-grid\">\n          <div class=\"widget card\">\n            <div class=\"widget-label\">Last Used</div>\n            <div class=\"widget-value\">{{ hotel.widgets.lastUsed }}</div>\n          </div>\n          <div class=\"widget card\">\n            <div class=\"widget-label\">Upcoming Confirmed</div>\n            <div class=\"widget-value\">{{ hotel.widgets.upcomingConfirmed }}</div>\n          </div>\n          <div class=\"widget card\">\n            <div class=\"widget-label\">Upcoming Request</div>\n            <div class=\"widget-value\">{{ hotel.widgets.upcomingRequest }}</div>\n          </div>\n          <div class=\"widget card\">\n            <div class=\"widget-label\">Next Booking Date</div>\n            <div class=\"widget-value\">{{ hotel.widgets.nextBookingDate }}</div>\n          </div>\n          <div class=\"widget card\">\n            <div class=\"widget-label\">Open (&amp; Total) Complaints</div>\n            <div class=\"widget-value\">{{ hotel.widgets.openComplaints }} ({{ hotel.widgets.totalComplaints }})</div>\n          </div>\n          <div class=\"widget card\">\n            <div class=\"widget-label\">To Be Paid</div>\n            <div class=\"widget-value\">{{ hotel.widgets.toBePaid }}</div>\n          </div>\n        </div>\n\n        <div class=\"panels-row\">\n          <div class=\"card chart-card\">\n            <h4>Bookings Overview</h4>\n            <app-booking-chart [data]=\"hotel.bookingsOverview\"></app-booking-chart>\n          </div>\n          <div class=\"card map-card\">\n            <h4>Map</h4>\n            <app-map-view\n              [latitude]=\"hotel.location.latitude\"\n              [longitude]=\"hotel.location.longitude\"\n              [label]=\"hotel.name\">\n            </app-map-view>\n          </div>\n        </div>\n      </div>\n\n      <!-- ABOUT TAB -->\n      <div *ngIf=\"activeTab === 'About'\" class=\"card\">\n        <h4>About</h4>\n        <p>{{ hotel.about }}</p>\n      </div>\n\n      <!-- CLASSIFICATION TAB -->\n      <div *ngIf=\"activeTab === 'Classification'\" class=\"card\">\n        <h4>Classification</h4>\n        <p>{{ hotel.classification }}</p>\n      </div>\n\n      <!-- PRODUCTS TAB -->\n      <div *ngIf=\"activeTab === 'Products'\" class=\"card\">\n        <h4>Products</h4>\n        <ul>\n          <li *ngFor=\"let p of hotel.products\">{{ p }}</li>\n        </ul>\n        <p *ngIf=\"hotel.products.length === 0\" class=\"muted\">No products configured.</p>\n      </div>\n\n      <!-- TERMS TAB -->\n      <div *ngIf=\"activeTab === 'Terms'\" class=\"card\">\n        <h4>Terms</h4>\n        <p>{{ hotel.terms }}</p>\n      </div>\n\n      <!-- FINANCE TAB -->\n      <div *ngIf=\"activeTab === 'Finance'\" class=\"card\">\n        <h4>Finance</h4>\n        <div class=\"field-row\"><label>Credit Limit</label><span>{{ hotel.finance.creditLimit }}</span></div>\n        <div class=\"field-row\"><label>Payment Terms</label><span>{{ hotel.finance.paymentTerms }}</span></div>\n        <div class=\"field-row\"><label>Tax Id</label><span>{{ hotel.finance.taxId }}</span></div>\n      </div>\n\n      <!-- NOTES TAB -->\n      <div *ngIf=\"activeTab === 'Notes'\" class=\"card\">\n        <h4>Notes</h4>\n        <div class=\"note\" *ngFor=\"let n of hotel.notes\">\n          <div class=\"note-meta\">{{ n.author }} &middot; {{ n.date }}</div>\n          <div class=\"note-text\">{{ n.text }}</div>\n        </div>\n        <p *ngIf=\"hotel.notes.length === 0\" class=\"muted\">No notes yet.</p>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<ng-template #errorBlock>\n  <div class=\"error-banner\">\n    Unable to load this hotel's details. <a routerLink=\"/search\">Return to search</a>.\n  </div>\n</ng-template>\n";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\My Project\Angular\hotel-app\hotel-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4Xgg":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/left-panel/left-panel.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xgg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"left-panel card\" *ngIf=\"hotel\">\n\n  <div class=\"image-section\">\n    <img [src]=\"hotel.imageUrl\" alt=\"{{ hotel.name }}\" class=\"hotel-image\" />\n    <h3 class=\"hotel-title\">{{ hotel.name }}</h3>\n    <div class=\"provider\">{{ hotel.provider }}</div>\n    <span class=\"status-badge\" [class.active]=\"hotel.active\" [class.inactive]=\"!hotel.active\">\n      {{ hotel.active ? 'Active' : 'Inactive' }}\n    </span>\n  </div>\n\n  <div class=\"section\">\n    <div class=\"section-header\">\n      <span>Address</span>\n      <button class=\"edit-btn\" (click)=\"toggleAddressEdit()\">\n        {{ editingAddress ? 'Close' : 'Edit' }}\n      </button>\n    </div>\n\n    <ng-container *ngIf=\"!editingAddress\">\n      <div class=\"field-row\"><label>Street</label><span>{{ hotel.address.street }}</span></div>\n      <div class=\"field-row\"><label>State</label><span>{{ hotel.address.state }}</span></div>\n      <div class=\"field-row\"><label>Country</label><span>{{ hotel.address.country }}</span></div>\n      <div class=\"field-row\"><label>Pincode</label><span>{{ hotel.address.pincode }}</span></div>\n      <div class=\"field-row\"><label>Email</label><span>{{ hotel.email }}</span></div>\n      <div class=\"field-row\"><label>Phone</label><span>{{ hotel.phone }}</span></div>\n    </ng-container>\n\n    <ng-container *ngIf=\"editingAddress\">\n      <div class=\"field-row edit\"><label>Street</label><input [(ngModel)]=\"hotel.address.street\" /></div>\n      <div class=\"field-row edit\"><label>State</label><input [(ngModel)]=\"hotel.address.state\" /></div>\n      <div class=\"field-row edit\"><label>Country</label><input [(ngModel)]=\"hotel.address.country\" /></div>\n      <div class=\"field-row edit\"><label>Pincode</label><input [(ngModel)]=\"hotel.address.pincode\" /></div>\n      <div class=\"field-row edit\"><label>Email</label><input [(ngModel)]=\"hotel.email\" /></div>\n      <div class=\"field-row edit\"><label>Phone</label><input [(ngModel)]=\"hotel.phone\" /></div>\n      <button class=\"btn-primary save-btn\" (click)=\"saveAddress()\">Save</button>\n    </ng-container>\n  </div>\n\n  <div class=\"section\">\n    <div class=\"section-header\">\n      <span>Basic Info</span>\n      <button class=\"edit-btn\" (click)=\"toggleBasicInfoEdit()\">\n        {{ editingBasicInfo ? 'Close' : 'Edit' }}\n      </button>\n    </div>\n\n    <ng-container *ngIf=\"!editingBasicInfo\">\n      <div class=\"field-row\"><label>Short Name</label><span>{{ hotel.shortName }}</span></div>\n      <div class=\"field-row\"><label>Id</label><span>{{ hotel.id }}</span></div>\n      <div class=\"field-row\"><label>Hotel type</label><span>{{ hotel.hotelType }}</span></div>\n      <div class=\"field-row\"><label>Default Currency</label><span>{{ hotel.defaultCurrency }}</span></div>\n      <div class=\"field-row\"><label>Location</label><span>{{ hotel.location.city }}</span></div>\n    </ng-container>\n\n    <ng-container *ngIf=\"editingBasicInfo\">\n      <div class=\"field-row edit\"><label>Short Name</label><input [(ngModel)]=\"hotel.shortName\" /></div>\n      <div class=\"field-row\"><label>Id</label><span>{{ hotel.id }}</span></div>\n      <div class=\"field-row edit\"><label>Hotel type</label><input [(ngModel)]=\"hotel.hotelType\" /></div>\n      <div class=\"field-row edit\"><label>Default Currency</label><input [(ngModel)]=\"hotel.defaultCurrency\" /></div>\n      <div class=\"field-row edit\"><label>Location</label><input [(ngModel)]=\"hotel.location.city\" /></div>\n      <button class=\"btn-primary save-btn\" (click)=\"saveBasicInfo()\">Save</button>\n    </ng-container>\n  </div>\n\n</div>\n";
      /***/
    },

    /***/
    "75At":
    /*!*******************************************************************!*\
      !*** ./src/app/components/hotel-search/hotel-search.component.ts ***!
      \*******************************************************************/

    /*! exports provided: HotelSearchComponent */

    /***/
    function At(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotelSearchComponent", function () {
        return HotelSearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_hotel_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./hotel-search.component.html */
      "RWN1");
      /* harmony import */


      var _hotel_search_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hotel-search.component.css */
      "LYY0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_hotel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/hotel.service */
      "OTkW");

      var HotelSearchComponent = /*#__PURE__*/function () {
        function HotelSearchComponent(hotelService) {
          _classCallCheck(this, HotelSearchComponent);

          this.hotelService = hotelService;
          this.searchTerm = '';
          this.hotels = [];
          this.total = 0;
          this.page = 1;
          this.pageSize = 20;
          this.loading = false;
          this.errorMessage = '';
        }

        return _createClass(HotelSearchComponent, [{
          key: "totalPages",
          get: function get() {
            return Math.max(1, Math.ceil(this.total / this.pageSize));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadHotels();
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            this.page = 1;
            this.loadHotels();
          }
        }, {
          key: "onClear",
          value: function onClear() {
            this.searchTerm = '';
            this.page = 1;
            this.loadHotels();
          }
        }, {
          key: "goToPage",
          value: function goToPage(p) {
            if (p < 1 || p > this.totalPages) {
              return;
            }

            this.page = p;
            this.loadHotels();
          }
        }, {
          key: "loadHotels",
          value: function loadHotels() {
            var _this = this;

            this.loading = true;
            this.errorMessage = '';
            this.hotelService.searchHotels(this.searchTerm, this.page, this.pageSize).subscribe({
              next: function next(res) {
                _this.hotels = res.results;
                _this.total = res.total;
                _this.loading = false;
              },
              error: function error(err) {
                console.error(err);
                _this.errorMessage = 'Unable to load hotels right now. Please try again.';
                _this.loading = false;
              }
            });
          }
        }]);
      }();

      HotelSearchComponent.ctorParameters = function () {
        return [{
          type: _services_hotel_service__WEBPACK_IMPORTED_MODULE_4__["HotelService"]
        }];
      };

      HotelSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hotel-search',
        template: _raw_loader_hotel_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hotel_search_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HotelSearchComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".app-header {\n  background: #1a2a44;\n  color: #fff;\n  padding: 14px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.app-title {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.header-link {\n  color: #cfe0ff;\n  font-size: 14px;\n}\n\n.header-link:hover { color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0EscUJBQXFCLFdBQVcsRUFBRSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzFhMmE0NDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE0cHggMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZGVyLWxpbmsge1xuICBjb2xvcjogI2NmZTBmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlYWRlci1saW5rOmhvdmVyIHsgY29sb3I6ICNmZmY7IH1cbiJdfQ== */";
      /***/
    },

    /***/
    "Ar/A":
    /*!*********************************************************************!*\
      !*** ./src/app/components/booking-chart/booking-chart.component.ts ***!
      \*********************************************************************/

    /*! exports provided: BookingChartComponent */

    /***/
    function Ar_A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingChartComponent", function () {
        return BookingChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_booking_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./booking-chart.component.html */
      "UrQH");
      /* harmony import */


      var _booking_chart_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./booking-chart.component.css */
      "B4XB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BookingChartComponent = /*#__PURE__*/function () {
        function BookingChartComponent() {
          _classCallCheck(this, BookingChartComponent);

          this.data = [];
          this.maxCount = 1;
        }

        return _createClass(BookingChartComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.maxCount = this.data.length ? Math.max.apply(Math, _toConsumableArray(this.data.map(function (d) {
              return d.count;
            }))) : 1;
          }
        }, {
          key: "barHeight",
          value: function barHeight(count) {
            // Percentage height relative to the tallest bar, min 4% for visibility
            return Math.max(4, Math.round(count / this.maxCount * 100));
          }
        }]);
      }();

      BookingChartComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      BookingChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-chart',
        template: _raw_loader_booking_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_chart_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BookingChartComponent);
      /***/
    },

    /***/
    "B4XB":
    /*!**********************************************************************!*\
      !*** ./src/app/components/booking-chart/booking-chart.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function B4XB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart-wrapper {\n  width: 100%;\n  height: 200px;\n}\n\n.bars {\n  display: flex;\n  align-items: flex-end;\n  height: 100%;\n  gap: 6px;\n}\n\n.bar-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  justify-content: flex-end;\n}\n\n.bar-track {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  align-items: flex-end;\n}\n\n.bar {\n  width: 100%;\n  background: #1a73e8;\n  border-radius: 3px 3px 0 0;\n  transition: height 0.3s ease;\n}\n\n.bar-value {\n  font-size: 10px;\n  color: #666;\n  margin-top: 4px;\n}\n\n.bar-label {\n  font-size: 11px;\n  color: #444;\n  margin-top: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJib29raW5nLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uYmFycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IDZweDtcbn1cblxuLmJhci1jb2wge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5iYXItdHJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxYTczZTg7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xufVxuXG4uYmFyLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYmFyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "Fz9v":
    /*!***********************************************************!*\
      !*** ./src/app/components/map-view/map-view.component.ts ***!
      \***********************************************************/

    /*! exports provided: MapViewComponent */

    /***/
    function Fz9v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapViewComponent", function () {
        return MapViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map-view.component.html */
      "sGuc");
      /* harmony import */


      var _map_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map-view.component.css */
      "TMsl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var MapViewComponent = /*#__PURE__*/function () {
        function MapViewComponent(sanitizer) {
          _classCallCheck(this, MapViewComponent);

          this.sanitizer = sanitizer;
          this.label = '';
          this.mapUrl = null;
        }

        return _createClass(MapViewComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.latitude != null && this.longitude != null) {
              var delta = 0.01;
              var bbox = "".concat(this.longitude - delta, "%2C").concat(this.latitude - delta, "%2C").concat(this.longitude + delta, "%2C").concat(this.latitude + delta);
              var rawUrl = "https://www.openstreetmap.org/export/embed.html?bbox=".concat(bbox, "&layer=mapnik&marker=").concat(this.latitude, "%2C").concat(this.longitude);
              this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
            }
          }
        }]);
      }();

      MapViewComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      };

      MapViewComponent.propDecorators = {
        latitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        longitude: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      MapViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map-view',
        template: _raw_loader_map_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MapViewComponent);
      /***/
    },

    /***/
    "Gxa4":
    /*!****************************************************************!*\
      !*** ./src/app/components/hotel-home/hotel-home.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function Gxa4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".home-container {\n  display: flex;\n  gap: 20px;\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 24px 16px;\n  align-items: flex-start;\n}\n\n.right-panel {\n  flex: 1;\n  min-width: 0;\n}\n\n.tab-menu {\n  display: flex;\n  gap: 4px;\n  padding: 6px;\n  margin-bottom: 16px;\n  overflow-x: auto;\n}\n\n.tab-btn {\n  background: none;\n  border: none;\n  padding: 8px 14px;\n  font-size: 13px;\n  border-radius: 4px;\n  color: #555;\n  white-space: nowrap;\n}\n\n.tab-btn.active {\n  background: #1a73e8;\n  color: #fff;\n}\n\n.widgets-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.widget {\n  text-align: center;\n}\n\n.widget-label {\n  font-size: 11px;\n  color: #888;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n\n.widget-value {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a73e8;\n}\n\n.panels-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.chart-card h4, .map-card h4 {\n  margin-top: 0;\n  font-size: 14px;\n  color: #444;\n}\n\n.field-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  padding: 6px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.field-row label { color: #888; }\n\n.note {\n  border-bottom: 1px solid #f0f0f0;\n  padding: 8px 0;\n}\n\n.note-meta {\n  font-size: 11px;\n  color: #999;\n}\n\n.note-text {\n  font-size: 13px;\n  margin-top: 3px;\n}\n\n.muted { color: #999; font-size: 13px; }\n\n@media (max-width: 720px) {\n  .home-container { flex-direction: column; }\n  .panels-row { grid-template-columns: 1fr; }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdGVsLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUEsbUJBQW1CLFdBQVcsRUFBRTs7QUFFaEM7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQSxTQUFTLFdBQVcsRUFBRSxlQUFlLEVBQUU7O0FBRXZDO0VBQ0Usa0JBQWtCLHNCQUFzQixFQUFFO0VBQzFDLGNBQWMsMEJBQTBCLEVBQUU7QUFDNUMiLCJmaWxlIjoiaG90ZWwtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5yaWdodC1wYW5lbCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnRhYi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnRhYi1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM1NTU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50YWItYnRuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxYTczZTg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ud2lkZ2V0cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLndpZGdldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndpZGdldC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLndpZGdldC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYTczZTg7XG59XG5cbi5wYW5lbHMtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5jaGFydC1jYXJkIGg0LCAubWFwLWNhcmQgaDQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4uZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbn1cblxuLmZpZWxkLXJvdyBsYWJlbCB7IGNvbG9yOiAjODg4OyB9XG5cbi5ub3RlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4ubm90ZS1tZXRhIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLm5vdGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ubXV0ZWQgeyBjb2xvcjogIzk5OTsgZm9udC1zaXplOiAxM3B4OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuaG9tZS1jb250YWluZXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5wYW5lbHMtcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "LDwj":
    /*!***************************************************************!*\
      !*** ./src/app/components/hotel-home/hotel-home.component.ts ***!
      \***************************************************************/

    /*! exports provided: HotelHomeComponent */

    /***/
    function LDwj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotelHomeComponent", function () {
        return HotelHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_hotel_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./hotel-home.component.html */
      "/jfv");
      /* harmony import */


      var _hotel_home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hotel-home.component.css */
      "Gxa4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HotelHomeComponent = /*#__PURE__*/function () {
        function HotelHomeComponent(route) {
          _classCallCheck(this, HotelHomeComponent);

          this.route = route;
          this.hotel = null;
          this.activeTab = 'Home';
          this.tabs = ['Home', 'About', 'Classification', 'Products', 'Terms', 'Finance', 'Notes'];
          this.loadError = false;
        }

        return _createClass(HotelHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Data was already fetched by HotelResolver before this component was rendered.
            this.hotel = this.route.snapshot.data.hotel;

            if (!this.hotel) {
              this.loadError = true;
            }
          }
        }, {
          key: "selectTab",
          value: function selectTab(tab) {
            this.activeTab = tab;
          }
        }]);
      }();

      HotelHomeComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      HotelHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hotel-home',
        template: _raw_loader_hotel_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hotel_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HotelHomeComponent);
      /***/
    },

    /***/
    "LYY0":
    /*!********************************************************************!*\
      !*** ./src/app/components/hotel-search/hotel-search.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function LYY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search-container {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 24px 16px;\n}\n\n.search-bar {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.search-input {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.result-count {\n  color: #666;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n\n.hotel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.hotel-row {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n\n.hotel-thumb {\n  width: 90px;\n  height: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  flex-shrink: 0;\n  background: #eee;\n}\n\n.hotel-info { flex: 1; }\n\n.hotel-name-link {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.hotel-meta {\n  font-size: 13px;\n  color: #777;\n  margin: 4px 0;\n}\n\n.status-badge {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n\n.status-badge.active { background: #e6f4ea; color: #1e7e34; }\n\n.status-badge.inactive { background: #f4e6e6; color: #a11; }\n\n.no-results {\n  text-align: center;\n  color: #888;\n  padding: 30px;\n}\n\n.pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  margin: 20px 0;\n}\n\n.page-info {\n  font-size: 13px;\n  color: #555;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdGVsLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLGNBQWMsT0FBTyxFQUFFOztBQUV2QjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBLHVCQUF1QixtQkFBbUIsRUFBRSxjQUFjLEVBQUU7O0FBQzVELHlCQUF5QixtQkFBbUIsRUFBRSxXQUFXLEVBQUU7O0FBRTNEO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoiaG90ZWwtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyNHB4IDE2cHg7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVzdWx0LWNvdW50IHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhvdGVsLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5ob3RlbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3RlbC10aHVtYiB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4uaG90ZWwtaW5mbyB7IGZsZXg6IDE7IH1cblxuLmhvdGVsLW5hbWUtbGluayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdGVsLW1ldGEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBtYXJnaW46IDRweCAwO1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN0YXR1cy1iYWRnZS5hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjZTZmNGVhOyBjb2xvcjogIzFlN2UzNDsgfVxuLnN0YXR1cy1iYWRnZS5pbmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNmNGU2ZTY7IGNvbG9yOiAjYTExOyB9XG5cbi5uby1yZXN1bHRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzg4ODtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnBhZ2UtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NTU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "LdCi":
    /*!****************************************************!*\
      !*** ./src/app/services/hotel-resolver.service.ts ***!
      \****************************************************/

    /*! exports provided: HotelResolver */

    /***/
    function LdCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotelResolver", function () {
        return HotelResolver;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _hotel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hotel.service */
      "OTkW");

      var HotelResolver = /*#__PURE__*/function () {
        function HotelResolver(hotelService, router) {
          _classCallCheck(this, HotelResolver);

          this.hotelService = hotelService;
          this.router = router;
        }

        return _createClass(HotelResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this2 = this;

            var id = Number(route.paramMap.get('id'));

            if (!id) {
              this.router.navigate(['/search']);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }

            return this.hotelService.getHotelById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hotel) {
              if (!hotel) {
                // Data unavailable -> gracefully redirect instead of rendering a broken page
                _this2.router.navigate(['/search']);

                return null;
              }

              return hotel;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
              _this2.router.navigate(['/search']);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
          }
        }]);
      }();

      HotelResolver.ctorParameters = function () {
        return [{
          type: _hotel_service__WEBPACK_IMPORTED_MODULE_5__["HotelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      HotelResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HotelResolver);
      /***/
    },

    /***/
    "OTkW":
    /*!*******************************************!*\
      !*** ./src/app/services/hotel.service.ts ***!
      \*******************************************/

    /*! exports provided: HotelService */

    /***/
    function OTkW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HotelService", function () {
        return HotelService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var HotelService = /*#__PURE__*/function () {
        function HotelService(http) {
          _classCallCheck(this, HotelService);

          this.http = http;
          this.dataUrl = 'assets/mock-data/hotels.json';
          this.hotels$ = null;
        }
        /**
         * Loads and caches the full mock hotel list.
         * Uses shareReplay so the JSON file is only fetched once per app session.
         */


        return _createClass(HotelService, [{
          key: "getAllHotels",
          value: function getAllHotels() {
            if (!this.hotels$) {
              this.hotels$ = this.http.get(this.dataUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('load hotel list', [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
            }

            return this.hotels$;
          }
          /**
           * Search hotels by name (case-insensitive, partial match) with pagination.
           */

        }, {
          key: "searchHotels",
          value: function searchHotels(query, page, pageSize) {
            return this.getAllHotels().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hotels) {
              var q = (query || '').trim().toLowerCase();
              var filtered = q ? hotels.filter(function (h) {
                return h.name.toLowerCase().includes(q);
              }) : hotels;
              var start = (page - 1) * pageSize;
              var results = filtered.slice(start, start + pageSize);
              return {
                results: results,
                total: filtered.length
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('search hotels', {
              results: [],
              total: 0
            })));
          }
          /**
           * Fetch a single hotel by id. Used by the route resolver.
           */

        }, {
          key: "getHotelById",
          value: function getHotelById(id) {
            return this.getAllHotels().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (hotels) {
              return hotels.find(function (h) {
                return h.id === id;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("load hotel id=".concat(id), undefined)));
          }
        }, {
          key: "handleError",
          value: function handleError(operation, fallbackValue) {
            return function (error) {
              console.error("HotelService: ".concat(operation, " failed"), error); // In a real app this would surface to a toast/notification service.

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(fallbackValue);
            };
          }
        }]);
      }();

      HotelService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      HotelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HotelService);
      /***/
    },

    /***/
    "OgFp":
    /*!***************************************************************!*\
      !*** ./src/app/components/left-panel/left-panel.component.ts ***!
      \***************************************************************/

    /*! exports provided: LeftPanelComponent */

    /***/
    function OgFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeftPanelComponent", function () {
        return LeftPanelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_left_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./left-panel.component.html */
      "4Xgg");
      /* harmony import */


      var _left_panel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./left-panel.component.css */
      "aW5h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LeftPanelComponent = /*#__PURE__*/function () {
        function LeftPanelComponent() {
          _classCallCheck(this, LeftPanelComponent);

          this.editingAddress = false;
          this.editingBasicInfo = false;
        }

        return _createClass(LeftPanelComponent, [{
          key: "toggleAddressEdit",
          value: function toggleAddressEdit() {
            this.editingAddress = !this.editingAddress;
          }
        }, {
          key: "toggleBasicInfoEdit",
          value: function toggleBasicInfoEdit() {
            this.editingBasicInfo = !this.editingBasicInfo;
          }
        }, {
          key: "saveAddress",
          value: function saveAddress() {
            // In a real app this would call HotelService.updateHotel(...) via an API/PUT request.
            this.editingAddress = false;
          }
        }, {
          key: "saveBasicInfo",
          value: function saveBasicInfo() {
            this.editingBasicInfo = false;
          }
        }]);
      }();

      LeftPanelComponent.propDecorators = {
        hotel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LeftPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-left-panel',
        template: _raw_loader_left_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_left_panel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeftPanelComponent);
      /***/
    },

    /***/
    "RWN1":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hotel-search/hotel-search.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RWN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"search-container\">\n  <h2>Hotel Search</h2>\n\n  <div class=\"search-bar card\">\n    <input\n      type=\"text\"\n      placeholder=\"Search hotel by name...\"\n      [(ngModel)]=\"searchTerm\"\n      (keyup.enter)=\"onSearch()\"\n      class=\"search-input\"\n    />\n    <button class=\"btn-primary\" (click)=\"onSearch()\">Search</button>\n    <button class=\"btn-secondary\" (click)=\"onClear()\" *ngIf=\"searchTerm\">Clear</button>\n  </div>\n\n  <div class=\"error-banner\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n\n  <div class=\"loading\" *ngIf=\"loading\">Loading hotels...</div>\n\n  <div *ngIf=\"!loading && !errorMessage\">\n    <p class=\"result-count\">{{ total }} hotel(s) found</p>\n\n    <div class=\"hotel-list\">\n      <div class=\"hotel-row card\" *ngFor=\"let hotel of hotels\">\n        <img [src]=\"hotel.imageUrl\" alt=\"{{ hotel.name }}\" class=\"hotel-thumb\" />\n        <div class=\"hotel-info\">\n          <a [routerLink]=\"['/home', hotel.id]\" class=\"hotel-name-link\">{{ hotel.name }}</a>\n          <div class=\"hotel-meta\">\n            {{ hotel.provider }} &middot; {{ hotel.hotelType }} &middot; {{ hotel.location.city }}, {{ hotel.address.country }}\n          </div>\n          <span class=\"status-badge\" [class.active]=\"hotel.active\" [class.inactive]=\"!hotel.active\">\n            {{ hotel.active ? 'Active' : 'Inactive' }}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"no-results\" *ngIf=\"hotels.length === 0\">No hotels match your search.</div>\n    </div>\n\n    <div class=\"pagination\" *ngIf=\"total > 0\">\n      <button class=\"btn-secondary\" (click)=\"goToPage(page - 1)\" [disabled]=\"page === 1\">Prev</button>\n      <span class=\"page-info\">Page {{ page }} of {{ totalPages }}</span>\n      <button class=\"btn-secondary\" (click)=\"goToPage(page + 1)\" [disabled]=\"page === totalPages\">Next</button>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Hotel App';
      });

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TMsl":
    /*!************************************************************!*\
      !*** ./src/app/components/map-view/map-view.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function TMsl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".map-container iframe {\n  border-radius: 4px;\n  border: 1px solid #ddd;\n}\n\n.coords {\n  font-size: 11px;\n  color: #888;\n  margin-top: 4px;\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im1hcC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciBpZnJhbWUge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5jb29yZHMge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODg4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */";
      /***/
    },

    /***/
    "UrQH":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-chart/booking-chart.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UrQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"chart-wrapper\">\n  <div class=\"bars\">\n    <div class=\"bar-col\" *ngFor=\"let m of data\">\n      <div class=\"bar-track\">\n        <div class=\"bar\" [style.height.%]=\"barHeight(m.count)\" [title]=\"m.count + ' bookings'\"></div>\n      </div>\n      <span class=\"bar-value\">{{ m.count }}</span>\n      <span class=\"bar-label\">{{ m.month }}</span>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header class=\"app-header\">\n  <span class=\"app-title\">{{ title }}</span>\n  <a routerLink=\"/search\" class=\"header-link\">Hotel Search</a>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/hotel-search/hotel-search.component */
      "75At");
      /* harmony import */


      var _components_hotel_home_hotel_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/hotel-home/hotel-home.component */
      "LDwj");
      /* harmony import */


      var _components_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/left-panel/left-panel.component */
      "OgFp");
      /* harmony import */


      var _components_booking_chart_booking_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/booking-chart/booking-chart.component */
      "Ar/A");
      /* harmony import */


      var _components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/map-view/map-view.component */
      "Fz9v");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_7__["HotelSearchComponent"], _components_hotel_home_hotel_home_component__WEBPACK_IMPORTED_MODULE_8__["HotelHomeComponent"], _components_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_9__["LeftPanelComponent"], _components_booking_chart_booking_chart_component__WEBPACK_IMPORTED_MODULE_10__["BookingChartComponent"], _components_map_view_map_view_component__WEBPACK_IMPORTED_MODULE_11__["MapViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "aW5h":
    /*!****************************************************************!*\
      !*** ./src/app/components/left-panel/left-panel.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function aW5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".left-panel {\n  width: 280px;\n  flex-shrink: 0;\n}\n\n.image-section {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.hotel-image {\n  width: 100%;\n  height: 140px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.hotel-title {\n  margin: 8px 0 2px;\n  font-size: 16px;\n}\n\n.provider {\n  font-size: 12px;\n  color: #777;\n  margin-bottom: 6px;\n}\n\n.status-badge {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n\n.status-badge.active { background: #e6f4ea; color: #1e7e34; }\n\n.status-badge.inactive { background: #f4e6e6; color: #a11; }\n\n.section {\n  border-top: 1px solid #eee;\n  padding-top: 12px;\n  margin-top: 12px;\n}\n\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 13px;\n  color: #444;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n\n.edit-btn {\n  background: none;\n  border: none;\n  color: #1a73e8;\n  font-size: 12px;\n}\n\n.field-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  padding: 4px 0;\n  gap: 8px;\n}\n\n.field-row label {\n  color: #888;\n  flex-shrink: 0;\n}\n\n.field-row span {\n  text-align: right;\n  word-break: break-word;\n}\n\n.field-row.edit input {\n  flex: 1;\n  padding: 3px 6px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 12px;\n  text-align: right;\n}\n\n.save-btn {\n  margin-top: 8px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0EsdUJBQXVCLG1CQUFtQixFQUFFLGNBQWMsRUFBRTs7QUFDNUQseUJBQXlCLG1CQUFtQixFQUFFLFdBQVcsRUFBRTs7QUFFM0Q7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztFQUNkLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJsZWZ0LXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1wYW5lbCB7XG4gIHdpZHRoOiAyODBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5pbWFnZS1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaG90ZWwtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmhvdGVsLXRpdGxlIHtcbiAgbWFyZ2luOiA4cHggMCAycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnByb3ZpZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3NztcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN0YXR1cy1iYWRnZS5hY3RpdmUgeyBiYWNrZ3JvdW5kOiAjZTZmNGVhOyBjb2xvcjogIzFlN2UzNDsgfVxuLnN0YXR1cy1iYWRnZS5pbmFjdGl2ZSB7IGJhY2tncm91bmQ6ICNmNGU2ZTY7IGNvbG9yOiAjYTExOyB9XG5cbi5zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM0NDQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmVkaXQtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzFhNzNlODtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBnYXA6IDhweDtcbn1cblxuLmZpZWxkLXJvdyBsYWJlbCB7XG4gIGNvbG9yOiAjODg4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmZpZWxkLXJvdyBzcGFuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5maWVsZC1yb3cuZWRpdCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNhdmUtYnRuIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "sGuc":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map-view/map-view.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sGuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"map-container\">\n  <iframe\n    *ngIf=\"mapUrl\"\n    [src]=\"mapUrl\"\n    width=\"100%\"\n    height=\"220\"\n    frameborder=\"0\"\n    scrolling=\"no\">\n  </iframe>\n  <div class=\"coords\">Lat: {{ latitude | number:'1.4-4' }}, Lng: {{ longitude | number:'1.4-4' }}</div>\n</div>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/hotel-search/hotel-search.component */
      "75At");
      /* harmony import */


      var _components_hotel_home_hotel_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/hotel-home/hotel-home.component */
      "LDwj");
      /* harmony import */


      var _services_hotel_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/hotel-resolver.service */
      "LdCi");

      var routes = [{
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      }, {
        path: 'search',
        component: _components_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_3__["HotelSearchComponent"]
      }, {
        path: 'home/:id',
        component: _components_hotel_home_hotel_home_component__WEBPACK_IMPORTED_MODULE_4__["HotelHomeComponent"],
        resolve: {
          hotel: _services_hotel_resolver_service__WEBPACK_IMPORTED_MODULE_5__["HotelResolver"]
        }
      }, {
        path: '**',
        redirectTo: 'search'
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map