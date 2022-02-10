function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
  /***/
  "./node_modules/angular2-datetimepicker/datepicker.component.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/angular2-datetimepicker/datepicker.component.js ***!
    \**********************************************************************/

  /*! exports provided: DATEPICKER_CONTROL_VALUE_ACCESSOR, DatePicker */

  /***/
  function node_modulesAngular2DatetimepickerDatepickerComponentJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DATEPICKER_CONTROL_VALUE_ACCESSOR", function () {
      return DATEPICKER_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePicker", function () {
      return DatePicker;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return DatePicker;
      }),
      multi: true
    };

    var DatePicker =
    /** @class */
    function () {
      function DatePicker() {
        this.onDateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.popover = false;
        this.cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.timeViewDate = new Date(this.date);
        this.hourValue = 0;
        this.minValue = 0;
        this.timeViewMeridian = "";
        this.timeView = false;
        this.yearView = false;
        this.yearsList = [];
        this.monthDays = [];
        this.monthsView = false;
        this.today = new Date();
        this.defaultSettings = {
          defaultOpen: false,
          bigBanner: true,
          timePicker: false,
          format: 'dd-MMM-yyyy hh:mm a',
          cal_days_labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          cal_full_days_lables: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          cal_months_labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          cal_months_labels_short: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          closeOnSelect: true
        };
      }

      DatePicker.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);

        if (this.settings.defaultOpen) {
          this.popover = true;
        }
      };

      DatePicker.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
          this.initDate(value);
        } else {
          this.date = new Date();
        }

        this.generateDays();
      };

      DatePicker.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
      };

      DatePicker.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
      };

      DatePicker.prototype.initDate = function (val) {
        this.date = new Date(val);

        if (this.date.getHours() <= 11) {
          this.hourValue = this.date.getHours();
          this.timeViewMeridian = "AM";
        } else {
          this.hourValue = this.date.getHours() - 12;
          this.timeViewMeridian = "PM";
        }

        if (this.date.getHours() == 0 || this.date.getHours() == 12) {
          this.hourValue = 12;
        }

        this.minValue = this.date.getMinutes();
      };

      DatePicker.prototype.generateDays = function () {
        this.monthDays = [];
        var year = this.date.getFullYear(),
            month = this.date.getMonth(),
            current_day = this.date.getDate(),
            today = new Date();
        var firstDay = new Date(year, month, 1);
        var startingDay = firstDay.getDay();
        var monthLength = this.getMonthLength(month, year);
        var day = 1;
        var dateArr = [];
        var dateRow = []; // this loop is for is weeks (rows)

        for (var i = 0; i < 9; i++) {
          // this loop is for weekdays (cells)
          dateRow = [];

          for (var j = 0; j <= 6; j++) {
            var dateCell = null;

            if (day <= monthLength && (i > 0 || j >= startingDay)) {
              dateCell = day;

              if (day == current_day) {// dateCell.classList.add('selected-day');
              }

              if (day == this.today.getDate() && this.date.getMonth() == today.getMonth() && this.date.getFullYear() == today.getFullYear()) {// dateCell.classList.add('today');
              }

              day++;
            }

            dateRow.push(dateCell);
          } // stop making rows if we've run out of days


          if (day > monthLength) {
            dateArr.push(dateRow);
            break;
          } else {
            dateArr.push(dateRow);
          }
        }

        this.monthDays = dateArr;
      };

      DatePicker.prototype.generateYearList = function (param) {
        var startYear = null;
        var currentYear = null;

        if (param == "next") {
          startYear = this.yearsList[8] + 1;
          currentYear = this.date.getFullYear();
        } else if (param == "prev") {
          startYear = this.yearsList[0] - 9;
          currentYear = this.date.getFullYear();
        } else {
          currentYear = this.date.getFullYear();
          startYear = currentYear - 4;
          this.yearView = !this.yearView;
          this.monthsView = false;
        }

        for (var k = 0; k < 9; k++) {
          this.yearsList[k] = startYear + k;
        }
      };

      DatePicker.prototype.getMonthLength = function (month, year) {
        var monthLength = this.cal_days_in_month[month]; // compensate for leap year

        if (month == 1) {
          if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            monthLength = 29;
          }
        }

        return monthLength;
      };

      DatePicker.prototype.toggleMonthView = function () {
        this.yearView = false;
        this.monthsView = !this.monthsView;
      };

      DatePicker.prototype.toggleMeridian = function (val) {
        this.timeViewMeridian = val;
      };

      DatePicker.prototype.setTimeView = function () {
        if (this.timeViewMeridian == "AM") {
          if (this.hourValue == 12) {
            this.date.setHours(0);
          } else {
            this.date.setHours(this.hourValue);
          }

          this.date.setMinutes(this.minValue);
        } else {
          if (this.hourValue == 12) {
            this.date.setHours(this.hourValue);
          } else {
            this.date.setHours(this.hourValue + 12);
          }

          this.date.setMinutes(this.minValue);
        }

        this.date = new Date(this.date);
        this.timeView = !this.timeView;
      };

      DatePicker.prototype.setDay = function (evt) {
        if (evt.target.innerHTML) {
          var selectedDay = parseInt(evt.target.innerHTML);
          this.date = new Date(this.date.setDate(selectedDay));
          console.log(this.date);
          this.onChangeCallback(this.date.toString());

          if (this.settings.closeOnSelect) {
            this.popover = false;
            this.onDateSelect.emit(this.date);
          }
        }
      };

      DatePicker.prototype.setYear = function (evt) {
        console.log(evt.target);
        var selectedYear = parseInt(evt.target.getAttribute('id'));
        this.date = new Date(this.date.setFullYear(selectedYear));
        this.yearView = !this.yearView;
        this.generateDays();
      };

      DatePicker.prototype.setMonth = function (evt) {
        if (evt.target.getAttribute('id')) {
          var selectedMonth = this.settings.cal_months_labels_short.indexOf(evt.target.getAttribute('id'));
          this.date = new Date(this.date.setMonth(selectedMonth));
          this.monthsView = !this.monthsView;
          this.generateDays();
        }
      };

      DatePicker.prototype.prevMonth = function (e) {
        e.stopPropagation();
        var self = this;

        if (this.date.getMonth() == 0) {
          this.date.setMonth(11);
          this.date.setFullYear(this.date.getFullYear() - 1);
        } else {
          var prevmonthLength = this.getMonthLength(this.date.getMonth() - 1, this.date.getFullYear());
          var currentDate = this.date.getDate();

          if (currentDate > prevmonthLength) {
            this.date.setDate(prevmonthLength);
          }

          this.date.setMonth(this.date.getMonth() - 1);
        }

        this.date = new Date(this.date);
        this.generateDays();
      };

      DatePicker.prototype.nextMonth = function (e) {
        e.stopPropagation();
        var self = this;

        if (this.date.getMonth() == 11) {
          this.date.setMonth(0);
          this.date.setFullYear(this.date.getFullYear() + 1);
        } else {
          var nextmonthLength = this.getMonthLength(this.date.getMonth() + 1, this.date.getFullYear());
          var currentDate = this.date.getDate();

          if (currentDate > nextmonthLength) {
            this.date.setDate(nextmonthLength);
          }

          this.date.setMonth(this.date.getMonth() + 1);
        }

        this.date = new Date(this.date);
        this.generateDays();
      };

      DatePicker.prototype.onChange = function (evt) {
        console.log(evt);
      };

      DatePicker.prototype.incHour = function () {
        if (this.hourValue < 12) {
          this.hourValue += 1;
          console.log(this.hourValue);
        }
      };

      DatePicker.prototype.decHour = function () {
        if (this.hourValue > 1) {
          this.hourValue -= 1;
          console.log(this.hourValue);
        }
      };

      DatePicker.prototype.incMinutes = function () {
        if (this.minValue < 59) {
          this.minValue += 1;
          console.log(this.minValue);
        }
      };

      DatePicker.prototype.decMinutes = function () {
        if (this.minValue > 0) {
          this.minValue -= 1;
          console.log(this.minValue);
        }
      };

      DatePicker.prototype.done = function () {
        this.onChangeCallback(this.date.toString());
        this.popover = false;
        this.onDateSelect.emit(this.date);
      };

      DatePicker.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'angular2-date-picker',
          template: "\n      <div class=\"winkel-calendar\">\n          <input type=\"hidden\" class=\"wc-input\" value=\"{{date}}\">\n          <div class=\"wc-date-container\" (click)=\"popover = !popover\">\n              <span>{{date | date: settings.format}}</span>\n              <i class=\"fa fa-calendar\"></i>\n          </div>\n          <div class=\"wc-date-popover\" [ngClass]=\"{'banner-true': settings.bigBanner == true}\" [hidden]=\"!popover\">\n              <div class=\"wc-banner\" *ngIf=\"settings.bigBanner\">\n                  <div class=\"wc-day-row\">{{date | date: 'EEEE'}}</div>\n                  <div class=\"wc-date-row\">{{date | date: 'dd'}}</div>\n                  <div class=\"wc-my-sec\">\n                      <div class=\"wc-month-row\">\n                          <div>{{date | date: 'MMMM'}}</div>\n                      </div>\n                      <div class=\"wc-year-row\">\n                          <div>{{date | date: 'yyyy'}}</div>\n                      </div>\n                  </div>\n                  <div class=\"wc-time-sec ng-scope\" ng-click=\"toggleTimeView()\">\n                                      <div *ngIf=\"settings.timePicker\" class=\"time\" (click)=\"timeView = !timeView\">\n                                          {{date | date: 'hh'}} : {{date | date: 'mm'}} {{date | date: 'a'}} <span class=\"fa fa-clock-o\"></span>\n                                      </div>\n                                  </div>\n\n              </div>\n              <div class=\"wc-details\">\n                  <i class=\"wc-prev fa fa-angle-left\" (click)=\"prevMonth($event)\"></i>\n                  <div class=\"month-year\" *ngIf=\"settings.bigBanner\" (click)=\"toggleMonthView()\">{{date | date: 'MMMM'}}\n                      <!-- <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\"></i>\n                                       <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\"></i> -->\n                  </div>\n                  <div class=\"month-year\" *ngIf=\"!settings.bigBanner\" (click)=\"toggleMonthView()\">\n                      {{date | date: 'MMMM'}}\n                      <!--    <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\" (click)=\"toggleMonthView()\"></i>\n                                          <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\" (click)=\"toggleMonthView()\"></i>  -->\n\n                  </div>\n                  <i class=\"wc-next fa fa-angle-right\" (click)=\"nextMonth($event)\"></i>\n              </div>\n              <div class=\"year-title\">\n                  <div class=\"year-dropdown\" (click)=\"generateYearList('current')\">\n                      {{date | date: 'yyyy'}}\n                      <i *ngIf=\"!yearView\" class=\"fa fa-angle-down\"></i>\n                      <i *ngIf=\"yearView\" class=\"fa fa-angle-up\"></i>\n                  </div>\n              </div>\n              <table class=\"calendar-header\" [hidden]=\"yearView == true || monthsView == true\">\n                  <tr>\n                      <td class=\"calendar-header-day\">Su</td>\n                      <td class=\"calendar-header-day\">Mo</td>\n                      <td class=\"calendar-header-day\">Tu</td>\n                      <td class=\"calendar-header-day\">We</td>\n                      <td class=\"calendar-header-day\">Th</td>\n                      <td class=\"calendar-header-day\">Fr</td>\n                      <td class=\"calendar-header-day\">Sa</td>\n                  </tr>\n              </table>\n             <div class=\"months-view\" [hidden]=\"!monthsView\" (click)=\"setMonth($event)\">\n                  <span *ngFor=\"let month of settings.cal_months_labels_short\" [ngClass]=\"{'current-month': month == settings.cal_months_labels_short[date.getMonth()]}\" id=\"{{month}}\">{{month}}</span>\n              </div>\n              <div class=\"years-view\" *ngIf=\"yearView\">\n                  <div class=\"fa fa-angle-left prev\" (click)=\"generateYearList('prev')\"></div>\n                  <div class=\"fa fa-angle-right next\" (click)=\"generateYearList('next')\"></div>\n                  <div class=\"years-list-view\" (click)=\"setYear($event)\">\n                      <span *ngFor=\"let year of yearsList\" [ngClass]=\"{'current-year': year == date.getFullYear()}\" id=\"{{year}}\">{{year}}</span>\n                  </div>\n              </div>\n             <div class=\"time-view\" [hidden]=\"!timeView\">\n                  <div class=\"time\">\n                      <div class=\"hour\">\n                          <span class=\"fa fa-plus inc-btn\" (click)=\"incHour()\"></span>\n                          <input type=\"number\" value=\"{{hourValue}}\" [(ngModel)] = \"hourValue\" autofocus/>\n                          <span class=\"fa fa-minus dec-btn\" (click)=\"decHour()\"></span>\n                      </div>\n                      <div class=\"time-divider\">:</div>\n                      <div class=\"minutes\">\n                          <span class=\"fa fa-plus inc-btn\" (click)=\"incMinutes()\"></span>                    \n                          <input type=\"number\" value=\"{{minValue}}\" [(ngModel)] = \"minValue\"/>\n                          <span class=\"fa fa-minus dec-btn\" (click)=\"decMinutes()\"></span>\n                      </div>\n                  </div>\n                  <div class=\"meridian\">\n                      <div class=\"cuppa-btn-group\">\n                          <button [ngClass]=\"{'active': timeViewMeridian == 'AM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('AM')\">AM</button>\n                          <button [ngClass]=\"{'active': timeViewMeridian == 'PM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('PM')\">PM</button>\n                      </div>\n                  </div>\n                  <div class=\"time-view-btn\">\n                      <button class=\"button\" (click)=\"setTimeView()\">Set Time</button>\n                  </div>\n              </div>\n              <table class=\"calendar-days\" (click)=\"setDay($event);\" [hidden]=\"monthsView || yearView\">\n                  <tr *ngFor=\"let week of monthDays\">\n                      <td [ngClass]=\"{'calendar-day': day != null,'today': day == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear(),'selected-day': day == date.getDate()}\"\n                          *ngFor=\"let day of week\">\n                          <span>{{day}}</span>\n                      </td>\n\n                  </tr>\n              </table>\n              <!-- <div ng-if=\"!bigBanner\">\n                  <i class=\"fa fa-clock-o\" aria-hidden=\"true\" (click)=\"toggleTimeView()\"></i>\n              </div>-->\n              <div class=\"cal-util\">\n                  <div class=\"ok\" (click)=\"done()\"><i class=\"fa fa-check\"></i>Done\n                  </div>\n              </div>\n          </div>\n      </div>\n    ",
          styles: ["\n      @import url(\"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700\");body{font-family:'Roboto',sans-serif}*{box-sizing:border-box}#cuppaDatePickerContainer,#cuppaDatePicker{width:250px;text-align:center;margin:0px auto;font-family:'Roboto','Arial',sans-serif}.year-dropdown{text-align:center}.calendar-header{color:#333;background:#fff}.wc-date-container{float:left;width:100%;height:30px;border:1px solid #1565c0;margin-bottom:1px;font-size:16px;padding:5px;text-align:left;cursor:pointer;background:#fff;line-height:20px}.wc-date-container>span{color:#1565c0}.wc-date-container>i{float:right;font-size:20px;color:#1565c0}.winkel-calendar{position:relative;font-family:'Roboto','Arial',sans-serif}.wc-date-popover{font-size:14px;box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.4);margin:0px auto;perspective:1000px;float:left;background:#fff;background:#fff;position:fixed;width:90%;top:5%;left:50%;z-index:9999999;overflow:hidden;height:90%;max-width:320px;transition:all .5s linear;transform:translateX(-50%)}.wc-banner{float:left;width:100%;font-size:54px;background:#1565c0}.wc-day-row{padding:5px 0px;color:#fff;width:100%;float:left;font-size:3vh;text-align:center}.wc-date-row{display:inline-block;font-size:25vw;color:#fff;padding:5px;width:50%;float:left;text-align:right;font-weight:200}.wc-month-row{padding:25px 0px 0px 0px;font-size:8vw;color:#fff;width:100%;float:left}.wc-month-row>i,.wc-year-row>i{float:right;font-size:12px;padding:10px 6px;cursor:pointer}.wc-month-row>i:hover,.wc-year-row>i:hover{color:rgba(255,255,255,0.63)}.wc-year-row{text-align:left;color:#fff;font-size:7vw;float:left;width:100%;padding:2px 0px 0px 0px}.timepicker-true .wc-year-row{font-size:20px;padding:5px 0px 0px 12px}.timestate>.active{color:#fff}.timestate span{cursor:pointer}.wc-my-sec{display:inline-block;padding:5px 10px;float:left;width:50%;font-weight:300}.timepicker-true .wc-my-sec{width:20%}.time i{font-size:21px;display:block;text-align:center;cursor:pointer}.time i:hover{color:rgba(255,255,255,0.65)}.time>.hour,.time>.minutes{float:left;width:48%;text-align:center}.wc-month-row>div:nth-child(1),.wc-year-row>div:nth-child(1){float:left;text-align:left}.wc-time-sec{color:#fff;text-align:center;padding:0px 10px 10px;float:left;width:100%}.wc-time-sec>.time{font-size:38px;font-weight:300;width:100%;text-align:center;float:left}.time-divider{width:4%;float:left;text-align:center;padding:0px 10px}.time-view{position:absolute;background:#fff;width:100%;z-index:1;top:40px;padding:35px;border-top:1px solid #1565c0}.time-view-btn{text-align:center}.meridian{text-align:center;padding:15px 0px}.button{width:100%;padding:10px;background:#1565c0;color:#fff;margin:0px auto;border:1px solid #1565c0;border-radius:3px}.button-sm{width:50%}.time-view .time{font-size:36px;width:100%;margin:0px auto;display:inline-block;padding:5px 0px 0px 0px;color:#1565c0;font-weight:300}.time-view .time-divider{padding:16px 0}.wc-time-sec .time input,.time-view .time input{display:inline-block;width:100%;background:none;border:none;text-align:center;cursor:pointer;font-family:inherit;font-size:32px;font-weight:300;padding:0px 10px;text-align:center;color:#1565c0}.inc-btn,.dec-btn{font-size:14px;display:block;color:#8e8e8e}.wc-time-sec>.time>.timestate{float:left;padding:0px 10px}.show-time-picker .wc-date-row{width:33% !important}.show-time-picker .wc-my-sec{width:22% !important}.wc-month-controls>.fa:hover,.wc-year-controls>.fa:hover{color:#fff}.wc-details>.fa:hover{color:#ccc}.wc-month-controls{padding:5px;font-size:16px;color:rgba(255,255,255,0.71);float:right}.wc-year-controls{padding:2px 5px 0px 5px;font-size:16px;color:rgba(255,255,255,0.71);float:right}.wc-year-controls>.fa,.wc-month-controls>.fa{cursor:pointer;padding:0px 4px}.wc-details{float:left;width:65%;padding:10px 0px 10px;color:#fff;background:#1565c0}.banner-true>.wc-details{padding:10px 0px 10px}.wc-prev{float:left;width:25%;text-align:left;padding:0px 15px;cursor:pointer;font-size:35px}.month-year{float:left;width:50%;font-size:18px;line-height:35px;text-align:center}.wc-next{float:right;width:25%;text-align:right;padding:0px 15px;cursor:pointer;font-size:35px}.calendar-days{color:#07c;background:#fff}.cal-util{width:100%;float:left;cursor:pointer;position:absolute;bottom:0;background:#fff}.cal-util>.ok{width:100%;padding:15px;border-bottom:1px solid #d1d1d1;float:left;color:#1565c0;font-size:18px;border-top:1px solid #d1d1d1;text-align:center}.ok>i{margin-right:5px}.cal-util>.cancel{width:50%;float:left;padding:10px;color:#1565c0;font-size:20px}.cal-util>.ok:hover,.cal-util>.cancel:hover{box-shadow:inset 0px 0px 20px #ccc}.today>span{border:1px solid #1565c0;background:none}.selected-day>span{background:#1565c0;color:#fff}.calendar-days td{cursor:pointer}.calendar-day:hover>span{background:#1565c0;color:#fff}.winkel-calendar table{width:100%;text-align:center;font-size:18px;border-collapse:collapse}.winkel-calendar table td{padding:0px 0px;width:calc((100%)/7);text-align:center;transition:all .1s linear}.winkel-calendar table td span{display:block;padding:7px;margin:0px;line-height:32px}.calendar-header td{padding:5px 0px !important}.months-view,.years-view{background:#fff;width:100%;top:210px;width:100%;height:calc(100% - 210px);bottom:0;text-align:center}.years-list-view{float:left;width:calc(100% - 60px);height:100%}.months-view>span,.years-list-view>span{display:inline-block;width:25%;padding:25px 0px;cursor:pointer;font-size:16px}.years-list-view>span{width:33.3333%}.years-view>.prev,.years-view>.next{float:left;width:30px;padding:85px 0px;cursor:pointer;font-size:52px}.years-view>.prev:hover,.years-view>.next:hover{color:#ccc}.years-view>.next{float:right}.current-month,.current-year{color:#1565c0}.years-view>span{width:33.3333%}.months-view>span:hover,.years-list-view>span:hover{color:#1565c0}.banner-true{padding-top:0px !important}.banner-true>.wc-banner{margin-bottom:0px !important}.banner-true>.time-view{height:calc(100% - 124px);top:142px}.methods{clear:left;padding:50px 0px;text-align:center}.month-year i{cursor:pointer;font-size:10px}.timepicker-true .wc-month-row{font-size:28px;padding:5px 0px 5px 15px}.timepicker-true .wc-month-row>i,.wc-year-row>i{padding:8px 6px}.timepicker-true .wc-my-sec{padding:16px 2px}.timepicker-true .wc-time-sec{width:48%;padding:25px 0px;margin:0px;cursor:pointer}.timepicker-true .wc-time-sec:hover{color:rgba(255,255,255,0.65)}.timepicker-true .wc-time-sec>.time{width:75%;cursor:pointer}.timepicker-true .time i{display:none}.timepicker-true .time-divider{padding:0px}.timepicker-true .timestate{padding:0px;width:auto;padding-top:7px;font-size:20px;font-weight:300}.year-title{width:35%;float:left;line-height:55px;font-size:18px;color:#fff;background:#1565c0}.year-title i{float:right;padding:13px 10px 7px 0px;font-size:28px}@media (min-width: 365px) and (max-width: 767px){.timepicker-true .wc-date-row{width:54%;padding:20px 5px 10px}.timepicker-true .wc-my-sec{padding:33px 2px 10px;width:46%}.timepicker-true .wc-time-sec{width:100%;padding:0px 0px 15px 0px}.timepicker-true .wc-time-sec>.time{width:35%;float:none;margin:0px auto;font-size:42px}.timepicker-true .wc-month-row{font-size:42px;padding:5px 0px 5px 5px}.timepicker-true .wc-year-row{font-size:24px;padding:15px 0px 0px 5px}.timepicker-true .timestate{font-size:22px;font-weight:100}.months-view,.years-view{top:297px}.banner-true>.time-view{top:240px}.time-view .time{font-size:62px}.cuppa-btn-group{font-size:22px;font-weight:300}.angular-range-slider{height:5px;margin:20px auto 25px auto}.angular-range-slider div.handle{width:45px;height:45px;top:-20px;font-size:26px}.time-view-btn{padding:25px 0px}.button-sm{width:80%;padding:10px;font-size:16px}.cuppa-btn-group>.button{padding:5px 15px !important}}@media (min-width: 768px){.wc-date-popover{width:250px;position:absolute;top:31px;height:auto;left:0;transform:translateX(0)}.wc-day-row{padding:5px 0px;font-size:0.25em}.wc-date-row{font-size:1em;padding:5px}.wc-my-sec{padding:5px 0px}.timepicker-true .wc-my-sec{padding:15px 3px}.wc-month-row{padding:10px 0px 0px 0px;font-size:0.4em}.wc-year-row{font-size:0.3em;padding:0px}.month-year{font-size:14px;line-height:20px;cursor:pointer}.wc-prev,.wc-next{font-size:18px}.wc-details{padding:10px 0px 10px}.year-title{line-height:40px;font-size:16px}.year-title i{padding:11px 10px 10px 0px;font-size:18px}.calendar-header td{padding:5px 0px !important}.winkel-calendar table{font-size:14px}.winkel-calendar table td span{line-height:24px;width:35px;height:35px}.months-view,.years-view{top:40px;width:100%;height:calc(100%)}.banner-true .months-view,.banner-true .years-view{top:165px;height:calc(100% - 128px)}.winkel-calendar table td span{padding:6px}.cal-util>.ok{font-size:14px;padding:10px}.wc-time-sec>.time{font-size:0.35em}.time i{font-size:10px}.wc-time-sec>.timestate{font-size:16px}.wc-month-row>div:nth-child(1),.wc-year-row>div:nth-child(1){min-width:35px}.wc-month-row>i,.wc-year-row>i{font-size:8px}.cal-util{position:relative}.banner-true>.time-view{top:159px}.timepicker-true .wc-month-row{padding:6px 0px 0px 0px;font-size:18px}.timepicker-true .wc-year-row{padding:0px 0px 0px 0px;font-size:16px}}.time-view h5{text-align:left;width:80%;margin:0px auto;padding:5px 0px;font-weight:400}.cuppa-btn-group{display:inline-flex}.cuppa-btn-group>.active{background:#1565c0 !important;color:#fff !important}.cuppa-btn-group>.button{border:1px solid #1565c0;background:#fff;border-radius:3px;float:left;margin:0px;align-items:initial;color:#1565c0;width:auto;padding:5px 10px}.cuppa-btn-group>.button:first-child{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.cuppa-btn-group>.button:last-child{border-top-left-radius:0px;border-bottom-left-radius:0px}.slider{width:200px;height:5px;background:#ccc;border-radius:5px;margin:12px auto;position:relative}.slider>.circle{width:20px;height:20px;background:#fff;position:absolute;top:-8px;border-radius:20px;left:60px;box-shadow:0px 0px 5px #ccc;cursor:pointer}input[type='number']{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}\n    "],
          providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
        }]
      }];
      /** @nocollapse */

      DatePicker.ctorParameters = function () {
        return [];
      };

      DatePicker.propDecorators = {
        'settings': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'onDateSelect': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      return DatePicker;
    }(); //# sourceMappingURL=datepicker.component.js.map

    /***/

  },

  /***/
  "./node_modules/angular2-datetimepicker/datepicker.module.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/angular2-datetimepicker/datepicker.module.js ***!
    \*******************************************************************/

  /*! exports provided: AngularDateTimePickerModule */

  /***/
  function node_modulesAngular2DatetimepickerDatepickerModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularDateTimePickerModule", function () {
      return AngularDateTimePickerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _datepicker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./datepicker.component */
    "./node_modules/angular2-datetimepicker/datepicker.component.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AngularDateTimePickerModule =
    /** @class */
    function () {
      function AngularDateTimePickerModule() {}

      AngularDateTimePickerModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          declarations: [_datepicker_component__WEBPACK_IMPORTED_MODULE_2__["DatePicker"]],
          exports: [_datepicker_component__WEBPACK_IMPORTED_MODULE_2__["DatePicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
        }]
      }];
      /** @nocollapse */

      AngularDateTimePickerModule.ctorParameters = function () {
        return [];
      };

      return AngularDateTimePickerModule;
    }(); //# sourceMappingURL=datepicker.module.js.map

    /***/

  },

  /***/
  "./node_modules/angular2-datetimepicker/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/angular2-datetimepicker/index.js ***!
    \*******************************************************/

  /*! exports provided: DatePicker, AngularDateTimePickerModule */

  /***/
  function node_modulesAngular2DatetimepickerIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _datepicker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./datepicker.component */
    "./node_modules/angular2-datetimepicker/datepicker.component.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DatePicker", function () {
      return _datepicker_component__WEBPACK_IMPORTED_MODULE_0__["DatePicker"];
    });
    /* harmony import */


    var _datepicker_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./datepicker.module */
    "./node_modules/angular2-datetimepicker/datepicker.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularDateTimePickerModule", function () {
      return _datepicker_module__WEBPACK_IMPORTED_MODULE_1__["AngularDateTimePickerModule"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js ***!
    \**********************************************************************/

  /*! exports provided: LazyLoadImageDirective, LazyLoadImageModule, intersectionObserverPreset, scrollPreset */

  /***/
  function node_modulesNgLazyloadImageFesm2015NgLazyloadImageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyLoadImageDirective", function () {
      return LazyLoadImageDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyLoadImageModule", function () {
      return LazyLoadImageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "intersectionObserverPreset", function () {
      return intersectionObserverPreset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollPreset", function () {
      return scrollPreset;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var cssClassNames = {
      loaded: 'ng-lazyloaded',
      loading: 'ng-lazyloading',
      failed: 'ng-failed-lazyloaded'
    };

    function removeCssClassName(element, cssClassName) {
      element.className = element.className.replace(cssClassName, '');
    }

    function addCssClassName(element, cssClassName) {
      if (!element.className.includes(cssClassName)) {
        element.className += " ".concat(cssClassName);
      }
    }

    function hasCssClassName(element, cssClassName) {
      return element.className && element.className.includes(cssClassName);
    }

    function isWindowDefined() {
      return typeof window !== 'undefined';
    }

    function isChildOfPicture(element) {
      return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
    }

    function isImageElement(element) {
      return element.nodeName.toLowerCase() === 'img';
    }

    function setImage(element, imagePath, useSrcset) {
      if (isImageElement(element)) {
        if (useSrcset) {
          element.srcset = imagePath;
        } else {
          element.src = imagePath;
        }
      } else {
        element.style.backgroundImage = "url('".concat(imagePath, "')");
      }

      return element;
    }

    function setSources(attrName) {
      return function (image) {
        var sources = image.parentElement.getElementsByTagName('source');

        for (var i = 0; i < sources.length; i++) {
          var attrValue = sources[i].getAttribute(attrName);

          if (attrValue) {
            sources[i].srcset = attrValue;
          }
        }
      };
    }

    var setSourcesToDefault = setSources('defaultImage');
    var setSourcesToLazy = setSources('lazyLoad');
    var setSourcesToError = setSources('errorImage');

    function setImageAndSources(setSourcesFn) {
      return function (element, imagePath, useSrcset) {
        if (isImageElement(element) && isChildOfPicture(element)) {
          setSourcesFn(element);
        }

        if (imagePath) {
          setImage(element, imagePath, useSrcset);
        }
      };
    }

    var setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
    var setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
    var setImageAndSourcesToError = setImageAndSources(setSourcesToError);

    var end = function end(_ref) {
      var element = _ref.element;
      return addCssClassName(element, cssClassNames.loaded);
    };

    var loadImage = function loadImage(_ref2) {
      var element = _ref2.element,
          useSrcset = _ref2.useSrcset,
          imagePath = _ref2.imagePath;
      var img;

      if (isImageElement(element) && isChildOfPicture(element)) {
        var parentClone = element.parentNode.cloneNode(true);
        img = parentClone.getElementsByTagName('img')[0];
        setSourcesToLazy(img);
        setImage(img, imagePath, useSrcset);
      } else {
        img = new Image();

        if (isImageElement(element) && element.sizes) {
          img.sizes = element.sizes;
        }

        if (useSrcset) {
          img.srcset = imagePath;
        } else {
          img.src = imagePath;
        }
      }

      if (img.decode) {
        return img.decode().then(function () {
          return imagePath;
        });
      }

      return new Promise(function (resolve, reject) {
        img.onload = function () {
          return resolve(imagePath);
        };

        img.onerror = function () {
          return reject(null);
        };
      });
    };

    var setErrorImage = function setErrorImage(_ref3) {
      var element = _ref3.element,
          errorImagePath = _ref3.errorImagePath,
          useSrcset = _ref3.useSrcset;
      setImageAndSourcesToError(element, errorImagePath, useSrcset);
      addCssClassName(element, cssClassNames.failed);
    };

    var setLoadedImage = function setLoadedImage(_ref4) {
      var element = _ref4.element,
          imagePath = _ref4.imagePath,
          useSrcset = _ref4.useSrcset;
      setImageAndSourcesToLazy(element, imagePath, useSrcset);
    };

    var setup = function setup(_ref5) {
      var element = _ref5.element,
          defaultImagePath = _ref5.defaultImagePath,
          useSrcset = _ref5.useSrcset;
      setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);

      if (hasCssClassName(element, cssClassNames.loaded)) {
        removeCssClassName(element, cssClassNames.loaded);
      }
    };

    var sharedPreset = {
      "finally": end,
      loadImage: loadImage,
      setErrorImage: setErrorImage,
      setLoadedImage: setLoadedImage,
      setup: setup
    };

    var Rect =
    /*#__PURE__*/
    function () {
      function Rect(left, top, right, bottom) {
        _classCallCheck(this, Rect);

        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
      }

      _createClass(Rect, [{
        key: "inflate",
        value: function inflate(inflateBy) {
          this.left -= inflateBy;
          this.top -= inflateBy;
          this.right += inflateBy;
          this.bottom += inflateBy;
        }
      }, {
        key: "intersectsWith",
        value: function intersectsWith(rect) {
          return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
        }
      }, {
        key: "getIntersectionWith",
        value: function getIntersectionWith(rect) {
          var left = Math.max(this.left, rect.left);
          var top = Math.max(this.top, rect.top);
          var right = Math.min(this.right, rect.right);
          var bottom = Math.min(this.bottom, rect.bottom);

          if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
          } else {
            return Rect.empty;
          }
        }
      }], [{
        key: "fromElement",
        value: function fromElement(element) {
          var _element$getBoundingC = element.getBoundingClientRect(),
              left = _element$getBoundingC.left,
              top = _element$getBoundingC.top,
              right = _element$getBoundingC.right,
              bottom = _element$getBoundingC.bottom;

          if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
          } else {
            return new Rect(left, top, right, bottom);
          }
        }
      }, {
        key: "fromWindow",
        value: function fromWindow(_window) {
          return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
        }
      }]);

      return Rect;
    }();

    Rect.empty = new Rect(0, 0, 0, 0);
    var scrollListeners = new WeakMap();

    function sampleObservable(obs, scheduler) {
      return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["sampleTime"])(100, scheduler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
    } // Only create one scroll listener per target and share the observable.
    // Typical, there will only be one observable per application


    var getScrollListener = function getScrollListener(scrollTarget) {
      if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
        if (isWindowDefined()) {
          console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
        }

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
      }

      var scrollListener = scrollListeners.get(scrollTarget);

      if (scrollListener) {
        return scrollListener;
      }

      var srollEvent = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
        var eventName = 'scroll';

        var handler = function handler(event) {
          return observer.next(event);
        };

        var options = {
          passive: true,
          capture: false
        };
        scrollTarget.addEventListener(eventName, handler, options);
        return function () {
          return scrollTarget.removeEventListener(eventName, handler, options);
        };
      });
      var listener = sampleObservable(srollEvent);
      scrollListeners.set(scrollTarget, listener);
      return listener;
    };

    var isVisible = function isVisible(_ref6) {
      var element = _ref6.element,
          offset = _ref6.offset,
          scrollContainer = _ref6.scrollContainer;
      var getWindow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return window;
      };
      var elementBounds = Rect.fromElement(element);

      if (elementBounds === Rect.empty) {
        return false;
      }

      var windowBounds = Rect.fromWindow(getWindow());
      elementBounds.inflate(offset);

      if (scrollContainer) {
        var scrollContainerBounds = Rect.fromElement(scrollContainer);
        var intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
        return elementBounds.intersectsWith(intersection);
      } else {
        return elementBounds.intersectsWith(windowBounds);
      }
    };

    var getObservable = function getObservable(attributes) {
      if (attributes.scrollObservable) {
        return attributes.scrollObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
      }

      if (attributes.scrollContainer) {
        return getScrollListener(attributes.scrollContainer);
      }

      return getScrollListener(isWindowDefined() ? window : undefined);
    };

    var scrollPreset = Object.assign({}, sharedPreset, {
      isVisible: isVisible,
      getObservable: getObservable
    });

    function cretateHooks(options) {
      if (!options) {
        return scrollPreset;
      }

      var hooks = {};

      if (options.preset) {
        Object.assign(hooks, options.preset);
      } else {
        Object.assign(hooks, scrollPreset);
      }

      Object.keys(options).filter(function (key) {
        return key !== 'preset';
      }).forEach(function (key) {
        hooks[key] = options[key];
      });
      return hooks;
    }

    function lazyLoadImage(hookSet, attributes) {
      return function (scrollObservable) {
        return scrollObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return hookSet.isVisible({
            element: attributes.element,
            event: event,
            offset: attributes.offset,
            scrollContainer: attributes.scrollContainer
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
          return hookSet.loadImage(attributes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (imagePath) {
          return hookSet.setLoadedImage({
            element: attributes.element,
            imagePath: imagePath,
            useSrcset: attributes.useSrcset
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
          return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
          hookSet.setErrorImage(attributes);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
          return hookSet["finally"](attributes);
        }));
      };
    }

    var LazyLoadImageDirective =
    /*#__PURE__*/
    function () {
      function LazyLoadImageDirective(el, ngZone, platformId, options) {
        _classCallCheck(this, LazyLoadImageDirective);

        this.onLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Callback when an image is loaded

        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        this.platformId = platformId;
        this.hooks = cretateHooks(options);
      }

      _createClass(LazyLoadImageDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset ? this.offset | 0 : 0,
            scrollContainer: this.scrollTarget,
            scrollObservable: this.scrollObservable
          });
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this = this;

          // Disable lazy load image in server side
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
            return null;
          }

          this.ngZone.runOutsideAngular(function () {
            _this.scrollSubscription = _this.propertyChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (attributes) {
              return _this.hooks.setup(attributes);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (attributes) {
              return _this.hooks.getObservable(attributes).pipe(lazyLoadImage(_this.hooks, attributes));
            })).subscribe(function (success) {
              return _this.onLoad.emit(success);
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
          }
        }
      }]);

      return LazyLoadImageDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lazyLoad'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], LazyLoadImageDirective.prototype, "lazyImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], LazyLoadImageDirective.prototype, "defaultImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], LazyLoadImageDirective.prototype, "errorImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LazyLoadImageDirective.prototype, "scrollTarget", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], LazyLoadImageDirective.prototype, "scrollObservable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LazyLoadImageDirective.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], LazyLoadImageDirective.prototype, "useSrcset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], LazyLoadImageDirective.prototype, "onLoad", void 0);
    LazyLoadImageDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[lazyLoad]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('options')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object, Object])], LazyLoadImageDirective);
    var LazyLoadImageModule_1;

    var LazyLoadImageModule = LazyLoadImageModule_1 =
    /*#__PURE__*/
    function () {
      function LazyLoadImageModule() {
        _classCallCheck(this, LazyLoadImageModule);
      }

      _createClass(LazyLoadImageModule, null, [{
        key: "forRoot",
        value: function forRoot(options) {
          return {
            ngModule: LazyLoadImageModule_1,
            providers: [{
              provide: 'options',
              useValue: options
            }]
          };
        }
      }]);

      return LazyLoadImageModule;
    }();

    LazyLoadImageModule = LazyLoadImageModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [LazyLoadImageDirective],
      exports: [LazyLoadImageDirective]
    })], LazyLoadImageModule);
    var observers = new WeakMap();
    var intersectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

    function loadingCallback(entrys) {
      entrys.forEach(function (entry) {
        return intersectionSubject.next(entry);
      });
    }

    var getIntersectionObserver = function getIntersectionObserver(attributes) {
      if (!attributes.scrollContainer && !isWindowDefined()) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
      }

      var options = {
        root: attributes.scrollContainer
      };

      if (attributes.offset) {
        options.rootMargin = "".concat(attributes.offset, "px");
      }

      var scrollContainer = attributes.scrollContainer || window;
      var observer = observers.get(scrollContainer);

      if (!observer) {
        observer = new IntersectionObserver(loadingCallback, options);
        observers.set(scrollContainer, observer);
      }

      observer.observe(attributes.element);
      return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (obs) {
        var subscription = intersectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (entry) {
          return entry.target === attributes.element;
        })).subscribe(obs);
        return function () {
          subscription.unsubscribe();
          observer.unobserve(attributes.element);
        };
      });
    };

    var isVisible$1 = function isVisible$1(_ref7) {
      var event = _ref7.event;
      return event.isIntersecting;
    };

    var getObservable$1 = function getObservable$1(attributes) {
      var _getInterObserver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getIntersectionObserver;

      if (attributes.scrollObservable) {
        return attributes.scrollObservable;
      }

      return _getInterObserver(attributes);
    };

    var intersectionObserverPreset = Object.assign({}, sharedPreset, {
      isVisible: isVisible$1,
      getObservable: getObservable$1
    }); //# sourceMappingURL=ng-lazyload-image.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js":
  /*!**************************************************************!*\
    !*** ./node_modules/ngx-countdown/fesm2015/ngx-countdown.js ***!
    \**************************************************************/

  /*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */

  /***/
  function node_modulesNgxCountdownFesm2015NgxCountdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownComponent", function () {
      return CountdownComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function () {
      return CountdownGlobalConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownModule", function () {
      return CountdownModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownStatus", function () {
      return CountdownStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownTimer", function () {
      return CountdownTimer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CountdownStatus;

    (function (CountdownStatus) {
      CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
      CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
      CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
      CountdownStatus[CountdownStatus["done"] = 3] = "done";
    })(CountdownStatus || (CountdownStatus = {}));

    var CountdownTimer =
    /*#__PURE__*/
    function () {
      function CountdownTimer(ngZone) {
        _classCallCheck(this, CountdownTimer);

        this.ngZone = ngZone;
        this.fns = [];
        this.commands = [];
        this.ing = false;
      }

      _createClass(CountdownTimer, [{
        key: "start",
        value: function start() {
          var _this2 = this;

          if (this.ing === true) return;
          this.ing = true;
          this.nextTime = +new Date();
          this.ngZone.runOutsideAngular(function () {
            _this2.process();
          });
        }
      }, {
        key: "process",
        value: function process() {
          var _this3 = this;

          while (this.commands.length) {
            this.commands.shift()();
          }

          var diff = +new Date() - this.nextTime;
          var count = 1 + Math.floor(diff / 100);
          diff = 100 - diff % 100;
          this.nextTime += 100 * count;

          for (var i = 0, len = this.fns.length; i < len; i += 2) {
            var frequency = this.fns[i + 1]; // 100/s

            if (0 === frequency) {
              this.fns[i](count); // 1000/s
            } else {
              // 先把末位至0，再每次加2
              frequency += 2 * count - 1;
              var step = Math.floor(frequency / 20);

              if (step > 0) {
                this.fns[i](step);
              } // 把末位还原成1


              this.fns[i + 1] = frequency % 20 + 1;
            }
          }

          if (!this.ing) return;
          setTimeout(function () {
            return _this3.process();
          }, diff);
        }
      }, {
        key: "add",
        value: function add(fn, frequency) {
          var _this4 = this;

          this.commands.push(function () {
            _this4.fns.push(fn);

            _this4.fns.push(frequency === 1000 ? 1 : 0);

            _this4.ing = true;
          });
          return this;
        }
      }, {
        key: "remove",
        value: function remove(fn) {
          var _this5 = this;

          this.commands.push(function () {
            var i = _this5.fns.indexOf(fn);

            if (i !== -1) {
              _this5.fns.splice(i, 2);
            }

            _this5.ing = _this5.fns.length > 0;
          });
          return this;
        }
      }]);

      return CountdownTimer;
    }();

    CountdownTimer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CountdownTimer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CountdownTimer);

    var CountdownGlobalConfig = function CountdownGlobalConfig(locale) {
      var _this6 = this;

      _classCallCheck(this, CountdownGlobalConfig);

      this.locale = locale;
      this.demand = false;
      this.leftTime = 0;
      this.format = 'HH:mm:ss';
      this.timezone = '+0000';

      this.formatDate = function (_ref8) {
        var date = _ref8.date,
            formatStr = _ref8.formatStr,
            timezone = _ref8.timezone;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(date), formatStr, _this6.locale, timezone || _this6.timezone || '+0000');
      };
    };

    CountdownGlobalConfig.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    CountdownGlobalConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function CountdownGlobalConfig_Factory() {
        return new CountdownGlobalConfig(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
      },
      token: CountdownGlobalConfig,
      providedIn: "root"
    });
    CountdownGlobalConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], CountdownGlobalConfig);

    var CountdownComponent =
    /*#__PURE__*/
    function () {
      function CountdownComponent(locale, timer, defCog, cdr, ngZone) {
        _classCallCheck(this, CountdownComponent);

        this.locale = locale;
        this.timer = timer;
        this.defCog = defCog;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.frequency = 1000;
        this._notify = {};
        this._left = 0;
        this.status = CountdownStatus.ing;
        this.isDestroy = false;
        this.i = {};
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CountdownComponent, [{
        key: "begin",

        /**
         * Start countdown, you must manually call when `demand: false`
         */
        value: function begin() {
          this.status = CountdownStatus.ing;
          this.callEvent('start');
        }
        /**
         * Restart countdown
         */

      }, {
        key: "restart",
        value: function restart() {
          if (this.status !== CountdownStatus.stop) {
            this.destroy();
          }

          this.init();
          this.callEvent('restart');
        }
        /**
         * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
         */

      }, {
        key: "stop",
        value: function stop() {
          if (this.status === CountdownStatus.stop) {
            return;
          }

          this.status = CountdownStatus.stop;
          this.destroy();
          this.callEvent('stop');
        }
        /**
         * Pause countdown, you can use `resume` to recover again
         */

      }, {
        key: "pause",
        value: function pause() {
          if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) return;
          this.status = CountdownStatus.pause;
          this.callEvent('pause');
        }
        /**
         * Resume countdown
         */

      }, {
        key: "resume",
        value: function resume() {
          if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) return;
          this.status = CountdownStatus.ing;
          this.callEvent('resume');
        }
      }, {
        key: "callEvent",
        value: function callEvent(action) {
          this.event.emit({
            action: action,
            left: this._left,
            status: this.status,
            text: this.i.text
          });
        }
      }, {
        key: "init",
        value: function init() {
          var _this7 = this;

          var locale = this.locale,
              defCog = this.defCog;
          var config = this.config = Object.assign({}, new CountdownGlobalConfig(locale), defCog, this.config); // tslint:disable-next-line: no-bitwise

          var frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
          this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
          this.getLeft(); // bind reflow to me

          var _reflow = this.reflow;

          this.reflow = function () {
            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _reflow.apply(_this7, [count, force]);
          };

          if (Array.isArray(config.notify)) {
            config.notify.forEach(function (time) {
              if (time < 1) throw new Error("The notify config must be a positive integer.");
              time = time * 1000;
              time = time - time % frq;
              _this7._notify[time] = true;
            });
          }

          this.timer.add(this.reflow, frq).start();
          this.reflow(0, true);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.timer.remove(this.reflow);
          return this;
        }
        /**
         * 更新时钟
         */

      }, {
        key: "reflow",
        value: function reflow() {
          var _this8 = this;

          var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (this.isDestroy) return;
          var status = this.status,
              config = this.config,
              _notify = this._notify;
          if (!force && status !== CountdownStatus.ing) return;
          var value = this._left = this._left - this.frequency * count;
          this.i = {
            value: value,
            text: config.formatDate({
              date: value,
              formatStr: config.format,
              timezone: config.timezone
            })
          };

          if (typeof config.prettyText === 'function') {
            this.i.text = config.prettyText(this.i.text);
          }

          this.cdr.detectChanges();

          if (config.notify === 0 || _notify[value]) {
            this.ngZone.run(function () {
              _this8.callEvent('notify');
            });
          }

          if (value < 1) {
            this.ngZone.run(function () {
              _this8.status = CountdownStatus.done;

              _this8.callEvent('done');

              _this8.destroy();
            });
          }
        }
        /**
         * 获取倒计时剩余帧数
         */

      }, {
        key: "getLeft",
        value: function getLeft() {
          var config = this.config,
              frequency = this.frequency;
          var left = config.leftTime * 1000;
          var end = config.stopTime;

          if (!left && end) {
            left = end - new Date().getTime();
          }

          this._left = left - left % frequency;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();

          if (!this.config.demand) {
            this.begin();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isDestroy = true;
          this.destroy();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.config.firstChange) {
            this.restart();
          }
        }
      }, {
        key: "left",
        get: function get() {
          return this._left;
        }
      }]);

      return CountdownComponent;
    }();

    CountdownComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: CountdownTimer
      }, {
        type: CountdownGlobalConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CountdownComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CountdownComponent.prototype, "render", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CountdownComponent.prototype, "event", void 0);
    CountdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'countdown',
      template: "\n    <ng-container *ngIf=\"!render\">\n      <span [innerHTML]=\"i.text\"></span>\n    </ng-container>\n    <ng-container *ngTemplateOutlet=\"render; context: { $implicit: i }\"></ng-container>\n  ",
      host: {
        '[class.count-down]': 'true'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, CountdownTimer, CountdownGlobalConfig, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CountdownComponent);

    var CountdownModule = function CountdownModule() {
      _classCallCheck(this, CountdownModule);
    };

    CountdownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      providers: [CountdownTimer],
      declarations: [CountdownComponent],
      exports: [CountdownComponent]
    })], CountdownModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-countdown.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/about-order/about-order.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/about-order/about-order.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainAboutOrderAboutOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!orderDetail\" class=\"overlay\">\n    <img src=\"{{loading}}\" class=\"loader image-responsive\" alt=\"Loader\">\n</div>\n\n<div class=\"container pt-5\" >\n  <div class=\"row mb-4\">\n    <div class=\"col-md-8 mx-auto\">\n      <h2>Booking Details</h2>\n\n    </div>\n\n  </div>\n  <div class=\"row\"  *ngIf='!orderDetail'>\n    <div style=\"height: 1000px;\"></div>\n  </div>\n  <div class=\"row\" *ngIf='orderDetail'>\n    <div class=\"col-md-8 col-12 mx-auto card\" id=\"main\">\n\n      <div class=\"row\">\n        <div class=\"col-12\">\n            <h3>{{ orderDetail.subcategory.subcategory }}</h3>\n            <p class=\"booked\">{{ orderDetail.time }}</p>\n          <p class=\"address\"><i class=\"fa fa-map-marker-alt\"></i> {{ orderDetail.address }}</p>\n\n        </div>\n      </div>\n\n      <div class=\"row top\" id=\"s-main\">\n        <div class=\"col-12 mt-3\">\n          <p class=\"live\"><span class=\"left\">Status : </span>\n            <span class=\"right\" *ngIf='orderDetail.service_status == \"Pending\"'\n              style=\"color: rgb(252, 169, 16)\">{{ orderDetail.service_status }} !!</span>\n            <span class=\"right\" *ngIf='orderDetail.service_status == \"Accepted\"'\n              style=\"color: rgb(5, 219, 5)\">{{ orderDetail.service_status }} !!</span>\n            <span class=\"right\" *ngIf='orderDetail.service_status == \"Completed\"'\n              style=\"color: rgb(4, 141, 4)\">{{ orderDetail.service_status }} !!</span>\n            <span class=\"right\" *ngIf='orderDetail.service_status == \"Declined\"'\n              style=\"color: red\">{{ orderDetail.service_status }} !!</span>\n            <span class=\"right\" *ngIf='orderDetail.service_status == \"Cancelled\"'\n              style=\"color: red\">{{ orderDetail.service_status }} !!</span>\n          </p>\n          <p class=\"live\" *ngIf='orderDetail.service_time != null'><span class=\"left\">Date and Time : </span><span\n              class=\"right\">{{ orderDetail.service_time }}</span></p>\n          <!-- <p class=\"live\"><span class=\"left\">Time : </span><span class=\"right\">03:00 p.m.</span></p> -->\n        </div>\n      </div>\n\n      <div class=\"row professional mt-3\" id=\"p-main\" *ngIf='orderDetail.professional_assigned != null'>\n        <div class=\"col-4 mx-auto my-auto text-center\">\n          <img class=\"image\" src=\"{{orderDetail.professional_assigned.photo}}\">\n        </div>\n        <div class=\"col-8 mt-2 details\">\n          <h5>{{ orderDetail.professional_assigned.name }}</h5>\n          <span>Location: {{ orderDetail.professional_assigned.address }}</span><br>\n          <span>Jobs Done: {{ orderDetail.professional_assigned.job_completed }}</span><br>\n          <span>Mobile: {{ orderDetail.professional_assigned.contact_number1 }}</span>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf='orderDetail.response.form'>\n        <div class=\"col-12\">\n          <div class=\"row pt-5 head\">\n            <div class=\"col-4 text-center\">\n              <p>ITEM</p>\n            </div>\n            <div class=\"col-4 text-center\">\n              <p>QUANTITY</p>\n            </div>\n            <div class=\"col-4 text-center\">\n              <p>COST</p>\n            </div>\n          </div>\n\n          <div class=\"row content\" *ngFor='let option of orderDetail.response.form.options'>\n            <div class=\"col-4 text-center\">\n              <p>{{ option.choice }}</p>\n            </div>\n            <div class=\"col-4 text-center\">\n              <p>{{ option.quantity }}</p>\n            </div>\n            <div class=\"col-4 text-center\">\n              <p> <i class=\"fas fa-rupee-sign\"></i> {{ option.cost }}</p>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"row content top pt-2\">\n            <div class=\"col-4 text-center\">\n              <p class=\"head\">Total Cost</p>\n            </div>\n            <div class=\"col-4 text-center\">\n              <p></p>\n            </div>\n            <div class=\"col-4 text-center\">\n              <p> <i class=\"fas fa-rupee-sign\"></i> {{ orderDetail.response.form.total }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"mx-auto mt-4 row\">\n        <button class=\"btn mx-2\" type=\"button\" (click)='onCancel(orderDetail.id)'\n          style=\"background-color: rgb(248, 82, 82)\" *ngIf='orderDetail.service_status == \"Pending\"'>Cancel\n          Booking</button>\n        <button class=\"btn mx-2\" type=\"button\" (click)='onMyBooking()'>View all Bookings</button>\n      </div>\n\n    </div>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/about-us/about-us.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/about-us/about-us.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n        <img class=\"image\" src=\"{{about}}\" alt=\"wallpaper\">\n    </div>\n\n    <div class=\"container  about\">\n            <div class=\"col-md-8 col-11 mx-auto text-center pt-4\">\n                <h1 class=\"head\">About Us</h1>\n            </div>\n    </div>\n    <div class=\"container content\">\n        <div class=\"row\">\n                <div class=\"col-md-8 col-11 mx-auto \">\n                    <h2 class=\"heading\">Our Story</h2>\n  <hr>\n\n                </div>\n            <div class=\"col-md-8 col-11 mx-auto py-4\">\n                <p class=\"text\">WOFO24 is a startup in INDIA. It is a marketplace for\n                        home services.Our home services include Painting,\n                        Beauty Services at Home, Appliance Repairs, Pest\n                        Control, Plumbing/Electrical/Carpentry services & a lot\n                        more. Customer can book services with the help of our\n                        mobile app or website. We deliver these services at the\n                        doorstep of customer by our verified and trained\n                        professional.Currently the services are available across\n                        Ghaziabad.</p>\n\n                <p class=\"text\">If you have any complaints / feedback / suggestions, please write to us at\n                        info@wofo24com .</p>\n            </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dev-team/dev-team.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dev-team/dev-team.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDevTeamDevTeamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12 text-center py-4\">\n        <span class=\"dev\"><b> Developer Team</b></span>\n    </div>\n</div>\n<div class=\"backk\">\n    <div class=\"container-fluid main mb-5\">\n        <div class=\"row mt-5 pb-5\">\n            <div class=\"col-md-7 col-sm-8 col-11 mx-auto order-2\">\n                <div class=\"row no-gutters\">\n                    <div class=\"col-md-4 col-12 first mx-auto\">\n                        <div class=\"flip-card my-2\">\n                            <div class=\"flip-card-inner\">\n                                <div class=\"flip-card-front\">\n                                    <img class=\"image\" src=\"{{vinayak}}\" alt=\"Avatar\">\n                                    <span class=\"front\"><b> Vinayak Gupta </b></span>\n                                </div>\n                                <div class=\"flip-card-back\">\n                                    <h5 class=\"name\"><b> UI/UX Developer</b></h5>\n\n                                    <!-- <div class=\"row float-right mr-2\" style=\"margin-top:70px;\"> -->\n                                        <a target=\"__blank\" href=\"https://github.com/vinayakg709\" class=\"mx-2 ml-5\"><i\n                                                class=\"fab fa-github\"></i></a>\n                                        <a target=\"__blank\" href=\"https://www.linkedin.com/in/vinayak-gupta-95385a172/\" class=\"mx-2\"><i\n                                                class=\"fab fa-linkedin-in\"></i></a>\n                                    <!-- </div> -->\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"flip-card my-2\">\n                            <div class=\"flip-card-inner\">\n                                <div class=\"flip-card-front\">\n                                    <img class=\"image\" src=\"{{utkarsh}}\" alt=\"Avatar\">\n                                    <span class=\"front\"><b> Utkarsh Singh </b></span>\n                                </div>\n                                <div class=\"flip-card-back\">\n                                    <h5 class=\"name\"><b> UI/UX Developer</b></h5>\n\n                                    <!-- <div class=\"row float-right mr-2\" style=\"margin-top: 70px;\"> -->\n                                        <a target=\"__blank\" href=\"https://github.com/utkarsh6799/\" class=\"mx-2 ml-5\"><i\n                                                class=\"fab fa-github\"></i></a>\n                                        <a target=\"__blank\" href=\"https://www.linkedin.com/in/utkarsh-singh-6a088b175/\" class=\"mx-2\"><i\n                                                class=\"fab fa-linkedin-in\"></i></a>\n                                    <!-- </div> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-12 second\">\n                        <div class=\"flip-card my-2\">\n                            <div class=\"flip-card-inner\">\n                                <div class=\"flip-card-front\">\n                                    <img class=\"image\" src=\"{{pramod}}\" alt=\"Avatar\">\n                                    <span class=\"front\"><b> Pramod Jaiswal</b></span>\n                                </div>\n                                <a href=\"/\"><div class=\"flip-card-back\">\n                                    <h5 class=\"name\"><b> Python Developer</b></h5>\n                                    <!-- <div class=\"row float-right mr-2\" style=\"margin-top: 70px;\"> -->\n                                        <a target=\"__blank\" href=\"https://github.com/Stark-Pramod\" class=\"mx-2 ml-5\"><i\n                                                class=\"fab fa-github\"></i></a>\n                                        <a target=\"__blank\" href=\"https://www.linkedin.com/in/pramod-jaiswal-9224a2149/\" class=\"mx-2\"><i\n                                                class=\"fab fa-linkedin-in\"></i></a>\n                                    <!-- </div> -->\n                                </div></a>\n                            </div>\n                        </div>\n\n                        <div class=\"flip-card my-2\">\n                            <div class=\"flip-card-inner\">\n                                <div class=\"flip-card-front\">\n                                    <img class=\"image\" src=\"{{harsh}}\" alt=\"Avatar\">\n                                    <span class=\"front\"><b> Harsh Singh</b></span>\n                                </div>\n                                <div class=\"flip-card-back\">\n                                    <h5 class=\"name\"><b> Python Developer</b></h5>\n\n                                    <!-- <div class=\"row float-right mr-2\" style=\"margin-top: 70px;\"> -->\n                                        <a target=\"__blank\" href=\"https://github.com/harshs14/\" class=\"mx-2 ml-5\"><i\n                                                class=\"fab fa-github\"></i></a>\n                                        <a target=\"__blank\" href=\"https://www.linkedin.com/in/harsh-singh-a64b2017b/\" class=\"mx-2\"><i\n                                                class=\"fab fa-linkedin-in\"></i></a>\n                                    <!-- </div> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-12 third\">\n                        <div class=\"flip-card my-2\">\n                            <div class=\"flip-card-inner\">\n                                <div class=\"flip-card-front\">\n                                    <img class=\"image\" src=\"{{murli}}\" alt=\"Avatar\">\n                                    <span class=\"front\"><b> Murli Goel</b></span>\n                                </div>\n                                <div class=\"flip-card-back\">\n                                    <h5 class=\"name\"><b> Android Developer</b></h5>\n\n                                    <!-- <div class=\"row float-right mr-2\" style=\"margin-top: 70px;\"> -->\n                                        <a target=\"__blank\" href=\"https://github.com/murligoel\" class=\"mx-2 ml-5\"><i\n                                                class=\"fab fa-github\"></i></a>\n                                        <a target=\"__blank\" href=\"https://www.linkedin.com/in/murli-goel-32691616a/\" class=\"mx-2\"><i\n                                                class=\"fab fa-linkedin-in\"></i></a>\n                                    <!-- </div> -->\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"flip-card my-2\">\n                            <div class=\"flip-card-inner\">\n                                <div class=\"flip-card-front\">\n                                    <img class=\"image\" src=\"{{alok}}\" alt=\"Avatar\">\n                                    <span class=\"front\"><b> Alok Ranjan </b></span>\n                                </div>\n                                <div class=\"flip-card-back\">\n                                    <h5 class=\"name\"><b> Android Developer</b></h5>\n                                    <!-- <div class=\"row float-right mr-2\" style=\"margin-top: 70px;\"> -->\n                                        <a target=\"__blank\" href=\"https://github.com/alokr04\" class=\"mx-2 ml-5\"><i\n                                                class=\"fab fa-github\"></i></a>\n                                        <a target=\"__blank\" href=\"https://www.linkedin.com/in/alokr04/\" class=\"mx-2\"><i\n                                                class=\"fab fa-linkedin-in\"></i></a>\n                                    <!-- </div> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"col-md-5 col-12 my-auto mx-auto text\">\n                <div class=\"row\">\n\n                    <div class=\"col-md-8 col-12 mx-auto card order-1\">\n                        <div class=\"mx-auto text-center\">\n                            <img class=\"si text-center\" src=\"{{silogo}}\">\n                        </div>\n\n                        <p class=\"si-text pt-3\">Software Incubator is the research and development center established\n                            within the portal of Ajay Kumar Garg Engineering College. We have set a foothold in the areas of\n                            software development, web-based enterprise solutions, mobile development, web application,\n                            and website development. We focus on high integrity and commitment, quality and rigor at every\n                            stage of work, passion for excellence, focus on customer satisfaction. We are an equal opportunity\n                            organization that motivates every member to work with passion and commitment.</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/footer/footer.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/footer/footer.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"col-md-4  mx-auto text-md-left text-center\">\n            <h5 class=\"font-weight-bold text-uppercase mt-5 mb-4 head\">Services</h5>\n            <ul class=\"list categories\">\n              <li *ngFor='let category of categories'><a routerLink = '/subcategory/{{ category.category }}/{{ category.id }}'>{{ category.category }}</a></li>\n            </ul>\n          </div>\n\n\n      <div class=\"col-md-4  mx-auto text-md-left text-center\">\n        <h5 class=\"font-weight-bold text-uppercase mt-5 mb-4 head\">Info</h5>\n        <ul class=\"list\">\n          <li><a routerLink = '/'>Home</a></li>\n          <li><a routerLink = '/about-us'>About Us</a></li>\n          <li><a routerLink fragment=\"contactus\">Contact</a></li>\n          <li><a routerLink = '/privacy-policy'>Privacy Policy</a></li>\n          <li><a href=\"https://play.google.com/store/apps/details?id=com.wofo.wofo_24&hl=en\" target=\"__blank\">Download App</a></li>\n          <li><a routerLink = '/development-team'>Development Team</a></li>\n        </ul>\n      </div>\n\n     \n\n        <div class=\"col-md-4 mx-auto text-md-left text-center\">\n            <h5 class=\"font-weight-bold text-uppercase mt-5 mb-4 head\">WOFO 24</h5>\n            <p class=\"wofo\">WOFO24 is the most convienent and hassle free way to get your household work done.With handcrafted mobile solutions, unmatched service quality, and background verified providers who are always willing to lend a hand, we aim to aid in solving all your household problems with efficiency, ease and most importantly, a personal touch.</p>\n          \n          </div>\n    </div>\n  </div>\n\n  <div class=\"container  footer-down\">\n  <div class=\"row py-3\">\n    <div class=\"col-md-6 col-12 mt-2 text-md-left text-center\">\n      <!-- <img src=\"{{logo}}\">\n      <span> <i class=\"far fa-copyright\"></i></span><span class=\"text\"> 2019 Wofo24 India Pvt. Limited.All rights reserved</span> -->\n    </div>\n    <div class=\"col-md-6 col-10 icons mx-auto text-md-right text-center mt-md-0 mt-3\">\n        <ul>\n          <li><a target=\"__blank\" href=\"https://www.instagram.com/WOFO24/\" ><i class=\"fab fa-instagram\"></i></a></li>\n          <li><a target=\"__blank\" href=\"https://www.facebook.com/wofo24/?ti=as\"><i class=\"fab fa-facebook-f\"></i></a></li>\n          <li><a target=\"__blank\" href=\"https://www.linkedin.com/company/wofo24\"><i class=\"fab fa-linkedin-in\"></i></a></li>\n          <li><a target=\"__blank\" href=\"https://twitter.com/wofo24india\"><i class=\"fab fa-twitter\"></i></a></li>\n        </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"row py-3 si\">\n  <div class=\"col-12 text-center\">\n    <!-- <span class=\"silink\">Designed and Developed by:</span><span class=\"silink\"> <a target=\"_blank\" href=\"http://silive.in/\" class=\" mx-2\" ><img src=\"{{silogoW}}\" alt=\"si logo\" style=\"height: 1rem;\"> <b> Software Incubator </b></a></span> -->\n    <span class=\"silink\">  <i class=\"far fa-copyright\" style=\"color: white;\"></i> 2019 Wofo24 India Pvt. Limited.All rights reserved</span>\n\n  </div>\n</div>\n   \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/hire-professional/hire-professional.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/hire-professional/hire-professional.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHireProfessionalHireProfessionalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!professionals\" class=\"overlay\">\n    <img src=\"{{loading}}\" class=\"loader image-responsive\" alt=\"Loader\">\n</div>\n\n<div class=\"row background\">\n    <img class=\"pic\" src=\"{{plumberwall}}\">\n</div>\n\n<div class=\"container  search\">\n    <div class=\"row\">\n        <div class=\"col-12 mx-auto text-center\">\n            <h2>Hire a Professional</h2>\n        </div>\n\n        <div class=\"col-12\">\n            <div class=\"row mx-auto text-center\">\n\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-2 col-10 mx-auto text-center\">\n                    <select class=\"form-control\">\n                        <option>Ghaziabad</option>\n                    </select>\n                </div>\n                <div class=\"col-md-6 col-10 mx-auto text-center mt-md-0 mt-3\">\n                    <select class=\"form-control\" (change)=\"onCategory($event.target.value)\">\n                        <option disabled>Search for a Service</option>\n                        <option [value]='0'>All Professionals</option>\n                        <option *ngFor='let category of categories' [value]='category.id'>{{ category.category }}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"col-md-2\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf='noProfessional'>\n    <div class=\"row mx-auto\">\n        <div class=\"col text-center\" style=\"color: gray\">\n            <img src=\"{{hire_prof}}\" alt=\"No Professionals\" class=\"img-fluid noprofimage mb-3\">\n            <h3 class=\"mb-3\">No Professionals found!</h3>\n            <h5 class=\"mb-5\">No Professionals available in this category, Please hire other professionals.</h5>\n        </div>\n    </div>\n</div>\n<div *ngIf='!professionals'>\n    <div style=\"height: 1000px;\"></div>\n</div>\n<div class=\"container mb-5\" *ngIf='!noProfessional'>\n\n    <div class=\"row\">\n        <div class=\"col-12 my-3  profcard\" *ngFor='let professional of showProfessionals'>\n            <div class=\"row slate\">\n                <div class=\"col-3 mx-auto text-center\">\n                    <img class=\"image mt-3\" src=\"{{professional.photo}}\">\n                </div>\n                <div class=\"col-6\">\n                    <p class=\"name\">{{professional.name}}</p>\n                    <ul class=\"list\">\n                        <li><span class=\"left\">Specification :</span><span class=\"right\"\n                                *ngFor='let subcat of professional.subcategory'> {{ subcat.subcategory}} | </span></li>\n                        <li><span class=\"left\">Location :</span><span class=\"right\"> {{professional.address}}</span>\n                        </li>\n                        <li><span class=\"left\">Jobs Done :</span><span class=\"right\">\n                                {{ professional.job_completed}}</span></li>\n                        <!-- <li><span class=\"left\">Expierence :</span><span class=\"right\"> 4 Years</span></li> -->\n                    </ul>\n                </div>\n                <div class=\"col-3 text-center\">\n                    <p class=\"price pt-4 mx-auto text-center\"> ₹ {{professional.service_charge}}/service</p>\n                    <button *ngIf='Hire.get(professional.id)' class=\"btn text-center mx-auto\" type=\"submit\"\n                        data-toggle=\"modal\" data-target=\"#exampleModal\" (click)='onBook(professional.id)'>Book\n                        Now</button>\n                    <h4 *ngIf='!Hire.get(professional.id)' style=\"color:green;\" class=\"text-center mx-auto\">Booked !!\n                    </h4>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\">\n                <div class=\"row text-center\">\n                    <div class=\"col-10 mx-auto\">\n                        <h1>Request Accepted!</h1>\n                    </div>\n                </div>\n                <div class=\"row text-center\">\n                    <div class=\"col-6 mx-auto\">\n                        <img src=\"{{hire_prof}}\" alt=\"\" class=\"img-fluid\">\n                    </div>\n                </div>\n                <div class=\"row text-center\">\n                    <div class=\"col-10 mx-auto mt-2\">\n                        <h6>Following Professional will be assigned to you.</h6>\n                        <p>We will contact you soon regarding the following professional.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Ok</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/categories/categories.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/categories/categories.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 mx-auto text-center\">\n      <div>\n        <h2>How can we help you today?</h2>\n      </div>\n    </div>\n\n\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-md-2 col-sm-3 col-4\" *ngFor='let category of categories'>\n          <a routerLink='/subcategory/{{ category.category }}/{{ category.id }}'>\n            <div class=\"box mx-auto text-center\">\n\n              <img [defaultImage]=\"defaultImage\" [lazyLoad]=\"category.icon\">\n                  <p class=\"pt-md-3 py-sm-2 py-1 text align-middle\">{{ category.category }}</p>\n\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/contactus/contactus.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/contactus/contactus.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeContactusContactusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row icon\" id='contactus'>\n  <div class=\"col-12 mx-auto text-center\">\n    <img src=\"{{contact_us}}\">\n  </div>\n</div>\n\n<div class=\"row waves\">\n    \n        <img width=\"100%\" src=\"{{wave}}\">\n    \n  </div>\n\n<div class=\"container-fluid wave\">\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-12 mx-auto text-center\">\n            <h2>Get In Touch</h2>\n       </div>\n       <div class=\"col-12\">\n         <div class=\"row getapp\">\n           <div class=\"col-md-6 col-12 mx-auto text-center\">\n             <img class=\"image\" src=\"{{touch}}\">\n             <p>\n             <span class=\"left\">Phone No.:</span><span class=\"right\"> +91 8882749750</span><br>\n             <span class=\"left\">E-Mail:</span><span class=\"right\">  info@wofo24.com</span>\n            </p>\n           </div>\n           <div class=\"col-md-6 col-12 mx-auto text-center\">\n            <form [formGroup]=\"contactUsForm\" (ngSubmit)=\"onContactus()\">\n            <input class=\"form-control mx-auto top\" type=\"text\" placeholder=\"Full Name\" formControlName='name'>\n            <div *ngIf=\"!contactUsForm.get('name').valid && contactUsForm.get('name').touched\" class=\"validation mt-1\">Invalid Full Name.</div>\n            <input class=\"form-control mx-auto top\" type=\"text\" placeholder=\"E-mail\" formControlName='email'>\n            <div *ngIf=\"!contactUsForm.get('email').valid && contactUsForm.get('email').touched\" class=\"validation mt-1\">Invalid E-mail.</div>\n            <input class=\"form-control mx-auto top\" type=\"text\" placeholder=\"Mobile Number\" formControlName='phone_number'>\n            <div *ngIf=\"!contactUsForm.get('phone_number').valid && contactUsForm.get('phone_number').touched\" class=\"validation mt-1\">Invalid Mobile Number.</div>\n            <textarea class=\"form-control mx-auto top\" rows=\"5\" placeholder=\"Message\" formControlName='message'></textarea>\n            <div *ngIf=\"!contactUsForm.get('message').valid && contactUsForm.get('message').touched\" class=\"validation mt-1\">Message can't be empty.</div>\n            <button type=\"submit\" class=\"btn btn-block mx-auto top\" id=\"bottom\" [disabled]='!contactUsForm.valid'>Send Message</button>\n            </form>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n</div>\n\n<div class=\"row waves-reverse\">\n    \n        <img width=\"100%\" src=\"{{wave_reverse}}\">\n    \n  </div>\n\n\n\n  <div class=\"container my-5\">\n    <div class=\"row\">\n      <div class=\"col-12  mx-auto text-center\">\n          <h2>Stats and Testimonials</h2>\n      </div>\n      \n    </div>\n    <div class=\"row py-2\">\n\n      <div class=\"col-12  my-5\" *ngIf='count'>\n        <div class=\"row\">\n          <div class=\"col-md-3 col-12 mx-auto text-center my-2\">\n            <p><i class=\"fas fa-tools\"></i></p>\n            <h1 class=\"mt-4\"><b>{{ count.services }}</b></h1>\n            <p class=\"service\">Live Services</p>\n            <p class=\"service-text\">Get hand on services within maximum duration of 120 hours</p>\n          </div>\n          <div class=\"col-md-3 col-12 mx-auto text-center my-2\">\n            <p><i class=\"fas fa-user-check\"></i></p>\n            <h1 class=\"mt-4\"><b>{{ count.professional }}</b></h1>\n            <p class=\"service\">Professionals</p>\n            <p class=\"service-text\">Hire skilled and trusted Professionals at you door step.</p>\n          </div>\n          <div class=\"col-md-3 col-12 mx-auto text-center my-2\">\n            <p><i class=\"fas fa-star\"></i></p>\n            <h1 class=\"mt-4\"><b>4.2+</b></h1>\n            <p class=\"service\">Average Rating</p>\n            <p class=\"service-text\">Highly Trusted and appreciated by our verified customers.  </p>\n          </div>\n          <div class=\"col-md-3 col-12 mx-auto text-center my-2\">\n            <p><i class=\"fas fa-home\"></i></p>\n            <h1 class=\"mt-4\"><b>{{ count.order }}</b></h1>\n            <p class=\"service\">Homes Served</p>\n            <p class=\"service-text\">Super convenient, guaranteed service from hiring to completion of service.</p>\n          </div>\n        </div>\n      </div>\n     \n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/getapp/getapp.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/getapp/getapp.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeGetappGetappComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid whole\">\n    <div class=\"row getapp pb-5 pb-md-0\">\n            <div class=\"col-12 mx-auto text-center\">\n                    <h2 class=\"main-head text-center\">Get the App</h2>\n                  </div>\n\n        <div class=\"col-md-6 col-12 mx-auto text-center\">\n            <img class=\"mobile\" src=\"{{mob}}\" style=\"width: 60%\">\n        </div>\n        <div class=\"col-md-6 col-10 mx-auto mt-3\">\n            <h2 class=\"head\">Get the App</h2>\n            <p class=\"text\">Download the App and manage your\n                    services on the go.</p>\n            <p class=\"label\"><b>Send a link via SMS to install the app</b></p>\n            <form [formGroup]=\"getAppForm\" (ngSubmit)=\"ongetApp()\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12\">\n                        <input type=\"text\" class=\"form-control\" id=\"mobile_number\" placeholder=\"Mobile Number\"\n                            formControlName='phone_number'>\n                        <div *ngIf=\"!getAppForm.get('phone_number').valid && getAppForm.get('phone_number').touched\"\n                            class=\"validation mt-1\">Invalid Mobile Number.</div>\n\n                    </div>\n                    <div class=\"col-md-6 col-12 mx-auto mt-3 mt-md-0\">\n                        <button class=\"btn\" type=\"submit\" [disabled]='!getAppForm.valid'>Get Link</button>\n                    </div>\n                </div>\n            </form>\n            <a href=\"https://play.google.com/store/apps/details?id=com.wofo.wofo_24&hl=en\" target=\"__blank\">\n            <img class=\"play-store\" src=\"{{google}}\"></a>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/highlights/highlights.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/highlights/highlights.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeHighlightsHighlightsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row icon\">\n  <div class=\"col-12 mx-auto text-center\">\n    <img src=\"{{highlight}}\">\n  </div>\n</div>\n\n<div class=\"row waves\">\n  \n      <img width=\"100%\" src=\"{{wave}}\">\n  \n</div>\n\n  <div class=\"container-fluid wave\">\n    \n    <div class=\"container\">\n        <div class=\"row\">\n  <div class=\"col-12 mx-auto text-center\">\n      <h2>WOFO24 Highlights</h2>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"row highlights\">\n         <div class=\"col-md-4 col-12 mx-auto text-center\">\n           <img class=\"number\"  src=\"{{w1}}\"><img class=\"line\" src=\"{{line}}\"><br>\n           <img class=\"iconhigh\" src=\"{{online_support}}\">\n           <p class=\"heading\"><b>BOOK YOUR SERVICE</b></p>\n           <p class=\"text\">Select from our wide range of services on web or mobile application.Choose date and time of service and enter your address.</p>\n         </div>\n         <div class=\"col-md-4 col-12 mx-auto text-center\">\n            <img class=\"number\"  src=\"{{w2}}\"><img class=\"line\" src=\"{{line}}\"><br>\n            <img class=\"iconhigh\" src=\"{{support}}\">\n            <p class=\"heading\"><b>SERVICE DELIVERY</b></p>\n            <p class=\"text\">Our verified service professional will contact you for any additional information and will be there at scheduled time.</p>\n          </div>\n          <div class=\"col-md-4 col-12 mx-auto text-center\">\n              <img class=\"number\" src=\"{{w3}}\"><br>\n              <img class=\"iconhigh\" src=\"{{feedback}}\">\n              <p class=\"heading\"><b>PAY AFTER JOB IS DONE</b></p>\n              <p class=\"text\">Pay after completion of the job. We would highly appreciate if you can leave your feedback and spread the word of mouth.</p>\n            </div>\n      </div>\n    </div>\n</div>\n</div>\n</div>\n<div class=\"row waves-reverse\">\n  \n      <img width=\"100%\" src=\"{{wave_reverse}}\">\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-search></app-search>\n<app-categories></app-categories>\n<app-recommended></app-recommended>\n<app-highlights></app-highlights>\n<app-getapp></app-getapp>\n<app-contactus ></app-contactus>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/recommended/recommended.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/recommended/recommended.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeRecommendedRecommendedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row whole\">\n        <div class=\"col-md-3 col-12 content\">\n            <h2 class=\"mt-2 text-md-left text-center\">Check out our most popular and highly recommended services for you\n            </h2>\n            <p class=\"text mt-md-2 mt-3 text-md-left text-center\">With our wide range of services, you're sure to find\n                which fits your needs</p>\n        </div>\n        <div class=\"col-md-9 col-12\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-6 mt-5\">\n                    <a routerLink='../questions/Beauty%20Parlour%20Services/54'>\n                        <div class=\"card\">\n                            <img src=\"{{skincare}}\">\n                            <p class=\"sub-cat\">Women Salon</p>\n                            <p class=\"explore\">+Explore Now</p>\n\n                        </div>\n                    </a>\n\n                </div>\n                <div class=\"col-md-4 col-6 mt-5\">\n                    <a routerLink='../questions/New%20Furniture/35'>\n                        <div class=\"card\">\n                            <img src=\"{{carpenting}}\">\n                            <p class=\"sub-cat\">New Furniture</p>\n                            <p class=\"explore\">+Explore Now</p>\n\n                        </div>\n                    </a>\n\n                </div>\n\n\n\n                <div class=\"col-md-4 col-6 mt-5\">\n                    <a routerLink='../questions/Modular%20Kitchen/47'>\n                        <div class=\"card\">\n                            <img src=\"{{decor}}\">\n                            <p class=\"sub-cat\">Modular Kitchen</p>\n                            <p class=\"explore\">+Explore Now</p>\n\n                        </div>\n                    </a>\n\n                </div>\n\n\n\n                <div class=\"col-md-4 col-6 mt-5\">\n                    <a routerLink='../questions/Refrigerator/18'>\n                        <div class=\"card\">\n                            <img src=\"{{appliances}}\">\n                            <p class=\"sub-cat\">Refrigerator</p>\n                            <p class=\"explore\">+Explore Now</p>\n\n                        </div>\n                    </a>\n\n                </div>\n\n                <div class=\"col-md-4 col-6 mt-5\">\n                    <a routerLink='../questions/Pipe%20Fitting/29'>\n                        <div class=\"card\">\n                            <img src=\"{{plumbing}}\">\n                            <p class=\"sub-cat\">Pipe Fitting</p>\n                            <p class=\"explore\">+Explore Now</p>\n\n                        </div>\n                    </a>\n\n                </div>\n\n                <div class=\"col-md-4 col-6 mt-5\">\n                    <a routerLink='../questions/General%20Pest%20control/39'>\n                        <div class=\"card\">\n                            <img src=\"{{pestcontrol}}\">\n                            <p class=\"sub-cat\">Pest Control</p>\n                            <p class=\"explore\">+Explore Now</p>\n                        </div>\n                    </a>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/search/search.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/search/search.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainHomeSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row background\">\n    <img class=\"pic\" src=\"{{SEARCHBG}}\">\n</div>\n\n<div class=\"container  search\">\n    <div class=\"row\">\n        <div class=\"col-12 mx-auto text-center\">\n            <h2>Verified Professional | Standard Pricing | On Time Delivery</h2>\n        </div>\n\n        <div class=\"col-12\">\n            <div class=\"row mx-auto text-center\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-2 col-10 mx-auto text-center\">\n                    <select class=\"form-control\">\n                        <option>Ghaziabad</option>\n                    </select>\n                </div>\n                <div class=\"col-md-6 col-10 mx-auto text-center mt-md-0 mt-3\">\n                    <select class=\"form-control\"  (change)=\"onCategory($event.target.value)\">\n                        <option disabled>Search for a Service</option>\n                        <option *ngFor='let category of categories' [value]=\"category.category+'-'+category.id\"  >{{ category.category }}</option>\n                    </select>\n                </div>\n                <div class=\"col-md-2\"></div>\n            </div>\n        </div>\n        \n\n      \n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar class=\"fixed-top\"></app-navbar>\n<div style=\"margin-top:65px\">\n        <router-outlet ></router-outlet>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/my-orders/my-orders.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/my-orders/my-orders.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMyOrdersMyOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!myOrders\" class=\"overlay\">\n      <div style=\"height: 1000px;\"></div>\n      <img src=\"{{loading}}\" class=\"loader image-responsive\" alt=\"Loader\">\n</div>\n   \n<div class=\"container pt-5\" >\n   <div class=\"row\">\n      <div class=\"col-md-8 mx-auto\">\n         <h2>My Bookings</h2>\n\n      </div>\n\n   </div>\n   \n   <div class=\"row text-center my-5\" *ngIf='noorders'>\n      <div class=\"col-md-8 mx-auto\">\n         <img src=\"{{cart}}\" alt='No Bookings' class=\"img-fluid cart\" ><br>\n         <div class=\"mt-5\">\n           <b>Whoops, No Bookings !!</b> \n         </div>\n         <div class=\"mt-3\">You have not made any service bookings yet.</div>\n      </div>\n   </div>\n\n   <div class=\"row\" *ngIf='myOrders'>\n\n      <div class=\"col-md-8 col-12  mx-auto card my-3\" id=\"main\" *ngFor='let myorder of myOrders'>\n\n         <div class=\"row \">\n            <div class=\"col-12\">\n               <div class=\"row justify-content-between\">\n                  <div class=\"col-6\">\n                     <h3>{{ myorder.subcategory.subcategory }}</h3>\n                  </div>\n                  <div class=\"col-6\">\n                     <a (click)='onOrderDeatil(myorder.id)' class=\"float-right\" id='orderDeatils'><b> Order Details</b></a>\n\n                  </div>\n               </div>\n\n               <p class=\"booked\">{{ myorder.time }}</p>\n               <p class=\"address\"><i class=\"fa fa-map-marker-alt\"></i> {{ myorder.address }}</p>\n               <div class=\"row top  live\">\n                  <div class=\"col-6 mt-2\">\n                     <span class=\"right\" *ngIf='myorder.service_status == \"Pending\"'\n                        style=\"color: rgb(179, 117, 3)\">{{ myorder.service_status }} !!</span>\n                     <span class=\"right\" *ngIf='myorder.service_status == \"Accepted\"'\n                        style=\"color: rgb(5, 219, 5)\">{{ myorder.service_status }} !!</span>\n                     <span class=\"right\" *ngIf='myorder.service_status == \"Completed\"'\n                        style=\"color: rgb(4, 141, 4)\">{{ myorder.service_status }} !!</span>\n                     <span class=\"right\" *ngIf='myorder.service_status == \"Declined\"'\n                        style=\"color: red\">{{ myorder.service_status }} !!</span>\n                     <span class=\"right\" *ngIf='myorder.service_status == \"Cancelled\"'\n                        style=\"color: red\">{{ myorder.service_status }} !!</span>\n\n                  </div>\n                  <div class=\"col-6 mt-2 text-right\">\n                     <span>{{ myorder.service_time}}</span>\n                  </div>\n               </div>\n\n            </div>\n         </div>\n\n      </div>\n   </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/myprofile.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/myprofile.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMyprofileMyprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/profile/profile.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/profile/profile.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMyprofileProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!addresses\" class=\"overlay\">\n    <div style=\"height: 1000px;\"></div>\n    <img src=\"{{loading}}\" class=\"loader image-responsive\" alt=\"Loader\">\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n\n\n    <div class=\"container\">\n      <div class=\"row \">\n        <div class=\"col-md-12 mx-auto \">\n          <h2 style=\"color: #1D4793;;\">MY PROFILE</h2>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row mt-3\">\n        <div class=\"col-md-12 mx-auto \">\n          <h5 *ngIf='me'><i class=\"fas fa-user\"></i>&nbsp;&nbsp;{{ me.name }}</h5>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row mt-3\">\n        <div class=\"col-md-12 mx-auto \">\n          <h5 *ngIf='me'><i class=\"fas fa-phone-alt\"></i>&nbsp;&nbsp;{{ me.phone_number }}</h5>\n        </div>\n      </div>\n      <hr>\n      <h4 style=\"color: #1D4793;;\">Manage Address</h4>\n      <div class=\"row mt-3\">\n\n\n        <div class=\"col-md-12 my-3 dynamic\" *ngFor='let address of addresses'>\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <h6><i class=\"fas fa-home\"></i> {{ address.house_no}}, {{ address.street}}, {{ address.city}},\n                {{ address.state}}, {{ address.postal_code}}</h6>\n\n            </div>\n            <div class=\"col-1\">\n              <i class=\"fas fa-pen editdel\" (click)='onEdit(address.id)'></i>\n            </div>\n            <div class=\"col-1\">\n              <i class=\"fas fa-trash-alt editdel\" (click)='onDelete(address.id)'></i>\n            </div>\n          </div>\n\n          <!-- <button class=\"btn edit mt-2\" type=\"submit\" (click)='onEdit(address.id)'>Edit</button> -->\n          <!-- <button class=\"btn delete mt-2 ml-3\" type=\"submit\" (click)='onDelete(address.id)'>Delete</button> -->\n        </div>\n\n        <div class=\"col-12 mt-3 mx-auto text-center\" *ngIf='noadd'>\n          <div class=\"row text-center\">\n            <div class=\"col-md-4 mx-auto\">\n              <img src=\"{{address}}\" alt=\"no address\" class=\"img-fluid\">\n            </div>\n            \n          </div>\n          <div class=\"row text-center\">\n\n              <div class=\"col-md-6 mx-auto\">\n                <p style=\"font-size: 0.7rem;\" class=\"mt-3\">You haven't added any address yet, Please add an address.</p>\n  \n              </div>\n\n\n          </div>\n\n\n        </div>\n      </div>\n\n      <div class=\"col-md-8 col-md-12 mx-auto text-center mt-5 mb-2\">\n        <button type=\"button\" class=\"btn btn-outline save\" (click)='onadd()' *ngIf='addAddress()'>Add Address</button>\n        <button type=\"button\" class=\"btn btn-outline save\" (click)='onLogout()'\n          style=\"background-color: rgb(247, 48, 48);\">Logout</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/profileaddress/profileaddress.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/profileaddress/profileaddress.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMyprofileProfileaddressProfileaddressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-12 mx-auto card\">\n            <div class=\"row fix\">\n                <div class=\"col-12 mt-3\">\n                    <h1 class=\"head\">Add Address</h1>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-10 mx-auto\">\n\n                            <form [formGroup]=\"addAddressForm\" (ngSubmit)=\"onSave()\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"House Number\"\n                                            formControlName=\"house_no\">\n                                    </div>\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Street\"\n                                            formControlName=\"street\">\n                                        <div *ngIf=\"!addAddressForm.get('street').valid && addAddressForm.get('street').touched\"\n                                            class=\"validation\">Invalid Street name.</div>\n\n                                    </div>\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Postal Code\"\n                                            formControlName=\"postal_code\">\n                                        <div *ngIf=\"!addAddressForm.get('postal_code').valid && addAddressForm.get('postal_code').touched\"\n                                            class=\"validation\">Invalid Postal Code.</div>\n\n                                    </div>\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"City\"\n                                            formControlName=\"city\">\n                                        <div *ngIf=\"!addAddressForm.get('city').valid && addAddressForm.get('city').touched\"\n                                            class=\"validation\">Invalid City.</div>\n\n                                    </div>\n                                    <div class=\"col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"State\"\n                                            formControlName=\"state\">\n                                        <div *ngIf=\"!addAddressForm.get('state').valid && addAddressForm.get('state').touched\"\n                                            class=\"validation\">Invalid State name.</div>\n\n                                    </div>\n                                    <div class=\"col-12 text-center my-4\">\n                                        <button type=\"submit\" class=\"btn btn-outline add\" \n                                            [disabled]='!addAddressForm.valid'>Save</button>\n                                    </div>\n\n                                </div>\n                            </form>\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/navbar/navbar.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/navbar/navbar.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n    \n  <a routerLink='/'><img class=\"logo\" src=\"{{logo}}\"></a>\n  <input type=\"checkbox\" id=\"chk\">\n  <label for=\"chk\" class=\"show-menu-btn\">\n    <i class=\"fas fa-ellipsis-h\"></i>\n  </label>\n  \n    <ul class=\"menu\">\n      \n      <a class=\"line\" routerLink=\"/hire-professional\" *ngIf='check()' (click)='close()'>Get Experts</a>\n      <a class=\"line\" routerLink fragment=\"contactus\" (click)='close()'>Contact us</a>\n      \n      <a class=\"line\" routerLink='/login' *ngIf='!check()' (click)='close()'>Login</a>\n      <a class=\"line\" routerLink='/register' *ngIf='!check()' (click)='close()'>Sign-up</a>\n      <a class=\"line\" routerLink='/bookings' *ngIf='check()' (click)='close()'>Bookings</a>\n      <a class=\"line\" routerLink='/profile' *ngIf='check()' (click)='close()'>Profile</a>\n      <a class=\"line\" *ngIf='check()' (click)='onLogout()'  (click)='close()'>Log Out</a>\n      <a class=\"line\" class=\"prof\" (click)='onBecome()' (click)='close()'>Become a professional</a>\n      <label for=\"chk\" class=\"hide-menu-btn\" id='closebtn'>\n        <i class=\"fas fa-times\"></i>\n      </label>\n    </ul>\n  \n \n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/pagenotfound/pagenotfound.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/pagenotfound/pagenotfound.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPagenotfoundPagenotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-5\">\n    <div class=\"row mx-auto \">\n        <div class=\"col-md-6 mx-auto\">\n            <img src=\"{{pnf}}\" alt=\"page not found\" class=\"img-fluid \">\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/privacy-policy/privacy-policy.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/privacy-policy/privacy-policy.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPrivacyPolicyPrivacyPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"background-color: rgb(243, 243, 243)\">\n  <div class=\"container pt-5 pb-5\" >\n        <div class=\"row\">\n            <div class=\"col-10 mx-auto text-center\">\n                <h2><b> Privacy Policy</b></h2>\n            </div>\n            <div class=\"col-md-10 col-12 mx-auto card\">\n               <ul class=\"list\">\n                 <li>This Privacy Policy describes how Wofo24 handles your personal data, and sets out the rights and\n                    obligations that both you and Wofo24 have in relation to your personal data.\n                    By accessing www.wofo24.com or our mobile application (together, the \"Services\") you accept and\n                    agree to the terms and conditions of Wofo24's user agreement (\"User Agreement\"), and\n                    acknowledge that your personal data may be collected, used and disclosed in accordance with this\n                    Privacy Policy\n                    WOFO24 may, from time to time, modify this Privacy Policy (and update the web page on which it is\n                    displayed). WOFO24 will send notification of any material modification to your WOFO24 account\n                    and/or your registered phone number and/or email address. You should check that account\n                    regularly.</li>\n               </ul>\n    \n    \n                <p class=\"head\">1. Collection of Your Personal Data</p>\n                <ul class=\"list\">\n                  \n                  <li>Wofo24 collects personal data when you pre-register with WOFO24. This includes your full name,\n                    email address, phone number and location. In circumstances where the below information is not\n                    provided to us, we may be unable to provide our services to you and carry out our contractual\n                    obligations with you.</li>\n                    <li class=\"heading\">a.Information we collect directly from you</li>\n                    <li>Wofo24 collects personal data when you register with WOFO24. This includes:</li>\n                    <ul> \n                      <li>your name, address, email address, phone number, and other contact details.</li>\n                      <li>your birth date and gender.</li>\n                      <li>your location.</li>\n                      <li>your occupation, work experience, resume, qualifications, education, post tasks, earn money\n                        preferences, skill set, interests and other information relevant for your fitness for tasks.\n                        </li>\n                    </ul>\n                    <li>If your personal details change, it is your responsibility to update your WOFO24 account with those\n                      changes, so that we can keep our records complete, accurate and up to date.\n                      To enable us to improve our existing services and to create new service features, Wofo24 collects\n                      information about the way you use our services, including the transactions you enter into on the\n                      Services, your feedback rating (including any references requested using our 'Reference' feature),\n                      the comments you post, and the transactions you enter into with our valued affiliate service\n                      providers.</li>\n    \n                      <li class=\"heading\">b.Information we collect automatically when you use our\n                        Services\n                        </li>\n                        <li>WOFO24 may also receive and record the following information from your internet browser and\n                          computer, including through cookies and similar technologies when you use our Services:</li>\n                          <ul>\n                            <li>Computer and connection information such as statistics on page views, traffic to and from\n                              our Services, referral URL, IP address, unique device ID, browsing history and web log\n                              information;\n                              </li>\n                              <li>Information about your use of our Services, including the date and time you visit our\n                                Services, the areas or pages that you visit, the amount of time you spend viewing or using\n                                the Services, the number of times you return to the Services, other clickstream or website\n                                usage information, and emails that you open, forward or click-through to our Services.\n                                </li>\n                          </ul>\n                          <li>If you use a location-enabled WOFO24 service, we may collect and process information about your\n                            actual location (for example, GPS signals sent by your mobile device). We may also use a range of\n                            different technologies to confirm your location.\n                            For more information on how we use cookies and other similar tracking technologies, please see the\n                            section on Cookies and Similar Technologies below.</li>\n    \n                        <li class=\"heading\">c.Information we obtain from other sources\n                        </li>\n                        <li>In addition to data collected from your submissions, we also receive data from certain third-parties,\n                          such as social media sites that you connect to your account (including Facebook, LinkedIn, Twitter\n                          and any other site you which you enable from time to time) as well as from identity verification\n                          service providers</li>\n                          <li class=\"heading\">d.What other Services users can see about you\n                          </li>\n                          <li>You are not anonymous to us when you log into the Services or post any content (including tasks,\n                            items to be supplied, comments or feedback) on the Services or any associated forum.\n                            your user ID and all the material that you post is visible to other Wofo24 users and is also publicly\n                            available to other internet users. We strongly encourage you to use caution and discretion when\n                            posting.\n                            Wofo24 does not in any way control, and does not accept any responsibility or liability whatsoever\n                            for, the disclosure or use of personal data which is voluntarily posted by you in a publicly accessible\n                            area of the Services.\n                            </li>\n                </ul>\n    \n                <p class=\"head\">2. How We Use Your Personal Data</p>\n                <ul class=\"list\">\n                  <li>Identification and authentication\n                    Legal ground(s) for use: We need to perform this function in order to allow you to access the\n                    services.\n                    </li>\n                    <li>To protect Wofo24 and the users of the Services\n                      Legal ground(s) for use: It is in our (and users) legitimate interests to ensure that our Services is\n                      secure.\n                      </li>\n                      <li>To customize the content and any advertising displayed on the Services and permit\n                        content on the Services (such as postings or third party advertisements) to be targeted,\n                        on an aggregate basis, to the users for whom it is most likely to be relevant\n                        Legal ground(s) for use: It is in our legitimate interest to provide you with content and advertisements\n                        that are tailored to your interests.</li>\n                        <li>To improve our services and develop new service features\n                          Legal ground(s) for use: We need some of your personal data in order to provide the services to you;\n                          it is in our legitimate interests to provide you the best possible services.</li>\n                          <li>To provide, maintain and protect our Services and to verify the identity of authorised\n                            users of the Services.\n                            Legal ground(s) for use: We need to perform this function in order to provide a safe and secure\n                            environment for our users and we have legitimate interests in protecting the integrity of the Services\n                            we offer.\n                            </li>\n                        <li>Providing your information to a user with whom you have or had a contract facilitated by\n                          WOFO24\n                          Legal ground(s) for use: We need to use your personal data in this way to provide the services you\n                          request.</li>\n    \n                        <li>To ensure that WOFO24 receives payment of the fees due to it\n                          Legal ground(s) for use: We need to use your personal data in this way to fulfil a contract between\n                          you and us.</li>\n                        <li>To contact you to inform you about promotions or upcoming changes or improvements\n                          to our services\n                          Legal ground(s) for use: We only contact you for marketing purposes with your consent; we may\n                          contact you regarding changes in our services because it is in our legitimate interests to keep you\n                          informed about service changes that may affect you. See section below for further detail about\n                          marketing.\n                          </li>\n    \n                        <li>To contact you to administer our User Agreement:\n                          Legal ground(s) for use: for example, we may notify you of a breach, or action a request for a\n                          takedown notice in response to a claim of copyright infringement.**\n                          </li>\n                        <li>To conduct research\n                          Legal ground(s) for use: It is in our legitimate interests to improve the platform through user\n                          questionnaires and feedback requests via the platform.</li>\n                        <li>To expand our user base\n                          Legal ground(s) for use: It is in our legitimate interest to inform potential users about the Services we\n                          offer.</li>\n                          <li>To develop our relationships with affiliate service providers and provide or arrange\n                            internal or external verification services obtained by you via the Services\n                            Legal ground(s) for use: It is in our legitimate interests to engage service providers and verification\n                            services.</li>\n                          <li>To generate data reports on an aggregated, non-personally identifiable basis, for both\n                            internal and third-party use, but subject to any applicable laws (for example, we may\n                            show advertisers or investors trends relating to the general use of Wofo24's services);\n                            and\n                            Legal ground(s) for use: It is in our legitimate interests (and the interests of our partners and\n                            affiliates) to understand how you and other users engage with our services.\n                            </li>\n                          <li>Your contact information may also be used for accounting, invoicing and billing\n                            purposes, marketing purposes, by third party service providers to Wofo24 and to respond\n                            to any enquiry you make\n                            Legal ground(s) for use: It is in our legitimate interests to engage service providers to assist us in\n                            delivering the services you request.\n                            </li>\n                          <li>When you contact Wofo24 we may keep a record of the communication(s) between you\n                            and WOFO24 to help resolve any issues you might have.\n                            Legal ground(s) for use: We retain information when we are required to do so by law and because it\n                            is in our legitimate interests to protect our legal rights.</li>\n                </ul>\n    \n                <p class=\"head\">3. Cookies and Similar Technologies</p>\n                <ul class=\"list\">\n                  <li>Wofo24 uses cookies and similar tracking technologies for a number of purposes including to access\n                    your information when you sign in, keep track of your preferences, direct specific content to you,\n                    report on Wofo24's user base, and to improve WOFO24's services. We also use cookies or\n                    anonymous identifiers when you interact with our affiliate service providers (for example, when you\n                    integrate your Wofo24 account with your Facebook profile) and as further described below.\n                    We use the following types of cookies and similar technologies:\n                    </li>\n                    <li>We use cookies and similar technologies that are necessary to the operation of our Services. This\n                      includes technologies that allow you access to our website, services, mobile app or that are required\n                      to identify irregular site behaviour, prevent fraudulent activity and improve security, or that allow you\n                      to make use of our functions such as saved search or similar functions;\n                      If you change the settings on your internet browser to block or restrict cookies (including cookies\n                      associated with WOFO24's services), or to indicate when a cookie is being set by Wofo24, the\n                      Wofo24 Services may not work as intended. You should remember that, while you may still be able\n                      to use the Services if your cookies are disabled, our services may not function properly on your\n                      device and you may not be able to take advantage of certain Wofo24 features.</li>\n                    <li>We use cookies and similar technologies that allow us to offer you enhanced functionality when\n                      accessing or using our Services. This may include identifying you when you sign into our website,\n                      keeping you signed in as you browse or keeping track of your specified preferences, interests, or\n                      past items viewed so that we may enhance the presentation of content on our website and mobile\n                      app.</li>\n                    <li>We use cookies and similar technologies to assess the performance of our Services. We use this\n                      information to analyse and help us understand how you and other visitors use our Services so we\n                      can improve the content or layout of our Services. We also use this information to track the number\n                      of our visitors and analyse the popularity of the features we offer.\n                      </li>\n                    <li>We may use first-party or third-party cookies and similar technologies to deliver content, including\n                      ads relevant to your interests. This includes using technologies to understand the usefulness to you\n                      of the advertisements and content that has been delivered to you, such as whether you have clicked\n                      on an advertisement.\n                      You may reject first-party advertising cookies and similar technologies through your browser settings\n                      (as described below). To learn more about the use of cookies or other technologies to deliver more\n                      relevant advertising and to control or opt out of the collection and use of the data by these third party\n                      tools.\n                      </li>\n                    <li>You may set your browser or operating system to limit certain tracking or to decline cookies, but you\n                      may not be able to use certain features on the Services which require such cookies. Each browser\n                      and operating system is a little different, so please check your browser or operating system's\n                      settings or help section to learn more about how to delete or disable cookies and tracking.\n                      If you wish to prevent your data from being used by Google Analytics, Google has developed the\n                      Google Analytics opt-out browser add-on available here, and you can manage your Google accounts\n                      here.\n                      </li>\n                    \n                </ul>\n    \n                <p class=\"head\">4. How We Share Your Personal Data</p>\n                <ul class=\"list\">\n                <li>WOFO24 may disclose the information We collect from you as follows:\n                </li>\n                <ul>\n                  <li>WOFO24 Affiliates. We may share your personal data with our affiliated companies</li>\n                  <li>Service Providers. We share your personal data with third party service providers that\n                    provide business, verification, professional or technical support functions for us, help us\n                    operate our business and the services, or administer activities on our behalf.\n                    </li>\n                    <li>Other Third Parties. We may share your personal data with other third parties who participate\n                      in Wofo24 marketing initiatives, as authorised by you, and with consultants, advisors and\n                      analytics providers as necessary to measure and improve the services we provide to you</li>\n                      <li>Legal Matters & Safety. We may share your personal data to respond to judicial process or\n                        provide information to law enforcement or regulatory agencies or in connection with an\n                        investigation on matters related to public safety, as permitted or required by law. We may\n                        also share your personal data if we believe there has been a violation of our terms, our\n                        rights, or the rights of any third party.</li>\n                      <li> Sale or Transfer of Business or Assets. In the event that we, or any of our businesses, are\n                        sold or disposed of, whether by merger, sale of assets or otherwise, or in the event of\n                        insolvency, bankruptcy or receivership, your personal data may be one of the assets sold or\n                        merged in connection with the transaction.\n                        </li>\n                      <li> With Your Permission. We may share your personal data with any other third party with your\n                        consent or as necessary to deliver a service you requested.\n                        </li>\n                      \n                </ul>\n                <li>Your account is protected by a password for your privacy and security. We will take all reasonable\n                  steps to protect the information we hold about you from unauthorized access, use and disclosure,\n                  however, we cannot guarantee the absolute security of that information, or that our systems will be\n                  completely free from third party interception or are incorruptible from viruses. We cannot and do not\n                  guarantee that information you send from your computer to us over the Internet will be protected by\n                  any form of encryption (encoding software). In light of this, we cannot and do not ensure or warrant\n                  the security or privacy of your personal information, including payment and account details. You\n                  transmit your personal information to us at your own risk. You are entirely responsible for\n                  maintaining the security of your passwords and/or account information.</li>\n              </ul>\n    \n              <p class=\"head\">5. Third Parties\n              </p>\n              <ul class=\"list\">\n                <li>The Services may contain links to third party websites including the networks of our valued affiliate\n                  service providers, advertisers, and PayPal, or make available services obtained from third parties,\n                  including verification services by third party verification providers. If you follow a link to any of these\n                  websites, for instance Paytym payment system, or use any services obtained from third party service\n                  providers via the Services that requires you to provide personal data directly to such third parties (for\n                  instance third party verification providers), note that they have their own privacy policies. If you use\n                  our Services to link to another site, or use a service obtained from a third party service provider via\n                  the Services, you will be subject to that site's or third party's terms and conditions of use, privacy\n                  policy and security statement. We strongly encourage you to view these before disclosing any of\n                  your personal information on such sites. Wofo24 does not control, and does not accept any\n                  responsibility or liability for, the privacy policy of, and use of personal information by, any party other\n                  than WOFO24, including any user of the Site, the operators of any websites to which the Site links,\n                  or third party service providers to whom you directly provide your personal information (including\n                  sensitive information if relevant) to.</li>\n              </ul>\n    \n              <p class=\"head\">6. Marketing\n              </p>\n              <ul class=\"list\">\n                <li>When you register on the Services you may be given the opportunity to elect (\"opt-in\") to receive\n                  updates on our latest services, news and special offers, and those of our valued affiliate service\n                  providers (\"Marketing Material\"), via your Wofo24 account, personal e-mail address, post or\n                  telephone. If you conclude a transaction on the Services, you may also be given the opportunity to\n                  opt- in to receive Marketing Material from Wofo24 and our valued affiliate service providers.</li>\n                  <li>Once you opt-in to receive Marketing Material, You may, at any time, opt-out of receiving Marketing\n                    Material. To opt-out go to the 'Manage Account' link on the Services, choose 'Settings', then 'Alerts'\n                    and update your preferences. You can also click on the \"unsubscribe\" link in any email containing\n                    Marketing Material that we send you, or you can request an opt-out by emailing Wofo24 using the\n                    contact information provided on the Services. If you no longer consent to receiving Marketing\n                    Material then you must opt-out in one of these ways.</li>\n                    <li>Wofo24 may contact you as the result of a referral by another user of the Services who has provided\n                      us with contact information, such as your name and email address. The use of contact information\n                      received in connection with a referral will be governed by this Privacy Policy. You may, at any time,\n                      opt-out of Wofo24's referral system by emailing Wofo24 using the contact information provided on\n                      the Services.</li>\n              </ul>\n    \n              <p class=\"head\">7. Administrative Communications\n              </p>\n              <ul class=\"list\">\n                <li>WOFO24 reserves the right to send you administrative and account-related messages even if you\n                  opt out of receiving marketing communications. If you close down your Wofo24 account, we will\n                  cease all communications to you.\n                  </li>\n              </ul>\n    \n              <p class=\"head\">8. Your Rights and Choices\n              </p>\n              <ul class=\"list\">\n                <li>We will allow you, at any time, to access, edit, update, restrict processing and/ or delete the personal\n                  data that we hold about you.\n                  Where we process your personal data with your consent, you may withdraw it at any time. You also\n                  have a right to object to processing based on legitimate interests or These rights may be limited in\n                  some circumstances, for example, if:\n                  </li>\n                <ul>\n                  <li> We are legally permitted or required to deny you access to, and/ or to retain, the information\n                    because we are subject to a legal requirement or have a compelling legitimate interest; or\n                    </li>\n                    <li>You make a request that is unreasonably repetitive, requires WOFO24 to make a\n                      disproportionate effort, risks the privacy of others, or there are other valid reasons why we\n                      cannot comply.\n                      </li>\n                </ul>\n                <li>We need to prevent information in our systems from being accidentally or maliciously destroyed.\n                  This means that, where you delete information from our services, residual copies of that information\n                  on our active servers, as well as any corresponding information on our back-up systems, may not be\n                  immediately deleted.\n                  </li>\n                  <li>If you have concerns about how we handle your personal information or require further information,\n                    please email WOFO24 using the contact form provided on the Services. If you have unresolved\n                    complaints, you have the right to complain to a data protection authority.\n                    </li>\n              </ul>\n    \n              <p class=\"head\">9. Retention\n              </p>\n    \n              <ul class=\"list\">\n                <li>We retain your personal data for as long as is necessary with regard to the purposes for which it was\n                  collected or lawfully further processed, or for as long as may be necessary in light of our legal\n                  obligations or in order to allow us to pursue, defend or exercise legal claims.</li>\n              </ul>\n    \n              <p class=\"head\">9. Contact us\n              </p>\n    \n              <ul class=\"list\">\n                <li>If you have any questions about this Policy or about the manner in which we process your personal\n                  data, please contact us:\n                  For person: info@wofo24.com, or wofo24 Pvt Limited, at idea lab business incubator AKGEC\n                  GHAZIABAD UP, INDIA. Pincode 201009.</li>\n              </ul>\n              </div>\n            </div>\n            </div>\n            </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/add-address/add-address.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/add-address/add-address.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainQuestionnaireAddAddressAddAddressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-12 mx-auto card\">\n            <div class=\"row fix\">\n                <div class=\"col-12 mt-3\">\n                    <h1 class=\"head\">Add Address</h1>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-10 mx-auto\">\n\n                            <form [formGroup]=\"addAddressForm\" (ngSubmit)=\"onSave()\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"House Number\"\n                                            formControlName=\"house_no\">\n                                    </div>\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Street\"\n                                            formControlName=\"street\">\n                                        <div *ngIf=\"!addAddressForm.get('street').valid && addAddressForm.get('street').touched\"\n                                            class=\"validation\">Invalid Street name.</div>\n\n                                    </div>\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Postal Code\"\n                                            formControlName=\"postal_code\">\n                                        <div *ngIf=\"!addAddressForm.get('postal_code').valid && addAddressForm.get('postal_code').touched\"\n                                            class=\"validation\">Invalid Postal Code.</div>\n\n                                    </div>\n                                    <div class=\"col-md-6 col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"City\"\n                                            formControlName=\"city\">\n                                        <div *ngIf=\"!addAddressForm.get('city').valid && addAddressForm.get('city').touched\"\n                                            class=\"validation\">Invalid City.</div>\n\n                                    </div>\n                                    <div class=\"col-12 py-3\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"State\"\n                                            formControlName=\"state\">\n                                        <div *ngIf=\"!addAddressForm.get('state').valid && addAddressForm.get('state').touched\"\n                                            class=\"validation\">Invalid State name.</div>\n\n                                    </div>\n                                    <div class=\"col-12 text-center my-4\">\n                                        <button type=\"submit\" class=\"btn btn-outline add\"\n                                            [disabled]='!addAddressForm.valid'>Save</button>\n                                    </div>\n\n                                </div>\n                            </form>\n\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/address/address.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/address/address.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainQuestionnaireAddressAddressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(!addresses) || Loading\" class=\"overlay\">\n    <img src=\"{{loading}}\" class=\"loader image-responsive\" alt=\"Loader\">\n</div>\n\n\n<div *ngIf='!addresses'>\n    <div style=\"height: 1000px\"></div>\n</div>\n<div class=\"container\" *ngIf='addresses'>\n    <div class=\"row\">\n        <div class=\"col-md-8 col-11 mx-auto card\">\n            <div class=\"row fix\">\n                <div class=\"col-10 mx-auto text-center py-2 heading\">\n                    <span>Place your Order</span>\n                </div>\n                <div class=\"col-12 mt-3\">\n                    <p class=\"head\">Select Date and Time</p>\n                </div>\n                <div class=\"col-md-4 text-center mx-auto my-3\">\n                    <angular2-date-picker (onDateSelect)=\"onDateSelect($event)\" [(ngModel)]=\"date\"\n                        [settings]=\"settings\">\n                    </angular2-date-picker>\n                </div>\n\n                <div class=\"col-12\">\n                    <hr>\n\n\n                    <p class=\"head\">Manage Address &nbsp;<i class=\"fas fa-plus-circle\" (click)=\"onadd()\"\n                            *ngIf='!(addresses.length == 2)' style=\"color:#1D4793;cursor: pointer;\"\n                            data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add New Address\"></i></p>\n                </div>\n                <div class=\"col-12\" *ngFor='let address of addresses'>\n                    <div class=\"custom-control custom-radio pt-4\">\n                        <input type=\"radio\" id=\"{{address.id}}\" name=\"customRadio\" class=\"custom-control-input\"\n                            value=\"{{ address.house_no}}, {{ address.street}}, {{ address.city}}, {{ address.state}}, {{ address.postal_code}}\"\n                            (change)=\"onselectedCheck($event.target.value)\">\n                        <label class=\"custom-control-label\" for=\"{{address.id}}\">{{ address.house_no}},\n                            {{ address.street}}, {{ address.city}}, {{ address.state}}, {{ address.postal_code}}</label>\n                        <div>\n                            <button class=\"btn edit mt-2\" type=\"button\" (click)='onEdit(address.id)'>Edit</button></div>\n                    </div>\n                </div>\n\n                <div class=\"col-12 mt-3 mx-auto text-center\" *ngIf='(addresses.length == 0)'>\n                    <div class=\"row text-center\">\n                        <div class=\"col-md-4 mx-auto\">\n                            <img src=\"{{address}}\" alt=\"no address\" class=\"img-fluid\">\n                        </div>\n                    </div>\n                    <div class=\"row text-center\">\n\n                        <div class=\"col-md-6 mx-auto\">\n                            <p style=\"font-size: 0.7rem;\" class=\"mt-3\">You haven't added any address yet, Please add an\n                                address.</p>\n\n                        </div>\n\n\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-outline add mt-2\" (click)=\"onadd()\">Add New Address</button>\n\n                </div>\n\n                <div class=\"col-12 mx-auto text-center mt-5\">\n                    <button class=\"btn back mx-2 my-2\" type=\"submit\" routerLink='/'> Cancel</button>\n                    <button class=\"btn mx-2 my-2\" type=\"button\" (click)='onOrder()' [disabled]='disable'>Place\n                        Order</button>\n                </div>\n\n                <div class=\"col-12 disclamer pb-3\">\n                    <hr>\n                    <span>**</span><br>\n                    <span>1. Rate include service cost only.</span><br>\n                    <span>2. Additional charges may apply after inspection.</span><br>\n                    <span>3. 30 days post service guarantee.</span>\n                </div>\n            </div>\n        </div>\n\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/questionnaire.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/questionnaire.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainQuestionnaireQuestionnaireComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngStyle]=\"{'background' : 'url(' + ques_down + ')'}\">\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/questions/questions.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/questions/questions.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainQuestionnaireQuestionsQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!parentQuestion \" class=\"overlay\">\n        <img src=\"{{loading}}\" class=\"loader image-responsive\" alt=\"Loader\">\n</div>\n\n<div *ngIf='!parentQuestion'>\n<div style=\"height: 1000px\"></div>\n</div>\n\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-11 mx-auto card\" *ngIf='parentQuestion'>\n                <div class=\"row fix\" >\n                    <div class=\"col-10 mx-auto text-center py-2 heading\">\n                        <span>{{ parentQuestion.subcategory_name }}</span>\n                    </div>\n                    <div class=\"col-12 pt-4\">\n                        <p class=\"head\">{{ parentQuestion.question }}</p>\n                    </div>\n    \n                    <div class=\"col-12 \" *ngFor='let option of parentQuestion.options'>\n                        <div class=\"custom-control custom-radio py-4\" *ngIf=\"parentQuestion.select_type =='single' \">\n                            <input type=\"radio\" id=\"{{option.id}}\" name=\"customRadio\" class=\"custom-control-input\"\n                                [value]='option.id' (change)=\"onselectedOption($event.target.value)\"\n                                [required]='parentQuestion.required' #optionRadio [checked]='checkMap.get(option.id)'>\n                            <label class=\"custom-control-label\" for=\"{{option.id}}\">{{ option.choice }}</label>\n                        </div>\n    \n                        <div class=\"custom-control custom-checkbox py-4\" *ngIf=\"parentQuestion.select_type =='multi' \">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{option.id}}\" [value]='option.id'\n                                (change)=\"onselectedCheck($event.target.value)\" [checked]='checkMap.get(option.id)'>\n                            <label class=\"custom-control-label\" for=\"{{option.id}}\">{{ option.choice }}</label>\n                        </div>\n    \n                     \n    \n                        <div class=\"row\" *ngIf=\"parentQuestion.select_type =='form' \">\n                            \n                             <div class=\"col-7 pt-4 number\">\n                                <span>{{ option.choice }}</span>\n                            </div>\n                                <div class=\"col-5 pt-4 text-left text-md-center\">\n                                <span class=\"outer\"><span><button class=\"addon\" (click)='decrement(option.id)'>\n                                    <i class=\"fa fa-minus\"></i></button></span>\n                                    <span class=\"amount\">{{mapQuantity.get(option.id)}}</span><span><button class=\"addon\" (click)='increment(option.id)'>\n                                        <i class=\"fa fa-plus\"></i></button></span></span>\n                                <p class=\"total text-center pt-2\"><i class=\"fas fa-rupee-sign\"></i> {{mapPrice.get(option.id)}}</p>\n                        </div>\n    \n                    </div>\n    \n                </div>\n    \n                \n                    <div class=\"col-8 my-4 mx-auto text-center big-total\" *ngIf=\"parentQuestion.select_type =='form'\">\n                        <span ><span>Total Cost : </span><span> <i class=\"fas fa-rupee-sign\"></i>  {{total}}</span></span>\n                    </div>\n                   \n\n                    <div class=\"col-12 mx-auto  text-center py-2 btn-box\">\n                        <button class=\"btn back mx-2\" type=\"button\" (click)=\"onBack(parentQuestion); onEdit();\"\n                            *ngIf='parentQuestion.parent_question'><i class=\"fa fa-arrow-left\"></i> Back</button>\n                        <button id=\"ques_nav\" class=\"btn mx-2\" type=\"button\" (click)=\"onNext(parentQuestion); onEdit();\" id=\"next\"\n                            [disabled]='required'>Next <i class=\"fa fa-arrow-right\"></i> </button>\n                    </div>\n    \n    \n                </div>\n            </div>\n    \n        </div>\n    </div>\n    \n    <div class=\"container how\">\n       \n        <div class=\"row\">\n           <div class=\"col-md-3 py-3 py-md-5\">\n               <div class=\"row no-gutters\">\n                   <div class=\"col-6 text-center my-auto\">\n                       <img class=\"icon\" src=\"{{qa}}\">\n                   </div>\n                   <div class=\"col-6 text-section my-auto\">\n                       <span>Answer some basic questions.</span>\n                   </div>\n               </div>\n           </div>\n           <div class=\"col-md-3 py-3 py-md-5\">\n                <div class=\"row no-gutters\">\n                    <div class=\"col-6 text-center my-auto\">\n                        <img class=\"icon\" src=\"{{checklist}}\">\n                    </div>\n                    <div class=\"col-6 text-section my-auto\">\n                        <span>Choose the service you need.</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3 py-3 py-md-5\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-6 text-center my-auto\">\n                            <img class=\"icon\" src=\"{{schedule}}\">\n                        </div>\n                        <div class=\"col-6 text-section my-auto\">\n                            <span>Choose your Address and Time</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3 py-3 py-md-5\">\n                        <div class=\"row no-gutters\">\n                            <div class=\"col-6 text-center my-auto\">\n                                <img class=\"icon\" src=\"{{shield}}\">\n                            </div>\n                            <div class=\"col-6 text-section my-auto\">\n                                <span>Place your Service hassle free</span>\n                            </div>\n                        </div>\n                    </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/subcategories/subcategories.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/subcategories/subcategories.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainSubcategoriesSubcategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!showSubcategories\" class=\"overlay\">\n        <img src=\"{{loading}}\" class=\"loader image-responsive\" alt=\"Loader\">\n</div>\n\n<div *ngIf='!showSubcategories'>\n    <div style=\"height: 1000px\"></div>\n</div>\n\n<div *ngIf='showSubcategories'>\n    <div class=\"row background\" *ngIf='showSubcategories[0].category; else defaultwallpaper'>\n        <img class=\"pic\" src=\"{{ showSubcategories[0].category.wallpaper}}\">\n    </div>\n</div>\n\n<div class=\"container pushdown mt-5\">\n    <div class=\"row\">\n        <div class=\"col-12 mx-auto text-center\">\n            <div>\n                <h2 *ngIf='showSubcategories'>{{ showSubcategories[0].category.category }}</h2>\n            </div>\n        </div>\n\n\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-lg-2 col-md-2 col-4\" *ngFor='let subcategory of showSubcategories'>\n                    <a routerLink='../../../questions/{{ subcategory.subcategory }}/{{subcategory.id}}'>\n                        <div class=\"box mx-auto text-center\">\n                            <img src={{subcategory.icon}}>\n                            <p class=\"py-md-3 py-sm-2 pt-3 text\">{{ subcategory.subcategory }}</p>\n                        </div>\n                    </a>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"container-fluid  section\">\n    <div class=\"container mb-5\">\n        <div class=\"row\">\n            <div class=\"col-10 mx-auto text-center mb-4\">\n                <h2>What we offer?</h2>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-12 mt-5\">\n                <div class=\"row\">\n                    <div class=\"col-6 text-center\">\n                        <img class=\"image\" src=\"{{verified}}\" alt=\"verified professional\">\n                    </div>\n                    <div class=\"col-6 mt-md-4 mt-3\">\n                        <span class=\"head line\">Verified</span><span class=\"head\"> trained professional</span><br>\n                        <p class=\"content\">We provide only verified, background checked and high quality professionals\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 col-12 mt-5\">\n                <div class=\"row\">\n                    <div class=\"col-6 text-center\">\n                        <img class=\"image\" src=\"{{damage}}\" alt=\"verified professional\">\n                    </div>\n                    <div class=\"col-6 mt-md-4 mt-3\">\n                        <span class=\"head line\">Protection</span><span class=\"head\"> against damage</span>\n                        <p class=\"content\">get assured services done without any hassle and damage.\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 col-12 mt-5\">\n                <div class=\"row\">\n                    <div class=\"col-6 text-center\">\n                        <img class=\"image\" src=\"{{price}}\" alt=\"verified professional\">\n                    </div>\n                    <div class=\"col-6 mt-md-4 mt-3\">\n                        <span class=\"head line\">Intelligent</span><span class=\"head\"> pricing</span>\n                        <p class=\"content\">Pay only for the services you require through our Intelligent price optimization.\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6 col-12 mt-5\">\n                <div class=\"row\">\n                    <div class=\"col-6 text-center\">\n                        <img class=\"image\" src=\"{{doorstep}}\" alt=\"verified professional\">\n                    </div>\n                    <div class=\"col-6 mt-md-4 mt-3\">\n                        <span class=\"head line\">Doorstep service</span><span class=\"head\"> within 120 minutes</span>\n                        <p class=\"content\">Super convenient, guaranteed service from booking to delivery</p>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</div>\n\n\n<!--get app-->\n\n\n<div class=\"container-fluid whole\">\n    <div class=\"row getapp pb-5 pb-md-0\">\n        <div class=\"col-12 mx-auto text-center\">\n            <h2 class=\"main-head text-center\">Get the App</h2>\n        </div>\n\n        <div class=\"col-md-6 col-12 mx-auto text-center pt-md-0 pt-3\">\n            <img class=\"mobile\" src=\"{{mobile}}\">\n        </div>\n        <div class=\"col-md-6 col-10 mx-auto my-md-auto\">\n            <h2 class=\"head1\">Get the App</h2>\n            <p class=\"text-get\">Choose and book from 100+ services and track them<br> on the go with the WOFO24 App</p>\n            <p class=\"label\"><b>Send a link via SMS to install the app</b></p>\n            <form [formGroup]=\"getAppForm\" (ngSubmit)=\"ongetApp()\">\n            \n            <div class=\"row\">\n                <div class=\"col-md-6 col-12\">\n                    <input type=\"text\" class=\"form-control\" id=\"mobile_number\" placeholder=\"Mobile Number\"\n                    formControlName='phone_number'>                    <div *ngIf=\"!getAppForm.get('phone_number').valid && getAppForm.get('phone_number').touched\"\n                            class=\"validation mt-1\">Invalid Mobile Number.</div>\n                </div>\n                <div class=\"col-md-6 col-12 mx-auto mt-3 mt-md-0\">\n                    <button class=\"btn\" type=\"submit\">Get Link</button>\n                </div>\n            </div>\n            </form>\n            <a href=\"https://play.google.com/store/apps/details?id=com.wofo.wofo_24&hl=en\" target=\"__blank\">\n            <img class=\"play-store\" src=\"{{google}}\">\n            </a>\n        </div>\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/activate/activate.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/activate/activate.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUserAuthActivateActivateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5 pt-5 pb-5\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-11 mx-auto card resetpass z-depth-1 mb-4\">\n            <form [formGroup]='otpForm' (ngSubmit)=\"onOtp()\">\n                <h2 class=\"text-center mt-5\"> <b>Enter OTP</b> </h2>\n                <input class=\"form-control num mt-5 forget\" type=\"text\" placeholder=\"OTP\" formControlName=\"otp\">\n                <div *ngIf=\"!otpForm.get('otp').valid && otpForm.get('otp').touched\"\n                            class=\"validation mt-1\">Invalid OTP.</div>\n                <div class=\"text-center mt-3\" >\n                    <countdown #cd [config]=\"{leftTime: 59}\" (event)=\"handleEvent($event)\" id=\"countdown\" style=\"color: green\"></countdown>\n                    <a (click)=\"onResend()\" id=\"resend\" style=\"color: green\">Resend OTP?</a><br>\n                    <span id='sent' style=\"color: blue\">OTP Sent!</span> <br>\n                </div>\n\n\n                <div class=\"row mt-2 mb-5\">\n                    <button class=\"btn btn-warning mx-auto\" type=\"submit\" [disabled]=\"!otpForm.valid\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUserAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"loginForm\" (ngSubmit) = \"onLogin()\">\n    <div class=\"container\">\n        <div class=\"row main\">\n            <div class=\"col-md-5 col-sm-12 col-12 mx-auto text-md-left text-center\">\n                <h1><b>Login</b></h1>\n                <p class=\"mt-4\"> Wofo will provide you with most affordable, quick and trusted services.<br>Create an account, it's free.</p>\n                \n                <input class=\"form-control mt-5\" type=\"text\" placeholder=\"Mobile Number\" formControlName='phone_number'>\n                <div *ngIf=\"!loginForm.get('phone_number').valid && loginForm.get('phone_number').touched\" class=\"validation\">Invalid Mobile Number.</div>\n                <div *ngIf=\"doesnotexist\" class=\"validation\">Phone number does not exist,please Signup.</div>\n\n                  <div class=\"text-center mt-5\">\n                    <button class=\"btn\" type=\"submit\" [disabled]='!loginForm.valid'>Login <i class=\"fas fa-arrow-right\"></i> </button>\n                    <p class=\"mt-3\"><span style=\"color: black;\">New to WOFO24?</span><span (click)='create()' class=\"create\"> Create an Account</span></p>\n                </div>\n                \n            </div>\n            <div class=\"col-md-7 col-sm-12 col-12 mx-auto text-md-right image\">\n                <img class=\"direction\" width=\"90%\" src=\"{{direction}}\">\n                <img class=\"dots\" src=\"{{dots}}\">\n            </div>\n            \n        </div>\n        \n    </div>\n    \n    </form>\n\n\n\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/register/register.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/register/register.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUserAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"signupForm\" (ngSubmit) = \"OnSignup()\">\n    <div class=\"container\">\n        <div class=\"row main\">\n            <div class=\"col-md-5 col-sm-12 col-12 mx-auto text-md-left text-center\">\n                <h1><b>Sign Up</b></h1>\n                <p class=\"mt-4\"> Wofo will provide you with most affordable, quick and trusted services.<br>Create an account, it's free.</p>\n                <input class=\"form-control mt-5\" type=\"text\" placeholder=\"Full Name\" formControlName='name'>\n                <div *ngIf=\"!signupForm.get('name').valid && signupForm.get('name').touched\" class=\"validation\">Invalid Name.</div>\n                <input class=\"form-control mt-4\" type=\"text\" placeholder=\"Mobile Number\" formControlName='phone_number' (focus)=\"removeval()\">\n                <div *ngIf=\"!signupForm.get('phone_number').valid && signupForm.get('phone_number').touched\" class=\"validation mt-1\" >Invalid Mobile Number.</div>\n                <div *ngIf=\"alreadyExist\" class=\"validation mt-1\" id='val'>Number already exist, Please Login.</div>\n\n                  <div class=\"text-center mt-5\">\n                    <button class=\"btn\" type=\"submit\" [disabled]='!signupForm.valid'>Sign up <i class=\"fas fa-arrow-right\"></i> </button>\n                    <p class=\"mt-3\"><span style=\"color: black;\">Already have an Account?</span><span (click)='onLogin()' class=\"login\" > Login Here</span></p>\n                </div>\n                \n            </div>\n            <div class=\"col-md-7 col-sm-12 col-12 mx-auto text-md-right image\">\n                <img class=\"direction\" width=\"90%\" src=\"{{direction}}\">\n                <img class=\"dots\" src=\"{{dots}}\">\n            </div>\n            \n        </div>\n        \n    </div>\n    <div class=\"text-right \">\n        \n    </div>\n    </form>";
    /***/
  },

  /***/
  "./src/app/main/about-order/about-order.component.css":
  /*!************************************************************!*\
    !*** ./src/app/main/about-order/about-order.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainAboutOrderAboutOrderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    z-index: 10001;\n  }\n  \n  \n  .overlay {\n    position: fixed; /* Sit on top of the page content */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff82; /* Black background with opacity */\n    z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n  \n  \n  .container{\n    margin-top: 5vh;\n    margin-bottom: 10vh;\n}\n  \n  \n  h4,h5{\n    color: #1D4793;\n    font-weight: 400;\n}\n  \n  \n  .booked{\n    font-size: 0.9rem;\n}\n  \n  \n  .address{\n    margin-top: 2rem;\n    letter-spacing: 0.032rem;\n}\n  \n  \n  .left{\n    text-transform: uppercase;\n    letter-spacing: 0.02rem;\n    font-weight: 500;\n    color: #F7BE52;\n}\n  \n  \n  .right{\n    letter-spacing: 0.05rem;\n    text-transform: uppercase;\n}\n  \n  \n  h3{\n    color: #1D4793;\n}\n  \n  \n  .card{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    padding: 2rem;\n    border-radius: 0.375rem;\n}\n  \n  \n  .card:hover{\n    box-shadow:  5px 5px 25px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n}\n  \n  \n  .top{\n    border-top: 1px solid black;\n   \n}\n  \n  \n  .image{\n    width: 45%;\n    border-radius: 50%;\n}\n  \n  \n  .professional{\n    box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);\n    padding: 1.5rem 0.4rem;\n    border-radius: 0.575rem;\n}\n  \n  \n  .head,.head p{\n    font-weight: bold;\n    color: #1D4793;\n}\n  \n  \n  .details span{\n    font-size: 0.85rem;\n    letter-spacing: 0.025rem;\n}\n  \n  \n  .btn{\n    background-color: #F7BE52;\n    padding: 0.2rem 1.7rem !important;\n    color: white;\n    box-shadow:3px 3px 4px rgba(247, 189, 82, 0.445);\n}\n  \n  \n  @media (min-width: 768px) and (max-width: 1024px){\n    .image{\n        width: 60%\n    }\n    \n\n}\n  \n  \n  @media (min-width: 481px) and (max-width: 768px) {\n  \n    .image{\n        width: 100%\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  \n  \n  @media (min-width: 380px) and (max-width: 480px){\n    \n    h4{\n        font-size: 1.4rem;\n    }\n    h5{\n        font-size: 0.9rem\n    }\n    .booked {\n        font-size: 0.9rem;\n    }\n    .address {\n        margin-top: 2rem;\n        letter-spacing: 0.032rem;\n        font-size: 0.8rem;\n    }\n    .live{\n        font-size: 0.8rem;\n    }\n    .image{\n        width: 100%\n    }\n    .details span{\n        font-size: 0.75rem;\n    }\n    .head,.head p{\n        font-size: 0.8rem;\n    }\n    .content p{\n        font-size: 0.8rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n  \n   \n}\n  \n  \n  @media (min-width: 320px) and (max-width: 380px){\n    h4{\n        font-size: 1rem;\n    }\n    h5{\n        font-size: 0.7rem\n    }\n    .booked {\n        font-size: 0.7rem;\n    }\n    .address {\n        margin-top: 2rem;\n        letter-spacing: 0.032rem;\n        font-size: 0.6rem;\n    }\n    .live{\n        font-size: 0.8rem;\n    }\n    .image{\n        width: 100%\n    }\n    .details span{\n        font-size: 0.65rem;\n    }\n    .head,.head p{\n        font-size: 0.7rem;\n    }\n    .content p{\n        font-size: 0.7rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hYm91dC1vcmRlci9hYm91dC1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGNBQWM7RUFDaEI7OztFQUdBO0lBQ0UsZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFlBQVksRUFBRSx1Q0FBdUM7SUFDckQsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUEyQixFQUFFLGtDQUFrQztJQUMvRCxjQUFjLEVBQUUsb0ZBQW9GO0lBQ3BHLGVBQWUsRUFBRSwyQkFBMkI7RUFDOUM7OztFQUVGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7O0VBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7RUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0VBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOzs7RUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztFQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7O0VBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7RUFDQTtJQUNJLGdEQUFnRDtJQUNoRCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7RUFDQTtJQUNJLG1EQUFtRDtJQUNuRCxpQ0FBeUI7SUFBekIseUJBQXlCO0FBQzdCOzs7RUFDQTtJQUNJLDJCQUEyQjs7QUFFL0I7OztFQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7O0VBQ0E7SUFDSSxrREFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7O0VBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOzs7RUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGdEQUFnRDtBQUNwRDs7O0VBS0E7SUFDSTtRQUNJO0lBQ0o7OztBQUdKOzs7RUFFQTs7SUFFSTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0FBQ0o7OztFQUNBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOzs7QUFHSjs7O0VBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWJvdXQtb3JkZXIvYWJvdXQtb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHotaW5kZXg6IDEwMDAxO1xuICB9XG4gIFxuICBcbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODI7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMTAwMDA7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgfVxuXG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xufVxuaDQsaDV7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5ib29rZWR7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uYWRkcmVzc3tcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzMnJlbTtcbn1cbi5sZWZ0e1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0Y3QkU1Mjtcbn1cbi5yaWdodHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaDN7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG59XG4uY2FyZHtcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cbi5jYXJkOmhvdmVye1xuICAgIGJveC1zaGFkb3c6ICA1cHggNXB4IDI1cHggMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnRvcHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICBcbn1cbi5pbWFnZXtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wcm9mZXNzaW9uYWx7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyNXB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgcGFkZGluZzogMS41cmVtIDAuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjU3NXJlbTtcbn1cbi5oZWFkLC5oZWFkIHB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG59XG4uZGV0YWlscyBzcGFue1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG59XG5cbi5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3QkU1MjtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMS43cmVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6M3B4IDNweCA0cHggcmdiYSgyNDcsIDE4OSwgODIsIDAuNDQ1KTtcbn1cblxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAuaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA2MCVcbiAgICB9XG4gICAgXG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgXG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xuICAgIFxuICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gICAgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtXG4gICAgfVxuICAgIC5ib29rZWQge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gICAgLmFkZHJlc3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMzJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgICAubGl2ZXtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG4gICAgLmRldGFpbHMgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbiAgICAuaGVhZCwuaGVhZCBwe1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQgcHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gIFxuICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtXG4gICAgfVxuICAgIC5ib29rZWQge1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gICAgLmFkZHJlc3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMzJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cbiAgICAubGl2ZXtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG4gICAgLmRldGFpbHMgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIH1cbiAgICAuaGVhZCwuaGVhZCBwe1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQgcHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/about-order/about-order.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/main/about-order/about-order.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutOrderComponent */

  /***/
  function srcAppMainAboutOrderAboutOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutOrderComponent", function () {
      return AboutOrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AboutOrderComponent =
    /*#__PURE__*/
    function () {
      function AboutOrderComponent(activeRoute, as, ss, route, ass) {
        _classCallCheck(this, AboutOrderComponent);

        this.activeRoute = activeRoute;
        this.as = as;
        this.ss = ss;
        this.route = route;
        this.ass = ass;
        this.loading = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/loading.svg';
      }

      _createClass(AboutOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this9.orderId = params['id'];
          });
          var x = new channels.WebSocketBridge();
          x.connect('wss://wofo24.com:8443/update/' + this.orderId + '/'); // console.log(x);
          // console.log(this.orders);

          x.listen(function (action) {
            // console.log('RESPONSE:', action)
            // console.log(action.professional_assigned)
            _this9.orderDetail.service_status = action.service_status;
            _this9.orderDetail.professional_assigned = action.professional_assigned; //  console.log(this.orderDetail.professional_assigned);
          });
          this.ss.getOrderDetail(this.as.getAccessToken(), this.orderId).subscribe(function (res) {
            // console.log(res);
            _this9.orderDetail = res[0]; // console.log(this.orderDetail)
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onMyBooking",
        value: function onMyBooking() {
          this.route.navigate(['bookings']);
        }
      }, {
        key: "onCancel",
        value: function onCancel(order_id) {
          var _this10 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to cancel the booking?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#F7BE52',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then(function (result) {
            if (result.value) {
              var cancelled = {
                'service_status': 'Cancelled'
              };

              _this10.ass.updateStatus(_this10.as.getAccessToken(), order_id, cancelled).subscribe(function (res) {
                // console.log(res)
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled!', 'Your Booking has been Cancelled.', 'success');

                _this10.ngOnInit();
              }, function (err) {// console.log(err);
              });
            }
          });
        }
      }]);

      return AboutOrderComponent;
    }();

    AboutOrderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }];
    };

    AboutOrderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-about-order',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./about-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/about-order/about-order.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./about-order.component.css */
      "./src/app/main/about-order/about-order.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])], AboutOrderComponent);
    /***/
  },

  /***/
  "./src/app/main/about-us/about-us.component.css":
  /*!******************************************************!*\
    !*** ./src/app/main/about-us/about-us.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainAboutUsAboutUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n.image{\n    width: 100%;\n    \n}\n.text{\n    font-size: 1.3rem;\n    line-height: auto;\n}\n.about{\n    position: relative;\n    top: -16rem;\n}\n.head{\n    font-size: 4rem;\n    color: white;\n    font-weight: 600;\n}\n.content{\n    margin-top: -5rem;\n}\n.heading{\n    color: #1D4793;    \n}\n@media (min-width: 1024px) and (max-width: 1480px){\n    \n\n}\n@media (min-width: 768px) and (max-width: 1024px){\n    .about{\n        \n        top: -13rem;\n    }\n}\n@media (min-width: 500px) and (max-width: 768px) {\n    .about{\n        \n        top: -10rem;\n    }\n    .head{\n        font-size: 3.5rem;\n        \n    }\n  \n}\n@media (min-width: 380px) and (max-width: 500px){\n    .image{\n        height: 22vh;\n        \n    }\n    .head{\n        font-size: 2.5rem;\n        \n    }\n    .about{\n        \n        top: -8rem;\n    }\n    .text{\n        font-size: 1rem;\n    }\n    .heading{\n        color: #1D4793; \n        font-size: 1.5rem;   \n    }\n    \n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    .image{\n        height: 22vh;\n        \n    }\n    .head{\n        font-size: 2.5rem;\n        \n    }\n    .about{\n        \n        top: -8rem;\n    }\n    .text{\n        font-size: 1rem;\n    }\n    .heading{\n        color: #1D4793; \n        font-size: 1.5rem;   \n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxXQUFXOztBQUVmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBSUE7OztBQUdBO0FBQ0E7SUFDSTs7UUFFSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBO0lBQ0k7O1FBRUksV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7O0lBRXJCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxpQkFBaUI7O0lBRXJCO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOzs7QUFHSjtBQUNBO0lBQ0k7UUFDSSxZQUFZOztJQUVoQjtJQUNBO1FBQ0ksaUJBQWlCOztJQUVyQjtJQUNBOztRQUVJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5pbWFnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbn1cbi50ZXh0e1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xufVxuLmFib3V0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNnJlbTtcbn1cbi5oZWFke1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250ZW50e1xuICAgIG1hcmdpbi10b3A6IC01cmVtO1xufVxuLmhlYWRpbmd7XG4gICAgY29sb3I6ICMxRDQ3OTM7ICAgIFxufVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE0ODBweCl7XG4gICAgXG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgLmFib3V0e1xuICAgICAgICBcbiAgICAgICAgdG9wOiAtMTNyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5hYm91dHtcbiAgICAgICAgXG4gICAgICAgIHRvcDogLTEwcmVtO1xuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgIFxuICAgIH1cbiAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmltYWdle1xuICAgICAgICBoZWlnaHQ6IDIydmg7XG4gICAgICAgIFxuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIFxuICAgIH1cbiAgICAuYWJvdXR7XG4gICAgICAgIFxuICAgICAgICB0b3A6IC04cmVtO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaGVhZGluZ3tcbiAgICAgICAgY29sb3I6ICMxRDQ3OTM7IFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTsgICBcbiAgICB9XG4gICAgXG4gICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICAuaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMjJ2aDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5oZWFke1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5hYm91dHtcbiAgICAgICAgXG4gICAgICAgIHRvcDogLThyZW07XG4gICAgfVxuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5oZWFkaW5ne1xuICAgICAgICBjb2xvcjogIzFENDc5MzsgXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyAgIFxuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/about-us/about-us.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/main/about-us/about-us.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppMainAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AboutUsComponent =
    /*#__PURE__*/
    function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);

        this.about = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/about.png';
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-about-us',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/about-us/about-us.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./about-us.component.css */
      "./src/app/main/about-us/about-us.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/main/dev-team/dev-team.component.css":
  /*!******************************************************!*\
    !*** ./src/app/main/dev-team/dev-team.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDevTeamDevTeamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main{\n    width: 95%;\n}\nimg{\n    /* filter: grayscale(100%); */\n    -webkit-filter: brightness(0.9);\n            filter: brightness(0.9);\n}\na{\n    color: white !important;\n    font-size: 1.8rem;\n\n}\n.row{\n    margin-left: -15px !important;\n    margin-right: -15px !important;\n}\n.dev{\n    font-family: 'poiret one', cursive;\n    font-size: 3rem;\n    border-bottom: 1px solid black;\n    font-weight: 500;\n}\n.image{\n    width: 250px;\n    height: 250px;\n    box-shadow: 3px 3px 3px 1px rgba(53, 53, 53, 0.2);\n    border-radius: 0.352rem;\n}\n.col-4{\n    padding-right: 10px;\n    padding-left: 10px;\n}\n.first{\n    margin-top: 5rem;\n}\n.third{\n    margin-top: 5rem;\n}\n.flip-card {\n    background-color: transparent;\n    width: 250px;\n    height: 250px;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n    border-radius: 0.352rem;\n  }\n.front{\n      position: relative;\n      bottom: 4rem;\n      color: white;\n      font-size: 1.3rem;\n      font-weight: 600;\n      letter-spacing: 0.095rem;\n      line-height: 0.5rem;\n      box-shadow: 5px 5px 12px 5px rgba(53, 53, 53, 0.2);\n      border-bottom: 1px solid white;\n      font-family: 'poiret one', cursive;\n  }\n.flip-card-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    -webkit-transition: -webkit-transform 0.6s;\n    transition: -webkit-transform 0.6s;\n    transition: transform 0.6s;\n    transition: transform 0.6s, -webkit-transform 0.6s;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  }\n.flip-card:hover .flip-card-inner {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n  }\n.flip-card-front, .flip-card-back {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n  }\n.flip-card-front {\n    background-color: #bbb;\n    color: black;\n  }\n.flip-card-back {\n    font-size: 3rem !important;\n  }\n/* .icons{\n      margin-top: 4rem;\n  } */\n.name{\n      margin-top: 6.5rem;\n     \n  }\n.flip-card-back {\n    \n    background-image: -webkit-gradient(linear,left top, left bottom,from(#ffd28e),to(#ff806d));\n    \n    background-image: linear-gradient(to bottom,#ffd28e,#ff806d);\n    /* background-color: #2980b9; */\n    color: white;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n  }\n.card{\n      box-shadow: 5px 5px 15px 5px rgba(53, 53, 53, 0.2);\n      padding: 2rem 2rem;\n      border-radius: 0.55rem;\n      /* border-top: 5px solid linear-gradient(90deg,#f5576cbe 0,#feac40be 100%); */\n      color: white;\n      background-image: -webkit-gradient(linear,left top, left bottom,from(#ffd28e),to(#ff806d));\n      background-image: linear-gradient(to bottom,#ffd28e,#ff806d);\n  }\n.si{\n      width: 20%;\n  }\n.si-text{\n      text-align: justify;\n  }\n@media (min-width: 1280px) and (max-width: 1480px){\n\n  }\n@media (min-width: 1024px) and (max-width: 1280px){\n    .image{\n        width: 180px;\n        height: 180px;\n        \n    }\n    .flip-card {\n       \n        width: 180px;\n        height: 180px;\n       \n        border-radius: 0.352rem;\n      }\n      .front{\n        \n        bottom: 2.5rem;\n        \n        font-size: 0.8rem;\n       \n    }\n    .icons{\n        margin-top: 1.5rem;\n    }\n    .name{\n        margin-top: 1.5rem;\n        /* font-size: 0.8rem; */\n       \n    }\n    .si-text{\n        font-size: 1rem;\n    }\n  \n}\n@media (min-width: 768px) and (max-width: 1024px){\n    .image{\n        width: 150px;\n        height: 150px;\n        \n    }\n    .flip-card {\n       \n        width: 150px;\n        height: 150px;\n       \n        border-radius: 0.352rem;\n      }\n      .front{\n        \n        bottom: 2.5rem;\n        \n        font-size: 0.8rem;\n       \n    }\n    .icons{\n        margin-top: 1.5rem;\n    }\n    .name{\n        margin-top: 1.5rem;\n        font-size: 0.8rem;\n       \n    }\n    .si-text{\n        font-size: 0.6rem;\n    }\n    \n}\n@media (min-width: 500px) and (max-width: 768px){\n    /* .text{\n        display: none;\n    } */\n    .card{\n        padding: 1.6rem 1rem;\n    }\n    .image{\n        width: 110px;\n        height: 110px;\n        \n    }\n    .flip-card {\n       \n        width: 110px;\n        height: 110px;\n       \n        border-radius: 0.352rem;\n      }\n      .front{\n        \n        bottom: 2.5rem;\n        \n        font-size: 0.8rem;\n       \n    }\n    .icons{\n        margin-top: 1.5rem;\n    }\n    .name{\n        margin-top: 1.5rem;\n        font-size: 0.8rem;\n       \n    }\n    .si-text{\n        font-size: 0.5rem;\n    }\n\n}\n@media (min-width: 380px) and (max-width: 500px){\n   .first,.third{\n       margin-top: 0.5rem;\n   } \n   .dev{\n    font-size: 2.8rem;\n}   \n.image{\n    width: 350px;\n    height: 350px;\n    \n}\n.flip-card {\n   \n    width: 350px;\n    height: 350px;\n   \n   \n  }\n  .si-text{\n    font-size: 0.7rem;\n}\n.main{\n    width: 100%;\n}\n}\n@media (min-width: 320px) and (max-width: 380px){\n    .first,.third{\n        margin-top: 0.5rem;\n    }   \n    .dev{\n        font-size: 2.6rem;\n    } \n    .image{\n        width: 300px;\n        height: 300px;\n        \n    }\n    .flip-card {\n       \n        width: 300px;\n        height: 300px;\n       \n       \n      }\n      .si-text{\n        font-size:  0.7rem;\n    }\n    .main{\n        width: 100%;\n    }\n }\n@media (max-width: 320px){\n    .main{\n        width: 100%;\n    }\n    .first,.third{\n        margin-top: 0.5rem;\n    }  \n    .dev{\n        font-size: 2.4rem;\n    } \n    .image{\n        width: 280px;\n        height: 280px;\n        \n    }\n    .flip-card {\n       \n        width: 280px;\n        height: 280px;\n       \n       \n      }\n      .si-text{\n        font-size:  0.7rem;\n    }\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kZXYtdGVhbS9kZXYtdGVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpREFBaUQ7SUFDakQsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7QUFDQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsd0JBQXdCO01BQ3hCLG1CQUFtQjtNQUNuQixrREFBa0Q7TUFDbEQsOEJBQThCO01BQzlCLGtDQUFrQztFQUN0QztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBDQUEwQjtJQUExQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQTFCLGtEQUEwQjtJQUMxQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLHVDQUF1QztFQUN6QztBQUVBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3QjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtBQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0E7O0tBRUc7QUFDSDtNQUNJLGtCQUFrQjs7RUFFdEI7QUFFQTs7SUFFRSwwRkFBNEQ7O0lBQTVELDREQUE0RDtJQUM1RCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7QUFFQTtNQUNJLGtEQUFrRDtNQUNsRCxrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLDZFQUE2RTtNQUM3RSxZQUFZO01BQ1osMEZBQTREO01BQTVELDREQUE0RDtFQUNoRTtBQUNBO01BQ0ksVUFBVTtFQUNkO0FBQ0E7TUFDSSxtQkFBbUI7RUFDdkI7QUFJQTs7RUFFQTtBQUNBO0lBQ0U7UUFDSSxZQUFZO1FBQ1osYUFBYTs7SUFFakI7SUFDQTs7UUFFSSxZQUFZO1FBQ1osYUFBYTs7UUFFYix1QkFBdUI7TUFDekI7TUFDQTs7UUFFRSxjQUFjOztRQUVkLGlCQUFpQjs7SUFFckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLHVCQUF1Qjs7SUFFM0I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7O0lBRWpCO0lBQ0E7O1FBRUksWUFBWTtRQUNaLGFBQWE7O1FBRWIsdUJBQXVCO01BQ3pCO01BQ0E7O1FBRUUsY0FBYzs7UUFFZCxpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJOztPQUVHO0lBQ0g7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhOztJQUVqQjtJQUNBOztRQUVJLFlBQVk7UUFDWixhQUFhOztRQUViLHVCQUF1QjtNQUN6QjtNQUNBOztRQUVFLGNBQWM7O1FBRWQsaUJBQWlCOztJQUVyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCOztJQUVyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKO0FBRUE7R0FDRztPQUNJLGtCQUFrQjtHQUN0QjtHQUNBO0lBQ0MsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTs7QUFFakI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTs7O0VBR2Y7RUFDQTtJQUNFLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7QUFJQztJQUNHO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhOztJQUVqQjtJQUNBOztRQUVJLFlBQVk7UUFDWixhQUFhOzs7TUFHZjtNQUNBO1FBQ0Usa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7Q0FDSDtBQUlEO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTs7SUFFakI7SUFDQTs7UUFFSSxZQUFZO1FBQ1osYUFBYTs7O01BR2Y7TUFDQTtRQUNFLGtCQUFrQjtJQUN0QjtDQUNIIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kZXYtdGVhbS9kZXYtdGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XG4gICAgd2lkdGg6IDk1JTtcbn1cbmltZ3tcbiAgICAvKiBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgKi9cbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cblxuYXtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcblxufVxuXG4ucm93e1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcbn1cbi5kZXZ7XG4gICAgZm9udC1mYW1pbHk6ICdwb2lyZXQgb25lJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaW1hZ2V7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4IHJnYmEoNTMsIDUzLCA1MywgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1MnJlbTtcbn1cbi5jb2wtNHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5maXJzdHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuLnRoaXJke1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG59XG5cbi5mbGlwLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNTJyZW07XG4gIH1cbiAgLmZyb250e1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm90dG9tOiA0cmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDk1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTJweCA1cHggcmdiYSg1MywgNTMsIDUzLCAwLjIpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgZm9udC1mYW1pbHk6ICdwb2lyZXQgb25lJywgY3Vyc2l2ZTtcbiAgfVxuICBcbiAgLmZsaXAtY2FyZC1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gIH1cbiAgXG4gIC5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIH1cbiAgXG4gIC5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5mbGlwLWNhcmQtZnJvbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5mbGlwLWNhcmQtYmFjayB7XG4gICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLyogLmljb25ze1xuICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfSAqL1xuICAubmFtZXtcbiAgICAgIG1hcmdpbi10b3A6IDYuNXJlbTtcbiAgICAgXG4gIH1cbiAgXG4gIC5mbGlwLWNhcmQtYmFjayB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZmZkMjhlLCNmZjgwNmQpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB9XG5cbiAgLmNhcmR7XG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggNXB4IHJnYmEoNTMsIDUzLCA1MywgMC4yKTtcbiAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNTVyZW07XG4gICAgICAvKiBib3JkZXItdG9wOiA1cHggc29saWQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCNmNTU3NmNiZSAwLCNmZWFjNDBiZSAxMDAlKTsgKi9cbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2ZmZDI4ZSwjZmY4MDZkKTtcbiAgfVxuICAuc2l7XG4gICAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5zaS10ZXh0e1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG5cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcblxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xuICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICBcbiAgICB9XG4gICAgLmZsaXAtY2FyZCB7XG4gICAgICAgXG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zNTJyZW07XG4gICAgICB9XG4gICAgICAuZnJvbnR7XG4gICAgICAgIFxuICAgICAgICBib3R0b206IDIuNXJlbTtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgIFxuICAgIH1cbiAgICAuaWNvbnN7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICB9XG4gICAgLm5hbWV7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgLyogZm9udC1zaXplOiAwLjhyZW07ICovXG4gICAgICAgXG4gICAgfVxuICAgIC5zaS10ZXh0e1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAuZmxpcC1jYXJkIHtcbiAgICAgICBcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgIFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjM1MnJlbTtcbiAgICAgIH1cbiAgICAgIC5mcm9udHtcbiAgICAgICAgXG4gICAgICAgIGJvdHRvbTogMi41cmVtO1xuICAgICAgICBcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgXG4gICAgfVxuICAgIC5pY29uc3tcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICBcbiAgICB9XG4gICAgLnNpLXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cbiAgICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAvKiAudGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9ICovXG4gICAgLmNhcmR7XG4gICAgICAgIHBhZGRpbmc6IDEuNnJlbSAxcmVtO1xuICAgIH1cbiAgICAuaW1hZ2V7XG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5mbGlwLWNhcmQge1xuICAgICAgIFxuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzUycmVtO1xuICAgICAgfVxuICAgICAgLmZyb250e1xuICAgICAgICBcbiAgICAgICAgYm90dG9tOiAyLjVyZW07XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICBcbiAgICB9XG4gICAgLmljb25ze1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgIFxuICAgIH1cbiAgICAuc2ktdGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzODBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgIC5maXJzdCwudGhpcmR7XG4gICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgfSBcbiAgIC5kZXZ7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG59ICAgXG4uaW1hZ2V7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgXG59XG4uZmxpcC1jYXJkIHtcbiAgIFxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgXG4gICBcbiAgfVxuICAuc2ktdGV4dHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5tYWlue1xuICAgIHdpZHRoOiAxMDAlO1xufVxufVxuXG5cblxuIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICAuZmlyc3QsLnRoaXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgfSAgIFxuICAgIC5kZXZ7XG4gICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgIH0gXG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAuZmxpcC1jYXJkIHtcbiAgICAgICBcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgIFxuICAgICAgIFxuICAgICAgfVxuICAgICAgLnNpLXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogIDAuN3JlbTtcbiAgICB9XG4gICAgLm1haW57XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiB9XG4gICAgXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KXtcbiAgICAubWFpbntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5maXJzdCwudGhpcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICB9ICBcbiAgICAuZGV2e1xuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICB9IFxuICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xuICAgICAgICBcbiAgICB9XG4gICAgLmZsaXAtY2FyZCB7XG4gICAgICAgXG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICBcbiAgICAgICBcbiAgICAgIH1cbiAgICAgIC5zaS10ZXh0e1xuICAgICAgICBmb250LXNpemU6ICAwLjdyZW07XG4gICAgfVxuIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/dev-team/dev-team.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/main/dev-team/dev-team.component.ts ***!
    \*****************************************************/

  /*! exports provided: DevTeamComponent */

  /***/
  function srcAppMainDevTeamDevTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevTeamComponent", function () {
      return DevTeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DevTeamComponent =
    /*#__PURE__*/
    function () {
      function DevTeamComponent() {
        _classCallCheck(this, DevTeamComponent);

        this.vinayak = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/vinayak.jpg';
        this.silogo = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/silogo.svg';
        this.murli = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/murli.jpg';
        this.alok = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/alok.jpg';
        this.harsh = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/harsh.jpg';
        this.utkarsh = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/utkarsh.jpeg';
        this.pramod = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/pramod.jpeg';
      }

      _createClass(DevTeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DevTeamComponent;
    }();

    DevTeamComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-dev-team',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dev-team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dev-team/dev-team.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./dev-team.component.css */
      "./src/app/main/dev-team/dev-team.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], DevTeamComponent);
    /***/
  },

  /***/
  "./src/app/main/footer/footer.component.css":
  /*!**************************************************!*\
    !*** ./src/app/main/footer/footer.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list{\n    padding-left: 0;\n    list-style: none;\n}\n.head{\n    letter-spacing: 0.094rem;\n    opacity: 1;\n    color: #1D4793;\n}\n.row{\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.footer{\n    background-color: beige;\n   \n    \n}\n.list li{\n    padding-top: 1rem;\n}\n.categories li{\n    padding-top: 0.4rem;\n}\n.list a,.icons a,.silink a{\n    text-decoration: none;\n    color: #1D4793;\n    opacity: 0.8;\n    cursor: pointer;\n    font-size: 0.8rem;\n    letter-spacing: 0.09rem;\n}\n.footer a:hover{\n    opacity: 1;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n}\n.fab{\n    font-size: 1.5rem;\n}\n.wofo{\n    font-size: 0.8rem;\n    color: #1D4793;\n    opacity: 0.9;\n    letter-spacing: 0.09rem;\n    line-height: 1.2rem;\n}\n.footer-down{\n    margin-top: 10vh;\n}\n.footer-down img{\n    width: 20%;\n}\n.icons ul {\n    -webkit-padding-start: 0px;\n            padding-inline-start: 0px;\n}\n.icons ul li{\n    display: inline-block;\n    padding: 0 2vw 0 2vw;\n    font-size: 1.8rem;\n    text-decoration: none;\n}\n.icons li:hover{\n    -webkit-animation: jello 1s ;\n            animation: jello 1s ;\n}\n@-webkit-keyframes jello {\n    from,\n    11.1%,\n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  \n    22.2% {\n      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n              transform: skewX(-12.5deg) skewY(-12.5deg);\n    }\n  \n    33.3% {\n      -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n              transform: skewX(6.25deg) skewY(6.25deg);\n    }\n  \n    44.4% {\n      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n              transform: skewX(-3.125deg) skewY(-3.125deg);\n    }\n  \n    55.5% {\n      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n              transform: skewX(1.5625deg) skewY(1.5625deg);\n    }\n  \n    66.6% {\n      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n              transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    }\n  \n    77.7% {\n      -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n              transform: skewX(0.390625deg) skewY(0.390625deg);\n    }\n  \n    88.8% {\n      -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n              transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    }\n  }\n@keyframes jello {\n    from,\n    11.1%,\n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  \n    22.2% {\n      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n              transform: skewX(-12.5deg) skewY(-12.5deg);\n    }\n  \n    33.3% {\n      -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n              transform: skewX(6.25deg) skewY(6.25deg);\n    }\n  \n    44.4% {\n      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n              transform: skewX(-3.125deg) skewY(-3.125deg);\n    }\n  \n    55.5% {\n      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n              transform: skewX(1.5625deg) skewY(1.5625deg);\n    }\n  \n    66.6% {\n      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n              transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    }\n  \n    77.7% {\n      -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n              transform: skewX(0.390625deg) skewY(0.390625deg);\n    }\n  \n    88.8% {\n      -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n              transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    }\n  }\n.far{\n    color: #1D4793;\n}\n.text{\n    color: #1D4793;\n    letter-spacing: 0.02rem;\n    font-size: 0.8rem;\n    font-weight: 500;\n}\n.si{\n    background-color: #1D4793;\n}\n.silink{\n    font-size: 0.8rem;\n    color: white;\n}\n.silink a{\n   color: white !important;\n   opacity: 1 !important;\n}\n@media (min-width: 1024px) and (max-width: 1480px){\n       .text{\n           font-size: 0.85em;\n       }\n       .footer-down{\n           margin-top: 5vh;\n       }\n\n}\n@media (min-width: 768px) and (max-width: 1024px){\n    .text{\n        font-size: 0.6em;\n        letter-spacing: 0rem;\n    }\n\n    .footer-down{\n        margin-top: 5vh;\n    }\n\n    \n}\n@media (min-width: 481px) and (max-width: 767px) {\n    .text{\n        font-size: 0.8em;\n    }\n    .footer-down{\n        margin-top: 5vh;\n    }\n    .si{\n        font-size: 0.8em;\n    }\n  \n}\n@media (min-width: 320px) and (max-width: 480px){\n    .text{\n        font-size: 0.64em;\n    }\n    .footer-down{\n        margin-top: 5vh;\n    }\n    .si{\n        font-size: 0.7em;\n    }\n    .icons ul li{\n       \n        font-size: 1.2rem;\n        \n    }\n  \n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    .text{\n       display: none;\n    }\n    .footer-down{\n        margin-top: 5vh;\n\n    }\n    .si{\n        font-size: 0.6em;\n    }\n    .icons ul li{\n       \n        font-size: 1.2rem;\n        \n    }\n    .footer-down img{\n        width: 30%;\n    }\n    .silink a{\n        letter-spacing: 0.02rem;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHVCQUF1Qjs7O0FBRzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixpQ0FBeUI7SUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSwwQkFBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJOzs7TUFHRSx1Q0FBK0I7Y0FBL0IsK0JBQStCO0lBQ2pDOztJQUVBO01BQ0Usa0RBQTBDO2NBQTFDLDBDQUEwQztJQUM1Qzs7SUFFQTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7SUFDMUM7O0lBRUE7TUFDRSxvREFBNEM7Y0FBNUMsNENBQTRDO0lBQzlDOztJQUVBO01BQ0Usb0RBQTRDO2NBQTVDLDRDQUE0QztJQUM5Qzs7SUFFQTtNQUNFLHdEQUFnRDtjQUFoRCxnREFBZ0Q7SUFDbEQ7O0lBRUE7TUFDRSx3REFBZ0Q7Y0FBaEQsZ0RBQWdEO0lBQ2xEOztJQUVBO01BQ0UsNERBQW9EO2NBQXBELG9EQUFvRDtJQUN0RDtFQUNGO0FBbENGO0lBQ0k7OztNQUdFLHVDQUErQjtjQUEvQiwrQkFBK0I7SUFDakM7O0lBRUE7TUFDRSxrREFBMEM7Y0FBMUMsMENBQTBDO0lBQzVDOztJQUVBO01BQ0UsZ0RBQXdDO2NBQXhDLHdDQUF3QztJQUMxQzs7SUFFQTtNQUNFLG9EQUE0QztjQUE1Qyw0Q0FBNEM7SUFDOUM7O0lBRUE7TUFDRSxvREFBNEM7Y0FBNUMsNENBQTRDO0lBQzlDOztJQUVBO01BQ0Usd0RBQWdEO2NBQWhELGdEQUFnRDtJQUNsRDs7SUFFQTtNQUNFLHdEQUFnRDtjQUFoRCxnREFBZ0Q7SUFDbEQ7O0lBRUE7TUFDRSw0REFBb0Q7Y0FBcEQsb0RBQW9EO0lBQ3REO0VBQ0Y7QUFDRjtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0dBQ0csdUJBQXVCO0dBQ3ZCLHFCQUFxQjtBQUN4QjtBQUdBO09BQ087V0FDSSxpQkFBaUI7T0FDckI7T0FDQTtXQUNJLGVBQWU7T0FDbkI7O0FBRVA7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7OztBQUdKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7O1FBRUksaUJBQWlCOztJQUVyQjs7O0FBR0o7QUFDQTtJQUNJO09BQ0csYUFBYTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTs7SUFFbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBOztRQUVJLGlCQUFpQjs7SUFFckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5oZWFke1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA5NHJlbTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjMUQ0NzkzO1xufVxuLnJvd3tcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbn1cblxuLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgIFxuICAgIFxufVxuLmxpc3QgbGl7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uY2F0ZWdvcmllcyBsaXtcbiAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xufVxuXG4ubGlzdCBhLC5pY29ucyBhLC5zaWxpbmsgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOXJlbTtcbn1cbi5mb290ZXIgYTpob3ZlcntcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uZmFie1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLndvZm97XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA5cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG59XG4uZm9vdGVyLWRvd257XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbn1cbi5mb290ZXItZG93biBpbWd7XG4gICAgd2lkdGg6IDIwJTtcbn1cbi5pY29ucyB1bCB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cbi5pY29ucyB1bCBsaXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAydncgMCAydnc7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmljb25zIGxpOmhvdmVye1xuICAgIGFuaW1hdGlvbjogamVsbG8gMXMgO1xufVxuXG5Aa2V5ZnJhbWVzIGplbGxvIHtcbiAgICBmcm9tLFxuICAgIDExLjElLFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICAyMi4yJSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XG4gICAgfVxuICBcbiAgICAzMy4zJSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xuICAgIH1cbiAgXG4gICAgNDQuNCUge1xuICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gICAgfVxuICBcbiAgICA1NS41JSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDY2LjYlIHtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDc3LjclIHtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDg4LjglIHtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XG4gICAgfVxuICB9XG4uZmFye1xuICAgIGNvbG9yOiAjMUQ0NzkzO1xufVxuLnRleHR7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJyZW07XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zaXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQ0NzkzO1xufVxuLnNpbGlua3tcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uc2lsaW5rIGF7XG4gICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgICAgICAudGV4dHtcbiAgICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgfVxuICAgICAgIC5mb290ZXItZG93bntcbiAgICAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xuICAgICAgIH1cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDByZW07XG4gICAgfVxuXG4gICAgLmZvb3Rlci1kb3due1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgfVxuXG4gICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbiAgICAuZm9vdGVyLWRvd257XG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICB9XG4gICAgLnNpe1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbiAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XG4gICAgLnRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NGVtO1xuICAgIH1cbiAgICAuZm9vdGVyLWRvd257XG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICB9XG4gICAgLnNpe1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIH1cbiAgICAuaWNvbnMgdWwgbGl7XG4gICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgLnRleHR7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmZvb3Rlci1kb3due1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG5cbiAgICB9XG4gICAgLnNpe1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgIH1cbiAgICAuaWNvbnMgdWwgbGl7XG4gICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBcbiAgICB9XG4gICAgLmZvb3Rlci1kb3duIGltZ3tcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gICAgLnNpbGluayBhe1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMnJlbTtcbiAgICB9XG5cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/main/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppMainFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(ss) {
        _classCallCheck(this, FooterComponent);

        this.ss = ss;
        this.logo = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/logo.png';
        this.silogoW = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/silogoW.svg';
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.ss.getCategories().subscribe(function (res) {
            // console.log(res);
            _this11.categories = res;
            _this11;
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }];
    };

    FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/footer/footer.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/main/footer/footer.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/main/hire-professional/hire-professional.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/main/hire-professional/hire-professional.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHireProfessionalHireProfessionalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    z-index: 10001;\n  }\n  \n  .overlay {\n    position: fixed; /* Sit on top of the page content */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff82; /* Black background with opacity */\n    z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n  \n  .col-12{\n    border-radius: 10px;\n    \n}\n  \n  .profcard{\n    box-shadow: 0 0 12px 0 rgba(0,0,0,.1), 0 4px 8px 0 rgba(0,0,0,0.1);\n}\n  \n  .col-md-2,.col-md-4,.col-md-3,.col-md-6{\n    padding-right: 0px;\n    padding-left: 0px;\n}\n  \n  .search{\n    position: relative;\n    color: white;\n    bottom:13rem;\n}\n  \n  .image{\n    width: 50%;\n    border-radius: 50%;\n}\n  \n  .list{\n    padding-left: 0;\n    list-style: none;\n}\n  \n  .btn{\n    background-color: #F7BE52;\n    padding: 0.2rem 1.4rem !important;\n    color: white;\n    box-shadow:3px 3px 4px rgba(247, 189, 82, 0.445);\n}\n  \n  .slate{\n    padding: 1.5rem 1rem 1rem 1rem;\n}\n  \n  .name{\n    color: #1D4793;\n    font-size: 1.6rem;\n    font-weight: 500;\n}\n  \n  .left{\n    font-weight:500;\n}\n  \n  .price{\n    color: #1D4793;\n    font-size: 1.7rem;\n    font-weight: 500;\n}\n  \n  @media (min-width: 1024px) and (max-width: 1480px){\n    \n\n}\n  \n  @media (min-width: 501px) and (max-width: 768px) {\n    .image{\n        width: 90%;\n        \n    }\n    .price{\n        \n        font-size: 1.4rem;\n    }\n    .name{\n        \n        font-size: 1.2rem;\n    }\n  .list li{\n      font-size: 0.8rem;\n  }\n  .loader{\n    width: 100px;\n    height: 100px;\n}\n  \n}\n  \n  @media (min-width: 320px) and (max-width: 500px){\n    .image{\n        width: 100%;\n        \n    }\n    .price{\n        \n        font-size: 0.6rem;\n    }\n    .name{\n        \n        font-size: 0.7rem;\n    }\n  .list li{\n      font-size: 0.55rem;\n  }\n    .btn{\n        font-size: 0.6rem;\n        padding: 0.2rem 0.5rem !important;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  \n  @media (min-width: 320px) and (max-width: 380px){\n    .image{\n        width: 120%;\n        \n    }\n    .price{\n        \n        font-size: 0.55rem;\n    }\n    .name{\n        \n        font-size: 0.7rem;\n    }\n  .list li{\n      font-size: 0.55rem;\n  }\n    .btn{\n        font-size: 0.5rem;\n        padding: 0.2rem 0.35rem !important;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  \n  @media (max-width: 320px){\n    .image{\n        width: 120%;\n        \n    }\n    .price{\n        \n        font-size: 0.55rem;\n    }\n    .name{\n        \n        font-size: 0.6rem;\n    }\n  .list li{\n      font-size: 0.55rem;\n  }\n    .btn{\n        font-size: 0.45rem;\n        padding: 0.2rem 0.35rem !important;\n    }\n    .price-tag{\n        padding-right: 0px;\n        padding-left: 0px;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9oaXJlLXByb2Zlc3Npb25hbC9oaXJlLXByb2Zlc3Npb25hbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlLEVBQUUsbUNBQW1DO0lBQ3BELFdBQVcsRUFBRSxzQ0FBc0M7SUFDbkQsWUFBWSxFQUFFLHVDQUF1QztJQUNyRCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQTJCLEVBQUUsa0NBQWtDO0lBQy9ELGNBQWMsRUFBRSxvRkFBb0Y7SUFDcEcsZUFBZSxFQUFFLDJCQUEyQjtFQUM5Qzs7RUFFRjtJQUNJLG1CQUFtQjs7QUFFdkI7O0VBQ0E7SUFDSSxrRUFBa0U7QUFDdEU7O0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztFQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7RUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0VBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixnREFBZ0Q7QUFDcEQ7O0VBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7O0VBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7RUFDQTtJQUNJLGVBQWU7QUFDbkI7O0VBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7RUFFQTs7O0FBR0E7O0VBRUE7SUFDSTtRQUNJLFVBQVU7O0lBRWQ7SUFDQTs7UUFFSSxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxpQkFBaUI7SUFDckI7RUFDRjtNQUNJLGlCQUFpQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7O0VBQ0E7SUFDSTtRQUNJLFdBQVc7O0lBRWY7SUFDQTs7UUFFSSxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxpQkFBaUI7SUFDckI7RUFDRjtNQUNJLGtCQUFrQjtFQUN0QjtJQUNFO1FBQ0ksaUJBQWlCO1FBQ2pCLGlDQUFpQztJQUNyQztJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7RUFFQTtJQUNJO1FBQ0ksV0FBVzs7SUFFZjtJQUNBOztRQUVJLGtCQUFrQjtJQUN0QjtJQUNBOztRQUVJLGlCQUFpQjtJQUNyQjtFQUNGO01BQ0ksa0JBQWtCO0VBQ3RCO0lBQ0U7UUFDSSxpQkFBaUI7UUFDakIsa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtBQUNKOztFQUNBO0lBQ0k7UUFDSSxXQUFXOztJQUVmO0lBQ0E7O1FBRUksa0JBQWtCO0lBQ3RCO0lBQ0E7O1FBRUksaUJBQWlCO0lBQ3JCO0VBQ0Y7TUFDSSxrQkFBa0I7RUFDdEI7SUFDRTtRQUNJLGtCQUFrQjtRQUNsQixrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hpcmUtcHJvZmVzc2lvbmFsL2hpcmUtcHJvZmVzc2lvbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICB6LWluZGV4OiAxMDAwMTtcbiAgfVxuICBcbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODI7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMTAwMDA7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgfVxuXG4uY29sLTEye1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG59XG4ucHJvZmNhcmR7XG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggMCByZ2JhKDAsMCwwLC4xKSwgMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEpO1xufVxuLmNvbC1tZC0yLC5jb2wtbWQtNCwuY29sLW1kLTMsLmNvbC1tZC02e1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5zZWFyY2h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3R0b206MTNyZW07XG59XG5cbi5pbWFnZXtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5saXN0e1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdCRTUyO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAxLjRyZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzozcHggM3B4IDRweCByZ2JhKDI0NywgMTg5LCA4MiwgMC40NDUpO1xufVxuLnNsYXRle1xuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDFyZW0gMXJlbTtcbn1cbi5uYW1le1xuICAgIGNvbG9yOiAjMUQ0NzkzO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubGVmdHtcbiAgICBmb250LXdlaWdodDo1MDA7XG59XG4ucHJpY2V7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE0ODBweCl7XG4gICAgXG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIFxuICAgIH1cbiAgICAucHJpY2V7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gICAgLm5hbWV7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gIC5saXN0IGxpe1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLmxvYWRlcntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbiAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5wcmljZXtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiAgLmxpc3QgbGl7XG4gICAgICBmb250LXNpemU6IDAuNTVyZW07XG4gIH1cbiAgICAuYnRue1xuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMTIwJTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5wcmljZXtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMC41NXJlbTtcbiAgICB9XG4gICAgLm5hbWV7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gIC5saXN0IGxpe1xuICAgICAgZm9udC1zaXplOiAwLjU1cmVtO1xuICB9XG4gICAgLmJ0bntcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjM1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpe1xuICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDEyMCU7XG4gICAgICAgIFxuICAgIH1cbiAgICAucHJpY2V7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgfVxuICAubGlzdCBsaXtcbiAgICAgIGZvbnQtc2l6ZTogMC41NXJlbTtcbiAgfVxuICAgIC5idG57XG4gICAgICAgIGZvbnQtc2l6ZTogMC40NXJlbTtcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuMzVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnByaWNlLXRhZ3tcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICB9XG4gICAgLmxvYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/hire-professional/hire-professional.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/main/hire-professional/hire-professional.component.ts ***!
    \***********************************************************************/

  /*! exports provided: HireProfessionalComponent */

  /***/
  function srcAppMainHireProfessionalHireProfessionalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HireProfessionalComponent", function () {
      return HireProfessionalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HireProfessionalComponent =
    /*#__PURE__*/
    function () {
      function HireProfessionalComponent(ss, auth) {
        _classCallCheck(this, HireProfessionalComponent);

        this.ss = ss;
        this.auth = auth;
        this.showProfessionals = [];
        this.booked_professionals = [];
        this.noProfessional = false;
        this.plumberwall = src_app_services_assets__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + '/plumberwall.png';
        this.hire_prof = src_app_services_assets__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + '/hire-prof.svg';
        this.loading = src_app_services_assets__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + '/loading.svg';
        this.Hire = new Map();
      }

      _createClass(HireProfessionalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.booked_professionals = [];
          this.ss.getCategories().subscribe(function (res) {
            _this12.categories = res;
          }, function (err) {// console.log(err);
          });
          this.ss.getprofessionals().subscribe(function (res) {
            // console.log(res);
            _this12.professionals = res;

            if (_this12.professionals.length == 0) {
              _this12.noProfessional = true;
            }

            for (var i = 0; i < _this12.professionals.length; i++) {
              _this12.showProfessionals.push(_this12.professionals[i]);

              _this12.Hire.set(_this12.professionals[i].id, true);
            }
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onCategory",
        value: function onCategory(id) {
          this.showProfessionals = [];

          if (id != 0) {
            this.categoryId = id;

            for (var i = 0; i < this.professionals.length; i++) {
              for (var j = 0; j < this.professionals[i].subcategory.length; j++) {
                if (this.professionals[i].subcategory[j].category.id == this.categoryId) {
                  this.showProfessionals.push(this.professionals[i]);
                  break;
                }
              }
            }
          } else {
            for (var i = 0; i < this.professionals.length; i++) {
              for (var j = 0; j < this.professionals[i].subcategory.length; j++) {
                this.showProfessionals.push(this.professionals[i]);
                break;
              }
            }
          } // console.log(this.showProfessionals)


          if (this.showProfessionals.length == 0) {
            this.noProfessional = true;
          } else {
            this.noProfessional = false;
          }
        }
      }, {
        key: "onBook",
        value: function onBook(id) {
          var _this13 = this;

          this.professionalId = id;
          this.booked_professionals.push(id); // console.log(this.professionalId);

          this.ss.getHireProfessional(this.auth.getAccessToken(), this.professionalId).subscribe(function (res) {
            // console.log(res)
            _this13.Hire.set(id, false);
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return HireProfessionalComponent;
    }();

    HireProfessionalComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HireProfessionalComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-hire-professional',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./hire-professional.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/hire-professional/hire-professional.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./hire-professional.component.css */
      "./src/app/main/hire-professional/hire-professional.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], HireProfessionalComponent);
    /***/
  },

  /***/
  "./src/app/main/home/categories/categories.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/main/home/categories/categories.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeCategoriesCategoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2{\n  color: #1D4793;\n  font-weight: 400;\n}\n.box{\n  border-radius: 0.375rem;\n  box-shadow: 3px 3px 17px 3px rgba(46, 61, 73, 0.2);\n  margin-top: 3rem;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n  /* min-height: 22vh; */\n  height: 10rem;\n \n}\n.row{\n  margin-left: -15px !important;\n  margin-right: -15px !important;\n\n}\n.box:hover{\n  \n  -webkit-transition: all .4s ease;\n  \n  transition: all .4s ease;\n  box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16), 0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);\n}\n.box img{\n  padding-top: 1rem;\n  width: 50%;\n \n}\n.box a{\ntext-decoration: none;\n}\n.text{\nfont-size: 0.8rem;\nletter-spacing: 0.08rem;\nfont-weight: 500;\ncolor: #1D4793; \n}\n.box img:hover{\n  -webkit-animation: jello 1s ;\n          animation: jello 1s ;\n}\n@-webkit-keyframes jello {\n  from,\n  11.1%,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n            transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n            transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n            transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n            transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n            transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n            transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n@keyframes jello {\n  from,\n  11.1%,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n            transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n            transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n            transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n            transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n            transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n            transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\na{\n color: black;\n text-decoration: none;\n}\n@media (min-width: 1280px) and (max-width: 1480px){\n.box{\n  margin-top: 2rem;\n  height: 10rem;\n}\n.box img{\n  width: 50%;\n}\n.box p{\n  font-size: 0.8em;\n}\n}\n@media (min-width: 1024px) and (max-width: 1280px){\n.box{\n  margin-top: 2rem;\n  height: 11rem;\n}\n.box img{\n  width: 60%;\n}\n.box p{\n  font-size: 0.8em;\n}\n}\n@media (min-width: 768px) and (max-width: 1024px){\n  .box{\n      margin-top: 2rem;\n      height: 10rem;\n   }\n   .box img{\n      width: 60%;\n  }\n  .box p{\n      font-size: 0.8em;\n  }\n  \n}\n@media (min-width: 768px) and (max-width: 900px){\n.box{\n  margin-top: 2rem;\n  height: 9rem;\n}\n.box img{\nwidth: 70%;\n\n}\n}\n@media (min-width: 500px) and (max-width: 768px) {\n  .box{\n      margin-top: 1rem;\n      height: 8rem;\n   }\n   .box img{\n      width: 60%;\n      \n  }\n  .box p{\n      font-size: 0.6em;\n      \n  }\n}\n@media (min-width: 380px) and (max-width: 500px){\n  h2{\n      font-size: 1.5em;\n  }\n  .box{\n      margin-top: 1rem;\n      height: 7.7rem;\n      box-shadow: 3px 3px 15px 3px rgba(46, 61, 73, 0.2);\n   }\n   .box img{\n      width: 50%;\n  }\n  .box p{\n      font-size: 0.7em;\n      margin-bottom: 0.5rem;\n  }\n  .col-4{\n    padding-left: 10px !important;\n    padding-right: 10px !important;\n  }\n}\n@media (min-width: 320px) and (max-width: 380px){\n  h2{\n      font-size: 1.2em;\n  }\n  .box{\n      margin-top: 1rem;\n      height: 6rem;\n      box-shadow: 3px 3px 10px 3px rgba(46, 61, 73, 0.2);\n   }\n   .box img{\n      width: 50%;\n  }\n  .box p{\n      font-size: 0.5em;\n      margin-bottom: 0.5rem;\n  }\n  .col-4{\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtEQUFrRDtFQUNsRCxnQkFBZ0I7RUFDaEIsZ0NBQXdCO0VBQXhCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsYUFBYTs7QUFFZjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4Qjs7QUFFaEM7QUFFQTs7RUFFRSxnQ0FBd0I7O0VBQXhCLHdCQUF3QjtFQUN4QixxSEFBcUg7QUFDdkg7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVOztBQUVaO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix1QkFBdUI7QUFDdkIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZDtBQUNBO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0QjtBQUdBO0VBQ0U7OztJQUdFLHVDQUErQjtZQUEvQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxrREFBMEM7WUFBMUMsMENBQTBDO0VBQzVDOztFQUVBO0lBQ0UsZ0RBQXdDO1lBQXhDLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLG9EQUE0QztZQUE1Qyw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxvREFBNEM7WUFBNUMsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usd0RBQWdEO1lBQWhELGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLHdEQUFnRDtZQUFoRCxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0VBQ3REO0FBQ0Y7QUFsQ0E7RUFDRTs7O0lBR0UsdUNBQStCO1lBQS9CLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGtEQUEwQztZQUExQywwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxnREFBd0M7WUFBeEMsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0Usb0RBQTRDO1lBQTVDLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLG9EQUE0QztZQUE1Qyw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0Usd0RBQWdEO1lBQWhELGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7RUFDdEQ7QUFDRjtBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtBQUN0QjtBQUVBO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0FBRUE7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtFQUNFO01BQ0ksZ0JBQWdCO01BQ2hCLGFBQWE7R0FDaEI7R0FDQTtNQUNHLFVBQVU7RUFDZDtFQUNBO01BQ0ksZ0JBQWdCO0VBQ3BCOztBQUVGO0FBQ0E7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0VBQ0U7TUFDSSxnQkFBZ0I7TUFDaEIsWUFBWTtHQUNmO0dBQ0E7TUFDRyxVQUFVOztFQUVkO0VBQ0E7TUFDSSxnQkFBZ0I7O0VBRXBCO0FBQ0Y7QUFDQTtFQUNFO01BQ0ksZ0JBQWdCO0VBQ3BCO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGtEQUFrRDtHQUNyRDtHQUNBO01BQ0csVUFBVTtFQUNkO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIscUJBQXFCO0VBQ3pCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsOEJBQThCO0VBQ2hDO0FBQ0Y7QUFDQTtFQUNFO01BQ0ksZ0JBQWdCO0VBQ3BCO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGtEQUFrRDtHQUNyRDtHQUNBO01BQ0csVUFBVTtFQUNkO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIscUJBQXFCO0VBQ3pCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ob21lL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gIGNvbG9yOiAjMUQ0NzkzO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmJveHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTdweCAzcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XG4gIC8qIG1pbi1oZWlnaHQ6IDIydmg7ICovXG4gIGhlaWdodDogMTByZW07XG4gXG59XG5cbi5yb3d7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuLmJveDpob3ZlcntcbiAgXG4gIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMTcsIDIyLCAyNiwgMC4xNiksIDAgNHB4IDhweCAwIHJnYmEoMTcsIDIyLCAyNiwgMC4wOCksIDAgOHB4IDE2cHggMCByZ2JhKDE3LCAyMiwgMjYsIDAuMDgpO1xufVxuLmJveCBpbWd7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICB3aWR0aDogNTAlO1xuIFxufVxuLmJveCBhe1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRleHR7XG5mb250LXNpemU6IDAuOHJlbTtcbmxldHRlci1zcGFjaW5nOiAwLjA4cmVtO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmNvbG9yOiAjMUQ0NzkzOyBcbn1cbi5ib3ggaW1nOmhvdmVye1xuICBhbmltYXRpb246IGplbGxvIDFzIDtcbn1cblxuXG5Aa2V5ZnJhbWVzIGplbGxvIHtcbiAgZnJvbSxcbiAgMTEuMSUsXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMjIuMiUge1xuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcbiAgfVxuXG4gIDMzLjMlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xuICB9XG5cbiAgNDQuNCUge1xuICAgIHRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xuICB9XG5cbiAgNTUuNSUge1xuICAgIHRyYW5zZm9ybTogc2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpO1xuICB9XG5cbiAgNjYuNiUge1xuICAgIHRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcbiAgfVxuXG4gIDc3LjclIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XG4gIH1cblxuICA4OC44JSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcbiAgfVxufVxuXG5he1xuIGNvbG9yOiBibGFjaztcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDgwcHgpe1xuLmJveHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgaGVpZ2h0OiAxMHJlbTtcbn1cbi5ib3ggaW1ne1xuICB3aWR0aDogNTAlO1xufVxuLmJveCBwe1xuICBmb250LXNpemU6IDAuOGVtO1xufVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcbi5ib3h7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGhlaWdodDogMTFyZW07XG59XG4uYm94IGltZ3tcbiAgd2lkdGg6IDYwJTtcbn1cbi5ib3ggcHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gIC5ib3h7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgIH1cbiAgIC5ib3ggaW1ne1xuICAgICAgd2lkdGg6IDYwJTtcbiAgfVxuICAuYm94IHB7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG4gIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuLmJveHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgaGVpZ2h0OiA5cmVtO1xufVxuLmJveCBpbWd7XG53aWR0aDogNzAlO1xuXG59XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYm94e1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIGhlaWdodDogOHJlbTtcbiAgIH1cbiAgIC5ib3ggaW1ne1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIFxuICB9XG4gIC5ib3ggcHtcbiAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgICBcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICBoMntcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbiAgLmJveHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBoZWlnaHQ6IDcuN3JlbTtcbiAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTVweCAzcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICAgfVxuICAgLmJveCBpbWd7XG4gICAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5ib3ggcHtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbiAgLmNvbC00e1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xuICBoMntcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbiAgLmJveHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggM3B4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgIH1cbiAgIC5ib3ggaW1ne1xuICAgICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm94IHB7XG4gICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG4gIC5jb2wtNHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/home/categories/categories.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/main/home/categories/categories.component.ts ***!
    \**************************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppMainHomeCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CategoriesComponent =
    /*#__PURE__*/
    function () {
      function CategoriesComponent(ss) {
        _classCallCheck(this, CategoriesComponent);

        this.ss = ss;
        this.defaultImage = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/electrician.png';
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.ss.getCategories().subscribe(function (res) {
            _this14.categories = res;
          }, function (err) {// console.log(err);
          });
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }];
    };

    CategoriesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-categories',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/categories/categories.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./categories.component.css */
      "./src/app/main/home/categories/categories.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]])], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/main/home/contactus/contactus.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/main/home/contactus/contactus.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeContactusContactusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.validation{\n    color:red;\n    font-size: 0.8rem;\n    margin-left: 0rem;\n}h2,h1{\n    color: #1D4793; \n    font-weight: 400;\n}.waves{\n    margin-top: -15vh;\n}.waves-reverse{\n    margin-top: -0.12vh;\n}.icon{\n    margin-top: 15vh;\n}.icon img{\n   width: 6%;\n}.wave{\n    background-color: rgba(250,213,141, 0.4);\n}.form-control{\n    border: 1px solid #ffffff;\n    box-shadow:3px 3px 12px 6px rgba(0, 0, 0, 0.1);\n    border-left: 2px solid #F7BE52;\n    width: 80%;\n}.top{\n    margin-top: 1rem;\n}.image{\n    width: 80%;\n}.btn{\n    width: 80%;\n    border-radius: 0.25rem;\n    margin-top: 1rem;\n    background-color: #F7BE52;\n    border: 0px; \n    padding: 0.4rem 2rem !important;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.913rem;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 20px 0px rgba(46, 61, 73, 0.15);\n}.btn:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #E6AE46;\n    outline: none;\n    border-color: transparent;\n}.left{\n    color: #F7BE52;\n    font-weight: 400;\n}.right{\n    color: #1D4793;\n    font-weight: 500;\n}.getapp{\n    margin-top: 5vh;\n}.service{\n    margin-top: 0;\n    font-size: 1.2rem;\n    letter-spacing: 0.094rem;\n    font-weight: 500;\n    \n}.service-text{\n    font-size: 0.7rem;\n}.fas{\n    font-size: 3rem;\n   \n    -webkit-background-clip: text;\n   \n            background-clip: text;\n    -webkit-text-fill-color:transparent;\n    background-image: -webkit-gradient(linear, left top, right top, from(#00c6fb), to(#005bea));\n    background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);\n}@media (min-width: 1026px) and (max-width: 1480px){\n    \n    \n    .icon img{\n        width: 8%;\n     }\n     .waves{\n        margin-top: -13vh;\n    }\n    .waves-reverse{\n        margin-top: -0.12vh;\n    }\n\n}@media (min-width: 768px) and (max-width: 1024px){\n    \n   \n    \n     .icon img{\n         width: 8%;\n      }\n      .image{\n        width: 100%;\n    }\n    #bottom{\n        margin-bottom:4vh;\n    }\n    .waves{\n        margin-top: -7vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n    \n}@media (min-width: 481px) and (max-width: 767px) {\n    h3{\n        font-size: 1.5em;\n    }\n   \n     .icon img{\n         width: 15%;\n      }\n      #bottom{\n        margin-bottom:4vh;\n    }\n    .waves{\n        margin-top: -4vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n  \n}@media (min-width: 500px) and (max-width: 750px){\n\n    .waves{\n      margin-top: -6vh;\n    }\n    .waves-reverse{\n      margin-top: -0.1vh;\n    }\n}@media (min-width: 380px) and (max-width: 500px){\n    h3{\n        font-size: 1em;\n    \n    }\n    \n     .icon img{\n         width: 15%;\n      }\n      #bottom{\n        margin-bottom:4vh;\n    }\n    .waves{\n        margin-top: -8vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n   \n}@media (min-width: 320px) and (max-width: 380px){\n    h2{\n        font-size: 1.5em;\n        margin-top: 1rem;\n    }\n    .left{\n        font-size: 0.9em;\n    }\n    #bottom{\n        margin-bottom:4vh;\n    }\n    .waves{\n        margin-top: -6vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n    .icon img{\n        width: 15%;\n     }\n     .form-control,.btn{\n         width: 100%;\n     }\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQixDQUFDO0lBQ0csY0FBYztJQUNkLGdCQUFnQjtBQUNwQixDQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCLENBQ0E7SUFDSSxtQkFBbUI7QUFDdkIsQ0FDQTtJQUNJLGdCQUFnQjtBQUNwQixDQUNBO0dBQ0csU0FBUztBQUNaLENBRUE7SUFDSSx3Q0FBd0M7QUFDNUMsQ0FDQTtJQUNJLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsOEJBQThCO0lBQzlCLFVBQVU7QUFDZCxDQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCLENBQ0E7SUFDSSxVQUFVO0FBQ2QsQ0FDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsb0RBQW9EO0FBQ3hELENBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QixDQUdBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQixDQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQixDQUVBO0lBQ0ksZUFBZTtBQUNuQixDQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZ0JBQWdCOztBQUVwQixDQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCLENBR0E7SUFDSSxlQUFlOztJQUVmLDZCQUFxQjs7WUFBckIscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQywyRkFBcUU7SUFBckUscUVBQXFFO0FBQ3pFLENBSUE7OztJQUdJO1FBQ0ksU0FBUztLQUNaO0tBQ0E7UUFDRyxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSixDQUNBOzs7O0tBSUs7U0FDSSxTQUFTO01BQ1o7TUFDQTtRQUNFLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSixDQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0tBRUM7U0FDSSxVQUFVO01BQ2I7TUFDQTtRQUNFLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUosQ0FDQTs7SUFFSTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0Usa0JBQWtCO0lBQ3BCO0FBQ0osQ0FDQTtJQUNJO1FBQ0ksY0FBYzs7SUFFbEI7O0tBRUM7U0FDSSxVQUFVO01BQ2I7TUFDQTtRQUNFLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUosQ0FDQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO0tBQ2I7S0FDQTtTQUNJLFdBQVc7S0FDZjs7O0FBR0wiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmFsaWRhdGlvbntcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG59aDIsaDF7XG4gICAgY29sb3I6ICMxRDQ3OTM7IFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi53YXZlc3tcbiAgICBtYXJnaW4tdG9wOiAtMTV2aDtcbn1cbi53YXZlcy1yZXZlcnNle1xuICAgIG1hcmdpbi10b3A6IC0wLjEydmg7XG59XG4uaWNvbntcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xufVxuLmljb24gaW1ne1xuICAgd2lkdGg6IDYlO1xufVxuXG4ud2F2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwyMTMsMTQxLCAwLjQpO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6M3B4IDNweCAxMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjRjdCRTUyO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi50b3B7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5pbWFnZXtcbiAgICB3aWR0aDogODAlO1xufVxuLmJ0bntcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdCRTUyO1xuICAgIGJvcmRlcjogMHB4OyBcbiAgICBwYWRkaW5nOiAwLjRyZW0gMnJlbSAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAwLjkxM3JlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xMjVyZW07XG4gICAgYm94LXNoYWRvdzogOHB4IDEwcHggMjBweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjE1KTtcbn1cbi5idG46aG92ZXJ7XG4gICAgYm94LXNoYWRvdzoycHggNHB4IDhweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QUU0NjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuLmxlZnR7XG4gICAgY29sb3I6ICNGN0JFNTI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yaWdodHtcbiAgICBjb2xvcjogIzFENDc5MztcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZ2V0YXBwe1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbn1cblxuLnNlcnZpY2V7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOTRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBcbn1cbi5zZXJ2aWNlLXRleHR7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cblxuLmZhc3tcbiAgICBmb250LXNpemU6IDNyZW07XG4gICBcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBjNmZiIDAlLCAjMDA1YmVhIDEwMCUpO1xufVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjZweCkgYW5kIChtYXgtd2lkdGg6IDE0ODBweCl7XG4gICAgXG4gICAgXG4gICAgLmljb24gaW1ne1xuICAgICAgICB3aWR0aDogOCU7XG4gICAgIH1cbiAgICAgLndhdmVze1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTN2aDtcbiAgICB9XG4gICAgLndhdmVzLXJldmVyc2V7XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjEydmg7XG4gICAgfVxuXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgIFxuICAgXG4gICAgXG4gICAgIC5pY29uIGltZ3tcbiAgICAgICAgIHdpZHRoOiA4JTtcbiAgICAgIH1cbiAgICAgIC5pbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNib3R0b217XG4gICAgICAgIG1hcmdpbi1ib3R0b206NHZoO1xuICAgIH1cbiAgICAud2F2ZXN7XG4gICAgICAgIG1hcmdpbi10b3A6IC03dmg7XG4gICAgfVxuICAgIC53YXZlcy1yZXZlcnNle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4xdmg7XG4gICAgfVxuICAgIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG4gICBcbiAgICAgLmljb24gaW1ne1xuICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgIH1cbiAgICAgICNib3R0b217XG4gICAgICAgIG1hcmdpbi1ib3R0b206NHZoO1xuICAgIH1cbiAgICAud2F2ZXN7XG4gICAgICAgIG1hcmdpbi10b3A6IC00dmg7XG4gICAgfVxuICAgIC53YXZlcy1yZXZlcnNle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4xdmg7XG4gICAgfVxuICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcblxuICAgIC53YXZlc3tcbiAgICAgIG1hcmdpbi10b3A6IC02dmg7XG4gICAgfVxuICAgIC53YXZlcy1yZXZlcnNle1xuICAgICAgbWFyZ2luLXRvcDogLTAuMXZoO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzODBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgXG4gICAgfVxuICAgIFxuICAgICAuaWNvbiBpbWd7XG4gICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgfVxuICAgICAgI2JvdHRvbXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo0dmg7XG4gICAgfVxuICAgIC53YXZlc3tcbiAgICAgICAgbWFyZ2luLXRvcDogLTh2aDtcbiAgICB9XG4gICAgLndhdmVzLXJldmVyc2V7XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjF2aDtcbiAgICB9XG4gICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLmxlZnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgfVxuICAgICNib3R0b217XG4gICAgICAgIG1hcmdpbi1ib3R0b206NHZoO1xuICAgIH1cbiAgICAud2F2ZXN7XG4gICAgICAgIG1hcmdpbi10b3A6IC02dmg7XG4gICAgfVxuICAgIC53YXZlcy1yZXZlcnNle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4xdmg7XG4gICAgfVxuICAgIC5pY29uIGltZ3tcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgfVxuICAgICAuZm9ybS1jb250cm9sLC5idG57XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgfVxuXG5cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/home/contactus/contactus.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/home/contactus/contactus.component.ts ***!
    \************************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppMainHomeContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ContactusComponent =
    /*#__PURE__*/
    function () {
      function ContactusComponent(formbuilder, ss, as) {
        _classCallCheck(this, ContactusComponent);

        this.formbuilder = formbuilder;
        this.ss = ss;
        this.as = as;
        this.contact_us = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/contact-us.svg';
        this.wave = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/wave.svg';
        this.touch = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/touch.svg';
        this.wave_reverse = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/wave-reverse.svg';
        var numberFormat = '[6-9][0-9]{9}';
        var emailFormat = '[a-zA-Z0-9._-]+@[a-z]+\\.+[a-z]+[a-z.]';
        this.contactUsForm = this.formbuilder.group({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(emailFormat)])),
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(numberFormat)]),
          'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.as.getAdminCount().subscribe(function (res) {
            // console.log(res);
            _this15.count = res;
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onContactus",
        value: function onContactus() {
          var _this16 = this;

          this.ss.postContact(this.contactUsForm.value).subscribe(function (res) {
            // console.log(res);
            _this16.contactUsForm.reset();

            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Mail sent',
              text: 'We will contact you soon.',
              type: 'success',
              confirmButtonText: 'Ok'
            });
          }, function (err) {
            // console.log(err)
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Try Again',
              text: 'Something went wrong, Please try again.',
              type: 'error',
              confirmButtonText: 'Ok'
            });
          });
        }
      }]);

      return ContactusComponent;
    }();

    ContactusComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AdminServiceService"]
      }];
    };

    ContactusComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-contactus',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/contactus/contactus.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./contactus.component.css */
      "./src/app/main/home/contactus/contactus.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AdminServiceService"]])], ContactusComponent);
    /***/
  },

  /***/
  "./src/app/main/home/getapp/getapp.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/main/home/getapp/getapp.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeGetappGetappComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-12{\n    margin: 0px;\n}\n.validation{\n    color:red;\n    font-size: 0.8rem;\n    margin-left: 0rem;\n}\n.main-head{\n    display: none;\n}\n.getapp{\n    margin-top: 10vh;\n    /* padding-top: 5rem; */\n}\n.row{\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.mobile{\n    width: 60%;\n}\nh2{\n    color: #1D4793;\n}\n.label{\n    margin-top: 4vh;\n    color: #F7BE52;\n}\n.form-control{\n    box-shadow: 3px 3px 12px  rgba(0, 0, 0, 0.1);\n    border-left: 2px solid #F7BE52 !important;\n    border: 1px solid white;\n}\n.play-store{\n    margin-top: 3vh;\n    height: 3rem;\n}\n.btn{\n    border: 0px;\n    background-color: #F7BE52;\n    border-radius: 0.25rem;\n    background-color: #F7BE52;\n    border: 0px;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 1rem;\n    letter-spacing: 0.025rem;\n    box-shadow: 8px 10px 20px 0px rgba(46, 61, 73, 0.15);\n}\n.btn:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #E6AE46;\n    outline: none;\n    border-color: transparent;\n}\n@media (min-width: 1024px) and (max-width: 1480px){\n    .play-store{\n        margin-top: 3vh;\n    }\n    .mobile{\n        width: 60%;\n    }\n\n}\n@media (min-width: 768px) and (max-width: 1022px){\n    .mobile{\n        width: 70%;\n    }\n  .play-store{\n    margin-top: 3vh;\n}\n.label{\n    margin-top: 2vh;\n    color: #F7BE52;\n}\n.text{\n    font-size: 0.8em;\n}\n\n}\n@media (min-width: 481px) and (max-width: 767px) {\n   h2{\n      margin-top: 5vh;\n    }\n   .mobile{\n    width: 90%;\n    }\n    .main-head{\n        display: block;\n        text-align: center;\n        font-weight: 400;\n    }\n    .head{\n        display: none;\n    }\n  \n}\n@media (min-width: 381px) and (max-width: 480px){\n    h2{\n        margin-top: 5vh;\n      }\n     .mobile{\n      width: 90%;\n      }\n      .main-head{\n        display: block;\n        text-align: center;\n        font-weight: 400;\n    }\n    .head{\n        display: none;\n    }\n    .text{\n        font-size: 0.7em;\n        margin-top: 2rem;\n    }\n    \n  \n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    .text{\n        font-size: 0.6em;\n        margin-top: 2rem;\n    }\n    .label{\n        font-size: 0.6em\n    }\n    .main-head{\n        display: block;\n        text-align: center;\n        font-weight: 400;\n    }\n    .head{\n        display: none;\n    }\n    .mobile{\n        width: 90%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL2dldGFwcC9nZXRhcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1Qyx5Q0FBeUM7SUFDekMsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLG9EQUFvRDtBQUN4RDtBQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFHQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztBQUVKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtFQUNGO0lBQ0UsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUVBO0dBQ0c7TUFDRyxlQUFlO0lBQ2pCO0dBQ0Q7SUFDQyxVQUFVO0lBQ1Y7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7TUFDakI7S0FDRDtNQUNDLFVBQVU7TUFDVjtNQUNBO1FBQ0UsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7Ozs7QUFJSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUvZ2V0YXBwL2dldGFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC0xMntcbiAgICBtYXJnaW46IDBweDtcbn1cbi52YWxpZGF0aW9ue1xuICAgIGNvbG9yOnJlZDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cbi5tYWluLWhlYWR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5nZXRhcHB7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAvKiBwYWRkaW5nLXRvcDogNXJlbTsgKi9cbn1cbi5yb3d7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG4ubW9iaWxle1xuICAgIHdpZHRoOiA2MCU7XG59XG5oMntcbiAgICBjb2xvcjogIzFENDc5Mztcbn1cbi5sYWJlbHtcbiAgICBtYXJnaW4tdG9wOiA0dmg7XG4gICAgY29sb3I6ICNGN0JFNTI7XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0Y3QkU1MiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuLnBsYXktc3RvcmV7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuLmJ0bntcbiAgICBib3JkZXI6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdCRTUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3QkU1MjtcbiAgICBib3JkZXI6IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG4gICAgYm94LXNoYWRvdzogOHB4IDEwcHggMjBweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjE1KTtcbn1cbi5idG46aG92ZXJ7XG4gICAgYm94LXNoYWRvdzoycHggNHB4IDhweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QUU0NjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE0ODBweCl7XG4gICAgLnBsYXktc3RvcmV7XG4gICAgICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICB9XG4gICAgLm1vYmlsZXtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjJweCl7XG4gICAgLm1vYmlsZXtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gIC5wbGF5LXN0b3Jle1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbn1cbi5sYWJlbHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgY29sb3I6ICNGN0JFNTI7XG59XG4udGV4dHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICBoMntcbiAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICB9XG4gICAubW9iaWxle1xuICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICAgIC5tYWluLWhlYWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5oZWFke1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzgxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XG4gICAgaDJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICAgIH1cbiAgICAgLm1vYmlsZXtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICB9XG4gICAgICAubWFpbi1oZWFke1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIFxuICBcbiAgIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAubGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW1cbiAgICB9XG4gICAgLm1haW4taGVhZHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgLmhlYWR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2JpbGV7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/home/getapp/getapp.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/main/home/getapp/getapp.component.ts ***!
    \******************************************************/

  /*! exports provided: GetappComponent */

  /***/
  function srcAppMainHomeGetappGetappComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetappComponent", function () {
      return GetappComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var GetappComponent =
    /*#__PURE__*/
    function () {
      function GetappComponent(fb, ss) {
        _classCallCheck(this, GetappComponent);

        this.fb = fb;
        this.ss = ss;
        this.mob = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/mobile.png';
        this.google = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/google-play-badge.png';
        var numberFormat = '[6-9][0-9]{9}';
        this.getAppForm = this.fb.group({
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(numberFormat)])
        });
      }

      _createClass(GetappComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ongetApp",
        value: function ongetApp() {
          var _this17 = this;

          // console.log(this.getAppForm.value);
          if (!(this.getAppForm.value.phone_number == null || this.getAppForm.value.phone_number == "")) {
            this.ss.postLink(this.getAppForm.value).subscribe(function (res) {
              // console.log(res);
              _this17.getAppForm.reset();

              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Link Sent',
                text: 'Link for WOFO24 app link is sent to your mobile number.',
                type: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#F7BE52'
              });
            }, function (err) {
              // console.log(err)
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Try Again',
                text: 'Something went wrong, Please try again.',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            });
          }
        }
      }]);

      return GetappComponent;
    }();

    GetappComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }];
    };

    GetappComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-getapp',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./getapp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/getapp/getapp.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./getapp.component.css */
      "./src/app/main/home/getapp/getapp.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]])], GetappComponent);
    /***/
  },

  /***/
  "./src/app/main/home/highlights/highlights.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/main/home/highlights/highlights.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeHighlightsHighlightsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2{\n    color: #1D4793;\n    font-weight: 400;\n    /* margin-top: 5vh; */\n}\n.waves{\n    margin-top: -15vh;\n}\n.waves-reverse{\n    margin-top: -0.12vh;\n}\n/* .row{\n    margin-left: -15px;\n    margin-right: -15px;\n} */\n.heading{\n    color:#F7BE52;\n    margin-top: 4vh;\n    font-size: 1.2em;\n    letter-spacing: 0.08em;\n}\n.highlights{\n    margin-top: 8vh;\n}\n.line{\n    position: absolute;\n    width: 80%;\n    left: 13.5rem;\n    top: 1.1rem;\n}\n.number{\n    width: 10%;\n}\n.iconhigh{\n    width:30%;\n    margin-top: 8vh;\n}\n.text{\n    font-size: 0.9rem;\n    color: #1D4793;\n}\n.wave{\n    background-color: rgba(250,213,141, 0.4);\n    \n}\n.icon{\n    margin-top: 15vh;\n    z-index: 2;\n}\n.icon img{\n   width: 6%;\n}\n@media (min-width: 1026px) and (max-width: 1480px){\n    .iconhigh{\n       margin-top: 4vh;\n    }\n    .highlights{\n        margin-top: 5vh;\n    }\n    .icon img{\n        width: 8%;\n     }\n     .waves{\n        margin-top: -13vh;\n    }\n    .waves-reverse{\n        margin-top: -0.12vh;\n    }\n\n}\n@media (min-width: 768px) and (max-width: 1024px){\n    .heading{\n        margin-top: 4vh;\n        font-size: 0.9em;\n    }\n    .text{\n        font-size: 0.7em;\n    }\n    .line{\n        \n        display: none;\n    }\n    .iconhigh{\n        margin-top: 4vh;\n     }\n     .highlights{\n         margin-top: 5vh;\n     }\n     .icon img{\n         width: 8%;\n      }\n      .waves{\n        margin-top: -6vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n    \n}\n@media (min-width: 481px) and (max-width: 767px) {\n    h3{\n        font-size: 1.5em;\n    }\n    .heading{\n        margin-top: 4vh;\n        font-size: 1em;\n    }\n    .iconhigh{\n        width:20%;\n    }\n    .line{\n        display: none;\n    }\n    .number{\n        width: 8%;\n    }\n    .text{\n        font-size: 0.7em;\n    }\n    .iconhigh{\n        margin-top: 4vh;\n     }\n     .highlights{\n         margin-top: 5vh;\n     }\n     .icon img{\n         width: 15%;\n      }\n      .waves{\n        margin-top: -4vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n  \n}\n@media (min-width: 500px) and (max-width: 750px){\n    .line{\n        display: none;\n    }\n.waves{\n  margin-top: -6vh;\n}\n.waves-reverse{\n  margin-top: -0.1vh;\n}\n}\n@media (min-width: 380px) and (max-width: 500px){\n    h2{\n        font-size: 2em;\n    \n    }\n    .heading{\n        margin-top: 4vh;\n        font-size: 1em;\n    }\n    .iconhigh{\n        width:20%;\n    }\n    .line{\n        display: none;\n    }\n    .number{\n        width: 8%;\n    }\n    .text{\n        font-size: 0.6em;\n    }\n    .iconhigh{\n        margin-top: 4vh;\n     }\n     .highlights{\n         margin-top: 5vh;\n     }\n     .icon img{\n         width: 15%;\n      }\n    .waves{\n        margin-top: -8vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    h2{\n        font-size: 1.5em;\n        margin-top: 1rem;\n    }\n    .line{\n        display: none;\n    }\n    .heading{\n        margin-top: 4vh;\n        font-size: 1em;\n    }\n    .iconhigh{\n        width:20%;\n    }\n    .number{\n        width: 8%;\n    }\n    .text{\n        font-size: 0.6em;\n    }\n    .iconhigh{\n        margin-top: 4vh;\n     }\n     .highlights{\n         margin-top: 5vh;\n     }\n     .icon img{\n         width: 15%;\n      }\n    .waves{\n        margin-top: -7vh;\n    }\n    .waves-reverse{\n        margin-top: -0.1vh;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL2hpZ2hsaWdodHMvaGlnaGxpZ2h0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7OztHQUdHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHdDQUF3Qzs7QUFFNUM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtHQUNHLFNBQVM7QUFDWjtBQUdBO0lBQ0k7T0FDRyxlQUFlO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxTQUFTO0tBQ1o7S0FDQTtRQUNHLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBOztRQUVJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7S0FDbEI7S0FDQTtTQUNJLGVBQWU7S0FDbkI7S0FDQTtTQUNJLFNBQVM7TUFDWjtNQUNBO1FBQ0UsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtLQUNsQjtLQUNBO1NBQ0ksZUFBZTtLQUNuQjtLQUNBO1NBQ0ksVUFBVTtNQUNiO01BQ0E7UUFDRSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0E7SUFDSTtRQUNJLGNBQWM7O0lBRWxCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtLQUNsQjtLQUNBO1NBQ0ksZUFBZTtLQUNuQjtLQUNBO1NBQ0ksVUFBVTtNQUNiO0lBQ0Y7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtLQUNsQjtLQUNBO1NBQ0ksZUFBZTtLQUNuQjtLQUNBO1NBQ0ksVUFBVTtNQUNiO0lBQ0Y7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9oaWdobGlnaHRzL2hpZ2hsaWdodHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIGNvbG9yOiAjMUQ0NzkzO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLyogbWFyZ2luLXRvcDogNXZoOyAqL1xufVxuLndhdmVze1xuICAgIG1hcmdpbi10b3A6IC0xNXZoO1xufVxuLndhdmVzLXJldmVyc2V7XG4gICAgbWFyZ2luLXRvcDogLTAuMTJ2aDtcbn1cbi8qIC5yb3d7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG59ICovXG4uaGVhZGluZ3tcbiAgICBjb2xvcjojRjdCRTUyO1xuICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG59XG5cbi5oaWdobGlnaHRze1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbn1cbi5saW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIGxlZnQ6IDEzLjVyZW07XG4gICAgdG9wOiAxLjFyZW07XG59XG4ubnVtYmVye1xuICAgIHdpZHRoOiAxMCU7XG59XG4uaWNvbmhpZ2h7XG4gICAgd2lkdGg6MzAlO1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbn1cblxuLnRleHR7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICMxRDQ3OTM7XG59XG4ud2F2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwyMTMsMTQxLCAwLjQpO1xuICAgIFxufVxuLmljb257XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICB6LWluZGV4OiAyO1xufVxuLmljb24gaW1ne1xuICAgd2lkdGg6IDYlO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI2cHgpIGFuZCAobWF4LXdpZHRoOiAxNDgwcHgpe1xuICAgIC5pY29uaGlnaHtcbiAgICAgICBtYXJnaW4tdG9wOiA0dmg7XG4gICAgfVxuICAgIC5oaWdobGlnaHRze1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgfVxuICAgIC5pY29uIGltZ3tcbiAgICAgICAgd2lkdGg6IDglO1xuICAgICB9XG4gICAgIC53YXZlc3tcbiAgICAgICAgbWFyZ2luLXRvcDogLTEzdmg7XG4gICAgfVxuICAgIC53YXZlcy1yZXZlcnNle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4xMnZoO1xuICAgIH1cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAuaGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB9XG4gICAgLmxpbmV7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaWNvbmhpZ2h7XG4gICAgICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICAgfVxuICAgICAuaGlnaGxpZ2h0c3tcbiAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICAgfVxuICAgICAuaWNvbiBpbWd7XG4gICAgICAgICB3aWR0aDogOCU7XG4gICAgICB9XG4gICAgICAud2F2ZXN7XG4gICAgICAgIG1hcmdpbi10b3A6IC02dmg7XG4gICAgfVxuICAgIC53YXZlcy1yZXZlcnNle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4xdmg7XG4gICAgfVxuICAgIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICAgIC5pY29uaGlnaHtcbiAgICAgICAgd2lkdGg6MjAlO1xuICAgIH1cbiAgICAubGluZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm51bWJlcntcbiAgICAgICAgd2lkdGg6IDglO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICB9XG4gICAgLmljb25oaWdoe1xuICAgICAgICBtYXJnaW4tdG9wOiA0dmg7XG4gICAgIH1cbiAgICAgLmhpZ2hsaWdodHN7XG4gICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgIH1cbiAgICAgLmljb24gaW1ne1xuICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgIH1cbiAgICAgIC53YXZlc3tcbiAgICAgICAgbWFyZ2luLXRvcDogLTR2aDtcbiAgICB9XG4gICAgLndhdmVzLXJldmVyc2V7XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjF2aDtcbiAgICB9XG4gIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xuICAgIC5saW5le1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbi53YXZlc3tcbiAgbWFyZ2luLXRvcDogLTZ2aDtcbn1cbi53YXZlcy1yZXZlcnNle1xuICBtYXJnaW4tdG9wOiAtMC4xdmg7XG59XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIFxuICAgIH1cbiAgICAuaGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgLmljb25oaWdoe1xuICAgICAgICB3aWR0aDoyMCU7XG4gICAgfVxuICAgIC5saW5le1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubnVtYmVye1xuICAgICAgICB3aWR0aDogOCU7XG4gICAgfVxuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgIH1cbiAgICAuaWNvbmhpZ2h7XG4gICAgICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICAgfVxuICAgICAuaGlnaGxpZ2h0c3tcbiAgICAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICAgfVxuICAgICAuaWNvbiBpbWd7XG4gICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgfVxuICAgIC53YXZlc3tcbiAgICAgICAgbWFyZ2luLXRvcDogLTh2aDtcbiAgICB9XG4gICAgLndhdmVzLXJldmVyc2V7XG4gICAgICAgIG1hcmdpbi10b3A6IC0wLjF2aDtcbiAgICB9XG4gICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLmxpbmV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oZWFkaW5ne1xuICAgICAgICBtYXJnaW4tdG9wOiA0dmg7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAuaWNvbmhpZ2h7XG4gICAgICAgIHdpZHRoOjIwJTtcbiAgICB9XG4gICAgLm51bWJlcntcbiAgICAgICAgd2lkdGg6IDglO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICB9XG4gICAgLmljb25oaWdoe1xuICAgICAgICBtYXJnaW4tdG9wOiA0dmg7XG4gICAgIH1cbiAgICAgLmhpZ2hsaWdodHN7XG4gICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgIH1cbiAgICAgLmljb24gaW1ne1xuICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgIH1cbiAgICAud2F2ZXN7XG4gICAgICAgIG1hcmdpbi10b3A6IC03dmg7XG4gICAgfVxuICAgIC53YXZlcy1yZXZlcnNle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4xdmg7XG4gICAgfVxuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/home/highlights/highlights.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/main/home/highlights/highlights.component.ts ***!
    \**************************************************************/

  /*! exports provided: HighlightsComponent */

  /***/
  function srcAppMainHomeHighlightsHighlightsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightsComponent", function () {
      return HighlightsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HighlightsComponent =
    /*#__PURE__*/
    function () {
      function HighlightsComponent() {
        _classCallCheck(this, HighlightsComponent);

        this.highlight = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/highlight.png';
        this.wave = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/wave.svg';
        this.w1 = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/1.svg';
        this.online_support = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/online-support.svg';
        this.w2 = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/2.svg';
        this.support = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/support.svg';
        this.w3 = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/3.svg';
        this.feedback = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/feedback.svg';
        this.wave_reverse = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/wave-reverse.svg';
        this.line = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/line.png';
      }

      _createClass(HighlightsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HighlightsComponent;
    }();

    HighlightsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-highlights',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./highlights.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/highlights/highlights.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./highlights.component.css */
      "./src/app/main/home/highlights/highlights.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], HighlightsComponent);
    /***/
  },

  /***/
  "./src/app/main/home/home.component.css":
  /*!**********************************************!*\
    !*** ./src/app/main/home/home.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppMainHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/main/home/home.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/main/home/recommended/recommended.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/main/home/recommended/recommended.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeRecommendedRecommendedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".whole{\n    margin-top: 15vh;\n    margin-bottom: 20vh;\n}\n.content{\n    padding-top: 5rem;\n}\n.row{\n    margin-left: -15px;\n    margin-right: -15px;\n}\nh2{\n    font-weight: 400;\n    color: #1D4793;\n    letter-spacing: 0.032rem;\n    line-height: 2.8rem;\n}\n.text{\n    letter-spacing: 0.042rem;\n    color: #1D4793;\n}\na{\n    text-decoration: none;\n    color: #1D4793;\n    opacity: 0.1;\n\n}\n.card{\n    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);\n    border-radius: 0.375rem;\n    -webkit-transition: all 0.4s ease;\n    transition: all 0.4s ease;\n    \n}\n.card:hover{\n    \n    -webkit-transition: all 0.4s ease;\n    \n    transition: all 0.4s ease;\n    box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16), 0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);\n}\nimg{\n    overflow-x: hidden;\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem;\n    height: 120px;\n}\n.sub-cat{\n    letter-spacing: 0.042rem;\n    padding: 0.7rem 1rem 0rem 1rem;\n    font-size: 0.9rem;\n    font-weight: 500;\n}\n.explore{\n    font-size: 0.6rem;\n    padding: 0rem 1rem;\n}\na:hover{\n    opacity: 1;\n}\n@media (min-width: 1024px) and (max-width: 1480px){\n    \n\n}\n@media (min-width: 768px) and (max-width: 1024px){\n    h2{\n        font-weight: 400;\n        color: #1D4793;\n        letter-spacing: 0.032rem;\n        font-size: 1.8rem;\n        line-height: 1.8rem;\n    }\n    .whole {\n        margin-top: 10vh;\n        margin-bottom: 10vh;\n    }\n\n}\n@media (min-width: 500px) and (max-width: 768px) {\n    h2{\n        font-weight: 400;\n        color: #1D4793;\n        letter-spacing: 0rem;\n        font-size: 1.45rem;\n        line-height: 1.8rem;\n    }\n    .sub-cat{\n        letter-spacing: 0.042rem;\n        padding: 0.4rem 0.25rem;\n        font-size: 0.8rem;\n        font-weight: 500;\n    }\n  \n}\n@media (min-width: 380px) and (max-width: 500px){\n    \n    h2{\n        font-weight: 400;\n        color: #1D4793;\n        letter-spacing: 0.032rem;\n        font-size: 1.45rem;\n        line-height: 1.8rem;\n    }\n    .text{\n        display: none;\n    }\n    .sub-cat{\n        letter-spacing: 0.042rem;\n        padding: 0.4rem 0.25rem;\n        font-size: 0.8rem;\n        font-weight: 500;\n    }\n    img{\n        height: 100px;\n    }\n    .content{\n        padding-top: 0rem;\n    }\n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    h2{\n        font-weight: 400;\n        color: #1D4793;\n        letter-spacing: 0.032rem;\n        font-size: 1rem;\n        line-height: 1.8rem;\n    }\n    .text{\n        display: none;\n    }\n    .sub-cat{\n        letter-spacing: 0.042rem;\n        padding: 0.4rem 0.25rem;\n        font-size: 0.8rem;\n        font-weight: 500;\n    }\n    img{\n        height: 70px;\n    }\n    .content{\n        padding-top: 0rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL3JlY29tbWVuZGVkL3JlY29tbWVuZGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsaUNBQXlCO0lBQXpCLHlCQUF5Qjs7QUFFN0I7QUFDQTs7SUFFSSxpQ0FBeUI7O0lBQXpCLHlCQUF5QjtJQUN6QixxSEFBcUg7QUFDekg7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBR0E7OztBQUdBO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0FBRUo7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztBQUVKO0FBQ0E7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ob21lL3JlY29tbWVuZGVkL3JlY29tbWVuZGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hvbGV7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xufVxuLmNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG59XG4ucm93e1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuaDJ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzFENDc5MztcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMzJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbn1cbi50ZXh0e1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0MnJlbTtcbiAgICBjb2xvcjogIzFENDc5Mztcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMUQ0NzkzO1xuICAgIG9wYWNpdHk6IDAuMTtcblxufVxuLmNhcmR7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyNXB4IDAgcmdiYSg0Niw2MSw3MywuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgICBcbn1cbi5jYXJkOmhvdmVye1xuICAgIFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMTcsIDIyLCAyNiwgMC4xNiksIDAgNHB4IDhweCAwIHJnYmEoMTcsIDIyLCAyNiwgMC4wOCksIDAgOHB4IDE2cHggMCByZ2JhKDE3LCAyMiwgMjYsIDAuMDgpO1xufVxuaW1ne1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xufVxuLnN1Yi1jYXR7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDQycmVtO1xuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtIDByZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZXhwbG9yZXtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW07XG59XG5cbmE6aG92ZXJ7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgICBcblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgfVxuICAgIC53aG9sZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAjMUQ0NzkzO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgIH1cbiAgICAuc3ViLWNhdHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDQycmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC4yNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzODBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICBcbiAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnN1Yi1jYXR7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0MnJlbTtcbiAgICAgICAgcGFkZGluZzogMC40cmVtIDAuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICB9XG4gICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnN1Yi1jYXR7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0MnJlbTtcbiAgICAgICAgcGFkZGluZzogMC40cmVtIDAuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICB9XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/home/recommended/recommended.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/main/home/recommended/recommended.component.ts ***!
    \****************************************************************/

  /*! exports provided: RecommendedComponent */

  /***/
  function srcAppMainHomeRecommendedRecommendedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function () {
      return RecommendedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RecommendedComponent =
    /*#__PURE__*/
    function () {
      function RecommendedComponent(ss) {
        _classCallCheck(this, RecommendedComponent);

        this.ss = ss;
        this.carpenting = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/carpenting.png';
        this.plumbing = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/plumbing.png';
        this.decor = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/decor.png';
        this.skincare = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/skincare.png';
        this.appliances = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/appliances.png';
        this.pestcontrol = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/pestcontrol.png';
      }

      _createClass(RecommendedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecommendedComponent;
    }();

    RecommendedComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }];
    };

    RecommendedComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-recommended',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./recommended.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/recommended/recommended.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./recommended.component.css */
      "./src/app/main/home/recommended/recommended.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]])], RecommendedComponent);
    /***/
  },

  /***/
  "./src/app/main/home/search/search.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/main/home/search/search.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainHomeSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2{\n    color: white;\n    margin-bottom: 2vh;\n    font-size: 2em;\n}\n\n.pic{\n    width: 100%;\n    /* height:60vh; */\n}\n\n.col-md-2,.col-md-4,.col-md-3,.col-md-6{\n    padding-right: 0px;\n    padding-left: 0px;\n}\n\n.search{\n    position: relative;\n    bottom:16rem;\n}\n\n@media (min-width: 1024px) and (max-width: 1480px){\n    h2{\n        font-size: 1.5em;\n        margin-bottom: 1vh;\n    }\n    .search{\n        \n        bottom:12rem;\n    }\n  \n}\n\n@media (min-width: 768px) and (max-width: 1022px){\n\n    h2{\n        font-size: 1.2em;\n        margin-bottom: 1vh;\n    }\n    .search{\n        \n        bottom:8rem;\n    }\n}\n\n@media (min-width: 500px) and (max-width: 767px){\n    h2{\n        display: none;\n    }\n    .search{\n        \n        bottom: 6rem;\n    }\n}\n\n@media (min-width: 380px) and (max-width: 500px){\n    h2{\n        display: none;\n    }\n    .search{\n        \n        bottom: 10rem;\n    }\n    .pic{\n        width: 100%;\n        height:35vh;\n    }\n   \n}\n\n@media (min-width: 320px) and (max-width: 380px){\n    h2{\n        display: none;\n    }\n    .search{\n        \n        bottom: 10rem;\n    }\n    .pic{\n        width: 100%;\n        height:30vh;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBSUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7SUFDQTs7UUFFSSxZQUFZO0lBQ2hCOztBQUVKOztBQUNBOztJQUVJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBOztRQUVJLFdBQVc7SUFDZjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7O1FBRUksWUFBWTtJQUNoQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjs7QUFFSjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBOztRQUVJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLnBpY3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6NjB2aDsgKi9cbn1cblxuLmNvbC1tZC0yLC5jb2wtbWQtNCwuY29sLW1kLTMsLmNvbC1tZC02e1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5zZWFyY2h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbToxNnJlbTtcbn1cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxNDgwcHgpe1xuICAgIGgye1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gICAgfVxuICAgIC5zZWFyY2h7XG4gICAgICAgIFxuICAgICAgICBib3R0b206MTJyZW07XG4gICAgfVxuICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjJweCl7XG5cbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICAgIH1cbiAgICAuc2VhcmNoe1xuICAgICAgICBcbiAgICAgICAgYm90dG9tOjhyZW07XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuICAgIGgye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuc2VhcmNoe1xuICAgICAgICBcbiAgICAgICAgYm90dG9tOiA2cmVtO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzODBweCkgYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICBoMntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICAgXG4gICAgICAgIGJvdHRvbTogMTByZW07XG4gICAgfVxuICAgIC5waWN7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6MzV2aDtcbiAgICB9XG4gICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICBoMntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICAgXG4gICAgICAgIGJvdHRvbTogMTByZW07XG4gICAgfVxuICAgIC5waWN7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6MzB2aDtcbiAgICB9XG5cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/home/search/search.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/main/home/search/search.component.ts ***!
    \******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppMainHomeSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(ss, route) {
        _classCallCheck(this, SearchComponent);

        this.ss = ss;
        this.route = route;
        this.SEARCHBG = src_app_services_assets__WEBPACK_IMPORTED_MODULE_3__["ASSETS"] + '/search-bg.png';
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.ss.getCategories().subscribe(function (res) {
            _this18.categories = res;
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onCategory",
        value: function onCategory(value) {
          // console.log(value);
          var split = value.split("-"); // console.log(split);

          var catid = split[1]; // console.log(catid);

          var catval = split[0]; // console.log(catval);

          this.route.navigate(['subcategory', catval, catid]);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SearchComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-search',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/search/search.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./search.component.css */
      "./src/app/main/home/search/search.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SearchComponent);
    /***/
  },

  /***/
  "./src/app/main/main-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MainRoutingModule */

  /***/
  function srcAppMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
      return MainRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/main/home/home.component.ts");
    /* harmony import */


    var _user_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-auth/register/register.component */
    "./src/app/main/user-auth/register/register.component.ts");
    /* harmony import */


    var _user_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-auth/login/login.component */
    "./src/app/main/user-auth/login/login.component.ts");
    /* harmony import */


    var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-orders/my-orders.component */
    "./src/app/main/my-orders/my-orders.component.ts");
    /* harmony import */


    var _user_auth_activate_activate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-auth/activate/activate.component */
    "./src/app/main/user-auth/activate/activate.component.ts");
    /* harmony import */


    var _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./subcategories/subcategories.component */
    "./src/app/main/subcategories/subcategories.component.ts");
    /* harmony import */


    var _myprofile_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./myprofile/profile/profile.component */
    "./src/app/main/myprofile/profile/profile.component.ts");
    /* harmony import */


    var _hire_professional_hire_professional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hire-professional/hire-professional.component */
    "./src/app/main/hire-professional/hire-professional.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/main/about-us/about-us.component.ts");
    /* harmony import */


    var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./privacy-policy/privacy-policy.component */
    "./src/app/main/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _about_order_about_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./about-order/about-order.component */
    "./src/app/main/about-order/about-order.component.ts");
    /* harmony import */


    var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./questionnaire/questionnaire.component */
    "./src/app/main/questionnaire/questionnaire.component.ts");
    /* harmony import */


    var _questionnaire_questions_questions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./questionnaire/questions/questions.component */
    "./src/app/main/questionnaire/questions/questions.component.ts");
    /* harmony import */


    var _questionnaire_address_address_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./questionnaire/address/address.component */
    "./src/app/main/questionnaire/address/address.component.ts");
    /* harmony import */


    var _questionnaire_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./questionnaire/add-address/add-address.component */
    "./src/app/main/questionnaire/add-address/add-address.component.ts");
    /* harmony import */


    var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./myprofile/myprofile.component */
    "./src/app/main/myprofile/myprofile.component.ts");
    /* harmony import */


    var _myprofile_profileaddress_profileaddress_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./myprofile/profileaddress/profileaddress.component */
    "./src/app/main/myprofile/profileaddress/profileaddress.component.ts");
    /* harmony import */


    var _services_authguard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../services/authguard.service */
    "./src/app/services/authguard.service.ts");
    /* harmony import */


    var _dev_team_dev_team_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./dev-team/dev-team.component */
    "./src/app/main/dev-team/dev-team.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/main/pagenotfound/pagenotfound.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
      children: [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'register',
        component: _user_auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: {
          title: 'Wofo24:: Sign Up'
        }
      }, {
        path: 'login',
        component: _user_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        data: {
          title: 'Wofo24:: Login'
        }
      }, {
        path: 'bookings',
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
        component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_6__["MyOrdersComponent"],
        data: {
          title: 'Wofo24:: My Bookings'
        }
      }, {
        path: 'activate/:user_id',
        component: _user_auth_activate_activate_component__WEBPACK_IMPORTED_MODULE_7__["ActivateComponent"],
        data: {
          title: 'Wofo24:: Activate'
        }
      }, {
        path: 'subcategory/:param/:id',
        component: _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_8__["SubcategoriesComponent"],
        data: {
          title: 'Wofo24:: Services'
        }
      }, {
        path: 'hire-professional',
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
        component: _hire_professional_hire_professional_component__WEBPACK_IMPORTED_MODULE_10__["HireProfessionalComponent"],
        data: {
          title: 'Wofo24:: Get Experts'
        }
      }, {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"],
        data: {
          title: 'Wofo24:: About us'
        }
      }, {
        path: 'privacy-policy',
        component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyPolicyComponent"],
        data: {
          title: 'Wofo24:: Privacy Policy'
        }
      }, {
        path: 'development-team',
        component: _dev_team_dev_team_component__WEBPACK_IMPORTED_MODULE_21__["DevTeamComponent"],
        data: {
          title: 'Wofo24:: Development Team'
        }
      }, {
        path: 'order-detail/:id',
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
        component: _about_order_about_order_component__WEBPACK_IMPORTED_MODULE_13__["AboutOrderComponent"],
        data: {
          title: 'Wofo24:: About Booking'
        }
      }, {
        path: 'questions/:param/:id',
        component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_14__["QuestionnaireComponent"],
        children: [{
          path: '',
          component: _questionnaire_questions_questions_component__WEBPACK_IMPORTED_MODULE_15__["QuestionsComponent"],
          data: {
            title: 'Wofo24:: Questionnaire'
          }
        }, {
          path: 'address',
          canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
          component: _questionnaire_address_address_component__WEBPACK_IMPORTED_MODULE_16__["AddressComponent"],
          pathMatch: 'full',
          data: {
            title: 'Wofo24:: Address'
          }
        }, {
          path: 'add-address',
          canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
          component: _questionnaire_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_17__["AddAddressComponent"],
          pathMatch: 'full',
          data: {
            title: 'Wofo24:: Add Address'
          }
        }, {
          path: 'add-address/:id',
          canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
          component: _questionnaire_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_17__["AddAddressComponent"],
          pathMatch: 'full',
          data: {
            title: 'Wofo24:: Edit Address'
          }
        }]
      }, {
        path: 'profile',
        canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
        component: _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__["MyprofileComponent"],
        children: [{
          path: '',
          canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
          component: _myprofile_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
          data: {
            title: 'Wofo24:: Profile'
          }
        }, {
          path: 'profile-address',
          canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
          component: _myprofile_profileaddress_profileaddress_component__WEBPACK_IMPORTED_MODULE_19__["ProfileaddressComponent"],
          data: {
            title: 'Wofo24:: Profile'
          }
        }, {
          path: 'profile-address/:id',
          canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]],
          component: _myprofile_profileaddress_profileaddress_component__WEBPACK_IMPORTED_MODULE_19__["ProfileaddressComponent"],
          data: {
            title: 'Wofo24:: Profile'
          }
        }]
      }, {
        path: '**',
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_22__["PagenotfoundComponent"]
      }]
    }];

    var MainRoutingModule = function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    };

    MainRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], MainRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/main.component.css":
  /*!*****************************************!*\
    !*** ./src/app/main/main.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-main',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./main.component.css */
      "./src/app/main/main.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], MainComponent);
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/main/footer/footer.component.ts");
    /* harmony import */


    var _hire_professional_hire_professional_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hire-professional/hire-professional.component */
    "./src/app/main/hire-professional/hire-professional.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/main/home/home.component.ts");
    /* harmony import */


    var _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/categories/categories.component */
    "./src/app/main/home/categories/categories.component.ts");
    /* harmony import */


    var _home_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/contactus/contactus.component */
    "./src/app/main/home/contactus/contactus.component.ts");
    /* harmony import */


    var _home_getapp_getapp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/getapp/getapp.component */
    "./src/app/main/home/getapp/getapp.component.ts");
    /* harmony import */


    var _home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/highlights/highlights.component */
    "./src/app/main/home/highlights/highlights.component.ts");
    /* harmony import */


    var _home_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/recommended/recommended.component */
    "./src/app/main/home/recommended/recommended.component.ts");
    /* harmony import */


    var _home_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/search/search.component */
    "./src/app/main/home/search/search.component.ts");
    /* harmony import */


    var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./myprofile/myprofile.component */
    "./src/app/main/myprofile/myprofile.component.ts");
    /* harmony import */


    var _myprofile_profileaddress_profileaddress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./myprofile/profileaddress/profileaddress.component */
    "./src/app/main/myprofile/profileaddress/profileaddress.component.ts");
    /* harmony import */


    var _myprofile_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./myprofile/profile/profile.component */
    "./src/app/main/myprofile/profile/profile.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/main/navbar/navbar.component.ts");
    /* harmony import */


    var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./questionnaire/questionnaire.component */
    "./src/app/main/questionnaire/questionnaire.component.ts");
    /* harmony import */


    var _questionnaire_address_address_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./questionnaire/address/address.component */
    "./src/app/main/questionnaire/address/address.component.ts");
    /* harmony import */


    var _questionnaire_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./questionnaire/add-address/add-address.component */
    "./src/app/main/questionnaire/add-address/add-address.component.ts");
    /* harmony import */


    var _questionnaire_questions_questions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./questionnaire/questions/questions.component */
    "./src/app/main/questionnaire/questions/questions.component.ts");
    /* harmony import */


    var _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./subcategories/subcategories.component */
    "./src/app/main/subcategories/subcategories.component.ts");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _user_auth_activate_activate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./user-auth/activate/activate.component */
    "./src/app/main/user-auth/activate/activate.component.ts");
    /* harmony import */


    var _user_auth_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./user-auth/login/login.component */
    "./src/app/main/user-auth/login/login.component.ts");
    /* harmony import */


    var _user_auth_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./user-auth/register/register.component */
    "./src/app/main/user-auth/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _about_order_about_order_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./about-order/about-order.component */
    "./src/app/main/about-order/about-order.component.ts");
    /* harmony import */


    var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./my-orders/my-orders.component */
    "./src/app/main/my-orders/my-orders.component.ts");
    /* harmony import */


    var angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! angular2-datetimepicker */
    "./node_modules/angular2-datetimepicker/index.js");
    /* harmony import */


    var ngx_countdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ngx-countdown */
    "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/main/about-us/about-us.component.ts");
    /* harmony import */


    var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./privacy-policy/privacy-policy.component */
    "./src/app/main/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/main/main-routing.module.ts");
    /* harmony import */


    var _services_authguard_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../services/authguard.service */
    "./src/app/services/authguard.service.ts");
    /* harmony import */


    var _dev_team_dev_team_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./dev-team/dev-team.component */
    "./src/app/main/dev-team/dev-team.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/main/pagenotfound/pagenotfound.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_main_component__WEBPACK_IMPORTED_MODULE_20__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _hire_professional_hire_professional_component__WEBPACK_IMPORTED_MODULE_3__["HireProfessionalComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"], _home_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"], _home_getapp_getapp_component__WEBPACK_IMPORTED_MODULE_7__["GetappComponent"], _home_highlights_highlights_component__WEBPACK_IMPORTED_MODULE_8__["HighlightsComponent"], _home_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedComponent"], _home_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_11__["MyprofileComponent"], _myprofile_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _myprofile_profileaddress_profileaddress_component__WEBPACK_IMPORTED_MODULE_12__["ProfileaddressComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_15__["QuestionnaireComponent"], _questionnaire_questions_questions_component__WEBPACK_IMPORTED_MODULE_18__["QuestionsComponent"], _questionnaire_address_address_component__WEBPACK_IMPORTED_MODULE_16__["AddressComponent"], _questionnaire_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_17__["AddAddressComponent"], _subcategories_subcategories_component__WEBPACK_IMPORTED_MODULE_19__["SubcategoriesComponent"], _user_auth_activate_activate_component__WEBPACK_IMPORTED_MODULE_21__["ActivateComponent"], _user_auth_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _user_auth_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"], _about_order_about_order_component__WEBPACK_IMPORTED_MODULE_25__["AboutOrderComponent"], _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_26__["MyOrdersComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_31__["AboutUsComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_32__["PrivacyPolicyComponent"], _dev_team_dev_team_component__WEBPACK_IMPORTED_MODULE_35__["DevTeamComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_36__["PagenotfoundComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_33__["MainRoutingModule"], angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_27__["AngularDateTimePickerModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_28__["CountdownModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_30__["LazyLoadImageModule"]],
      providers: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"]]
    })], MainModule);
    /***/
  },

  /***/
  "./src/app/main/main.service.ts":
  /*!**************************************!*\
    !*** ./src/app/main/main.service.ts ***!
    \**************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppMainMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MainService =
    /*#__PURE__*/
    function () {
      function MainService() {
        _classCallCheck(this, MainService);
      }

      _createClass(MainService, [{
        key: "sendResponse",
        value: function sendResponse(response) {
          this.response = JSON.stringify(response);
        }
      }, {
        key: "sendSubcategoryId",
        value: function sendSubcategoryId(id) {
          this.subcategoryID = parseInt(id);
        }
      }, {
        key: "sendSubcategory",
        value: function sendSubcategory(param) {
          this.subcategory = param;
          console.log(param);
        }
      }]);

      return MainService;
    }();

    MainService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], MainService);
    /***/
  },

  /***/
  "./src/app/main/my-orders/my-orders.component.css":
  /*!********************************************************!*\
    !*** ./src/app/main/my-orders/my-orders.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMyOrdersMyOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    z-index: 10001;\n  }\n  \n  .overlay {\n    position: fixed; /* Sit on top of the page content */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff82; /* Black background with opacity */\n    z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n  \n  .container{\n    margin-top: 5vh;\n    margin-bottom: 10vh;\n}\n  \n  .cart{\n    max-height: 13rem;\n}\n  \n  h4,h5{\n    color: #1D4793;\n    font-weight: 400;\n}\n  \n  h3{\n    color: #1D4793;\n}\n  \n  .booked{\n    font-size: 0.9rem;\n}\n  \n  .address{\n    margin-top: 2rem;\n    letter-spacing: 0.032rem;\n}\n  \n  .left{\n    text-transform: uppercase;\n    letter-spacing: 0.02rem;\n    font-weight: 500;\n    color: #F7BE52;\n}\n  \n  .right{\n    letter-spacing: 0.05rem;\n}\n  \n  .card{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    padding: 2rem;\n    border-radius: 0.375rem;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n}\n  \n  .card:hover{\n    box-shadow:  5px 5px 25px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n}\n  \n  .top{\n    border-top: 1px solid black;\n    /* display: none; */\n}\n  \n  .col-6{\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n}\n  \n  #orderDeatils{\n    color: #1D4793;\n    cursor: pointer;\n}\n  \n  @media (min-width: 380px) and (max-width: 480px){\n    \n    h4{\n        font-size: 1rem;\n    }\n    h5{\n        font-size: 0.7rem\n    }\n    .booked {\n        font-size: 0.7rem;\n    }\n    .address {\n        margin-top: 2rem;\n        letter-spacing: 0.032rem;\n        font-size: 0.6rem;\n    }\n    .live span{\n        font-size: 0.7rem;\n    }\n    .card{\n        padding: 1rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n    #orderDeatils{\n        font-size: 0.8rem;\n    }\n   \n}\n  \n  @media (min-width: 320px) and (max-width: 380px){\n    h4{\n        font-size: 1rem;\n    }\n    h5{\n        font-size: 0.7rem\n    }\n    .booked {\n        font-size: 0.7rem;\n    }\n    .address {\n        margin-top: 2rem;\n        letter-spacing: 0.032rem;\n        font-size: 0.6rem;\n    }\n    .live span{\n        font-size: 0.7rem;\n    }\n    .card{\n        padding: 1rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n    #orderDeatils{\n        font-size: 0.8rem;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWUsRUFBRSxtQ0FBbUM7SUFDcEQsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxZQUFZLEVBQUUsdUNBQXVDO0lBQ3JELE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBMkIsRUFBRSxrQ0FBa0M7SUFDL0QsY0FBYyxFQUFFLG9GQUFvRjtJQUNwRyxlQUFlLEVBQUUsMkJBQTJCO0VBQzlDOztFQUVGO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7RUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7RUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0VBQ0E7SUFDSSxjQUFjO0FBQ2xCOztFQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztFQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7RUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0VBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0VBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQ0FBeUI7SUFBekIseUJBQXlCO0FBQzdCOztFQUNBO0lBQ0ksbURBQW1EO0lBQ25ELGlDQUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7O0VBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztFQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7RUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztFQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjs7RUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICB6LWluZGV4OiAxMDAwMTtcbiAgfVxuICBcbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODI7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMTAwMDA7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgfVxuXG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xufVxuLmNhcnR7XG4gICAgbWF4LWhlaWdodDogMTNyZW07XG59XG5oNCxoNXtcbiAgICBjb2xvcjogIzFENDc5MztcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuaDN7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG59XG4uYm9va2Vke1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmFkZHJlc3N7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMzJyZW07XG59XG4ubGVmdHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNGN0JFNTI7XG59XG4ucmlnaHR7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG59XG4uY2FyZHtcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmNhcmQ6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogIDVweCA1cHggMjVweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4udG9we1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xufVxuLmNvbC02e1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNvcmRlckRlYXRpbHN7XG4gICAgY29sb3I6ICMxRDQ3OTM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XG4gICAgXG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtXG4gICAgfVxuICAgIC5ib29rZWQge1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gICAgLmFkZHJlc3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMzJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cbiAgICAubGl2ZSBzcGFue1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG4gICAgLmNhcmR7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gICAgLmxvYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICAjb3JkZXJEZWF0aWxze1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW1cbiAgICB9XG4gICAgLmJvb2tlZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiAgICAuYWRkcmVzcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgfVxuICAgIC5saXZlIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gICAgLmxvYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgICNvcmRlckRlYXRpbHN7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/my-orders/my-orders.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/my-orders/my-orders.component.ts ***!
    \*******************************************************/

  /*! exports provided: MyOrdersComponent */

  /***/
  function srcAppMainMyOrdersMyOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function () {
      return MyOrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MyOrdersComponent =
    /*#__PURE__*/
    function () {
      function MyOrdersComponent(ss, auth, route) {
        _classCallCheck(this, MyOrdersComponent);

        this.ss = ss;
        this.auth = auth;
        this.route = route;
        this.cart = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/cart.svg';
        this.noorders = false;
        this.loading = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/loading.svg';
      }

      _createClass(MyOrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.ss.getMyOrder(this.auth.getAccessToken()).subscribe(function (res) {
            // console.log(res);
            _this19.myOrders = res;

            if (_this19.myOrders.length == 0) {
              _this19.noorders = true;
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onOrderDeatil",
        value: function onOrderDeatil(id) {
          this.route.navigate(['order-detail', id]);
        }
      }]);

      return MyOrdersComponent;
    }();

    MyOrdersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MyOrdersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-my-orders',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./my-orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/my-orders/my-orders.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./my-orders.component.css */
      "./src/app/main/my-orders/my-orders.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], MyOrdersComponent);
    /***/
  },

  /***/
  "./src/app/main/myprofile/myprofile.component.css":
  /*!********************************************************!*\
    !*** ./src/app/main/myprofile/myprofile.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMyprofileMyprofileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbXlwcm9maWxlL215cHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/myprofile/myprofile.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/myprofile/myprofile.component.ts ***!
    \*******************************************************/

  /*! exports provided: MyprofileComponent */

  /***/
  function srcAppMainMyprofileMyprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function () {
      return MyprofileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MyprofileComponent =
    /*#__PURE__*/
    function () {
      function MyprofileComponent() {
        _classCallCheck(this, MyprofileComponent);
      }

      _createClass(MyprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyprofileComponent;
    }();

    MyprofileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-myprofile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./myprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/myprofile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./myprofile.component.css */
      "./src/app/main/myprofile/myprofile.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], MyprofileComponent);
    /***/
  },

  /***/
  "./src/app/main/myprofile/profile/profile.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/main/myprofile/profile/profile.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMyprofileProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    z-index: 10001;\n  }\n  \n  .overlay {\n    position: fixed; /* Sit on top of the page content */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff82; /* Black background with opacity */\n    z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n  \n  h1{\n    font-size: 4rem;\n    font-weight: 200;\n}\n  \n  .editdel{\n    color: gray;\n    cursor: pointer;\n}\n  \n  .container{\n    margin-top: 10vh;\n    margin-bottom: 20vh;\n    background: #fff;\n    box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);\n    border-radius: 0.375rem;\n    padding: 3rem;\n   \n}\n  \n  .static{\n    font-size: 1.5rem;\n    font-weight: 300;\n    color: #ffffff;\n    letter-spacing: 0.125rem;\n    padding: 1rem;\n    border-radius: 0.475rem;\n    box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16), 0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);\n}\n  \n  #name{\n    background-image: -webkit-gradient(linear,left top, right top,from(#a976ff),to(#fea2cf));\n    background-image: linear-gradient(to right,#a976ff,#fea2cf);\n}\n  \n  #number{\n    background-image: -webkit-gradient(linear,right top, left top,from(#ffd28e),to(#ff806d));\n    background-image: linear-gradient(to left,#ffd28e,#ff806d);\n}\n  \n  .dynamic{\n    letter-spacing: 0.095rem;\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n  \n  /* \n.fas{\n    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n    background-clip: text;\n    -webkit-text-fill-color:transparent;\n} */\n  \n  /* .fa-home{\n    font-size: 1.4rem;\n    background-image: linear-gradient(to bottom right, #00c6fb 0%, #005bea 100%);\n} */\n  \n  .btn{\n    \n    padding: 0.2rem 1.7rem !important;\n    color: white;\n    \n}\n  \n  .edit{\n    background-color: #5EDA5E;\n    padding: 0.1rem 1rem !important;\n    font-size: 0.7rem;\n    color: white;\n    box-shadow: 3px 3px 12px 3px rgba(94,218,94,0.2);\n}\n  \n  .delete{\n    background-color: \t#FF0000;\n    padding: 0.1rem 1rem !important;\n    font-size: 0.7rem;\n    color: white;\n    box-shadow: 3px 3px 12px 3px rgba(255,0,0,0.2);\n}\n  \n  .save{\n    \n    background-color: #5EDA5E;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.813rem;\n    padding: 0.4rem 2rem !important;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 15px 0px rgba(0,0,0,0.2);\n\n}\n  \n  .save:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #4ABB4A;\n    outline: none;\n    border-color: transparent;\n}\n  \n  .save{\n    position: relative;\n    overflow: hidden;\n    margin: 0.6rem;\n}\n  \n  .save:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    background: rgba(255, 255, 255, .5);\n    opacity: 0;\n    border-radius: 100%;\n    -webkit-transform: scale(1, 1) translate(-50%);\n            transform: scale(1, 1) translate(-50%);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n  }\n  \n  @-webkit-keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n  \n  @keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n  \n  .save:focus:not(:active)::after {\n    -webkit-animation: ripple 1s ease-out;\n            animation: ripple 1s ease-out;\n  }\n  \n  @media (min-width: 1280px) and (max-width: 1480px){\n  \n  }\n  \n  @media (min-width: 1024px) and (max-width: 1280px){\n   \n  }\n  \n  @media (min-width: 900px) and (max-width: 1024px){\n    h1{\n        font-size: 3rem;\n    }\n    .static{\n        font-size: 1.4rem;\n    }\n    .dynamic{\n        letter-spacing: 0.072rem;\n    }\n    \n      \n  }\n  \n  @media (min-width: 768px) and (max-width: 900px){\n    h1{\n        font-size: 3rem;\n    }\n    .static{\n        font-size: 1rem;\n    }\n    .dynamic{\n        letter-spacing: 0.052rem;\n    }\n  }\n  \n  @media (min-width: 500px) and (max-width: 768px) {\n    h1{\n        font-size: 3rem;\n    }\n    .static{\n        font-size: 1rem;\n    }\n    .dynamic{\n        letter-spacing: 0.052rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n     \n  }\n  \n  @media (min-width: 380px) and (max-width: 500px){\n    h1{\n        font-size: 3rem;\n    }\n    .static{\n        font-size: 1rem;\n    }\n    .dynamic{\n        letter-spacing: 0.02rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n      \n  }\n  \n  @media (min-width: 320px) and (max-width: 380px){\n    h1{\n        font-size: 3rem;\n    }\n    .static{\n        font-size: 1rem;\n    }\n    .dynamic{\n        letter-spacing: 0rem;\n        font-size: 0.8rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9teXByb2ZpbGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWUsRUFBRSxtQ0FBbUM7SUFDcEQsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxZQUFZLEVBQUUsdUNBQXVDO0lBQ3JELE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBMkIsRUFBRSxrQ0FBa0M7SUFDL0QsY0FBYyxFQUFFLG9GQUFvRjtJQUNwRyxlQUFlLEVBQUUsMkJBQTJCO0VBQzlDOztFQUdGO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7RUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztFQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0RBQWtEO0lBQ2xELHVCQUF1QjtJQUN2QixhQUFhOztBQUVqQjs7RUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFIQUFxSDtBQUN6SDs7RUFDQTtJQUNJLHdGQUEyRDtJQUEzRCwyREFBMkQ7QUFDL0Q7O0VBQ0E7SUFDSSx3RkFBMEQ7SUFBMUQsMERBQTBEO0FBQzlEOztFQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0VBQ0E7Ozs7O0dBS0c7O0VBQ0g7OztHQUdHOztFQUVIOztJQUVJLGlDQUFpQztJQUNqQyxZQUFZOztBQUVoQjs7RUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnREFBZ0Q7QUFDcEQ7O0VBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osOENBQThDO0FBQ2xEOztFQUNBOztJQUVJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4Qiw2Q0FBNkM7O0FBRWpEOztFQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0VBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRTtNQUNFLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7RUFDRjs7RUFiQTtJQUNFO01BQ0UsOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0NBQXdCO2NBQXhCLHdCQUF3QjtJQUMxQjtFQUNGOztFQUVBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjs7RUFJQTs7RUFFQTs7RUFFQTs7RUFFQTs7RUFDQTtJQUNFO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7OztFQUdGOztFQUNBO0lBQ0U7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7RUFDRjs7RUFDQTtJQUNFO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7RUFFRjs7RUFDQTtJQUNFO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7RUFFRjs7RUFDQTtJQUNFO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbXlwcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgei1pbmRleDogMTAwMDE7XG4gIH1cbiAgXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgyOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDEwMDAwOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG4gIH1cblxuXG5oMXtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi5lZGl0ZGVse1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyNXB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgcGFkZGluZzogM3JlbTtcbiAgIFxufVxuLnN0YXRpY3tcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNDc1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDE3LCAyMiwgMjYsIDAuMTYpLCAwIDRweCA4cHggMCByZ2JhKDE3LCAyMiwgMjYsIDAuMDgpLCAwIDhweCAxNnB4IDAgcmdiYSgxNywgMjIsIDI2LCAwLjA4KTtcbn1cbiNuYW1le1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjYTk3NmZmLCNmZWEyY2YpO1xufVxuI251bWJlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwjZmZkMjhlLCNmZjgwNmQpO1xufVxuXG4uZHluYW1pY3tcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi8qIFxuLmZhc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjp0cmFuc3BhcmVudDtcbn0gKi9cbi8qIC5mYS1ob21le1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMGM2ZmIgMCUsICMwMDViZWEgMTAwJSk7XG59ICovXG5cbi5idG57XG4gICAgXG4gICAgcGFkZGluZzogMC4ycmVtIDEuN3JlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbn1cbi5lZGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RURBNUU7XG4gICAgcGFkZGluZzogMC4xcmVtIDFyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDNweCByZ2JhKDk0LDIxOCw5NCwwLjIpO1xufVxuLmRlbGV0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcdCNGRjAwMDA7XG4gICAgcGFkZGluZzogMC4xcmVtIDFyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDNweCByZ2JhKDI1NSwwLDAsMC4yKTtcbn1cbi5zYXZle1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RURBNUU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuODEzcmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAycmVtICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcblxufVxuLnNhdmU6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzoycHggNHB4IDhweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBQkI0QTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zYXZle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMC42cmVtO1xufVxuXG4uc2F2ZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZSgtNTAlKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHJpcHBsZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDI1LCAyNSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDQwLCA0MCk7XG4gICAgfVxuICB9XG4gIFxuICAuc2F2ZTpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcyBlYXNlLW91dDtcbiAgfVxuXG5cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgXG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xuICAgXG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbiAgICAuc3RhdGlje1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gICAgLmR5bmFtaWN7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA3MnJlbTtcbiAgICB9XG4gICAgXG4gICAgICBcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgLnN0YXRpY3tcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuZHluYW1pY3tcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDUycmVtO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC5zdGF0aWN7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmR5bmFtaWN7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1MnJlbTtcbiAgICB9XG4gICAgLmxvYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICAgXG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC5zdGF0aWN7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmR5bmFtaWN7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgICAgXG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC5zdGF0aWN7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmR5bmFtaWN7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcmVtO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICAgLmxvYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/myprofile/profile/profile.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/main/myprofile/profile/profile.component.ts ***!
    \*************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppMainMyprofileProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(ss, auth, route, activeroute) {
        _classCallCheck(this, ProfileComponent);

        this.ss = ss;
        this.auth = auth;
        this.route = route;
        this.activeroute = activeroute;
        this.showAddAddress = true;
        this.address = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/addaddress.svg';
        this.loading = src_app_services_assets__WEBPACK_IMPORTED_MODULE_4__["ASSETS"] + '/loading.svg';
        this.noadd = false;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.ss.getme(this.auth.getAccessToken()).subscribe(function (res) {
            // console.log(res);
            _this20.me = res;
          }, function (err) {// console.log(err);
          });
          this.ss.getAddress(this.auth.getAccessToken()).subscribe(function (res) {
            // console.log(res)
            _this20.addresses = res;

            if (_this20.addresses.length == 0) {
              _this20.noadd = true;
            }
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigate(['./profile-address/' + id], {
            relativeTo: this.activeroute
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this21 = this;

          this.ss.deletdAddress(this.auth.getAccessToken(), id).subscribe(function (res) {
            // console.log(res);
            _this21.ngOnInit();
          }, function (err) {// console.log(err);          
          });
        }
      }, {
        key: "onadd",
        value: function onadd() {
          this.route.navigate(['./profile-address/', ''], {
            relativeTo: this.activeroute
          });
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          if (this.addresses) {
            if (this.addresses.length == 2) {
              return false;
            } else {
              return true;
            }
          }
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.auth.removeAccessToken();
          this.auth.removeRefreshToken();
          this.route.navigate(['/']);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/profile/profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/main/myprofile/profile/profile.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/main/myprofile/profileaddress/profileaddress.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/main/myprofile/profileaddress/profileaddress.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMyprofileProfileaddressProfileaddressComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n    box-shadow: 5px 5px 12px 3px rgba(0,0,0,0.1);\n    margin-top: 20vh;\n    margin-bottom: 20vh;\n    border-radius: 5px;\n    background-color: #FAFAFA;\n}\n.validation{\n  color:red;\n  font-size: 0.8rem;\n  margin-left: 0rem;\n}\n.fix{\n    min-height: 55vh;\n}\n.custom-control{\n    padding-left: 5vw;\n}\n.number{\n    padding-left: 5vw;\n}\n.head{\n    /* padding-left: 3vw; */\n    font-weight: 500;\n    font-size: 2rem;\n    text-align: center;\n    color: #1D4793;\n}\n.add{\n    \n    background-color: #5EDA5E;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.813rem;\n    padding: 0.4rem 2rem !important;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 15px 0px rgba(46, 61, 73, 0.15)\n}\n.add:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #4ABB4A;\n    outline: none;\n    \n}\n.add{\n    position: relative;\n    overflow: hidden;\n    margin: 0.6rem;\n}\n.add:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    background: rgba(255, 255, 255, .5);\n    opacity: 0;\n    border-radius: 100%;\n    -webkit-transform: scale(1, 1) translate(-50%);\n            transform: scale(1, 1) translate(-50%);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n  }\n@-webkit-keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n@keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n.add:focus:not(:active)::after {\n    -webkit-animation: ripple 1s ease-out;\n            animation: ripple 1s ease-out;\n  }\n.form-control{\n    border: 1px solid #f7be52;\n    box-shadow:3px 3px 10px 5px #fde9c259;\n    /* border-left: 2px solid #f7be52; */\n    /* font-size: 0.8rem; */\n    font-weight: 400;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9teXByb2ZpbGUvcHJvZmlsZWFkZHJlc3MvcHJvZmlsZWFkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUlBOztJQUVJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QjtBQUNKO0FBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRTtNQUNFLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7RUFDRjtBQWJBO0lBQ0U7TUFDRSw4QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDVixnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0VBQ0Y7QUFFQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9teXByb2ZpbGUvcHJvZmlsZWFkZHJlc3MvcHJvZmlsZWFkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTJweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjB2aDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi52YWxpZGF0aW9ue1xuICBjb2xvcjpyZWQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cblxuLmZpeHtcbiAgICBtaW4taGVpZ2h0OiA1NXZoO1xufVxuLmN1c3RvbS1jb250cm9se1xuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xufVxuLm51bWJlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbn1cbi5oZWFke1xuICAgIC8qIHBhZGRpbmctbGVmdDogM3Z3OyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzFENDc5Mztcbn1cblxuXG5cbi5hZGR7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFREE1RTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XG4gICAgcGFkZGluZzogMC40cmVtIDJyZW0gIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xMjVyZW07XG4gICAgYm94LXNoYWRvdzogOHB4IDEwcHggMTVweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjE1KVxufVxuLmFkZDpob3ZlcntcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEFCQjRBO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG59XG4uYWRke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMC42cmVtO1xufVxuXG4uYWRkOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKC01MCUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMjUsIDI1KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoNDAsIDQwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hZGQ6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgZWFzZS1vdXQ7XG4gIH1cblxuLmZvcm0tY29udHJvbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdiZTUyO1xuICAgIGJveC1zaGFkb3c6M3B4IDNweCAxMHB4IDVweCAjZmRlOWMyNTk7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZjdiZTUyOyAqL1xuICAgIC8qIGZvbnQtc2l6ZTogMC44cmVtOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/myprofile/profileaddress/profileaddress.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/main/myprofile/profileaddress/profileaddress.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProfileaddressComponent */

  /***/
  function srcAppMainMyprofileProfileaddressProfileaddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileaddressComponent", function () {
      return ProfileaddressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProfileaddressComponent =
    /*#__PURE__*/
    function () {
      function ProfileaddressComponent(activeRoute, ss, auth, route, formbuilder) {
        _classCallCheck(this, ProfileaddressComponent);

        this.activeRoute = activeRoute;
        this.ss = ss;
        this.auth = auth;
        this.route = route;
        this.formbuilder = formbuilder;
        this.pincodeFormat = '[1-9][0-9]{5}';
      }

      _createClass(ProfileaddressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.addAddressForm = this.formbuilder.group({
            'house_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            'street': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'postal_code': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.pincodeFormat)])
          });
          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this22.addressId = params['id'];
          });
          this.ss.getAddress(this.auth.getAccessToken()).subscribe(function (res) {
            // console.log(res);
            _this22.addresses = res;

            for (var i = 0; i < _this22.addresses.length; i++) {
              if (_this22.addresses[i].id == _this22.addressId) {
                _this22.addAddressForm.setValue({
                  house_no: _this22.addresses[i].house_no,
                  street: _this22.addresses[i].street,
                  city: _this22.addresses[i].city,
                  state: _this22.addresses[i].state,
                  postal_code: _this22.addresses[i].postal_code
                });
              }
            }

            if (_this22.addresses.length == 2 && _this22.addressId == '') {
              _this22.route.navigate(['../address'], {
                relativeTo: _this22.activeRoute
              });
            }
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this23 = this;

          // console.log(this.addAddressForm.value);
          if (this.addressId == '') {
            // console.log(this.addressId);
            this.ss.postAddress(this.auth.getAccessToken(), this.addAddressForm.value).subscribe(function (res) {
              // console.log(res);
              _this23.addAddressForm.reset();

              _this23.route.navigate(['../../'], {
                relativeTo: _this23.activeRoute
              });
            }, function (err) {// console.log(err);
            });
          } else {
            // console.log(this.addressId);
            this.ss.updateAddress(this.auth.getAccessToken(), this.addAddressForm.value, this.addressId).subscribe(function (res) {
              // console.log(res);
              _this23.addAddressForm.reset();

              _this23.route.navigate(['../../'], {
                relativeTo: _this23.activeRoute
              });
            }, function (err) {// console.log(err);
            });
          }
        }
      }]);

      return ProfileaddressComponent;
    }();

    ProfileaddressComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ProfileaddressComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-profileaddress',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./profileaddress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myprofile/profileaddress/profileaddress.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./profileaddress.component.css */
      "./src/app/main/myprofile/profileaddress/profileaddress.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], ProfileaddressComponent);
    /***/
  },

  /***/
  "./src/app/main/navbar/navbar.component.css":
  /*!**************************************************!*\
    !*** ./src/app/main/navbar/navbar.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header{\n  height: 65px;\n  background-color: white;\n  padding: 0 20px;\n  box-shadow: 0 3px 10px 0 rgba(0,0,0,0.2);\n}\n.logo{\n  width: 11%;\n  float: left;\n  margin-left: 3rem;\n  padding-top: 0.9rem;\n}\n.menu{\n  float: right;\n  margin-top: 1.1rem;\n}\n.menu a{\n  color: #1D4793;\n  text-decoration: none;\n  padding: 5px 20px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-weight: 500;\n  letter-spacing: 0.08rem;\n}\na{\n  cursor: pointer;\n}\n.prof{\n  font-size: 0.8125rem;\n  font-weight: 600 !important;\n  letter-spacing: 0.094rem;\n  line-height: 1.813rem;\n  text-transform: uppercase;\n  color: #1D4793 !important;\n  padding: 5px 10px;\n  border-radius: 4px;\n  box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16), 0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17,22,26,0.08);\n  background-color: transparent;\n  border: 1px solid #1D4793; \n}\n.prof:hover{\n  color: white !important;\n  background-color: #1D4793;\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n  \n}\n.show-menu-btn,.hide-menu-btn{\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 30px;\n  cursor: pointer;\n  display: none;\n}\n.show-menu-btn{\n  float: right;\n}\n.show-menu-btn i{\n  margin-top: 1.7rem;\n}\n.menu a:hover,\n.show-menu-btn:hover,\n.hide-menu-btn:hover{\n  color: #F7BE52;\n}\n.menu button:hover{\n  background: #1D4793;\n  color: white;\n  \n}\n#chk{\n  position: absolute;\n  visibility: hidden;\n  z-index: -1111;\n}\n@media screen and (max-width:1100px) {\n  .show-menu-btn,.hide-menu-btn{\n    display: block;\n  }\n  .menu{\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    background: white;\n    right: -100%;\n    top: 0;\n    text-align: center;\n    padding: 80px 0;\n    line-height: normal;\n    -webkit-transition: 0.7s;\n    transition: 0.7s;\n    margin-top: 0rem;\n    z-index: 1000;\n  }\n  .prof{\n    box-shadow: none;\n    background-color: transparent;\n    border: none; \n  }\n  .prof:hover{\n    color: #F7BE52 !important;\n    background-color: white;\n    /* transition: all 2s ease; */\n  }\n  .menu a{\n    display: block;\n    padding: 20px;\n  }\n  .button{\n      display: block;\n      margin: 1.7rem 0px 0 22rem;\n      \n     \n  }\n  .hide-menu-btn{\n    position: absolute;\n    top: 40px;\n    right: 40px;\n  }\n  #chk:checked ~ .menu{\n    right: 0;\n  }\n  \n}\n@media (min-width: 1024px) and (max-width: 1480px){\n  \n\n}\n@media (min-width: 768px) and (max-width: 1024px){\n.logo{\n  width: 18%;\n  float: left;\n  margin-left: 3rem;\n  padding-top: 1.3rem;\n}\n\n  \n}\n@media (min-width: 481px) and (max-width: 768px){\n.logo{\n  width: 24%;\n  float: left;\n  margin-left: 0;\n  padding-top: 1.3rem;\n}\n}\n@media (min-width: 320px) and (max-width: 481px){\n.logo{\n  width: 38%;\n  float: left;\n  margin-left: 0;\n  padding-top: 1.3rem;\n}\n \n}\n@media (min-width: 320px) and (max-width: 380px){\n.logo{\n  width: 42%;\n  float: left;\n  margin-left: 0;\n  padding-top: 1.3rem;\n}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtIQUFrSDtFQUNsSCw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLCtCQUF1QjtFQUF2Qix1QkFBdUI7O0FBRXpCO0FBR0E7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOzs7RUFHRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTs7QUFFZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBR0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsYUFBYTtFQUNmO0VBQ0E7TUFDSSxjQUFjO01BQ2QsMEJBQTBCOzs7RUFHOUI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7O0FBRUY7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtBQUNBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsMCwwLDAuMik7XG59XG4ubG9nb3tcbiAgd2lkdGg6IDExJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICBwYWRkaW5nLXRvcDogMC45cmVtO1xufVxuXG4ubWVudXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxLjFyZW07XG59XG4ubWVudSBhe1xuICBjb2xvcjogIzFENDc5MztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XG59XG5cbmF7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2Z7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA5NHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuODEzcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzFENDc5MyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgxNywgMjIsIDI2LCAwLjE2KSwgMCA0cHggOHB4IDAgcmdiYSgxNywgMjIsIDI2LCAwLjA4KSwgMCA4cHggMTZweCAwIHJnYmEoMTcsMjIsMjYsMC4wOCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMUQ0NzkzOyBcbn1cbi5wcm9mOmhvdmVye1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFENDc5MztcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2U7XG4gIFxufVxuXG5cbi5zaG93LW1lbnUtYnRuLC5oaWRlLW1lbnUtYnRue1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zaG93LW1lbnUtYnRue1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2hvdy1tZW51LWJ0biBpe1xuICBtYXJnaW4tdG9wOiAxLjdyZW07XG59XG4ubWVudSBhOmhvdmVyLFxuLnNob3ctbWVudS1idG46aG92ZXIsXG4uaGlkZS1tZW51LWJ0bjpob3ZlcntcbiAgY29sb3I6ICNGN0JFNTI7XG59XG4ubWVudSBidXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICMxRDQ3OTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgXG59XG5cbiNjaGt7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAtMTExMTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDBweCkge1xuICAuc2hvdy1tZW51LWJ0biwuaGlkZS1tZW51LWJ0bntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWVudXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICByaWdodDogLTEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4MHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xuICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICAucHJvZntcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTsgXG4gIH1cbiAgLnByb2Y6aG92ZXJ7XG4gICAgY29sb3I6ICNGN0JFNTIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTsgKi9cbiAgfVxuICAubWVudSBhe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmJ1dHRvbntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAxLjdyZW0gMHB4IDAgMjJyZW07XG4gICAgICBcbiAgICAgXG4gIH1cbiAgLmhpZGUtbWVudS1idG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICByaWdodDogNDBweDtcbiAgfVxuICAjY2hrOmNoZWNrZWQgfiAubWVudXtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgXG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4ubG9nb3tcbiAgd2lkdGg6IDE4JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICBwYWRkaW5nLXRvcDogMS4zcmVtO1xufVxuXG4gIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuLmxvZ297XG4gIHdpZHRoOiAyNCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDEuM3JlbTtcbn1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MXB4KXtcbi5sb2dve1xuICB3aWR0aDogMzglO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxLjNyZW07XG59XG4gXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4ubG9nb3tcbiAgd2lkdGg6IDQyJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMS4zcmVtO1xufVxuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/navbar/navbar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/main/navbar/navbar.component.ts ***!
    \*************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppMainNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(auth, route) {
        _classCallCheck(this, NavbarComponent);

        this.auth = auth;
        this.route = route;
        this.logo = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/logo.png';
        this.hire = src_app_services_assets__WEBPACK_IMPORTED_MODULE_2__["ASSETS"] + '/experts.svg';
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "check",
        value: function check() {
          return this.auth.isLoggedIn();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.auth.removeAccessToken();
          this.auth.removeRefreshToken();
          this.route.navigate(['/']);
        }
      }, {
        key: "onBecome",
        value: function onBecome() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Become a professional ',
            html: ' <span style="color:#F7BE52;">Drop a mail at: &nbsp;</span><span style="color:#1D4793;"> info@wofo24.com</span> <br>' + '<span style="color:#F7BE52;">or call us at: </span>&nbsp; <span style="color:#1D4793;"> +91 7524066047 </span>',
            imageUrl: this.hire,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonColor: '#F7BE52'
          });
        }
      }, {
        key: "close",
        value: function close() {
          document.getElementById('closebtn').click();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-navbar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/navbar/navbar.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/main/navbar/navbar.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/main/pagenotfound/pagenotfound.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/main/pagenotfound/pagenotfound.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPagenotfoundPagenotfoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/pagenotfound/pagenotfound.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/main/pagenotfound/pagenotfound.component.ts ***!
    \*************************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppMainPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PagenotfoundComponent =
    /*#__PURE__*/
    function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);

        this.pnf = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/404.png';
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-pagenotfound',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pagenotfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/pagenotfound/pagenotfound.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./pagenotfound.component.css */
      "./src/app/main/pagenotfound/pagenotfound.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], PagenotfoundComponent);
    /***/
  },

  /***/
  "./src/app/main/privacy-policy/privacy-policy.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/main/privacy-policy/privacy-policy.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPrivacyPolicyPrivacyPolicyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.card{\n    /* box-shadow: 3px 3px 14px 3px rgba(0,0,0,0.2); */\n    border-radius: 0.5rem;\n    margin-top: 3rem;\n    padding: 2rem 3rem 0 3rem;\n}\n.head,.heading{\n    margin-top: 3rem;\n    font-size: 1.3rem;\n    font-weight: 500;\n}\n.list{\n   padding-left: 0;\n   list-style: none;\n}\n@media (min-width: 381px) and (max-width: 500px){\n    .head,.heading{\n        margin-top: 3rem;\n        font-size: 1rem;\n        font-weight: 500;\n    }\n    .list li{\n      font-size: 0.9rem;\n     }\n     .card{\n        padding: 2rem 1rem 0 1rem;\n     }\n  \n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    .head,.heading{\n        margin-top: 3rem;\n        font-size: 1rem;\n        font-weight: 500;\n    }\n    .list li{\n      font-size: 0.9rem;\n     }\n     .card{\n        padding: 2rem 1rem 0 1rem;\n     }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtEQUFrRDtJQUNsRCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtHQUNHLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7QUFHQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtNQUNFLGlCQUFpQjtLQUNsQjtLQUNBO1FBQ0cseUJBQXlCO0tBQzVCOzs7QUFHTDtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO01BQ0UsaUJBQWlCO0tBQ2xCO0tBQ0E7UUFDRyx5QkFBeUI7S0FDNUI7QUFDTCIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmR7XG4gICAgLyogYm94LXNoYWRvdzogM3B4IDNweCAxNHB4IDNweCByZ2JhKDAsMCwwLDAuMik7ICovXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgcGFkZGluZzogMnJlbSAzcmVtIDAgM3JlbTtcbn1cbi5oZWFkLC5oZWFkaW5ne1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5saXN0e1xuICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzgxcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmhlYWQsLmhlYWRpbmd7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmxpc3QgbGl7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgfVxuICAgICAuY2FyZHtcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDAgMXJlbTtcbiAgICAgfVxuICBcbiAgIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xuICAgIC5oZWFkLC5oZWFkaW5ne1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5saXN0IGxpe1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgIH1cbiAgICAgLmNhcmR7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAwIDFyZW07XG4gICAgIH1cbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/main/privacy-policy/privacy-policy.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/main/privacy-policy/privacy-policy.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppMainPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PrivacyPolicyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyPolicyComponent() {
        _classCallCheck(this, PrivacyPolicyComponent);
      }

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-privacy-policy',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./privacy-policy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/privacy-policy/privacy-policy.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./privacy-policy.component.css */
      "./src/app/main/privacy-policy/privacy-policy.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], PrivacyPolicyComponent);
    /***/
  },

  /***/
  "./src/app/main/questionnaire/add-address/add-address.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/main/questionnaire/add-address/add-address.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainQuestionnaireAddAddressAddAddressComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\n    box-shadow: 5px 5px 12px 3px rgba(0,0,0,0.1);\n    margin-top: 20vh;\n    margin-bottom: 20vh;\n    border-radius: 5px;\n    background-color: #FAFAFA;\n}\n.validation{\n  color:red;\n  font-size: 0.8rem;\n  margin-left: 0rem;\n}\n.fix{\n    min-height: 55vh;\n}\n.custom-control{\n    padding-left: 5vw;\n}\n.number{\n    padding-left: 5vw;\n}\n.head{\n    /* padding-left: 3vw; */\n    font-weight: 500;\n    font-size: 2rem;\n    text-align: center;\n    color: #1D4793;\n}\n.add{\n    \n    background-color: #5EDA5E;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.813rem;\n    padding: 0.4rem 2rem !important;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 15px 0px rgba(46, 61, 73, 0.15)\n}\n.add:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #4ABB4A;\n    outline: none;\n    \n}\n.add{\n    position: relative;\n    overflow: hidden;\n    margin: 0.6rem;\n}\n.add:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    background: rgba(255, 255, 255, .5);\n    opacity: 0;\n    border-radius: 100%;\n    -webkit-transform: scale(1, 1) translate(-50%);\n            transform: scale(1, 1) translate(-50%);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n  }\n@-webkit-keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n@keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n.add:focus:not(:active)::after {\n    -webkit-animation: ripple 1s ease-out;\n            animation: ripple 1s ease-out;\n  }\n.form-control{\n    border: 1px solid #f7be52;\n    box-shadow:3px 3px 10px 5px #fde9c259;\n    /* border-left: 2px solid #f7be52; */\n    /* font-size: 0.8rem; */\n    font-weight: 400;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9xdWVzdGlvbm5haXJlL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFJQTs7SUFFSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEI7QUFDSjtBQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0U7TUFDRSw4QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDVixnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0VBQ0Y7QUFiQTtJQUNFO01BQ0UsOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0NBQXdCO2NBQXhCLHdCQUF3QjtJQUMxQjtFQUNGO0FBRUE7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9CO0FBRUY7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL21haW4vcXVlc3Rpb25uYWlyZS9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMnB4IDNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuLnZhbGlkYXRpb257XG4gIGNvbG9yOnJlZDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuLmZpeHtcbiAgICBtaW4taGVpZ2h0OiA1NXZoO1xufVxuLmN1c3RvbS1jb250cm9se1xuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xufVxuLm51bWJlcntcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbn1cbi5oZWFke1xuICAgIC8qIHBhZGRpbmctbGVmdDogM3Z3OyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzFENDc5Mztcbn1cblxuXG5cbi5hZGR7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFREE1RTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XG4gICAgcGFkZGluZzogMC40cmVtIDJyZW0gIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xMjVyZW07XG4gICAgYm94LXNoYWRvdzogOHB4IDEwcHggMTVweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjE1KVxufVxuLmFkZDpob3ZlcntcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEFCQjRBO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG59XG4uYWRke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMC42cmVtO1xufVxuXG4uYWRkOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKC01MCUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMjUsIDI1KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoNDAsIDQwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hZGQ6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgZWFzZS1vdXQ7XG4gIH1cblxuLmZvcm0tY29udHJvbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdiZTUyO1xuICAgIGJveC1zaGFkb3c6M3B4IDNweCAxMHB4IDVweCAjZmRlOWMyNTk7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZjdiZTUyOyAqL1xuICAgIC8qIGZvbnQtc2l6ZTogMC44cmVtOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/questionnaire/add-address/add-address.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/main/questionnaire/add-address/add-address.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddAddressComponent */

  /***/
  function srcAppMainQuestionnaireAddAddressAddAddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressComponent", function () {
      return AddAddressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddAddressComponent =
    /*#__PURE__*/
    function () {
      function AddAddressComponent(ss, auth, route, activeRoute) {
        _classCallCheck(this, AddAddressComponent);

        this.ss = ss;
        this.auth = auth;
        this.route = route;
        this.activeRoute = activeRoute;
        var pincodeFormat = '[1-9][0-9]{5}';
        this.addAddressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          'house_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, []),
          'street': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'postal_code': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(pincodeFormat)])
        });
      }

      _createClass(AddAddressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.ss.getAddress(this.auth.getAccessToken()).subscribe(function (res) {
            // console.log(res);
            _this24.addresses = res;

            for (var i = 0; i < _this24.addresses.length; i++) {
              if (_this24.addresses[i].id == _this24.addressId) {
                _this24.addAddressForm.setValue({
                  house_no: _this24.addresses[i].house_no,
                  street: _this24.addresses[i].street,
                  city: _this24.addresses[i].city,
                  state: _this24.addresses[i].state,
                  postal_code: _this24.addresses[i].postal_code
                });
              }
            }

            if (_this24.addresses.length == 2 && _this24.addressId == '') {
              _this24.route.navigate(['../address'], {
                relativeTo: _this24.activeRoute
              });
            }
          }, function (err) {// console.log(err);
          });
          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this24.addressId = params['id'];
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this25 = this;

          // console.log(this.addAddressForm.value);
          if (this.addressId) {
            // console.log(this.addressId);
            this.ss.updateAddress(this.auth.getAccessToken(), this.addAddressForm.value, this.addressId).subscribe(function (res) {
              // console.log(res);
              _this25.addAddressForm.reset();

              _this25.route.navigate(['../../address'], {
                relativeTo: _this25.activeRoute
              });
            }, function (err) {// console.log(err);
            });
          } else {
            // console.log(this.addressId);
            this.ss.postAddress(this.auth.getAccessToken(), this.addAddressForm.value).subscribe(function (res) {
              // console.log(res);
              _this25.addAddressForm.reset();

              _this25.route.navigate(['../address'], {
                relativeTo: _this25.activeRoute
              });
            }, function (err) {// console.log(err);
            });
          }
        }
      }]);

      return AddAddressComponent;
    }();

    AddAddressComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    AddAddressComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-address',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-address.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/add-address/add-address.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add-address.component.css */
      "./src/app/main/questionnaire/add-address/add-address.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], AddAddressComponent);
    /***/
  },

  /***/
  "./src/app/main/questionnaire/address/address.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/main/questionnaire/address/address.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainQuestionnaireAddressAddressComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    z-index: 10001;\n  \n  }\n  \n  .overlay {\n    position: fixed; /* Sit on top of the page content */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff82; /* Black background with opacity */\n    z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n  \n  .card{\n    box-shadow: 5px 5px 12px 3px rgba(0,0,0,0.1);\n    margin-top: 5rem;\n    margin-bottom: 10vh;\n    border-radius: 5px;\n    background-color: #FAFAFA;\n}\n  \n  .fix{\n    min-height: 60vh;\n}\n  \n  .custom-control{\n    padding-left: 5vw;\n}\n  \n  .number{\n    padding-left: 5vw;\n}\n  \n  .heading{\n    font-family: 'Poiret One', cursive;\n     color: #1D4793;\n    font-size: 2rem;\n    font-weight: 600;\n    border-bottom: 1px solid black;\n    letter-spacing: 0.15rem;\n    /* box-shadow: 3px 3px 12px 3px rgba(46, 61, 73, 0.2); */\n}\n  \n  .head{\n    padding-left: 3vw;\n    font-weight: 600;\n    font-size: 1.5rem;\n}\n  \n  .btn{\n    background-color: #F7BE52;\n    padding: 0.2rem 1.7rem !important;\n    color: white;\n    box-shadow:3px 3px 4px rgba(247, 189, 82, 0.445);\n}\n  \n  .edit{\n    background-color: #5EDA5E;\n    padding: 0.1rem 1rem !important;\n    font-size: 0.7rem;\n    color: white;\n    box-shadow: 3px 3px 12px 3px rgba(94,218,94,0.2);\n}\n  \n  .add{\n    \n    background-color: #5EDA5E;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.813rem;\n    padding: 0.4rem 2rem !important;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 15px 0px rgba(46, 61, 73, 0.15)\n}\n  \n  .add:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #4ABB4A;\n    outline: none;\n    \n}\n  \n  .add{\n    position: relative;\n    overflow: hidden;\n    margin: 0.6rem;\n}\n  \n  .add:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    background: rgba(255, 255, 255, .5);\n    opacity: 0;\n    border-radius: 100%;\n    -webkit-transform: scale(1, 1) translate(-50%);\n            transform: scale(1, 1) translate(-50%);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n  }\n  \n  @-webkit-keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n  \n  @keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n  \n  .add:focus:not(:active)::after {\n    -webkit-animation: ripple 1s ease-out;\n            animation: ripple 1s ease-out;\n  }\n  \n  .back{\n    background-color:rgb(156, 156, 156);\n    box-shadow:3px 3px 4px rgba(231,231,231,0.445);\n}\n  \n  .addon{\n    background-color: #F7BE52;\n    padding: 0.1rem 0.7rem 0 0.7rem;\n    box-shadow:2px 2px 12px 2px rgba(247, 189, 82, 0.445);\n    outline: none;\n    border: none;\n    font-size: 0.7rem;\n    border-radius: 7px;\n}\n  \n  .amount{\n    padding: 0 1rem 0 1rem;\n}\n  \n  .total{\n    font-size: 0.9rem;\n}\n  \n  .disclamer{\n    font-size: 0.6rem;\n}\n  \n  @media (min-width: 1024px) and (max-width: 1480px){\n    .fix{\n        min-height: 55vh;\n    }\n\n  \n}\n  \n  @media (min-width: 768px) and (max-width: 1024px){\n    .fix{\n        min-height: 30rem;\n        \n    }\n    .card{\n        margin-top: 10rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n    \n}\n  \n  @media (min-width: 481px) and (max-width: 768px){\n    .fix{\n        min-height: 55vh;\n    }\n    .heading{\n        font-size: 1.4rem;\n    }\n    .head{\n        font-size: 1rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  \n  @media (min-width: 380px) and (max-width: 500px){\n    .heading{\n        font-size: 1.1rem;\n    }\n    .head{\n        font-size: 0.9rem;\n    }\n    .custom-control-label{\n        font-size: 0.8rem;\n      }\n      .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  \n  @media (min-width: 320px) and (max-width: 380px){\n    \n    \n    .heading{\n        font-size: 0.9rem;\n    }\n    .head{\n        font-size: 0.9rem;\n    }\n    .custom-control-label{\n        font-size: 0.8rem;\n      }\n      .loader{\n        width: 100px;\n        height: 100px;\n    }\n\n }\n  \n  @media (max-width: 320px){\n    .amount{\n        padding: 0rem;\n        font-size: 0.8rem;\n    }\n    .heading{\n        font-size: 1rem;\n    }\n    .head{\n        font-size: 0.9rem;\n    }\n    .custom-control-label{\n        font-size: 0.8rem;\n      }\n      .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  \n  /* down section */\n  \n  .how{\n    \n    /* padding: 0rem 2rem; */\n    background-color: rgba(250, 250, 250, 0.87);\n    \n    box-shadow: 5px 5px 25px 5px rgba(46, 61, 73, 0.2);\n}\n  \n  .icon{\n    width: 60%;\n}\n  \n  .text-section{\n    font-size: 0.8rem;\n    font-weight: 500;\n   \n}\n  \n  @media (min-width: 500px) and (max-width: 768px){\n\n}\n  \n  @media (min-width: 380px) and (max-width: 500px){\n    .icon{\n        width: 35%;\n    }\n    .text-section{\n        font-size: 0.9rem;\n       \n    }\n}\n  \n  @media (min-width: 320px) and (max-width: 380px){\n    \n    .icon{\n        width: 40%;\n    }\n    .text-section{\n        font-size: 0.9rem;\n       \n    }\n }\n  \n  @media (max-width: 320px){\n    .icon{\n        width: 40%;\n    }\n    .text-section{\n        font-size: 0.9rem;\n       \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9xdWVzdGlvbm5haXJlL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGNBQWM7O0VBRWhCOztFQUVBO0lBQ0UsZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFlBQVksRUFBRSx1Q0FBdUM7SUFDckQsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUEyQixFQUFFLGtDQUFrQztJQUMvRCxjQUFjLEVBQUUsb0ZBQW9GO0lBQ3BHLGVBQWUsRUFBRSwyQkFBMkI7RUFDOUM7O0VBTUY7SUFDSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztFQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztFQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztFQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztFQUNBO0lBQ0ksa0NBQWtDO0tBQ2pDLGNBQWM7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsd0RBQXdEO0FBQzVEOztFQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0VBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixnREFBZ0Q7QUFDcEQ7O0VBQ0E7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0RBQWdEO0FBQ3BEOztFQUVBOztJQUVJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QjtBQUNKOztFQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7O0FBRWpCOztFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztFQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0U7TUFDRSw4QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLFVBQVU7SUFDWjtJQUNBO01BQ0UsZ0NBQXdCO2NBQXhCLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDVixnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0VBQ0Y7O0VBYkE7SUFDRTtNQUNFLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7RUFDRjs7RUFFQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7O0VBRUY7SUFDSSxtQ0FBbUM7SUFDbkMsOENBQThDO0FBQ2xEOztFQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixxREFBcUQ7SUFDckQsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztFQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztFQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztFQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztFQUdBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7OztBQUdKOztFQUNBO0lBQ0k7UUFDSSxpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztBQUVKOztFQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7RUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtNQUNuQjtNQUNBO1FBQ0UsWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7RUFJQzs7O0lBR0c7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO01BQ25CO01BQ0E7UUFDRSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7Q0FFSDs7RUFFRDtJQUNJO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7TUFDbkI7TUFDQTtRQUNFLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0FBQ0o7O0VBS0EsaUJBQWlCOztFQUNqQjs7SUFFSSx3QkFBd0I7SUFDeEIsMkNBQTJDOztJQUUzQyxrREFBa0Q7QUFDdEQ7O0VBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0VBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjs7RUFDQTs7QUFFQTs7RUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7O0lBRXJCO0FBQ0o7O0VBRUE7O0lBRUk7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjs7SUFFckI7Q0FDSDs7RUFFRDtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7O0lBRXJCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL3F1ZXN0aW9ubmFpcmUvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICB6LWluZGV4OiAxMDAwMTtcbiAgXG4gIH1cbiAgXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgyOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDEwMDAwOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG4gIH1cblxuIFxuXG4gIFxuXG4uY2FyZHtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEycHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbi5maXh7XG4gICAgbWluLWhlaWdodDogNjB2aDtcbn1cbi5jdXN0b20tY29udHJvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbn1cbi5udW1iZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XG59XG4uaGVhZGluZ3tcbiAgICBmb250LWZhbWlseTogJ1BvaXJldCBPbmUnLCBjdXJzaXZlO1xuICAgICBjb2xvcjogIzFENDc5MztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gICAgLyogYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDNweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7ICovXG59XG4uaGVhZHtcbiAgICBwYWRkaW5nLWxlZnQ6IDN2dztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdCRTUyO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAxLjdyZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzozcHggM3B4IDRweCByZ2JhKDI0NywgMTg5LCA4MiwgMC40NDUpO1xufVxuLmVkaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFREE1RTtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggM3B4IHJnYmEoOTQsMjE4LDk0LDAuMik7XG59XG5cbi5hZGR7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFREE1RTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XG4gICAgcGFkZGluZzogMC40cmVtIDJyZW0gIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xMjVyZW07XG4gICAgYm94LXNoYWRvdzogOHB4IDEwcHggMTVweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjE1KVxufVxuLmFkZDpob3ZlcntcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEFCQjRBO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG59XG4uYWRke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMC42cmVtO1xufVxuXG4uYWRkOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKC01MCUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMjUsIDI1KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoNDAsIDQwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5hZGQ6Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgZWFzZS1vdXQ7XG4gIH1cblxuLmJhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTU2LCAxNTYsIDE1Nik7XG4gICAgYm94LXNoYWRvdzozcHggM3B4IDRweCByZ2JhKDIzMSwyMzEsMjMxLDAuNDQ1KTtcbn1cbi5hZGRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdCRTUyO1xuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjdyZW0gMCAwLjdyZW07XG4gICAgYm94LXNoYWRvdzoycHggMnB4IDEycHggMnB4IHJnYmEoMjQ3LCAxODksIDgyLCAwLjQ0NSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmFtb3VudHtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xufVxuLnRvdGFse1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmRpc2NsYW1lcntcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgICAuZml4e1xuICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgIH1cblxuICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgLmZpeHtcbiAgICAgICAgbWluLWhlaWdodDogMzByZW07XG4gICAgICAgIFxuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgLmZpeHtcbiAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICB9XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG4gICAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG5cblxuIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICBcbiAgICBcbiAgICAuaGVhZGluZ3tcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIC5oZWFke1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gICAgLmN1c3RvbS1jb250cm9sLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCl7XG4gICAgLmFtb3VudHtcbiAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICAgIC5oZWFkaW5ne1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5oZWFke1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gICAgLmN1c3RvbS1jb250cm9sLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cblxuXG5cbi8qIGRvd24gc2VjdGlvbiAqL1xuLmhvd3tcbiAgICBcbiAgICAvKiBwYWRkaW5nOiAwcmVtIDJyZW07ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjg3KTtcbiAgICBcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDI1cHggNXB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbn1cbi5pY29ue1xuICAgIHdpZHRoOiA2MCU7XG59XG4udGV4dC1zZWN0aW9ue1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmljb257XG4gICAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuICAgIC50ZXh0LXNlY3Rpb257XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgIFxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xuICAgIFxuICAgIC5pY29ue1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgICAudGV4dC1zZWN0aW9ue1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICBcbiAgICB9XG4gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpe1xuICAgIC5pY29ue1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgICAudGV4dC1zZWN0aW9ue1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICBcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/questionnaire/address/address.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/main/questionnaire/address/address.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddressComponent */

  /***/
  function srcAppMainQuestionnaireAddressAddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressComponent", function () {
      return AddressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_place_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/place-order */
    "./src/app/models/place-order.ts");
    /* harmony import */


    var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../main.service */
    "./src/app/main/main.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddressComponent =
    /*#__PURE__*/
    function () {
      function AddressComponent(ss, auth, route, activeRoute, mainservice) {
        _classCallCheck(this, AddressComponent);

        this.ss = ss;
        this.auth = auth;
        this.route = route;
        this.activeRoute = activeRoute;
        this.mainservice = mainservice;
        this.Loading = false;
        this.disable = true;
        this.address = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/addaddress.svg';
        this.loading = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/loading.svg';
        this.date = new Date();
        this.settings = {
          bigBanner: true,
          timePicker: true,
          format: 'dd-M-yyyy',
          defaultOpen: false,
          closeOnSelect: true
        };
        this.placeOrder = new src_app_models_place_order__WEBPACK_IMPORTED_MODULE_4__["PlaceOrder"](this.mainservice.response, 'Pending', false, this.addressId, this.mainservice.subcategoryID, null, this.service_time);
      }

      _createClass(AddressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          if (this.mainservice.subcategoryID == null) {
            this.route.navigate(['../'], {
              relativeTo: this.activeRoute
            });
          }

          this.ss.getAddress(this.auth.getAccessToken()).subscribe(function (res) {
            // console.log(res);
            _this26.addresses = res;
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onOrder",
        value: function onOrder() {
          var _this27 = this;

          this.Loading = true; // console.log(this.addressId);
          // console.log(this.service_time);

          this.placeOrder.address = this.addressId;
          this.placeOrder.service_time = this.service_time; // console.log(this.placeOrder);
          // this.order = JSON.stringify(this.placeOrder);
          // console.log(this.order);

          this.ss.postOrder(this.auth.getAccessToken(), this.placeOrder).subscribe(function (res) {
            // console.log(res);
            _this27.orderResponse = res;
            _this27.Loading = false;

            _this27.route.navigate(['order-detail', _this27.orderResponse.id]);
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onselectedCheck",
        value: function onselectedCheck(value) {
          // console.log(value);
          this.addressId = value;

          if (this.addressId) {
            this.disable = false;
          }
        }
      }, {
        key: "onadd",
        value: function onadd() {
          this.route.navigate(['../add-address/' + ''], {
            relativeTo: this.activeRoute
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigate(['../add-address/' + id], {
            relativeTo: this.activeRoute
          });
        }
      }, {
        key: "onDateSelect",
        value: function onDateSelect(date) {
          date = date.toString();
          var month = date.slice(4, 7);
          var day = date.slice(8, 10);
          var year = date.slice(11, 15);
          var time = date.slice(16, 21); // console.log(day+ " " + month + " "+year+" | " + time)

          this.service_time = day + " " + month + " " + year + " | " + time; // console.log(this.service_time)
        }
      }]);

      return AddressComponent;
    }();

    AddressComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
      }];
    };

    AddressComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-address',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./address.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/address/address.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./address.component.css */
      "./src/app/main/questionnaire/address/address.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]])], AddressComponent);
    /***/
  },

  /***/
  "./src/app/main/questionnaire/questionnaire.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/main/questionnaire/questionnaire.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainQuestionnaireQuestionnaireComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/questionnaire/questionnaire.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/questionnaire/questionnaire.component.ts ***!
    \***************************************************************/

  /*! exports provided: QuestionnaireComponent */

  /***/
  function srcAppMainQuestionnaireQuestionnaireComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function () {
      return QuestionnaireComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var QuestionnaireComponent =
    /*#__PURE__*/
    function () {
      function QuestionnaireComponent() {
        _classCallCheck(this, QuestionnaireComponent);

        this.ques_down = src_app_services_assets__WEBPACK_IMPORTED_MODULE_1__["ASSETS"] + '/ques-down.png';
      }

      _createClass(QuestionnaireComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuestionnaireComponent;
    }();

    QuestionnaireComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-questionnaire',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./questionnaire.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/questionnaire.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./questionnaire.component.css */
      "./src/app/main/questionnaire/questionnaire.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], QuestionnaireComponent);
    /***/
  },

  /***/
  "./src/app/main/questionnaire/questions/questions.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/main/questionnaire/questions/questions.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainQuestionnaireQuestionsQuestionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    z-index: 10001;\n  \n  }\n  .row{\n    margin-left: -15px;\n    margin-right: -15px;\n}\n  .overlay {\n    position: fixed; /* Sit on top of the page content */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff82; /* Black background with opacity */\n    z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n  .card{\n    box-shadow: 5px 5px 25px 5px rgba(46, 61, 73, 0.2);\n    margin-top: 8rem;\n    margin-bottom: 20vh;\n    border-radius: 5px;\n    background-color: #FAFAFA;\n}\n  .fix{\n    min-height: 60vh;\n}\n  .custom-control{\n    padding-left: 5vw;\n}\n  .number{\n    padding-left: 5vw;\n}\n  .heading{\n    font-family: 'Poiret One', cursive;\n     color: #1D4793;\n    font-size: 2rem;\n    font-weight: 600;\n    border-bottom: 1px solid black;\n    letter-spacing: 0.15rem;\n    /* box-shadow: 3px 3px 12px 3px rgba(46, 61, 73, 0.2); */\n}\n  .btn-box{\n    box-shadow: 3px 3px 12px 3px rgba(46, 61, 73, 0.2);\n}\n  .head{\n    padding-left: 3vw;\n    font-weight: 500;\n    font-size: 1.2rem;\n    /* color: #1D4793; */\n}\n  .btn{\n    background-color: #F7BE52;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.813rem;\n    padding: 0.4rem 2rem !important;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 15px 0px rgba(46, 61, 73, 0.15)\n}\n  .btn:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #E6AE46;\n    outline: none;\n}\n  .btn{\n    position: relative;\n    overflow: hidden;\n    margin: 0.6rem;\n}\n  .btn:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    background: rgba(255, 255, 255, .5);\n    opacity: 0;\n    border-radius: 100%;\n    -webkit-transform: scale(1, 1) translate(-50%);\n            transform: scale(1, 1) translate(-50%);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n  }\n  @-webkit-keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n  @keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n  .btn:focus:not(:active)::after {\n    -webkit-animation: ripple 1s ease-out;\n            animation: ripple 1s ease-out;\n  }\n  .edit{\n    background-color: #5EDA5E;\n    padding: 0.1rem 1rem !important;\n    font-size: 0.7rem;\n    color: white;\n    box-shadow: 3px 3px 12px 3px rgba(94,218,94,0.2);\n}\n  .add{\n    \n    background-color: #5EDA5E;\n    box-shadow: 3px 3px 12px 3px rgba(94,218,94,0.2);\n}\n  .back{\n    background-color:rgb(156, 156, 156);\n    box-shadow: 8px 10px 15px 0px rgba(46, 61, 73, 0.15)\n}\n  .back:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #ccc !important;\n    outline: none;\n}\n  .addon{\n    font-size: 0.8rem;\n    outline: none;\n    border: none;\n    background-color:transparent;\n    padding: 0 0.7em 0 0.7em; \n    \n}\n  .fa-minus{\n    color: red;\n    opacity: 0.4;\n}\n  .fa-plus{\n    color:#5EDA5E;\n    opacity: 0.8;\n}\n  .outer{\n   border: 1.2px solid #F7BE52;\n   padding: 0.2rem 0 0.2rem 0;\n   border-radius: 7px;\n}\n  .amount{\n    padding: 0 0.5rem 0 0.5rem;\n    font-size: 0.8rem;\n}\n  .big-total{\n    background-color: #f39f86;\n    background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);\n    padding: 1rem 0 1rem 1rem;\n    box-shadow: 0 0 12px 0 rgba(0,0,0,.1), 0 4px 8px 0 rgba(0,0,0,0.1);\n    border-radius: 10px;\n}\n  .big-total span{\n    color: white;\n    font-weight: 500;\n    font-size: 1.2rem;\n}\n  .total{\n    font-size: 0.8rem;\n    color: #1D4793;\n}\n  .custom-control-input:checked ~ .custom-control-label::before {\n    color: #ffffff;\n    border-color: #F7BE52;\n    background-color: #F7BE52;\n }\n  @media (min-width: 1024px) and (max-width: 1480px){\n    .fix{\n        min-height: 55vh;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n  \n}\n  @media (min-width: 768px) and (max-width: 1024px){\n    .fix{\n        min-height: 30rem;\n       \n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n    \n}\n  @media (min-width: 481px) and (max-width: 768px){\n    .fix{\n        min-height: 55vh;\n    }\n    .heading{\n        font-size: 1.4rem;\n    }\n    .head{\n        font-size: 1rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  @media (min-width: 380px) and (max-width: 500px){\n    .heading{\n        font-size: 1.1rem;\n    }\n    .head{\n        font-size: 0.9rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  @media (min-width: 320px) and (max-width: 380px){\n    \n    \n    .heading{\n        font-size: 0.9rem;\n    }\n    .head{\n        font-size: 0.9rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n\n }\n  @media (max-width: 320px){\n    .amount{\n        padding: 0rem;\n        font-size: 0.8rem;\n    }\n    .heading{\n        font-size: 1rem;\n    }\n    .head{\n        font-size: 0.9rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n  /* down section */\n  .how{\n    \n    /* padding: 0rem 2rem; */\n    background-color: rgba(250, 250, 250, 0.87);\n    \n    box-shadow: 5px 5px 25px 5px rgba(46, 61, 73, 0.2);\n}\n  .icon{\n    width: 60%;\n}\n  .text-section{\n    font-size: 0.8rem;\n    font-weight: 500;\n   \n}\n  @media (min-width: 500px) and (max-width: 768px){\n\n}\n  @media (min-width: 380px) and (max-width: 500px){\n    .icon{\n        width: 35%;\n    }\n    .text-section{\n        font-size: 0.9rem;\n       \n    }\n}\n  @media (min-width: 320px) and (max-width: 380px){\n    \n    .icon{\n        width: 40%;\n    }\n    .text-section{\n        font-size: 0.9rem;\n       \n    }\n }\n  @media (max-width: 320px){\n    .icon{\n        width: 40%;\n    }\n    .text-section{\n        font-size: 0.9rem;\n       \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9xdWVzdGlvbm5haXJlL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixjQUFjOztFQUVoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtFQUVFO0lBQ0UsZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFlBQVksRUFBRSx1Q0FBdUM7SUFDckQsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUEyQixFQUFFLGtDQUFrQztJQUMvRCxjQUFjLEVBQUUsb0ZBQW9GO0lBQ3BHLGVBQWUsRUFBRSwyQkFBMkI7RUFDOUM7RUFFRjtJQUNJLGtEQUFrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7RUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtFQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7RUFDQTtJQUNJLGtDQUFrQztLQUNqQyxjQUFjO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHdEQUF3RDtBQUM1RDtFQUNBO0lBQ0ksa0RBQWtEO0FBQ3REO0VBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7RUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QjtBQUNKO0VBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFO01BQ0UsOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0NBQXdCO2NBQXhCLHdCQUF3QjtJQUMxQjtFQUNGO0VBYkE7SUFDRTtNQUNFLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7RUFDRjtFQUVBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjtFQUNGO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdEQUFnRDtBQUNwRDtFQUVBOztJQUVJLHlCQUF5QjtJQUN6QixnREFBZ0Q7QUFDcEQ7RUFFQTtJQUNJLG1DQUFtQztJQUNuQztBQUNKO0VBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjtFQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHdCQUF3Qjs7QUFFNUI7RUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0VBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtFQUVBO0dBQ0csMkJBQTJCO0dBQzNCLDBCQUEwQjtHQUMxQixrQkFBa0I7QUFDckI7RUFDQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7RUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrRUFBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxtQkFBbUI7QUFDdkI7RUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtFQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7Q0FDNUI7RUFFQTtJQUNHO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7QUFFSjtFQUNBO0lBQ0k7UUFDSSxpQkFBaUI7O0lBRXJCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7QUFFSjtFQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjtFQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjtFQUlDOzs7SUFHRztRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7Q0FFSDtFQUVEO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0FBQ0o7RUFJQSxpQkFBaUI7RUFDakI7O0lBRUksd0JBQXdCO0lBQ3hCLDJDQUEyQzs7SUFFM0Msa0RBQWtEO0FBQ3REO0VBQ0E7SUFDSSxVQUFVO0FBQ2Q7RUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCO0VBQ0E7O0FBRUE7RUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7O0lBRXJCO0FBQ0o7RUFFQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCOztJQUVyQjtDQUNIO0VBRUQ7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCOztJQUVyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9xdWVzdGlvbm5haXJlL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHotaW5kZXg6IDEwMDAxO1xuICBcbiAgfVxuICAucm93e1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuICBcbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODI7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMTAwMDA7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgfVxuXG4uY2FyZHtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDI1cHggNXB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgICBtYXJnaW4tdG9wOiA4cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbi5maXh7XG4gICAgbWluLWhlaWdodDogNjB2aDtcbn1cbi5jdXN0b20tY29udHJvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDV2dztcbn1cbi5udW1iZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiA1dnc7XG59XG4uaGVhZGluZ3tcbiAgICBmb250LWZhbWlseTogJ1BvaXJldCBPbmUnLCBjdXJzaXZlO1xuICAgICBjb2xvcjogIzFENDc5MztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gICAgLyogYm94LXNoYWRvdzogM3B4IDNweCAxMnB4IDNweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7ICovXG59XG4uYnRuLWJveHtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggM3B4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbn1cbi5oZWFke1xuICAgIHBhZGRpbmctbGVmdDogM3Z3O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgLyogY29sb3I6ICMxRDQ3OTM7ICovXG59XG4uYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0JFNTI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuODEzcmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAycmVtICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDE1cHggMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4xNSlcbn1cbi5idG46aG92ZXJ7XG4gICAgYm94LXNoYWRvdzoycHggNHB4IDhweCAwcHggcmdiYSg0NiwgNjEsIDczLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QUU0NjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmJ0bntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAuNnJlbTtcbn1cbi5idG46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGUoLTUwJSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByaXBwbGUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyNSwgMjUpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSg0MCwgNDApO1xuICAgIH1cbiAgfVxuICBcbiAgLmJ0bjpmb2N1czpub3QoOmFjdGl2ZSk6OmFmdGVyIHtcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcyBlYXNlLW91dDtcbiAgfVxuLmVkaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFREE1RTtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggM3B4IHJnYmEoOTQsMjE4LDk0LDAuMik7XG59XG5cbi5hZGR7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFREE1RTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggM3B4IHJnYmEoOTQsMjE4LDk0LDAuMik7XG59XG5cbi5iYWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1NiwgMTU2LCAxNTYpO1xuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDE1cHggMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4xNSlcbn1cbi5iYWNrOmhvdmVye1xuICAgIGJveC1zaGFkb3c6MnB4IDRweCA4cHggMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmFkZG9ue1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMCAwLjdlbSAwIDAuN2VtOyBcbiAgICBcbn1cbi5mYS1taW51c3tcbiAgICBjb2xvcjogcmVkO1xuICAgIG9wYWNpdHk6IDAuNDtcbn1cbi5mYS1wbHVze1xuICAgIGNvbG9yOiM1RURBNUU7XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4ub3V0ZXJ7XG4gICBib3JkZXI6IDEuMnB4IHNvbGlkICNGN0JFNTI7XG4gICBwYWRkaW5nOiAwLjJyZW0gMCAwLjJyZW0gMDtcbiAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5hbW91bnR7XG4gICAgcGFkZGluZzogMCAwLjVyZW0gMCAwLjVyZW07XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uYmlnLXRvdGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzlmODY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2YzOWY4NiAwJSwgI2Y5ZDk3NiA3NCUpO1xuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggMCByZ2JhKDAsMCwwLC4xKSwgMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmlnLXRvdGFsIHNwYW57XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG4udG90YWx7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICMxRDQ3OTM7XG59XG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNGN0JFNTI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3QkU1MjtcbiB9XG5cbiBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgICAuZml4e1xuICAgICAgICBtaW4taGVpZ2h0OiA1NXZoO1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgLmZpeHtcbiAgICAgICAgbWluLWhlaWdodDogMzByZW07XG4gICAgICAgXG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG4gICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgLmZpeHtcbiAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICB9XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cblxuXG4gQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xuICAgIFxuICAgIFxuICAgIC5oZWFkaW5ne1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gICAgLmhlYWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpe1xuICAgIC5hbW91bnR7XG4gICAgICAgIHBhZGRpbmc6IDByZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgICAuaGVhZGluZ3tcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIC5sb2FkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cblxuXG4vKiBkb3duIHNlY3Rpb24gKi9cbi5ob3d7XG4gICAgXG4gICAgLyogcGFkZGluZzogMHJlbSAycmVtOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC44Nyk7XG4gICAgXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyNXB4IDVweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG59XG4uaWNvbntcbiAgICB3aWR0aDogNjAlO1xufVxuLnRleHQtc2VjdGlvbntcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgIC5pY29ue1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgIH1cbiAgICAudGV4dC1zZWN0aW9ue1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KXtcbiAgICBcbiAgICAuaWNvbntcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgLnRleHQtc2VjdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgXG4gICAgfVxuIH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KXtcbiAgICAuaWNvbntcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgLnRleHQtc2VjdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgXG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/questionnaire/questions/questions.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/main/questionnaire/questions/questions.component.ts ***!
    \*********************************************************************/

  /*! exports provided: QuestionsComponent */

  /***/
  function srcAppMainQuestionnaireQuestionsQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function () {
      return QuestionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_models_place_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/place-order */
    "./src/app/models/place-order.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../main.service */
    "./src/app/main/main.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var QuestionsComponent =
    /*#__PURE__*/
    function () {
      function QuestionsComponent(activeroute, ss, auth, route, mainservice) {
        _classCallCheck(this, QuestionsComponent);

        this.activeroute = activeroute;
        this.ss = ss;
        this.auth = auth;
        this.route = route;
        this.mainservice = mainservice;
        this.selectedOption = [];
        this.response = {};
        this.form = {};
        this.set = new Set();
        this.mapQuantity = new Map();
        this.mapPrice = new Map();
        this.checkMap = new Map();
        this.counter = 0;
        this.total = 0.00;
        this.loading = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/loading.svg';
        this.qa = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/qa.svg';
        this.checklist = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/checklist.svg';
        this.schedule = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/schedule.svg';
        this.shield = src_app_services_assets__WEBPACK_IMPORTED_MODULE_6__["ASSETS"] + '/shield.svg';
        this.placeOrder = new src_app_models_place_order__WEBPACK_IMPORTED_MODULE_3__["PlaceOrder"](null, null, null, null, null, null, null);
      }

      _createClass(QuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.activeroute.params.subscribe(function (params) {
            // console.log(params['param']);
            _this28.mainservice.sendSubcategoryId(params['id']);

            _this28.mainservice.sendSubcategory(params['param']);

            _this28.ss.getAllQuestion(params['id']).subscribe(function (res) {
              _this28.questions = res; // console.log(res);

              for (var i = 0; i < _this28.questions.length; i++) {
                if (_this28.questions[i].parent_question == null) {
                  // console.log(this.questions[i]);
                  _this28.parentQuestion = _this28.questions[i];
                  _this28.required = _this28.parentQuestion.required;
                  _this28.total = 0.00;

                  if (_this28.questions[i].select_type == 'form') {
                    _this28.setMapValue(_this28.parentQuestion);

                    _this28.setPriceValue(_this28.parentQuestion);
                  } // console.log(this.questions[i].options);

                } // console.log(this.questions[i].options);

              } // console.log(this.options);

            }, function (err) {// console.log(err);
            });
          });
        }
      }, {
        key: "onNext",
        value: function onNext(parentques) {
          this.checkMap = new Map();

          if (this.required == false) {
            // console.log(this.selectedOption);
            var myQuestion = JSON.stringify(parentques.id);
            var myOptions = []; // console.log(myQuestion);

            if (this.selectedOption.length != 0) {
              for (var i = 0; i < this.selectedOption.length; i++) {
                myOptions.push(this.selectedOption[i].id);
                this.response[myQuestion] = myOptions;
              }

              if (this.selectedOption[0].child_question == 0) {
                this.parentQuestion = null; //Send Post Request

                if (this.auth.isLoggedIn()) {
                  this.route.navigate(['./address'], {
                    relativeTo: this.activeroute
                  });
                } else if (!this.auth.isLoggedIn()) {
                  this.route.navigate(['/login']);
                }

                this.placeOrder.response = this.response;
                this.mainservice.sendResponse(this.response); // console.log(this.placeOrder);
                // console.log(this.response);
              } else {
                // console.log(this.response);
                for (var i = 0; i < this.questions.length; i++) {
                  if (this.questions[i].id == this.selectedOption[0].child_question) {
                    this.parentQuestion = this.questions[i];
                    this.required = this.parentQuestion.required;

                    if (this.parentQuestion.select_type == 'form') {
                      this.setMapValue(this.parentQuestion);
                      this.setPriceValue(this.parentQuestion);
                    } else {
                      this.mapQuantity = new Map();
                    }

                    this.set = new Set();
                  }
                }
              }

              this.selectedOption = [];
            } else if (this.selectedOption.length == 0 && this.checkSkip() && this.mapQuantity.size != 0) {
              this.form["formQuestionId"] = this.parentQuestion.id;

              for (var k = 0; k < this.parentQuestion.options.length; k++) {
                var valueOption = {};

                if (this.mapQuantity.get(this.parentQuestion.options[k].id) > 0) {
                  valueOption['quantity'] = this.mapQuantity.get(this.parentQuestion.options[k].id);
                  valueOption['price'] = this.parentQuestion.options[k].price;
                  valueOption['cost'] = this.mapPrice.get(this.parentQuestion.options[k].id); // console.log(valueOption);

                  this.form[this.parentQuestion.options[k].id] = valueOption;
                }
              }

              this.form["total"] = this.total;
              this.total = 0.00;
              this.response['form'] = this.form;
              this.parentQuestion = null; //Send Post Request

              this.placeOrder.response = this.response;
              this.mainservice.sendResponse(this.response);

              if (this.auth.isLoggedIn()) {
                this.route.navigate(['./address'], {
                  relativeTo: this.activeroute
                });
              } else if (!this.auth.isLoggedIn()) {
                this.route.navigate(['/login']);
              } // console.log(this.placeOrder);
              // console.log(this.response);


              this.form = {};
              this.mapQuantity = new Map();
            } else if (this.selectedOption.length == 0 && !this.checkSkip() && this.mapQuantity.size != 0) {
              this.parentQuestion = null; // Send Post Request

              this.placeOrder.response = this.response;
              this.mainservice.sendResponse(this.response);

              if (this.auth.isLoggedIn()) {
                this.route.navigate(['./address'], {
                  relativeTo: this.activeroute
                });
              } else if (!this.auth.isLoggedIn()) {
                this.route.navigate(['/login']);
              } // console.log(this.placeOrder);

            } else {
              if (this.parentQuestion) {
                if (this.parentQuestion.options[0].child_question == 0) {
                  this.parentQuestion = null; //Send Post Request

                  this.placeOrder.response = this.response;
                  this.mainservice.sendResponse(this.response);

                  if (this.auth.isLoggedIn()) {
                    this.route.navigate(['./address'], {
                      relativeTo: this.activeroute
                    });
                  } else if (!this.auth.isLoggedIn()) {
                    this.route.navigate(['/login']);
                  } // console.log(this.placeOrder);
                  // console.log(this.response);

                } else {
                  for (var i = 0; i < this.questions.length; i++) {
                    if (this.questions[i].id == this.parentQuestion.options[0].child_question) {
                      // console.log(this.parentQuestion.options[0].child_question, this.questions[i])
                      this.parentQuestion = this.questions[i];
                      this.required = this.parentQuestion.required;

                      if (this.parentQuestion.select_type == 'form') {
                        this.setMapValue(this.parentQuestion);
                        this.setPriceValue(this.parentQuestion);
                      } else {
                        this.mapQuantity = new Map();
                      }

                      this.set = new Set();
                      break;
                    }
                  }
                }
              } else {
                // post request.
                this.placeOrder.response = this.response;
                this.mainservice.sendResponse(this.response); // console.log(this.placeOrder);

                if (this.auth.isLoggedIn()) {
                  this.route.navigate(['./address'], {
                    relativeTo: this.activeroute
                  });
                } else if (!this.auth.isLoggedIn()) {
                  this.route.navigate(['/login']);
                }
              }
            }
          }
        }
      }, {
        key: "onselectedOption",
        value: function onselectedOption(value) {
          // console.log(value);
          this.selectedOption = [];
          this.required = false;

          if (value) {
            for (var j = 0; j < this.parentQuestion.options.length; j++) {
              if (this.parentQuestion.options[j].id == value) {
                this.selectedOption.push(this.parentQuestion.options[j]);
                break;
              }
            }
          } else {
            this.selectedOption = [];
          }
        }
      }, {
        key: "onselectedCheck",
        value: function onselectedCheck(value) {
          this.selectedOption = []; // console.log(this.set);

          if (this.set.has(value)) {
            this.set["delete"](value);
          } else {
            this.set.add(value);
          }

          if (this.set.size == 0 && this.parentQuestion.required == true) {
            this.required = true;
          } else {
            this.required = false;
          } // console.log(this.set);


          for (var _i = 0, _Array$from = Array.from(this.set.values()); _i < _Array$from.length; _i++) {
            var x = _Array$from[_i];

            for (var i = 0; i < this.parentQuestion.options.length; i++) {
              if (x == this.parentQuestion.options[i].id) this.selectedOption.push(this.parentQuestion.options[i]);
            }
          } // console.log(this.selectedOption);


          return 0;
        }
      }, {
        key: "onBack",
        value: function onBack(presentques) {
          var _this29 = this;

          // console.log(presentques.parent_question)
          for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == presentques.parent_question) {
              // console.log(this.response);
              var str = this.questions[i].id;

              if (Object.keys(this.response).length != 0) {
                if (this.response[str]) {
                  for (var j = 0; j < this.questions[i].options.length; j++) {
                    this.checkMap.set(this.questions[i].options[j].id, false);
                  }

                  for (var j = 0; j < this.response[str].length; j++) {
                    this.checkMap.set(this.response[str][j], true);
                  } // console.log(this.checkMap)


                  delete this.response[str];
                  break;
                }
              }
            }
          } // console.log(this.response);


          var previousQuestion = presentques.parent_question;

          for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == previousQuestion) {
              this.parentQuestion = this.questions[i];
              this.required = this.parentQuestion.required;

              if (this.parentQuestion.select_type == 'form') {
                this.setMapValue(this.parentQuestion);
              } else {
                this.mapQuantity = new Map();
              }

              this.set = new Set();
              this.checkMap.forEach(function (value, key) {
                if (value == true) {
                  _this29.onselectedCheck(key.toString());
                }
              });
              break;
            }
          }
        }
      }, {
        key: "increment",
        value: function increment(optId) {
          this.mapQuantity.set(optId, this.mapQuantity.get(optId) + 1);
          this.checkRequired();
          this.setPrice(optId);
          this.calculateTotal();
        }
      }, {
        key: "decrement",
        value: function decrement(optId) {
          if (this.mapQuantity.get(optId) > 0) {
            this.mapQuantity.set(optId, this.mapQuantity.get(optId) - 1);
            this.checkRequired();
            this.setPrice(optId);
            this.calculateTotal();
          }
        }
      }, {
        key: "setMapValue",
        value: function setMapValue(parentques) {
          this.mapQuantity = new Map();

          for (var i = 0; i < parentques.options.length; i++) {
            this.mapQuantity.set(parentques.options[i].id, 0);
          }
        }
      }, {
        key: "checkRequired",
        value: function checkRequired() {
          // for(var i=0;i<this.parentQuestion.options.length;i++)
          // {
          if (this.checkSkip() && this.parentQuestion.required == true) {
            this.required = false;
          } else if (this.parentQuestion.required == false) {
            this.required = false;
          } else {
            this.required = true;
          } // }

        }
      }, {
        key: "checkSkip",
        value: function checkSkip() {
          var sum = 0;
          this.mapQuantity.forEach(function (value, key) {
            sum += value;
          });
          if (sum == 0) return false;else return true;
        }
      }, {
        key: "setPriceValue",
        value: function setPriceValue(parentques) {
          this.mapPrice = new Map();

          for (var i = 0; i < parentques.options.length; i++) {
            this.mapPrice.set(parentques.options[i].id, 0);
          }
        }
      }, {
        key: "setPrice",
        value: function setPrice(optId) {
          var price = 0.00;

          for (var i = 0; i < this.parentQuestion.options.length; i++) {
            if (this.parentQuestion.options[i].id == optId) {
              if (this.mapQuantity.get(optId) > 1) {
                price = this.parentQuestion.options[i].price * this.mapQuantity.get(optId) * this.parentQuestion.options[i].factor;
              } else if (this.mapQuantity.get(optId) == 1) {
                price = this.parentQuestion.options[i].price;
              } else {
                price = 0.00;
              }

              this.mapPrice.set(optId, parseFloat(price.toFixed(2)));
              break;
            }
          }
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal() {
          this.total = 0.00;
          var total_sum = 0.00;
          this.mapPrice.forEach(function (value, key) {
            total_sum += value; // console.log(value)
          });
          this.total = parseFloat(total_sum.toFixed(3));
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }]);

      return QuestionsComponent;
    }();

    QuestionsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
      }];
    };

    QuestionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-questions',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/questionnaire/questions/questions.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./questions.component.css */
      "./src/app/main/questionnaire/questions/questions.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]])], QuestionsComponent);
    /***/
  },

  /***/
  "./src/app/main/subcategories/subcategories.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/main/subcategories/subcategories.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainSubcategoriesSubcategoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    z-index: 10001;\n  \n  }\n\n  .row{\n      margin-left: -15px !important;\n      margin-right: -15px !important;\n  }\n\n  .overlay {\n    position: fixed; /* Sit on top of the page content */\n    width: 100%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff82; /* Black background with opacity */\n    z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n  }\n\n  .search_head{\n    color:white;\n    font-weight: 500;\n    \n}\n\n  .pic{\n    width: 100%;\n}\n\n  .play-store{\n    margin-top: 3vh;\n    height: 3.5rem;\n    margin-left: 0rem;\n}\n\n  /* .col-2,.col-4,.col-3,.col-6{\n    padding-right: 0px;\n    padding-left: 0px;\n} */\n\n  .search{\n    position: relative;\n    bottom:16rem;\n}\n\n  @media (min-width: 1024px) and (max-width: 1480px){\n    \n    .search{\n        \n        bottom:12rem;\n    }\n  \n}\n\n  @media (min-width: 768px) and (max-width: 1022px){\n\n    \n    .search{\n        \n        bottom:8rem;\n    }\n}\n\n  @media (min-width: 481px) and (max-width: 767px){\n    \n    .search{\n        \n        bottom: 6rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n}\n\n  @media (min-width: 320px) and (max-width: 480px){\n    \n    .search{\n        \n        bottom: 5rem;\n    }\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n   \n}\n\n  @media (min-width: 320px) and (max-width: 380px){\n    .loader{\n        width: 100px;\n        height: 100px;\n    }\n\n}\n\n  .pushdown{\n    margin-bottom: 20vh;\n}\n\n  h2{\n    color: #1D4793;\n    font-weight: 400;\n}\n\n  .box{\n    border-radius: 0.375rem;\n    box-shadow: 3px 3px 17px 3px rgba(46, 61, 73, 0.2);\n    margin-top: 3rem;\n    -webkit-transition: all .4s ease;\n    transition: all .4s ease;\n    /* min-height: 22vh; */\n    height: 10rem;\n   \n}\n\n  .box:hover{\n    \n    -webkit-transition: all .4s ease;\n    \n    transition: all .4s ease;\n    box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16), 0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);\n}\n\n  .box img{\n    padding-top: 1rem;\n    width: 50%;\n   \n}\n\n  .box a{\n  text-decoration: none;\n}\n\n  .text{\n  font-size: 0.8rem;\n  letter-spacing: 0.08rem;\n  font-weight: 500;\n  color: #1D4793; \n}\n\n  .box img:hover{\n    -webkit-animation: jello 1s ;\n            animation: jello 1s ;\n}\n\n  @-webkit-keyframes jello {\n    from,\n    11.1%,\n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  \n    22.2% {\n      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n              transform: skewX(-12.5deg) skewY(-12.5deg);\n    }\n  \n    33.3% {\n      -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n              transform: skewX(6.25deg) skewY(6.25deg);\n    }\n  \n    44.4% {\n      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n              transform: skewX(-3.125deg) skewY(-3.125deg);\n    }\n  \n    55.5% {\n      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n              transform: skewX(1.5625deg) skewY(1.5625deg);\n    }\n  \n    66.6% {\n      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n              transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    }\n  \n    77.7% {\n      -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n              transform: skewX(0.390625deg) skewY(0.390625deg);\n    }\n  \n    88.8% {\n      -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n              transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    }\n  }\n\n  @keyframes jello {\n    from,\n    11.1%,\n    to {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n  \n    22.2% {\n      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n              transform: skewX(-12.5deg) skewY(-12.5deg);\n    }\n  \n    33.3% {\n      -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n              transform: skewX(6.25deg) skewY(6.25deg);\n    }\n  \n    44.4% {\n      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n              transform: skewX(-3.125deg) skewY(-3.125deg);\n    }\n  \n    55.5% {\n      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n              transform: skewX(1.5625deg) skewY(1.5625deg);\n    }\n  \n    66.6% {\n      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n              transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    }\n  \n    77.7% {\n      -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n              transform: skewX(0.390625deg) skewY(0.390625deg);\n    }\n  \n    88.8% {\n      -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n              transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    }\n  }\n\n  a{\n   color: black;\n   text-decoration: none;\n}\n\n  @media (min-width: 1280px) and (max-width: 1480px){\n  .box{\n    margin-top: 2rem;\n    height: 10rem;\n }\n .box img{\n    width: 50%;\n}\n.box p{\n    font-size: 0.8em;\n}\n}\n\n  @media (min-width: 1024px) and (max-width: 1280px){\n  .box{\n    margin-top: 2rem;\n    height: 11rem;\n }\n .box img{\n    width: 60%;\n}\n.box p{\n    font-size: 0.8em;\n}\n}\n\n  @media (min-width: 768px) and (max-width: 1024px){\n    .box{\n        margin-top: 2rem;\n        height: 10rem;\n     }\n     .box img{\n        width: 60%;\n    }\n    .box p{\n        font-size: 0.8em;\n    }\n    \n}\n\n  @media (min-width: 768px) and (max-width: 900px){\n  .box{\n    margin-top: 2rem;\n    height: 9rem;\n }\n .box img{\n  width: 70%;\n  \n}\n}\n\n  @media (min-width: 500px) and (max-width: 768px) {\n    .box{\n        margin-top: 1rem;\n        height: 8rem;\n     }\n     .box img{\n        width: 60%;\n        \n    }\n    .box p{\n        font-size: 0.6em;\n        \n    }\n}\n\n  @media (min-width: 380px) and (max-width: 500px){\n    h2{\n        font-size: 1.5em;\n    }\n    .box{\n        margin-top: 1rem;\n        height: 8rem;\n     }\n     .box img{\n        width: 50%;\n    }\n    .box p{\n        font-size: 0.7em;\n        margin-bottom: 0.5rem;\n    }\n    .col-4{\n        padding-left: 10px !important;\n        padding-right: 10px !important;\n    }\n}\n\n  @media (min-width: 320px) and (max-width: 380px){\n    h2{\n        font-size: 1.5em;\n    }\n    .box{\n        margin-top: 1rem;\n        height: 6rem;\n     }\n     .box img{\n        width: 50%;\n    }\n    .box p{\n        font-size: 0.5em;\n        margin-bottom: 0.5rem;\n    }\n    .col-4{\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n\n}\n\n  /*section*/\n\n  .section{\n    background-color: rgba(250,213,141, 0.2);\n    padding: 3rem 0 3rem 0;\n}\n\n  .image{\n    width: 90%;\n    box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);\n    border-radius: 0.4rem;\n}\n\n  .head{\n    font-size: 1.1rem;\n    font-weight: 500;\n    \n    \n}\n\n  .line{\n    border-bottom: 3px;\n    border-bottom-color: #F7BE52;\n    border-bottom-style: solid;\n}\n\n  .content{\n   margin-top: 3rem;\n   font-size: 0.9rem;\n   color: #00000093;\n}\n\n  @media (min-width: 1280px) and (max-width: 1480px){\n    \n  }\n\n  @media (min-width: 1024px) and (max-width: 1280px){\n    \n  }\n\n  @media (min-width: 768px) and (max-width: 1024px){\n      \n      \n  }\n\n  @media (min-width: 768px) and (max-width: 900px){\n    .image{\n        width: 100%;\n    \n    }\n    \n    .head{\n        font-size: 0.8rem;\n        font-weight: 500;\n        \n        \n    }\n    .line{\n        border-bottom: 3px;\n        border-bottom-color: #F7BE52;\n        border-bottom-style: solid;\n    }\n    .content{\n       margin-top: 1rem;\n       font-size: 0.6rem;\n    }\n  }\n\n  @media (min-width: 500px) and (max-width: 768px) {\n    .image{\n        width: 100%;\n    \n    }\n    \n    .head{\n        font-size: 0.8rem;\n        font-weight: 500;\n        \n        \n    }\n    .line{\n        border-bottom: 3px;\n        border-bottom-color: #F7BE52;\n        border-bottom-style: solid;\n    }\n    .content{\n       margin-top: 1rem;\n       font-size: 0.6rem;\n    }\n  }\n\n  @media (min-width: 380px) and (max-width: 500px){\n    .image{\n        width: 100%;\n    \n    }\n    \n    .head{\n        font-size: 0.9rem;\n        font-weight: 500;\n        \n        \n    }\n    .line{\n        border-bottom: 3px;\n        border-bottom-color: #F7BE52;\n        border-bottom-style: solid;\n    }\n    .content{\n       margin-top: 2rem;\n       font-size: 0.8rem;\n    }\n  }\n\n  @media (min-width: 320px) and (max-width: 380px){\n    .image{\n        width: 100%;\n    \n    }\n    \n    .head{\n        font-size: 0.8rem;\n        font-weight: 500;\n        \n        \n    }\n    .line{\n        border-bottom: 3px;\n        border-bottom-color: #F7BE52;\n        border-bottom-style: solid;\n    }\n    .content{\n       margin-top: 1rem;\n       font-size: 0.55rem;\n    }\n  }\n\n  /*get app*/\n\n  .mobile{\n    width: 60%;\n}\n\n  .main-head{\n    display: none;\n}\n\n  .getapp{\n    margin-top: 20vh;\n    /* padding-top: 5rem; */\n}\n\n  h2{\n    color: #1D4793;\n}\n\n  .label{\n    margin-top: 4vh;\n    color: #F7BE52;\n}\n\n  .form-control{\n    box-shadow: 3px 3px 12px  rgba(0, 0, 0, 0.1);\n    border-left: 2px solid #F7BE52 !important;\n    border: 1px solid white;\n}\n\n  .play-store{\n    margin-top: 5vh;\n}\n\n  .btn{\n    border: 0px;\n    background-color: #F7BE52;\n    border-radius: 0.25rem;\n    background-color: #F7BE52;\n    border: 0px;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 1rem;\n    letter-spacing: 0.025rem;\n    box-shadow: 8px 10px 20px 0px rgba(46, 61, 73, 0.15);\n}\n\n  .btn:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #E6AE46;\n    outline: none;\n    border-color: transparent;\n}\n\n  @media (min-width: 1024px) and (max-width: 1480px){\n    .play-store{\n        margin-top: 3vh;\n    }\n    .mobile{\n        width: 60%;\n    }\n    .getapp{\n        margin-top: 10vh;\n    }\n\n}\n\n  @media (min-width: 768px) and (max-width: 1022px){\n  .mobile{\n      width: 70%;\n  }\n  .play-store{\n    margin-top: 3vh;\n}\n.label{\n    margin-top: 2vh;\n    color: #F7BE52;\n}\n.text-get{\n    font-size: 0.8em;\n}\n\n}\n\n  @media (min-width: 481px) and (max-width: 767px) {\n   h2{\n      margin-top: 5vh;\n    }\n   .mobile{\n    width: 90%;\n    }\n    .main-head{\n        display: block;\n        text-align: center;\n        font-weight: 400;\n    }\n    .head1{\n        display: none;\n    }\n    .mobile{\n        width: 80%;\n    }\n  \n}\n\n  @media (min-width: 380px) and (max-width: 500px){\n    .getapp{\n        margin-top: 10vh;\n    }\n    h2{\n        margin-top: 5vh;\n      }\n     .mobile{\n      width: 90%;\n      }\n    .main-head{\n        display: block;\n        text-align: center;\n        font-weight: 400;\n    }\n    .head1{\n        display: none;\n    }\n    .text-get{\n        font-size: 0.7rem;\n        margin-top: 1rem;\n    }\n    \n    \n  \n   \n}\n\n  @media (min-width: 320px) and (max-width: 380px){\n    .getapp{\n        margin-top: 10vh;\n    }\n    .text-get{\n        font-size: 0.6rem;\n        margin-top: 1rem;\n    }\n    .mobile{\n        width: 90%;\n    }\n    .label{\n        font-size: 0.6em\n    }\n    .main-head{\n        display: block;\n        text-align: center;\n        font-weight: 400;\n    }\n    .head1{\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9zdWJjYXRlZ29yaWVzL3N1YmNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixjQUFjOztFQUVoQjs7RUFFQTtNQUNJLDZCQUE2QjtNQUM3Qiw4QkFBOEI7RUFDbEM7O0VBRUE7SUFDRSxlQUFlLEVBQUUsbUNBQW1DO0lBQ3BELFdBQVcsRUFBRSxzQ0FBc0M7SUFDbkQsWUFBWSxFQUFFLHVDQUF1QztJQUNyRCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQTJCLEVBQUUsa0NBQWtDO0lBQy9ELGNBQWMsRUFBRSxvRkFBb0Y7SUFDcEcsZUFBZSxFQUFFLDJCQUEyQjtFQUM5Qzs7RUFFRjtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztFQUVBO0lBQ0ksV0FBVztBQUNmOztFQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0VBRUE7OztHQUdHOztFQUNIO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0VBSUE7O0lBRUk7O1FBRUksWUFBWTtJQUNoQjs7QUFFSjs7RUFDQTs7O0lBR0k7O1FBRUksV0FBVztJQUNmO0FBQ0o7O0VBQ0E7O0lBRUk7O1FBRUksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7RUFDQTs7SUFFSTs7UUFFSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7QUFFSjs7RUFDQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0FBRUo7O0VBS0E7SUFDSSxtQkFBbUI7QUFDdkI7O0VBR0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztFQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtEQUFrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsZ0NBQXdCO0lBQXhCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsYUFBYTs7QUFFakI7O0VBRUE7O0lBRUksZ0NBQXdCOztJQUF4Qix3QkFBd0I7SUFDeEIscUhBQXFIO0FBQ3pIOztFQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7O0FBRWQ7O0VBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztFQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtBQUN4Qjs7RUFHRTtJQUNFOzs7TUFHRSx1Q0FBK0I7Y0FBL0IsK0JBQStCO0lBQ2pDOztJQUVBO01BQ0Usa0RBQTBDO2NBQTFDLDBDQUEwQztJQUM1Qzs7SUFFQTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7SUFDMUM7O0lBRUE7TUFDRSxvREFBNEM7Y0FBNUMsNENBQTRDO0lBQzlDOztJQUVBO01BQ0Usb0RBQTRDO2NBQTVDLDRDQUE0QztJQUM5Qzs7SUFFQTtNQUNFLHdEQUFnRDtjQUFoRCxnREFBZ0Q7SUFDbEQ7O0lBRUE7TUFDRSx3REFBZ0Q7Y0FBaEQsZ0RBQWdEO0lBQ2xEOztJQUVBO01BQ0UsNERBQW9EO2NBQXBELG9EQUFvRDtJQUN0RDtFQUNGOztFQWxDQTtJQUNFOzs7TUFHRSx1Q0FBK0I7Y0FBL0IsK0JBQStCO0lBQ2pDOztJQUVBO01BQ0Usa0RBQTBDO2NBQTFDLDBDQUEwQztJQUM1Qzs7SUFFQTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7SUFDMUM7O0lBRUE7TUFDRSxvREFBNEM7Y0FBNUMsNENBQTRDO0lBQzlDOztJQUVBO01BQ0Usb0RBQTRDO2NBQTVDLDRDQUE0QztJQUM5Qzs7SUFFQTtNQUNFLHdEQUFnRDtjQUFoRCxnREFBZ0Q7SUFDbEQ7O0lBRUE7TUFDRSx3REFBZ0Q7Y0FBaEQsZ0RBQWdEO0lBQ2xEOztJQUVBO01BQ0UsNERBQW9EO2NBQXBELG9EQUFvRDtJQUN0RDtFQUNGOztFQUVGO0dBQ0csWUFBWTtHQUNaLHFCQUFxQjtBQUN4Qjs7RUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7Q0FDQTtJQUNHLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0VBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCO0NBQ0E7SUFDRyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztFQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtLQUNoQjtLQUNBO1FBQ0csVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0VBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7Q0FDQTtFQUNDLFVBQVU7O0FBRVo7QUFDQTs7RUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7S0FDZjtLQUNBO1FBQ0csVUFBVTs7SUFFZDtJQUNBO1FBQ0ksZ0JBQWdCOztJQUVwQjtBQUNKOztFQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO0tBQ2Y7S0FDQTtRQUNHLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCLDhCQUE4QjtJQUNsQztBQUNKOztFQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO0tBQ2Y7S0FDQTtRQUNHLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0Qjs7QUFFSjs7RUFFQSxVQUFVOztFQUVWO0lBQ0ksd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQjs7RUFDQTtJQUNJLFVBQVU7SUFDVixrREFBa0Q7SUFDbEQscUJBQXFCO0FBQ3pCOztFQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjs7O0FBR3BCOztFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0VBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsaUJBQWlCO0dBQ2pCLGdCQUFnQjtBQUNuQjs7RUFFQTs7RUFFRTs7RUFFQTs7RUFFQTs7RUFDQTs7O0VBR0E7O0VBQ0E7SUFDRTtRQUNJLFdBQVc7O0lBRWY7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCOzs7SUFHcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsMEJBQTBCO0lBQzlCO0lBQ0E7T0FDRyxnQkFBZ0I7T0FDaEIsaUJBQWlCO0lBQ3BCO0VBQ0Y7O0VBQ0E7SUFDRTtRQUNJLFdBQVc7O0lBRWY7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCOzs7SUFHcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsMEJBQTBCO0lBQzlCO0lBQ0E7T0FDRyxnQkFBZ0I7T0FDaEIsaUJBQWlCO0lBQ3BCO0VBQ0Y7O0VBQ0E7SUFDRTtRQUNJLFdBQVc7O0lBRWY7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCOzs7SUFHcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsMEJBQTBCO0lBQzlCO0lBQ0E7T0FDRyxnQkFBZ0I7T0FDaEIsaUJBQWlCO0lBQ3BCO0VBQ0Y7O0VBQ0E7SUFDRTtRQUNJLFdBQVc7O0lBRWY7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCOzs7SUFHcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsMEJBQTBCO0lBQzlCO0lBQ0E7T0FDRyxnQkFBZ0I7T0FDaEIsa0JBQWtCO0lBQ3JCO0VBQ0Y7O0VBT0YsVUFBVTs7RUFDVjtJQUNJLFVBQVU7QUFDZDs7RUFDQTtJQUNJLGFBQWE7QUFDakI7O0VBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztFQUNBO0lBQ0ksY0FBYztBQUNsQjs7RUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztFQUNBO0lBQ0ksNENBQTRDO0lBQzVDLHlDQUF5QztJQUN6Qyx1QkFBdUI7QUFDM0I7O0VBQ0E7SUFDSSxlQUFlO0FBQ25COztFQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLG9EQUFvRDtBQUN4RDs7RUFDQTtJQUNJLGdEQUFnRDtJQUNoRCxpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztFQUdBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSjs7RUFDQTtFQUNFO01BQ0ksVUFBVTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztFQUVBO0dBQ0c7TUFDRyxlQUFlO0lBQ2pCO0dBQ0Q7SUFDQyxVQUFVO0lBQ1Y7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7O0VBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtNQUNqQjtLQUNEO01BQ0MsVUFBVTtNQUNWO0lBQ0Y7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7Ozs7QUFLSjs7RUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL3N1YmNhdGVnb3JpZXMvc3ViY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgei1pbmRleDogMTAwMDE7XG4gIFxuICB9XG5cbiAgLnJvd3tcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4MjsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAxMDAwMDsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xuICB9XG5cbi5zZWFyY2hfaGVhZHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIFxufVxuXG4ucGlje1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnBsYXktc3RvcmV7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuXG4vKiAuY29sLTIsLmNvbC00LC5jb2wtMywuY29sLTZ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufSAqL1xuLnNlYXJjaHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOjE2cmVtO1xufVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE0ODBweCl7XG4gICAgXG4gICAgLnNlYXJjaHtcbiAgICAgICAgXG4gICAgICAgIGJvdHRvbToxMnJlbTtcbiAgICB9XG4gIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyMnB4KXtcblxuICAgIFxuICAgIC5zZWFyY2h7XG4gICAgICAgIFxuICAgICAgICBib3R0b206OHJlbTtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG4gICAgXG4gICAgLnNlYXJjaHtcbiAgICAgICAgXG4gICAgICAgIGJvdHRvbTogNnJlbTtcbiAgICB9XG4gICAgLmxvYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICBcbiAgICAuc2VhcmNoe1xuICAgICAgICBcbiAgICAgICAgYm90dG9tOiA1cmVtO1xuICAgIH1cbiAgICAubG9hZGVye1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgLmxvYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxufVxuXG5cblxuXG4ucHVzaGRvd257XG4gICAgbWFyZ2luLWJvdHRvbTogMjB2aDtcbn1cblxuXG5oMntcbiAgICBjb2xvcjogIzFENDc5MztcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLmJveHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDE3cHggM3B4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcbiAgICAvKiBtaW4taGVpZ2h0OiAyMnZoOyAqL1xuICAgIGhlaWdodDogMTByZW07XG4gICBcbn1cblxuLmJveDpob3ZlcntcbiAgICBcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMTcsIDIyLCAyNiwgMC4xNiksIDAgNHB4IDhweCAwIHJnYmEoMTcsIDIyLCAyNiwgMC4wOCksIDAgOHB4IDE2cHggMCByZ2JhKDE3LCAyMiwgMjYsIDAuMDgpO1xufVxuLmJveCBpbWd7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgd2lkdGg6IDUwJTtcbiAgIFxufVxuLmJveCBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udGV4dHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFENDc5MzsgXG59XG4uYm94IGltZzpob3ZlcntcbiAgICBhbmltYXRpb246IGplbGxvIDFzIDtcbn1cblxuICBcbiAgQGtleWZyYW1lcyBqZWxsbyB7XG4gICAgZnJvbSxcbiAgICAxMS4xJSxcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgMjIuMiUge1xuICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xuICAgIH1cbiAgXG4gICAgMzMuMyUge1xuICAgICAgdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDQ0LjQlIHtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xuICAgIH1cbiAgXG4gICAgNTUuNSUge1xuICAgICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XG4gICAgfVxuICBcbiAgICA2Ni42JSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XG4gICAgfVxuICBcbiAgICA3Ny43JSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XG4gICAgfVxuICBcbiAgICA4OC44JSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xuICAgIH1cbiAgfVxuXG5he1xuICAgY29sb3I6IGJsYWNrO1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgLmJveHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gfVxuIC5ib3ggaW1ne1xuICAgIHdpZHRoOiA1MCU7XG59XG4uYm94IHB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XG4gIC5ib3h7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBoZWlnaHQ6IDExcmVtO1xuIH1cbiAuYm94IGltZ3tcbiAgICB3aWR0aDogNjAlO1xufVxuLmJveCBwe1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgIC5ib3h7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIGhlaWdodDogMTByZW07XG4gICAgIH1cbiAgICAgLmJveCBpbWd7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICAgIC5ib3ggcHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG4gICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG4gIC5ib3h7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBoZWlnaHQ6IDlyZW07XG4gfVxuIC5ib3ggaW1ne1xuICB3aWR0aDogNzAlO1xuICBcbn1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmJveHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgaGVpZ2h0OiA4cmVtO1xuICAgICB9XG4gICAgIC5ib3ggaW1ne1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBcbiAgICB9XG4gICAgLmJveCBwe1xuICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICBcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICAgIC5ib3h7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgfVxuICAgICAuYm94IGltZ3tcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmJveCBwe1xuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuICAgIC5jb2wtNHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICAgIC5ib3h7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgfVxuICAgICAuYm94IGltZ3tcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmJveCBwe1xuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuICAgIC5jb2wtNHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cblxufVxuXG4vKnNlY3Rpb24qL1xuXG4uc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwyMTMsMTQxLCAwLjIpO1xuICAgIHBhZGRpbmc6IDNyZW0gMCAzcmVtIDA7XG59XG4uaW1hZ2V7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDI1cHggMHB4IHJnYmEoNDYsIDYxLCA3MywgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG59XG5cbi5oZWFke1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgXG4gICAgXG59XG4ubGluZXtcbiAgICBib3JkZXItYm90dG9tOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0Y3QkU1MjtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbn1cbi5jb250ZW50e1xuICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgY29sb3I6ICMwMDAwMDA5Mztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE0ODBweCl7XG4gICAgXG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xuICAgIFxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICBcbiAgICAgIFxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcbiAgICAuaW1hZ2V7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgLmxpbmV7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0Y3QkU1MjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLmhlYWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5saW5le1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNGN0JFNTI7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLmhlYWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5saW5le1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNGN0JFNTI7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgLmltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLmhlYWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5saW5le1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNGN0JFNTI7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgIGZvbnQtc2l6ZTogMC41NXJlbTtcbiAgICB9XG4gIH1cblxuXG5cblxuXG5cbi8qZ2V0IGFwcCovXG4ubW9iaWxle1xuICAgIHdpZHRoOiA2MCU7XG59XG4ubWFpbi1oZWFke1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uZ2V0YXBwe1xuICAgIG1hcmdpbi10b3A6IDIwdmg7XG4gICAgLyogcGFkZGluZy10b3A6IDVyZW07ICovXG59XG5oMntcbiAgICBjb2xvcjogIzFENDc5Mztcbn1cbi5sYWJlbHtcbiAgICBtYXJnaW4tdG9wOiA0dmg7XG4gICAgY29sb3I6ICNGN0JFNTI7XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTJweCAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0Y3QkU1MiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuLnBsYXktc3RvcmV7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xufVxuXG4uYnRue1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0JFNTI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdCRTUyO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNXJlbTtcbiAgICBib3gtc2hhZG93OiA4cHggMTBweCAyMHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMTUpO1xufVxuLmJ0bjpob3ZlcntcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZBRTQ2O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTQ4MHB4KXtcbiAgICAucGxheS1zdG9yZXtcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIH1cbiAgICAubW9iaWxle1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICAuZ2V0YXBwe1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIH1cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyMnB4KXtcbiAgLm1vYmlsZXtcbiAgICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLnBsYXktc3RvcmV7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xufVxuLmxhYmVse1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBjb2xvcjogI0Y3QkU1Mjtcbn1cbi50ZXh0LWdldHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICBoMntcbiAgICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICB9XG4gICAubW9iaWxle1xuICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICAgIC5tYWluLWhlYWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5oZWFkMXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1vYmlsZXtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gIFxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgIC5nZXRhcHB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgfVxuICAgIGgye1xuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgICB9XG4gICAgIC5tb2JpbGV7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgfVxuICAgIC5tYWluLWhlYWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5oZWFkMXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnRleHQtZ2V0e1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgXG4gIFxuICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgLmdldGFwcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICB9XG4gICAgLnRleHQtZ2V0e1xuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLm1vYmlsZXtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLmxhYmVse1xuICAgICAgICBmb250LXNpemU6IDAuNmVtXG4gICAgfVxuICAgIC5tYWluLWhlYWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC5oZWFkMXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/subcategories/subcategories.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/subcategories/subcategories.component.ts ***!
    \***************************************************************/

  /*! exports provided: SubcategoriesComponent */

  /***/
  function srcAppMainSubcategoriesSubcategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcategoriesComponent", function () {
      return SubcategoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../main.service */
    "./src/app/main/main.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SubcategoriesComponent =
    /*#__PURE__*/
    function () {
      function SubcategoriesComponent(activeroute, ss, mainservice, fb, meta) {
        _classCallCheck(this, SubcategoriesComponent);

        this.activeroute = activeroute;
        this.ss = ss;
        this.mainservice = mainservice;
        this.fb = fb;
        this.meta = meta;
        this.subcat = false;
        this.verified = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/verified@2x.png';
        this.damage = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/damage@2x.png';
        this.price = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/price@2x.png';
        this.doorstep = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/doorstep@2x.png';
        this.mobile = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/mobile.png';
        this.google = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/google-play-badge.png';
        this.loading = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/loading.svg';
        this.defaultImage = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/electrician.png';
        var numberFormat = '[6-9][0-9]{9}';
        this.getAppForm = this.fb.group({
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(numberFormat)])
        });
        var viewport = this.meta.getTag('name=viewport');
        console.log(viewport.content);
        this.meta.addTags([{
          name: 'twitter:card',
          content: 'summary_large_image'
        }, {
          name: 'twitter:site',
          content: '@alligatorio'
        }]);
      }

      _createClass(SubcategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.activeroute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this30.ss.getSubCategories(params['id']).subscribe(function (res) {
              // console.log(res);
              _this30.showSubcategories = res;

              if (_this30.subcategories) {
                _this30.subcat = true;
              }
            }, function (err) {// console.log(err);
            });
          });
        }
      }, {
        key: "ongetApp",
        value: function ongetApp() {
          var _this31 = this;

          // console.log(this.getAppForm.value);
          if (!(this.getAppForm.value.phone_number == null || this.getAppForm.value.phone_number == "")) {
            this.ss.postLink(this.getAppForm.value).subscribe(function (res) {
              // console.log(res);
              _this31.getAppForm.reset();

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Link Sent',
                text: 'Link for WOFO24 app link is sent to your mobile number.',
                type: 'success',
                confirmButtonText: 'Ok'
              });
            }, function (err) {
              // console.log(err)
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Try Again',
                text: 'Something went wrong, Please try again.',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            });
          }
        }
      }]);

      return SubcategoriesComponent;
    }();

    SubcategoriesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
      }, {
        type: _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
      }];
    };

    SubcategoriesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-subcategories',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./subcategories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/subcategories/subcategories.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./subcategories.component.css */
      "./src/app/main/subcategories/subcategories.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])], SubcategoriesComponent);
    /***/
  },

  /***/
  "./src/app/main/user-auth/activate/activate.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/main/user-auth/activate/activate.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUserAuthActivateActivateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#resend{\n    display: none;\n    cursor: pointer;\n}\n\n#sent{\n    display: none;\n}\n\n.validation{\n    color:red;\n    font-size: 0.8rem;\n    margin-left: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91c2VyLWF1dGgvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi91c2VyLWF1dGgvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXNlbmR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzZW50e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52YWxpZGF0aW9ue1xuICAgIGNvbG9yOnJlZDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tbGVmdDogMHJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/user-auth/activate/activate.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/user-auth/activate/activate.component.ts ***!
    \***************************************************************/

  /*! exports provided: ActivateComponent */

  /***/
  function srcAppMainUserAuthActivateActivateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateComponent", function () {
      return ActivateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../main.service */
    "./src/app/main/main.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // import { ToastrService } from 'ngx-toastr';


    var ActivateComponent =
    /*#__PURE__*/
    function () {
      function ActivateComponent(activeroute, ss, auth, route, mainservice) {
        _classCallCheck(this, ActivateComponent);

        this.activeroute = activeroute;
        this.ss = ss;
        this.auth = auth;
        this.route = route;
        this.mainservice = mainservice;
        this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        if (this.auth.isLoggedIn()) {
          this.route.navigate(['/']);
        }
      }

      _createClass(ActivateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'otp': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)])
          });
          this.activeroute.params.subscribe(function (params) {
            // console.log(params['user_id']);
            _this32.userId = params['user_id']; // console.log(this.userId)
          });
        }
      }, {
        key: "onOtp",
        value: function onOtp() {
          var _this33 = this;

          this.ss.postOtp(this.userId, this.otpForm.value).subscribe(function (res) {
            // console.log(res);
            _this33.token = res;

            _this33.auth.storeRefreshToken(_this33.token.refresh);

            _this33.auth.storeAccessToken(_this33.token.access);

            _this33.otpForm.reset();

            if (_this33.mainservice.response) {
              console.log(_this33.mainservice.subcategory);

              _this33.route.navigate(['questions', _this33.mainservice.subcategory, _this33.mainservice.subcategoryID, 'address']);
            } else {
              _this33.route.navigate(['']);
            }
          }, function (err) {
            // console.log(err);
            _this33.otpForm.reset();

            if (err.error.error == "Invalid OTP") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Invalid OTP!',
                text: 'Please try again.',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            }

            if (err.error.error == "OTP expired!") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'OTP Expired!',
                text: 'Please try again.',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            }
          });
        }
      }, {
        key: "onResend",
        value: function onResend() {
          var _this34 = this;

          // console.log(this.userId)
          this.ss.getResend(this.userId).subscribe(function (res) {
            // console.log(res);
            // this.toastr.success('otp sent','otp succefully sent',{ positionClass: 'toast-bottom-right' });
            document.getElementById('sent').style.display = 'block';

            _this34.Toast.fire({
              type: 'success',
              title: 'OTP sent successfully'
            });
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(data) {
          if (data.action == "done") {
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('resend').style.display = 'block';
          }
        }
      }]);

      return ActivateComponent;
    }();

    ActivateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
      }];
    };

    ActivateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-activate',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./activate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/activate/activate.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./activate.component.css */
      "./src/app/main/user-auth/activate/activate.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]])], ActivateComponent);
    /***/
  },

  /***/
  "./src/app/main/user-auth/login/login.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/main/user-auth/login/login.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUserAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn{\n    background-color: #F7BE52;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.813rem;\n    padding: 0.4rem 2rem !important;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 15px 0px rgba(0,0,0,0.2);\n\n}\n.btn:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #E6AE46;\n    outline: none;\n    border-color: transparent;\n}\n.btn{\n    position: relative;\n    overflow: hidden;\n    margin: 0.6rem;\n}\n.btn:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    background: rgba(255, 255, 255, .5);\n    opacity: 0;\n    border-radius: 100%;\n    -webkit-transform: scale(1, 1) translate(-50%);\n            transform: scale(1, 1) translate(-50%);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n  }\n.create{\n      cursor: pointer;\n  }\n@-webkit-keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n@keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n.btn:focus:not(:active)::after {\n    -webkit-animation: ripple 1s ease-out;\n            animation: ripple 1s ease-out;\n  }\n.form-control{\n    border: 1px solid #ffffff !important;\n    box-shadow:6px 6px 4px rgba(156, 156, 156, 0.103);\n    border-left: 3px solid #F7BE52 !important;\n   \n    \n}\n.main{\n   padding-top: 20vh;\n   padding-bottom: 20vh;\n}\np,span{\n    font-size: 0.8rem;\n}\nh1,p{\n    color: #F7BE52;\n}\n.dots{\n  position: absolute;\n  \n  top: -12rem;\n  left: 16rem;\n  width: 94%;\n  z-index: -11111;\n  \n}\n.validation{\n    color:red;\n    font-size: 0.7rem;\n    margin-left: 1rem;\n    margin-top: 0.5rem\n}\n@media (min-width: 1026px) and (max-width: 1480px){\n    .dots{\n        position: absolute;\n        top: -13rem;\n        left: 16rem;\n        width: 98%;\n        z-index: -11111;\n        \n      }\n\n}\n@media (min-width: 1024px) and (max-width: 1280px){\n    .dots{\n        position: absolute;\n        \n        top: -12rem;\n        left: 16rem;\n        width: 92%;\n        \n        z-index: -11111;\n        \n      }\n}\n@media (min-width: 768px) and (max-width: 1024px){\n    /* .image,.dots{\n        display: none;\n    }\n    .main{\n        padding-top: 10vh;\n     } */\n     .dots{\n        position: absolute;\n        \n        top: -12rem;\n        left: 16rem;\n        width: 95%;\n        z-index: -11111;\n        \n      }\n    \n}\n@media (min-width: 481px) and (max-width: 768px) {\n    .image,.dots{\n        display: none;\n    }\n  \n}\n@media (min-width: 320px) and (max-width: 480px){\n    .image,.dots{\n        display: none;\n    }\n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    .image,.dots{\n        display: none;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91c2VyLWF1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4Qiw2Q0FBNkM7O0FBRWpEO0FBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFFQTtNQUNJLGVBQWU7RUFDbkI7QUFFQTtJQUNFO01BQ0UsOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0NBQXdCO2NBQXhCLHdCQUF3QjtJQUMxQjtFQUNGO0FBYkE7SUFDRTtNQUNFLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7RUFDRjtBQUVBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjtBQUVGO0lBQ0ksb0NBQW9DO0lBQ3BDLGlEQUFpRDtJQUNqRCx5Q0FBeUM7OztBQUc3QztBQUNBO0dBQ0csaUJBQWlCO0dBQ2pCLG9CQUFvQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7O0FBRWpCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjtBQUNKO0FBR0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7UUFDVixlQUFlOztNQUVqQjs7QUFFTjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7O1FBRWxCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsVUFBVTs7UUFFVixlQUFlOztNQUVqQjtBQUNOO0FBQ0E7SUFDSTs7Ozs7UUFLSTtLQUNIO1FBQ0csa0JBQWtCOztRQUVsQixXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7UUFDVixlQUFlOztNQUVqQjs7QUFFTjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztBQUVKO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL21haW4vdXNlci1hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0JFNTI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuODEzcmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAycmVtICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcblxufVxuLmJ0bjpob3ZlcntcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZBRTQ2O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwLjZyZW07XG59XG4uYnRuOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKC01MCUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIH1cblxuICAuY3JlYXRle1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHJpcHBsZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDI1LCAyNSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDQwLCA0MCk7XG4gICAgfVxuICB9XG4gIFxuICAuYnRuOmZvY3VzOm5vdCg6YWN0aXZlKTo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbjogcmlwcGxlIDFzIGVhc2Utb3V0O1xuICB9XG5cbi5mb3JtLWNvbnRyb2x7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6NnB4IDZweCA0cHggcmdiYSgxNTYsIDE1NiwgMTU2LCAwLjEwMyk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjRjdCRTUyICFpbXBvcnRhbnQ7XG4gICBcbiAgICBcbn1cbi5tYWlue1xuICAgcGFkZGluZy10b3A6IDIwdmg7XG4gICBwYWRkaW5nLWJvdHRvbTogMjB2aDtcbn1cbnAsc3BhbntcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmgxLHB7XG4gICAgY29sb3I6ICNGN0JFNTI7XG59XG4uZG90c3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgdG9wOiAtMTJyZW07XG4gIGxlZnQ6IDE2cmVtO1xuICB3aWR0aDogOTQlO1xuICB6LWluZGV4OiAtMTExMTE7XG4gIFxufVxuXG4udmFsaWRhdGlvbntcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtXG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjZweCkgYW5kIChtYXgtd2lkdGg6IDE0ODBweCl7XG4gICAgLmRvdHN7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTNyZW07XG4gICAgICAgIGxlZnQ6IDE2cmVtO1xuICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICB6LWluZGV4OiAtMTExMTE7XG4gICAgICAgIFxuICAgICAgfVxuXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcbiAgICAuZG90c3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBcbiAgICAgICAgdG9wOiAtMTJyZW07XG4gICAgICAgIGxlZnQ6IDE2cmVtO1xuICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICBcbiAgICAgICAgei1pbmRleDogLTExMTExO1xuICAgICAgICBcbiAgICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgLyogLmltYWdlLC5kb3Rze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubWFpbntcbiAgICAgICAgcGFkZGluZy10b3A6IDEwdmg7XG4gICAgIH0gKi9cbiAgICAgLmRvdHN7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgXG4gICAgICAgIHRvcDogLTEycmVtO1xuICAgICAgICBsZWZ0OiAxNnJlbTtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgei1pbmRleDogLTExMTExO1xuICAgICAgICBcbiAgICAgIH1cbiAgICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmltYWdlLC5kb3Rze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICAuaW1hZ2UsLmRvdHN7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgLmltYWdlLC5kb3Rze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/user-auth/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/main/user-auth/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppMainUserAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(ss, route, fb, auth) {
        _classCallCheck(this, LoginComponent);

        this.ss = ss;
        this.route = route;
        this.fb = fb;
        this.auth = auth;
        this.doesnotexist = false;
        this.direction = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/direction.svg';
        this.dots = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/dots.svg';

        if (this.auth.isLoggedIn()) {
          this.route.navigate(['/']);
        }

        var numberFormat = '[6-9][0-9]{9}';
        this.loginForm = this.fb.group({
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(numberFormat)]))
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this35 = this;

          this.ss.postLogin(this.loginForm.value).subscribe(function (res) {
            // console.log(res);
            _this35.user = res;

            _this35.route.navigate(['activate', _this35.user.user_id]);
          }, function (err) {
            // console.log(err);
            if (err.error.error == "Phone number doesn't exist") {
              _this35.doesnotexist = true;
            }
          });
        }
      }, {
        key: "create",
        value: function create() {
          this.route.navigate(['register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/main/user-auth/login/login.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/main/user-auth/register/register.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/main/user-auth/register/register.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUserAuthRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn{\n    background-color: #F7BE52;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 600;\n    font-size: 0.813rem;\n    padding: 0.4rem 2rem !important;\n    letter-spacing: 0.125rem;\n    box-shadow: 8px 10px 15px 0px rgba(0,0,0,0.2);\n\n}\n.btn:hover{\n    box-shadow:2px 4px 8px 0px rgba(46, 61, 73, 0.2);\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    background-color: #E6AE46;\n    outline: none;\n    border-color: transparent;\n}\n.btn{\n    position: relative;\n    overflow: hidden;\n    margin: 0.6rem;\n}\n.btn:after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 5px;\n    height: 5px;\n    background: rgba(255, 255, 255, .5);\n    opacity: 0;\n    border-radius: 100%;\n    -webkit-transform: scale(1, 1) translate(-50%);\n            transform: scale(1, 1) translate(-50%);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n  }\n@-webkit-keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n@keyframes ripple {\n    0% {\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      opacity: 1;\n    }\n    20% {\n      -webkit-transform: scale(25, 25);\n              transform: scale(25, 25);\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      -webkit-transform: scale(40, 40);\n              transform: scale(40, 40);\n    }\n  }\n.btn:focus:not(:active)::after {\n    -webkit-animation: ripple 1s ease-out;\n            animation: ripple 1s ease-out;\n  }\n/* input:focus + .validation {\n    display: none\n  } */\n.login{\n    cursor: pointer;\n  }\n.form-control{\n    border: 1px solid #ffffff !important;\n    box-shadow:6px 6px 4px rgba(156, 156, 156, 0.103);\n    border-left: 3px solid #F7BE52 !important;\n   \n    \n}\n.main{\n   padding-top: 20vh;\n   padding-bottom: 20vh;\n}\np,span{\n    font-size: 0.8rem;\n}\nh1,p{\n    color: #F7BE52;\n}\n.dots{\n  position: absolute;\n  \n  top: -12rem;\n  left: 16rem;\n  width: 94%;\n  z-index: -11111;\n  \n}\n.validation{\n    color:red;\n    font-size: 0.8rem;\n    margin-left: 0rem;\n}\n@media (min-width: 1026px) and (max-width: 1480px){\n    .dots{\n        position: absolute;\n        \n        top: -13rem;\n        left: 16rem;\n        width: 98%;\n        z-index: -11111;\n        \n      }\n\n}\n@media (min-width: 1024px) and (max-width: 1280px){\n    .dots{\n        position: absolute;\n        \n        top: -12rem;\n        left: 16rem;\n        width: 92%;\n        \n        z-index: -11111;\n        \n      }\n}\n@media (min-width: 768px) and (max-width: 1024px){\n    .dots{\n        position: absolute;\n        \n        top: -12rem;\n        left: 16rem;\n        width: 95%;\n        \n        z-index: -11111;\n        \n      }\n      .main{\n        padding-top: 10vh;\n        padding-bottom: 5vh;\n      }\n    \n}\n@media (min-width: 481px) and (max-width: 768px) {\n    .image,.dots{\n        display: none;\n    }\n  \n}\n@media (min-width: 320px) and (max-width: 480px){\n    .image,.dots{\n        display: none;\n    }\n   \n}\n@media (min-width: 320px) and (max-width: 380px){\n    .image,.dots{\n        display: none;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91c2VyLWF1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4Qiw2Q0FBNkM7O0FBRWpEO0FBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFO01BQ0UsOEJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixVQUFVO0lBQ1o7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0NBQXdCO2NBQXhCLHdCQUF3QjtJQUMxQjtFQUNGO0FBYkE7SUFDRTtNQUNFLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO01BQ3hCLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtNQUNWLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7RUFDRjtBQUVBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjtBQUVBOztLQUVHO0FBRUg7SUFDRSxlQUFlO0VBQ2pCO0FBR0Y7SUFDSSxvQ0FBb0M7SUFDcEMsaURBQWlEO0lBQ2pELHlDQUF5Qzs7O0FBRzdDO0FBQ0E7R0FDRyxpQkFBaUI7R0FDakIsb0JBQW9CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTs7QUFFakI7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBSUE7SUFDSTtRQUNJLGtCQUFrQjs7UUFFbEIsV0FBVztRQUNYLFdBQVc7UUFDWCxVQUFVO1FBQ1YsZUFBZTs7TUFFakI7O0FBRU47QUFDQTtJQUNJO1FBQ0ksa0JBQWtCOztRQUVsQixXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7O1FBRVYsZUFBZTs7TUFFakI7QUFDTjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7O1FBRWxCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsVUFBVTs7UUFFVixlQUFlOztNQUVqQjtNQUNBO1FBQ0UsaUJBQWlCO1FBQ2pCLG1CQUFtQjtNQUNyQjs7QUFFTjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztBQUVKO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL21haW4vdXNlci1hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0JFNTI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuODEzcmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAycmVtICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcblxufVxuLmJ0bjpob3ZlcntcbiAgICBib3gtc2hhZG93OjJweCA0cHggOHB4IDBweCByZ2JhKDQ2LCA2MSwgNzMsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZBRTQ2O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwLjZyZW07XG59XG4uYnRuOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKC01MCUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMjUsIDI1KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoNDAsIDQwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5idG46Zm9jdXM6bm90KDphY3RpdmUpOjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiByaXBwbGUgMXMgZWFzZS1vdXQ7XG4gIH1cblxuICAvKiBpbnB1dDpmb2N1cyArIC52YWxpZGF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lXG4gIH0gKi9cblxuICAubG9naW57XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuLmZvcm0tY29udHJvbHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzo2cHggNnB4IDRweCByZ2JhKDE1NiwgMTU2LCAxNTYsIDAuMTAzKTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGN0JFNTIgIWltcG9ydGFudDtcbiAgIFxuICAgIFxufVxuLm1haW57XG4gICBwYWRkaW5nLXRvcDogMjB2aDtcbiAgIHBhZGRpbmctYm90dG9tOiAyMHZoO1xufVxucCxzcGFue1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuaDEscHtcbiAgICBjb2xvcjogI0Y3QkU1Mjtcbn1cbi5kb3Rze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICB0b3A6IC0xMnJlbTtcbiAgbGVmdDogMTZyZW07XG4gIHdpZHRoOiA5NCU7XG4gIHotaW5kZXg6IC0xMTExMTtcbiAgXG59XG5cbi52YWxpZGF0aW9ue1xuICAgIGNvbG9yOnJlZDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI2cHgpIGFuZCAobWF4LXdpZHRoOiAxNDgwcHgpe1xuICAgIC5kb3Rze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIFxuICAgICAgICB0b3A6IC0xM3JlbTtcbiAgICAgICAgbGVmdDogMTZyZW07XG4gICAgICAgIHdpZHRoOiA5OCU7XG4gICAgICAgIHotaW5kZXg6IC0xMTExMTtcbiAgICAgICAgXG4gICAgICB9XG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xuICAgIC5kb3Rze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIFxuICAgICAgICB0b3A6IC0xMnJlbTtcbiAgICAgICAgbGVmdDogMTZyZW07XG4gICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgIFxuICAgICAgICB6LWluZGV4OiAtMTExMTE7XG4gICAgICAgIFxuICAgICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAuZG90c3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBcbiAgICAgICAgdG9wOiAtMTJyZW07XG4gICAgICAgIGxlZnQ6IDE2cmVtO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBcbiAgICAgICAgei1pbmRleDogLTExMTExO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIC5tYWlue1xuICAgICAgICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDV2aDtcbiAgICAgIH1cbiAgICBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmltYWdlLC5kb3Rze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICAuaW1hZ2UsLmRvdHN7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgXG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCl7XG4gICAgLmltYWdlLC5kb3Rze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/user-auth/register/register.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/user-auth/register/register.component.ts ***!
    \***************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppMainUserAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/assets */
    "./src/app/services/assets.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(ss, route, fb, auth) {
        _classCallCheck(this, RegisterComponent);

        this.ss = ss;
        this.route = route;
        this.fb = fb;
        this.auth = auth;
        this.alreadyExist = false;
        this.direction = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/direction.svg';
        this.dots = src_app_services_assets__WEBPACK_IMPORTED_MODULE_5__["ASSETS"] + '/dots.svg';

        if (this.auth.isLoggedIn()) {
          this.route.navigate(['/']);
        }

        var numberFormat = '[6-9][0-9]{9}';
        var alphabet = '^[a-zA-Z ]*$';
        this.signupForm = this.fb.group({
          'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(numberFormat)])),
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(alphabet)]))
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnSignup",
        value: function OnSignup() {
          var _this36 = this;

          // console.log(this.signupForm.value);
          this.ss.postSignup(this.signupForm.value).subscribe(function (res) {
            // console.log(res);
            _this36.user = res;

            _this36.signupForm.reset();

            _this36.route.navigate(['activate', _this36.user.user_id]);
          }, function (err) {
            // console.log(err);
            // console.log(err.error.error[0])
            if (err.error.error[0] == "phone number already exists") {
              _this36.alreadyExist = true;
            }
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          this.route.navigate(['login']);
        }
      }, {
        key: "removeval",
        value: function removeval() {
          document.getElementById('val').innerHTML = '';
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-register',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/user-auth/register/register.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./register.component.css */
      "./src/app/main/user-auth/register/register.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/models/place-order.ts":
  /*!***************************************!*\
    !*** ./src/app/models/place-order.ts ***!
    \***************************************/

  /*! exports provided: PlaceOrder */

  /***/
  function srcAppModelsPlaceOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceOrder", function () {
      return PlaceOrder;
    }); // import { Injectable } from '@angular/core';


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // @Injectable({
    //     providedIn: 'root'
    //   })


    var PlaceOrder = function PlaceOrder(response, service_status, payment_status, address, subcategory, professional_assigned, service_time) {
      _classCallCheck(this, PlaceOrder);

      this.response = null;
      this.service_status = '';
      this.payment_status = false;
      this.address = null;
      this.subcategory = null;
      this.professional_assigned = null;
      this.service_time = null;
      this.response = response;
      this.service_status = service_status;
      this.payment_status = payment_status;
      this.address = address;
      this.subcategory = subcategory;
      this.professional_assigned = professional_assigned;
      this.service_time = service_time;
    };
    /***/

  },

  /***/
  "./src/app/services/assets.ts":
  /*!************************************!*\
    !*** ./src/app/services/assets.ts ***!
    \************************************/

  /*! exports provided: DOMAIN, ASSETS */

  /***/
  function srcAppServicesAssetsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOMAIN", function () {
      return DOMAIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ASSETS", function () {
      return ASSETS;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DOMAIN;
    var ASSETS;

    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"]['production']) {
      DOMAIN = 'http://localhost:8000';
      ASSETS = "/static/ang/assets/images";
    } else {
      DOMAIN = '.';
      ASSETS = "/static/ang/assets/images";
    }
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // import { DatePipe } from '@angular/common';


    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(ss, route) {
        _classCallCheck(this, AuthService);

        this.ss = ss;
        this.route = route;
      }

      _createClass(AuthService, [{
        key: "storeRefreshToken",
        value: function storeRefreshToken(token) {
          localStorage.setItem('Refresh', token);
        }
      }, {
        key: "storeAccessToken",
        value: function storeAccessToken(token) {
          localStorage.setItem('Access', token);
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return localStorage.getItem('Refresh');
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          return localStorage.getItem('Access');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var _this37 = this;

          this.currentDate = new Date();

          if (this.getAccessToken()) {
            if (this.currentDate > this.getRefreshTokenExpirationDate(this.getRefreshToken())) {
              this.removeAccessToken();
              this.removeRefreshToken();
              this.route.navigate(['/login']);
              return false;
            } else if (this.currentDate < this.getTokenExpirationDate(this.getAccessToken())) {
              return true;
            } else {
              this.removeAccessToken();
              var refresh = {
                "refresh": this.getRefreshToken()
              };
              this.ss.postRefreshToken(refresh).subscribe(function (res) {
                _this37.newAccessToken = res;

                _this37.storeAccessToken(_this37.newAccessToken.access);

                return true;
              }, function (err) {
                // console.log(err);
                return false;
              });
            }
          } else {
            return false;
          }
        }
      }, {
        key: "getTokenExpirationDate",
        value: function getTokenExpirationDate(token) {
          var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
          if (decoded.exp === undefined) return null;
          var date = new Date(0);
          date.setUTCSeconds(decoded.exp); // console.log(date);

          return date;
        }
      }, {
        key: "getRefreshTokenExpirationDate",
        value: function getRefreshTokenExpirationDate(token) {
          var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
          if (decoded.exp === undefined) return null;
          var date = new Date(0);
          date.setUTCSeconds(decoded.exp); // console.log(date);

          return date;
        }
      }, {
        key: "removeAccessToken",
        value: function removeAccessToken() {
          localStorage.removeItem('Access');
        }
      }, {
        key: "removeRefreshToken",
        value: function removeRefreshToken() {
          localStorage.removeItem('Refresh');
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/authguard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/authguard.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthguardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.auth.isLoggedIn() === true) {
            return true;
          } else {
            this.router.navigate(['']);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
      }];
    };

    AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])], AuthGuard);
    /***/
  }
}]);
//# sourceMappingURL=main-main-module-es5.js.map