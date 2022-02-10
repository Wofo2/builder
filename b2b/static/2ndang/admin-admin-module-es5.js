function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-options/add-options.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-options/add-options.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAddOptionsAddOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nb-card>\n    <nb-card-header>Add Options</nb-card-header>\n\n    <nb-card-body>\n        <form [formGroup]=\"optionForm\" (ngSubmit)=\"onOptions()\">\n            <label>Select Category</label>\n            <select class=\"form-control\" (change)=\"onCategory($event.target.value)\" formControlName='category'>\n                <option selected disabled>select category</option>\n                <option *ngFor='let category of categories' [value]='category.id'>{{ category.category }}</option>\n            </select>\n\n            <br>\n            <br>\n            <label>Select Subcategory</label>\n            <select class=\"form-control\" (change)=\"onSubcategory($event.target.value)\" formControlName='subcategory'>\n                <option selected disabled>select subcategory</option>\n                <option *ngFor='let subcategory of showSubcat' [value]='subcategory.id'>{{ subcategory.subcategory }}\n                </option>\n            </select>\n            <br>\n            <br>\n            <label>Select Question</label>\n            <select class=\"form-control\" (change)=\"onQuestion($event.target.value)\" formControlName='question'>\n                <option selected disabled>select question</option>\n                <option *ngFor='let question of questions' [value]='question.id'>{{ question.question }}\n                    ({{ question.select_type }})\n                </option>\n            </select>\n            <br>\n            <br>\n\n            <hr>\n            <div *ngIf='questionType != \"form\"'>\n                <input type=\"text\" nbInput placeholder=\"Enter Choice\" fullWidth fieldSize=\"medium\" formControlName='choice'>\n                <br> <br>\n                \n            </div>\n            <div *ngIf='questionType == \"form\"'>\n                <input type=\"text\" nbInput placeholder=\"Enter Choice\" fullWidth fieldSize=\"medium\" formControlName='choice'>\n                <br> <br>\n                <input type=\"text\" nbInput placeholder=\"Enter Factor\" fullWidth fieldSize=\"medium\" formControlName='factor'>\n                <br><br>\n                <input type=\"text\" nbInput placeholder=\"Enter Price\" fullWidth fieldSize=\"medium\" formControlName='price'>\n                <br><br>\n                \n            </div>\n            <button type=\"submit\" nbButton [disabled]='!optionForm.valid'>Upload</button>\n            \n        </form>\n    </nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-professional/add-professional.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-professional/add-professional.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAddProfessionalAddProfessionalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card >\n  <nb-card-header>\n    <h2>Create Professionals</h2>\n\n  </nb-card-header>\n\n\n  <nb-card-body>\n\n    <form [formGroup]=\"professionalForm\" (ngSubmit)=\"onProfessionals()\">\n      <input type=\"text\" formControlName='professional' placeholder=\"Name\" nbInput fullWidth> <br><br>\n      <input type=\"text\" formControlName='service_charge' placeholder=\"Service Charge\" nbInput fullWidth> <br><br>\n      <input type=\"text\" formControlName='contact_number1' placeholder=\"Contact Number 1\" nbInput fullWidth><br><br>\n      <input type=\"text\" formControlName='contact_number2' placeholder=\"Contact Number 2\" nbInput fullWidth><br><br>\n      <input type=\"text\" formControlName='address' placeholder=\"Address\" nbInput fullWidth><br>\n      <br>\n\n      <input type=\"file\" name=\"icon\" (change)=\"onChange($event)\" nbInput fullWidth> <br>\n      <br>\n      <span><b>Select Subcategories :</b></span>\n      <br><br>\n      <div class=\"row\">\n        <div *ngFor='let subcat of subcategories' class=\"col-3\">\n          <input type=\"checkbox\" [checked]='checkMap.get(subcat.id)' id='{{subcat.id}}' formControlName='subcategory'\n            value=\"{{subcat.id}}\" (change)=\"onSubcat($event.target.value)\">\n          &nbsp; <label for=\"{{subcat.id}}\">{{ subcat.subcategory}}</label>\n        </div>\n      </div>\n\n      <br>\n      <button type=\"submit\" nbButton [disabled]='!professionalForm.valid'>Add Profesional</button>\n\n    </form>\n  </nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-questions/add-questions.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-questions/add-questions.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAddQuestionsAddQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n    <nb-card-header>Add Questions</nb-card-header>\n\n    <nb-card-body>\n        <form [formGroup]=\"questionForm\" (ngSubmit)=\"onquestions()\">\n            <label>Select Category</label>\n            <select class=\"form-control\" (change)=\"onCategory($event.target.value)\" formControlName='category'>\n                <!-- <option selected disabled>select category</option> -->\n                <option *ngFor='let category of categories' [value]='category.id'>{{ category.category }}</option>\n            </select>\n\n            <br>\n            <br>\n            <label>Select Subcategory</label>\n            <select class=\"form-control\" (change)=\"onSubcategory($event.target.value)\" formControlName='subcategory'>\n                <!-- <option selected disabled>select category</option> -->\n                <option *ngFor='let subcategory of showSubcat' [value]='subcategory.id'>{{ subcategory.subcategory }}\n                </option>\n            </select>\n            <br>\n            <br>\n            <label>Select Parent Question</label>\n            <select class=\"form-control\" (change)=\"onQuestion($event.target.value)\" formControlName='parent_question'>\n                <!-- <option selected disabled>select question</option> -->\n                <option *ngFor='let question of questions' [value]='question.id'>{{ question.question }}\n                    ({{ question.select_type }})\n                </option>\n            </select>\n            <br>\n            <br>\n            <b *ngIf='options'> Options </b>\n            <div *ngFor='let option of options'>\n            <br>\n                <input type=\"checkbox\" value=\"{{option.id}}\" (change)=\"onoption($event.target.value)\" formControlName='parent_option'>\n                <label for=\"{{option.id}}\">{{ option.choice}}</label>\n            </div>\n\n            <hr>\n            <label><b>Question Type</b> </label>\n            <select class=\"form-control\" formControlName='select_type'>\n                <option selected disabled>Question type</option>\n                <option value='single'>Single select\n                </option>\n                <option value='multi'>Multiple select\n                </option>\n                <option value='form'>Form Type\n                </option>\n            </select>\n            <br><br>\n            <input type=\"text\" nbInput placeholder=\"Enter Question\" fullWidth fieldSize=\"medium\" formControlName='question'>\n            <br> <br>\n            <nb-checkbox (checkedChange)=\"toggle($event)\" formControlName='required'>Required</nb-checkbox>\n            <br>\n            <button type=\"submit\" nbButton [disabled]='!questionForm.valid'>Upload</button>\n        </form>\n    </nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAddSubcategoryAddSubcategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>create-category works!</p> -->\n\n<nb-card>\n    <nb-card-header><h3> Add Subcategory</h3></nb-card-header>\n\n\n    \n     <nb-card-body>\n      <p><b>Note: </b> Icon size should of ratio: <b>137px * 137px</b></p>\n      <form [formGroup]=\"subcategoryForm\" (ngSubmit)=\"onSubmit()\">\n          <label > <b> Subcategory Name :</b></label> <br>\n        <input type=\"text\" formControlName='subcategory' nbInput placeholder=\"Subcategory\" fullWidth > \n        <br>\n        <br>\n        <label > <b> Select Category :</b></label> <br>\n\n        <select class=\"form-control\" formControlName='category'>\n            <option selected disabled>Select category</option>\n            <option value=\"{{ category.id }}\" *ngFor='let category of categories'>{{ category.category}}</option>\n        </select>\n        <br>\n        <label > <b> Select Icon :</b></label> <br>\n        <input type=\"file\" name=\"icon\" (change)=\"onChange($event)\" nbInput fullWidth />\n        <br> <br>\n        <button type=\"submit\" nbButton [disabled]='!subcategoryForm.valid'>Add Subcategory</button>\n\n      </form>\n    </nb-card-body>\n\n     \n  </nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>admin-login works!</p> -->\n<nb-layout>\n  <nb-layout-header fixed>\n      <div class=\"col-11\">\n          <h1 >WOFO24</h1>\n\n      </div>\n      <div class=\"col-1\">\n          <button nbButton (click)='onLogout()'>Logout</button>\n      </div>\n  </nb-layout-header>\n\n  <nb-sidebar>\n    <nb-menu [items]=\"items\"></nb-menu>\n  </nb-sidebar>\n\n\n  <nb-layout-column >\n  \n    <router-outlet></router-outlet>\n  </nb-layout-column>\n</nb-layout>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminOrderDetailsAdminOrderDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\r\n    <nb-card-header>Order Details</nb-card-header>\r\n\r\n    <nb-card-body *ngIf='orders'>\r\n        <b> Order ID:</b> {{ orders[0].id }}\r\n        <br>\r\n        <br>\r\n        <b> Service Status:</b> {{ orders[0].service_status }}\r\n        <br>\r\n        <br>\r\n        <b> Address:</b> {{ orders[0].address }}\r\n        <br>\r\n        <br>\r\n        <b> Category:</b> {{ orders[0].category}}\r\n        <br>\r\n        <br>\r\n        <b> Subcategory: </b>{{ orders[0].subcategory.subcategory }}\r\n        <br>\r\n        <br>\r\n        <nb-accordion multi>\r\n            <nb-accordion-item>\r\n                <nb-accordion-item-header>\r\n                    User Details\r\n                </nb-accordion-item-header>\r\n                <nb-accordion-item-body>\r\n                    <div>\r\n                       <b> Name: </b> {{ orders[0].user.name}} <br> <br>\r\n                       <b> Conatct No: </b> {{ orders[0].user.phone_number}}\r\n                    </div>\r\n                </nb-accordion-item-body>\r\n            </nb-accordion-item>\r\n            <nb-accordion-item>\r\n                <nb-accordion-item-header>\r\n                    Response\r\n                </nb-accordion-item-header>\r\n                <nb-accordion-item-body>\r\n                    <div *ngFor=\"let item of orders[0].response | keyvalue\">\r\n\r\n                        <div *ngIf='item.key != \"form\"'>\r\n                            <b>{{item.key}} : </b> {{item.value}} <br> <br>\r\n                        </div>\r\n                        <div *ngIf='item.key == \"form\"'>\r\n                            <b>{{item.key}}</b> <br> <br>\r\n                            <div *ngFor='let option of item.value.options'>\r\n                                <div><b> {{ option.choice }}:</b> {{ option.quantity }}</div> <br>\r\n                                <div><b> Cost:</b> {{ option.cost }}</div> <br>\r\n                                <div><b> Price:</b>  {{ option.price }}</div><br>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n                </nb-accordion-item-body>\r\n            </nb-accordion-item>\r\n\r\n\r\n\r\n            <nb-accordion-item>\r\n                <nb-accordion-item-header *ngIf=' orders[0].service_status == \"Pending\"'>\r\n                    Assign Professionals\r\n                </nb-accordion-item-header>\r\n                <nb-accordion-item-header *ngIf=' orders[0].service_status != \"Pending\"'>\r\n                    Assigned Professional\r\n                </nb-accordion-item-header>\r\n                <nb-accordion-item-body>\r\n                    <nb-list *ngIf='orders[0].professional_assigned == null && orders[0].service_status == \"Pending\"'>\r\n                        <nb-list-item *ngFor=\"let professional of professionals\">\r\n                            <nb-radio-group [(ngModel)]=\"option\">\r\n                                <nb-radio [value]=\"professional.id\">\r\n                                    <span>\r\n                                        {{ professional.name }}\r\n                                        ( {{ professional.contact_number1 }} )\r\n                                    </span>\r\n\r\n                                    <button type=\"button\" nbButton style=\"margin-right: 0rem\"\r\n                                        (click)='onView(professional.id)'>View</button>\r\n\r\n                                </nb-radio>\r\n                            </nb-radio-group>\r\n\r\n                        </nb-list-item>\r\n                    </nb-list>\r\n                    <div *ngIf='orders[0].professional_assigned != null && orders[0].service_status != \"Pending\"'>\r\n                        <img src=\"{{ orders[0].professional_assigned.photo }}\" alt=\"\"> <br> <br>\r\n                        <b>Name: </b> {{ orders[0].professional_assigned.name }} <br> <br>\r\n                        <b>Service Charge: </b> {{ orders[0].professional_assigned.service_charge }} <br> <br>\r\n                        <b>Contact Number 1: </b> {{ orders[0].professional_assigned.contact_number1 }} <br> <br>\r\n                        <b>Contact Number 2: </b> {{ orders[0].professional_assigned.contact_number2 }} <br> <br>\r\n                        <b>Address: </b> {{ orders[0].professional_assigned.address }} <br> <br>\r\n                    </div>\r\n                </nb-accordion-item-body>\r\n            </nb-accordion-item>\r\n\r\n\r\n        </nb-accordion>\r\n    </nb-card-body>\r\n    <nb-card-footer *ngIf='orders'>\r\n        <div *ngIf='orders[0].service_status == \"Pending\"'>\r\n            <button type=\"button\" nbButton [disabled]='!option' (click)='onAccept(orders[0].id)'>Accept</button> &nbsp;\r\n            <button type=\"button\" nbButton (click)='onDecline(orders[0].id)'>Decline</button>\r\n\r\n        </div>\r\n        <div *ngIf='orders[0].service_status == \"accepted\"'>\r\n            <button type=\"button\" nbButton (click)='onComplete(orders[0].id)'>Complete</button> &nbsp;\r\n\r\n        </div>\r\n    </nb-card-footer>\r\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-category/all-category.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-category/all-category.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAllCategoryAllCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <nb-card>\r\n    <nb-card-header><h3> All Categories</h3></nb-card-header>\r\n    <nb-card-body>\r\n        <table class=\"table table-bordered\" style=\"background-color: white\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Category</th>\r\n                <th scope=\"col\">Icon</th>\r\n                <th scope=\"col\">Edit</th>\r\n                <th scope=\"col\">Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor = 'let category of categories'>\r\n                <th scope=\"row\">{{ category.category}}</th>\r\n                <td> <img src=\"{{ category.icon }}\" alt=\"\"> </td>\r\n                <td><button type=\"button\" nbButton (click)='onEdit(category.id)'>Edit</button></td>\r\n                <td><button type=\"button\" nbButton (click)='onDelete(category.id)'>Delete</button></td>\r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n        \r\n    </nb-card-body>\r\n  </nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-professional/all-professional.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-professional/all-professional.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAllProfessionalAllProfessionalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n    <nb-card-header>Filter Professionals</nb-card-header>\n    <nb-card-body>\n        <label>Select Category</label>\n        <select class=\"form-control\" (change)=\"onCategory($event.target.value)\">\n            <option disabled>Search for a Service</option>\n            <option [value]='0'>All Professionals</option>\n            <option *ngFor='let category of categories' [value]='category.id'>{{ category.category }}</option>\n        </select>\n\n        <br>\n        <br>\n\n    </nb-card-body>\n</nb-card>\n\n<nb-card>\n    <nb-card-header>\n        <h3> All Subcategories</h3>\n    </nb-card-header>\n    <nb-card-body>\n        <table class=\"table table-bordered\" style=\"background-color: white\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Image</th>\n                    <th scope=\"col\">Contact number 1</th>\n                    <th scope=\"col\">Service Charge</th>\n                    <th scope=\"col\">View</th>\n                    <th scope=\"col\">Edit</th>\n                    <th scope=\"col\">Delete</th>\n                </tr>\n            </thead>\n            <tbody *ngIf='showProfessionals'>\n                <tr *ngFor='let prof of showProfessionals'>\n                    <th scope=\"row\">{{ prof.name}}</th>\n                    <td> <img src=\"{{ prof.photo }}\" alt=\"\"> </td>\n                    <td> {{prof.contact_number1}} </td>\n                    <td> {{prof.service_charge}} </td>\n                    <td><button type=\"button\" (click)='onView(prof.id)' nbButton>View</button></td>\n                    <td><button type=\"button\" (click)='onEdit(prof.id)' nbButton>Edit</button></td>\n                    <td><button type=\"button\" mdbWavesEffect (click)='onDelete(prof.id)' nbButton>Delete</button></td>\n                </tr>\n\n            </tbody>\n        </table>\n    </nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAllSubcategoryAllSubcategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>all-subcategory works!</p> -->\n<nb-card>\n\n  <nb-card-header>Filter Subcategories</nb-card-header>\n  <nb-card-body>\n      <label>Select Category</label>\n      <select class=\"form-control\" (change)=\"onCategory($event.target.value)\">\n          <option disabled>Search for a Service</option>\n          <option [value]='0'>All Subcategories</option>\n          <option *ngFor='let category of categories' [value]='category.id'>{{ category.category }}</option>\n      </select>\n  </nb-card-body>\n</nb-card>\n\n<nb-card>\n  <nb-card-header>\n    <h3>Subcategories</h3>\n  </nb-card-header>\n  <nb-card-body>\n    <table class=\"table table-bordered\" style=\"background-color: white\">\n      <thead>\n        <tr>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">SubCategory</th>\n          <th scope=\"col\">Category</th>\n          <th scope=\"col\">Icon</th>\n          <th scope=\"col\">Edit</th>\n          <th scope=\"col\">Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let subcategory of showsubcat'>\n            <th scope=\"row\">{{ subcategory.id}}</th>\n          <th scope=\"row\">{{ subcategory.subcategory}}</th>\n          <td> {{subcategory.category.category}} </td>\n\n          <td> <img src=\"{{ subcategory.icon }}\" alt=\"\"> </td>\n          <td><button type=\"button\" (click)='onEdit(subcategory.id)' nbButton>Edit</button></td>\n          <td><button type=\"button\" (click)='onDelete(subcategory.id)' nbButton>Delete</button></td>\n        </tr>\n\n      </tbody>\n    </table>\n\n  </nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardBulkMessageBulkMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n    <nb-card-header>\n        <h3>Bulk Message</h3>\n    </nb-card-header>\n        <nb-card-body>\n            <form [formGroup]=\"bulkMessageForm\" (ngSubmit)=\"onMessage()\">\n                    <textarea nbInput fullWidth placeholder=\"Message\" formControlName='message'></textarea>\n                    <button nbButton type=\"submit\" [disabled]='!bulkMessageForm.valid'>\n                        Send Message\n                    </button>\n            </form>\n                \n        </nb-card-body>\n    </nb-card>\n    \n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/create-category/create-category.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/create-category/create-category.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardCreateCategoryCreateCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n  \n    <nb-card-header><h3> Add Category</h3></nb-card-header>\n    <nb-card-body>\n        <p><b>Note: </b> Icon size should of ratio: <b>137px * 137px</b></p>\n        <p><b>Note: </b> Wallpaper size should of ratio: <b>1920px * 320px</b></p>\n        <br>\n  \n  <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onSubmit()\">\n      <label > <b> Category :</b></label> <br>\n\n    <input type=\"text\" nbInput placeholder=\"Category\" fullWidth  formControlName='category'>\n    <br>\n    <br>\n    <label > <b> Select Icon :</b></label> <br>\n    <input type=\"file\" nbInput  name=\"icon\" fullWidth (change)=\"onChange($event)\" />\n    <br><br>\n    <label > <b> Select Wallpaper :</b></label> <br>\n    <input type=\"file\" nbInput  name=\"wallpaper\" fullWidth (change)=\"onWallpaper($event)\" />\n    <br><br>\n    <button type=\"submit\" nbButton [disabled]='!categoryForm.valid'>Add Category</button>\n  </form>\n</nb-card-body>\n</nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/orders/orders.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/orders/orders.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div class=\"row\" *ngIf='count'>\n      <div class=\"col\">\n        <nb-card>\n          <nb-card-header> ORDERS</nb-card-header>\n          <nb-card-body>\n            <h4>{{ count.order }}</h4>\n          </nb-card-body>\n        </nb-card>\n      </div>\n      <div class=\"col\">\n          <nb-card>\n            <nb-card-header > USERS</nb-card-header>\n            <nb-card-body>\n              <h4>{{ count.user }}</h4>\n            </nb-card-body>\n          </nb-card>\n        </div>\n      <div class=\"col\">\n        <nb-card>\n          <nb-card-header> PROFESSIONALS</nb-card-header>\n          <nb-card-body>\n            <h4>{{ count.professional }}</h4>\n          </nb-card-body>\n        </nb-card>\n      </div>\n      <div class=\"col\">\n        <nb-card>\n          <nb-card-header> SERVICES</nb-card-header>\n          <nb-card-body>\n            <h4>{{ count.services }}</h4>\n          </nb-card-body>\n        </nb-card>\n      </div>\n      \n\n    </div>\n\n<nb-card>\n    <nb-card-body>\n\n        <nb-tabset fullWidth>\n            <nb-tab tabTitle=\"Pending\">\n\n                <table class=\"table table-bordered\" style=\"background-color: white\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Order Id</th>\n                            <th scope=\"col\">subctaegory</th>\n                            <th scope=\"col\">User's Name</th>\n                            <th scope=\"col\">User's Contact</th>\n                            <th scope=\"col\">Order time</th>\n                            <th scope=\"col\">View</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let order of orders' >\n                                <th scope=\"row\"  *ngIf='order.service_status == \"Pending\"'>{{ order.id}}</th>\n                                <td *ngIf='order.service_status == \"Pending\"'> {{order.subcategory.subcategory}} </td>\n\n                                <td *ngIf='order.service_status == \"Pending\"'> {{order.user.name}} </td>\n                                <td *ngIf='order.service_status == \"Pending\"'> {{order.user.phone_number}} </td>\n                                <td *ngIf='order.service_status == \"Pending\"'> {{order.time}} </td>\n                                <td  *ngIf='order.service_status == \"Pending\"'><button type=\"button\" nbButton (click)='onView(order.id)'>view</button> <p id=\"new\" >NEW</p></td>\n                        </tr>\n\n                    </tbody>\n                </table>\n\n            </nb-tab>\n            <nb-tab tabTitle=\"Accepted\">\n                    <table class=\"table table-bordered\" style=\"background-color: white\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Order Id</th>\n                                    <th scope=\"col\">subctaegory</th>\n                                    <th scope=\"col\">User's Name</th>\n                                    <th scope=\"col\">User's Contact</th>\n                                    <th scope=\"col\">View</th>\n                                    <th scope=\"col\">Complete</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='let order of orders' >\n                                        <th scope=\"row\"  *ngIf='order.service_status == \"Accepted\"'>{{ order.id}}</th>\n                                        <td *ngIf='order.service_status == \"Accepted\"'> {{order.subcategory.subcategory}} </td>\n                                        <td *ngIf='order.service_status == \"Accepted\"'> {{order.user.name}} </td>\n                                        <td *ngIf='order.service_status == \"Accepted\"'> {{order.user.phone_number}} </td>\n                                        <td *ngIf='order.service_status == \"Accepted\"'><button nbButton type=\"button\" (click)='onView(order.id)'>view</button></td>\n                                        <td *ngIf='order.service_status == \"Accepted\"'><button nbButton type=\"button\" (click)='onComplete(order.id)'>Complete</button></td>\n\n                                </tr>\n        \n                            </tbody>\n                        </table>\n            </nb-tab>\n            <nb-tab tabTitle=\"Completed\">\n                    <table class=\"table table-bordered\" style=\"background-color: white\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Order Id</th>\n                                    <th scope=\"col\">subctaegory</th>\n                                    <th scope=\"col\">User's Name</th>\n                                    <th scope=\"col\">User's Contact</th>\n                                    <th scope=\"col\">View</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='let order of orders' >\n                                        <th scope=\"row\"  *ngIf='order.service_status == \"Completed\"'>{{ order.id}}</th>\n                                        <td *ngIf='order.service_status == \"Completed\"'> {{order.subcategory.subcategory}} </td>\n                                        <td *ngIf='order.service_status == \"Completed\"'> {{order.user.name}} </td>\n                                        <td *ngIf='order.service_status == \"Completed\"'> {{order.user.phone_number}} </td>\n                                        <td *ngIf='order.service_status == \"Completed\"'><button nbButton type=\"button\" (click)='onView(order.id)'>View</button></td>\n                                </tr>\n        \n                            </tbody>\n                        </table>\n            </nb-tab>\n            <nb-tab tabTitle=\"Cancelled\">\n                <table class=\"table table-bordered\" style=\"background-color: white\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Order Id</th>\n                            <th scope=\"col\">subctaegory</th>\n                            <th scope=\"col\">User's Name</th>\n                            <th scope=\"col\">User's Contact</th>\n                            <th scope=\"col\">Service Status</th>\n                            <th scope=\"col\">View</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let order of orders' >\n                                <th scope=\"row\"  *ngIf='order.service_status == \"Cancelled\" || order.service_status == \"Declined\"'>{{ order.id}}</th>\n                                <td *ngIf='order.service_status == \"Cancelled\" || order.service_status == \"Declined\"'> {{order.subcategory.subcategory}} </td>\n                                <td *ngIf='order.service_status == \"Cancelled\" || order.service_status == \"Declined\"'> {{order.user.name}} </td>\n                                <td *ngIf='order.service_status == \"Cancelled\" || order.service_status == \"Declined\"'> {{order.user.phone_number}} </td>\n                                <td *ngIf='order.service_status == \"Cancelled\" || order.service_status == \"Declined\"'> {{order.service_status}} </td>\n                                <td *ngIf='order.service_status == \"Cancelled\" || order.service_status == \"Declined\"'><button nbButton type=\"button\" (click)='onView(order.id)'>View</button></td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </nb-tab>\n\n        </nb-tabset>\n\n    </nb-card-body>\n</nb-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/users/users.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/users/users.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card *ngIf=\"users\">\r\n        <nb-card-header> \r\n           <h4> Users: {{ users.length }} </h4></nb-card-header>\r\n    \r\n        <nb-card-body >\r\n                <table class=\"table table-bordered\" >\r\n                        <thead>\r\n                          <tr>\r\n                            <th scope=\"col\">Id</th>\r\n                            <th scope=\"col\">Name</th>\r\n                            <th scope=\"col\">Contact</th>\r\n                            <th scope=\"col\">Joined Date</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor = 'let user of users'>\r\n                            <th scope=\"row\">{{ user.id}}</th>\r\n                            <th scope=\"row\">{{ user.name}}</th>\r\n                            <th scope=\"row\">{{ user.phone_number}}</th>\r\n                            <th scope=\"row\">{{ user.date_joined}}</th>\r\n                          </tr>\r\n                          \r\n                        </tbody>\r\n                      </table>\r\n        </nb-card-body>\r\n        \r\n    </nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardViewProfessionalsViewProfessionalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card *ngIf='professional'>\n        <nb-card-header> \n           <h4> Professional  Id: {{ professional.id }} </h4></nb-card-header>\n    \n        <nb-card-body >\n                <img src=\"{{ professional.photo}}\" alt=\"professional photo\"><br><br>\n                <b> Name: </b> {{ professional.name }} <br> <br>\n                <b> Service Charge: </b> {{ professional.service_charge }} <br> <br>\n                <b> Contact Number 1: </b> {{ professional.contact_number2 }} <br> <br>\n                <b> Conatct Number 2: </b> {{ professional.contact_number1 }} <br> <br>\n                <b> Job Completed: </b> {{ professional.job_completed }} <br> <br>\n                <b> Address: </b> {{ professional.address }} <br> <br>\n                <b> Joining Date: </b> {{ professional.joining_date }} <br> <br>\n                <b> SubCategory: </b><br> <span *ngFor='let subcat of professional.subcategory, let i=index'> {{i+1}}. {{ subcat.subcategory }} <br> </span> <br> <br>\n\n            </nb-card-body>\n        \n    </nb-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/admin-login.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/admin-login.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminLoginAdminLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n\n  <nb-layout-header fixed>\n    <h1>WOFO24</h1>\n  </nb-layout-header>\n\n  <nb-layout-column>\n    <nb-card>\n\n      <nb-card-header>\n        <h2>Admin Login</h2>\n      </nb-card-header>\n\n      <nb-card-body>\n        <form [formGroup]=\"adminForm\" (ngSubmit)=\"onLogin()\" >\n          <label><b> Admin Mobile Number:</b></label><br>\n          <input type=\"text\" formControlName='phone_number' nbInput fullWidth> \n          <div *ngIf=\"!adminForm.get('phone_number').valid && adminForm.get('phone_number').touched\" class=\"validation mt-1\" >Invalid Mobile Number.</div>\n          <br> <br>\n          <label><b> Admin Password:</b></label><br>\n\n          <input type=\"password\" formControlName='password' nbInput fullWidth> <br> <br>\n          <a class='forgot' (click)='onForgot()' >Forgot Password? </a>\n          <button type=\"submit\" nbButton style=\"float: right\" [disabled]=\"!adminForm.valid\">Login</button>\n        </form>\n      </nb-card-body>\n\n    </nb-card>\n  </nb-layout-column>\n</nb-layout>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/forgot-pass/forgot-pass.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/forgot-pass/forgot-pass.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminLoginForgotPassForgotPassComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n\n    <nb-layout-header fixed>\n      <h1>WOFO24</h1>\n    </nb-layout-header>\n  \n    <nb-layout-column>\n      <nb-card>\n  \n        <nb-card-header>\n          <h2>Admin Forgot Password</h2>\n        </nb-card-header>\n  \n        <nb-card-body>\n          <form [formGroup]=\"forgotForm\" (ngSubmit)=\"onForgot()\" >\n            <label><b> Admin Mobile Number:</b></label><br>\n            <input type=\"text\" formControlName='phone_number' nbInput fullWidth>\n          <div *ngIf=\"!forgotForm.get('phone_number').valid && forgotForm.get('phone_number').touched\" class=\"validation mt-1\" >Invalid Mobile Number.</div>\n          <br> <br>\n            <button type=\"submit\" nbButton style=\"float: right\" [disabled]='!forgotForm.valid'>Send OTP</button>\n          </form>\n        </nb-card-body>\n  \n      </nb-card>\n    </nb-layout-column>\n  </nb-layout>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/reset-pass/reset-pass.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/reset-pass/reset-pass.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminLoginResetPassResetPassComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n\n    <nb-layout-header fixed>\n      <h1>WOFO24</h1>\n    </nb-layout-header>\n  \n    <nb-layout-column>\n      <nb-card>\n  \n        <nb-card-header>\n          <h2>Admin Forgot Password</h2>\n        </nb-card-header>\n  \n        <nb-card-body>\n          <form [formGroup]=\"resetForm\" (ngSubmit)=\"onReset()\" >\n            <label><b> OTP:</b></label><br>\n            <input type=\"text\" formControlName='otp' nbInput fullWidth> <br> <br>\n            <label><b> New Password:</b></label><br>\n            <input type=\"password\" formControlName='new_password' nbInput fullWidth> <br> <br>\n            <label><b> Confirm Password:</b></label><br>\n            <input type=\"password\" formControlName='confirm_password' nbInput fullWidth> <br> <br>\n            <div class='validation' *ngIf=\" resetForm.get('confirm_password').touched && notSame\">\n                Password not matching.</div>\n            <button type=\"submit\" nbButton style=\"float: right\" [disabled]='!resetForm.valid'>Change Password</button>\n          </form>\n        </nb-card-body>\n  \n      </nb-card>\n    </nb-layout-column>\n  </nb-layout>\n\n ";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-options/add-options.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-options/add-options.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAddOptionsAddOptionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtb3B0aW9ucy9hZGQtb3B0aW9ucy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-options/add-options.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-options/add-options.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AddOptionsComponent */

  /***/
  function srcAppAdminAdminDashboardAddOptionsAddOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOptionsComponent", function () {
      return AddOptionsComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var AddOptionsComponent =
    /*#__PURE__*/
    function () {
      function AddOptionsComponent(ss, as, formbuilder, aas) {
        _classCallCheck(this, AddOptionsComponent);

        this.ss = ss;
        this.as = as;
        this.formbuilder = formbuilder;
        this.aas = aas;
      }

      _createClass(AddOptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.optionForm = this.formbuilder.group({
            'question': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'choice': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            'factor': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'subcategory': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
          this.ss.getCategories().subscribe(function (res) {
            // console.log(res);
            _this.categories = res;
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onCategory",
        value: function onCategory(id) {
          var _this2 = this;

          this.categoryId = id;
          this.optionForm.setValue({
            subcategory: null,
            question: null,
            choice: null,
            factor: null,
            price: null,
            category: this.categoryId
          });
          this.showSubcat = null;
          this.ss.getSubCategories(this.categoryId).subscribe(function (res) {
            _this2.showSubcat = res; // console.log(this.showSubcat);
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onSubcategory",
        value: function onSubcategory(id) {
          var _this3 = this;

          this.subcategoryId = id;
          this.optionForm.setValue({
            subcategory: this.subcategoryId,
            question: null,
            choice: null,
            factor: null,
            price: null,
            category: this.categoryId
          }); // console.log(id);

          this.questions = null;
          this.ss.getAllQuestion(this.subcategoryId).subscribe(function (res) {
            // console.log(res);
            _this3.questions = res;
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onQuestion",
        value: function onQuestion(id) {
          var _this4 = this;

          this.questionId = id;

          for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == this.questionId) {
              // console.log(this.questions[i].id);
              // console.log(this.questions[i].select_type);
              this.questionType = this.questions[i].select_type;
            }
          }

          this.optionForm.setValue({
            subcategory: this.subcategoryId,
            question: this.questionId,
            choice: null,
            factor: null,
            price: null,
            category: this.categoryId
          });
          this.as.getOption(this.questionId).subscribe(function (res) {
            // console.log(res);
            _this4.options = res;
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onOptions",
        value: function onOptions() {
          var _this5 = this;

          if (this.questionType == 'form') {
            var option = {
              'question': parseInt(this.optionForm.value.question),
              'choice': this.optionForm.value.choice,
              'factor': this.optionForm.value.factor,
              'price': this.optionForm.value.price
            }; // console.log(option)

            this.as.postValueOption(this.aas.getAdminAccessToken(), option).subscribe(function (res) {
              // console.log(res);
              _this5.optionForm.reset();
            }, function (err) {// console.log(err);
            });
          } else {
            var _option = {
              'question': parseInt(this.optionForm.value.question),
              'choice': this.optionForm.value.choice
            }; // console.log(option)

            this.aas.isLoggedIn();
            this.as.postOption(this.aas.getAdminAccessToken(), _option).subscribe(function (res) {
              // console.log(res);
              _this5.optionForm.reset();
            }, function (err) {// console.log(err);
            });
          }
        }
      }]);

      return AddOptionsComponent;
    }();

    AddOptionsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
      }];
    };

    AddOptionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-options',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-options/add-options.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add-options.component.css */
      "./src/app/admin/admin-dashboard/add-options/add-options.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]])], AddOptionsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-professional/add-professional.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-professional/add-professional.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAddProfessionalAddProfessionalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtcHJvZmVzc2lvbmFsL2FkZC1wcm9mZXNzaW9uYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-professional/add-professional.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-professional/add-professional.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AddProfessionalComponent */

  /***/
  function srcAppAdminAdminDashboardAddProfessionalAddProfessionalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProfessionalComponent", function () {
      return AddProfessionalComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
    /* harmony import */


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

    var AddProfessionalComponent =
    /*#__PURE__*/
    function () {
      function AddProfessionalComponent(ss, formbuilder, aas, as, activeRoute, route) {
        _classCallCheck(this, AddProfessionalComponent);

        this.ss = ss;
        this.formbuilder = formbuilder;
        this.aas = aas;
        this.as = as;
        this.activeRoute = activeRoute;
        this.route = route;
        this.set = new Set();
        this.selectedOption = [];
        this.checkMap = new Map();
      }

      _createClass(AddProfessionalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.professionalForm = this.formbuilder.group({
            'subcategory': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'professional': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'service_charge': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'contact_number1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'contact_number2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this6.professionalId = params['id'];
          });
          this.ss.getAllSubCategories().subscribe(function (res) {
            // console.log(res);
            _this6.subcategories = res;

            for (var j = 0; j < _this6.subcategories.length; j++) {
              _this6.checkMap.set(_this6.subcategories[j].id, false);
            }
          }, function (err) {// console.log(err)
          });

          if (this.professionalId) {
            this.as.getProfessional(this.aas.getAdminAccessToken(), this.professionalId).subscribe(function (res) {
              _this6.professional = res;

              _this6.professionalForm.setValue({
                subcategory: null,
                professional: _this6.professional.name,
                service_charge: _this6.professional.service_charge,
                contact_number1: _this6.professional.contact_number1,
                contact_number2: _this6.professional.contact_number2,
                address: _this6.professional.address
              });

              _this6.set = new Set();

              for (var j = 0; j < _this6.professional.subcategory.length; j++) {
                _this6.checkMap.set(_this6.professional.subcategory[j].id, true);

                _this6.set.add(_this6.professional.subcategory[j].id);
              }
            }, function (err) {// console.log(err)
            });
          }
        }
      }, {
        key: "onSubcat",
        value: function onSubcat(value) {
          value = parseInt(value); // console.log(this.professionalForm.value.subcategory);

          this.selectedOption = []; // console.log(this.set);

          if (this.set.has(value)) {
            this.set["delete"](value);
          } else {
            this.set.add(value);
          } // console.log(this.set);


          for (var _i = 0, _Array$from = Array.from(this.set.values()); _i < _Array$from.length; _i++) {
            var x = _Array$from[_i];

            for (var i = 0; i < this.subcategories.length; i++) {
              if (x == this.subcategories[i].id) this.selectedOption.push(this.subcategories[i].id);
            }
          } // console.log(this.selectedOption);


          return 0;
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          if (event.target.files.length > 0) {
            this.file = event.target.files[0];
          }
        }
      }, {
        key: "onProfessionals",
        value: function onProfessionals() {
          var _this7 = this;

          this.aas.isLoggedIn();

          if (this.professionalId) {
            // console.log(this.selectedOption)
            var formData = new FormData();

            if (this.file) {
              formData.append('photo', this.file);
              formData.append('subcategory_list', this.selectedOption);
              formData.append('name', this.professionalForm.value.professional);
              formData.append('address', this.professionalForm.value.address);
              formData.append('service_charge', this.professionalForm.value.service_charge);
              formData.append('contact_number1', this.professionalForm.value.contact_number1);
              formData.append('contact_number2', this.professionalForm.value.contact_number2);
            } else {
              // console.log(this.selectedOption)
              formData.append('subcategory_list', this.selectedOption);
              formData.append('name', this.professionalForm.value.professional);
              formData.append('address', this.professionalForm.value.address);
              formData.append('service_charge', this.professionalForm.value.service_charge);
              formData.append('contact_number1', this.professionalForm.value.contact_number1);
              formData.append('contact_number2', this.professionalForm.value.contact_number2);
            }

            this.as.updateProfessional(this.aas.getAdminAccessToken(), this.professionalId, formData).subscribe(function (res) {
              // console.log(res);
              _this7.route.navigate(['../../professionals'], {
                relativeTo: _this7.activeRoute
              });
            }, function (err) {// console.log(err)
            });
          } else {
            var _formData = new FormData();

            _formData.append('photo', this.file);

            _formData.append('subcategory_list', this.selectedOption);

            _formData.append('name', this.professionalForm.value.professional);

            _formData.append('address', this.professionalForm.value.address);

            _formData.append('service_charge', this.professionalForm.value.service_charge);

            _formData.append('contact_number1', this.professionalForm.value.contact_number1);

            _formData.append('contact_number2', this.professionalForm.value.contact_number2);

            this.as.postProfessionals(this.aas.getAdminAccessToken(), _formData).subscribe(function (res) {
              // console.log(res);
              _this7.route.navigate(['../professionals'], {
                relativeTo: _this7.activeRoute
              });
            }, function (err) {// console.log(err)
            });
          }
        }
      }]);

      return AddProfessionalComponent;
    }();

    AddProfessionalComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__["AdminServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddProfessionalComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-professional',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-professional.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-professional/add-professional.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add-professional.component.css */
      "./src/app/admin/admin-dashboard/add-professional/add-professional.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AddProfessionalComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-questions/add-questions.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-questions/add-questions.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAddQuestionsAddQuestionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtcXVlc3Rpb25zL2FkZC1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-questions/add-questions.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-questions/add-questions.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddQuestionsComponent */

  /***/
  function srcAppAdminAdminDashboardAddQuestionsAddQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionsComponent", function () {
      return AddQuestionsComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

    var AddQuestionsComponent =
    /*#__PURE__*/
    function () {
      function AddQuestionsComponent(ss, as, formbuilder, aas, route, activeRoute) {
        _classCallCheck(this, AddQuestionsComponent);

        this.ss = ss;
        this.as = as;
        this.formbuilder = formbuilder;
        this.aas = aas;
        this.route = route;
        this.activeRoute = activeRoute;
        this.set = new Set();
        this.required = false;
      }

      _createClass(AddQuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.questionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'question': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'required': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            'select_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'parent_question': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            'parent_option': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'subcategory': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
          this.ss.getCategories().subscribe(function (res) {
            // console.log(res);
            _this8.categories = res;
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onCategory",
        value: function onCategory(id) {
          var _this9 = this;

          this.options = null;
          this.categoryId = id;
          this.questionForm.setValue({
            subcategory: null,
            question: null,
            required: false,
            select_type: null,
            parent_question: null,
            parent_option: null,
            category: this.categoryId
          }); // console.log(id)

          this.showSubcat = null;
          this.ss.getSubCategories(this.categoryId).subscribe(function (res) {
            _this9.showSubcat = res; // console.log(this.showSubcat);
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onSubcategory",
        value: function onSubcategory(id) {
          var _this10 = this;

          this.subcategoryId = id;
          this.options = []; // console.log(id);

          this.questionForm.setValue({
            parent_question: null,
            subcategory: this.subcategoryId,
            question: null,
            required: false,
            select_type: null,
            parent_option: null,
            category: this.categoryId
          });
          this.questions = null;
          this.ss.getAllQuestion(this.subcategoryId).subscribe(function (res) {
            // console.log(res);
            _this10.questions = res;
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onQuestion",
        value: function onQuestion(id) {
          var _this11 = this;

          this.questionId = id; // console.log(this.questionId)

          this.questionForm.setValue({
            question: null,
            subcategory: this.subcategoryId,
            required: false,
            select_type: null,
            parent_question: this.questionId,
            parent_option: null,
            category: this.categoryId
          }); // console.log(this.questionId)

          this.as.getOption(this.questionId).subscribe(function (res) {
            // console.log(res);
            _this11.options = res;
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onoption",
        value: function onoption(value) {
          value = parseInt(value);
          this.selectedOption = [];

          if (this.set.has(value)) {
            this.set["delete"](value);
          } else {
            this.set.add(value);
          } // console.log(this.set);


          for (var _i2 = 0, _Array$from2 = Array.from(this.set.values()); _i2 < _Array$from2.length; _i2++) {
            var x = _Array$from2[_i2];

            for (var i = 0; i < this.options.length; i++) {
              if (x == this.options[i].id) this.selectedOption.push(this.options[i].id);
            }
          } // console.log(this.selectedOption);


          return 0;
        }
      }, {
        key: "toggle",
        value: function toggle(required) {
          this.required = required;
        }
      }, {
        key: "onquestions",
        value: function onquestions() {
          var _this12 = this;

          this.aas.isLoggedIn();
          this.questionForm.value.parent_option = JSON.stringify(this.selectedOption); // console.log(this.questionForm.value);

          this.as.postQuestion(this.aas.getAdminAccessToken(), this.questionForm.value).subscribe(function (res) {
            // console.log(res);
            _this12.route.navigate(['../add-option'], {
              relativeTo: _this12.activeRoute
            });
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return AddQuestionsComponent;
    }();

    AddQuestionsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    AddQuestionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-questions',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-questions/add-questions.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add-questions.component.css */
      "./src/app/admin/admin-dashboard/add-questions/add-questions.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], AddQuestionsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAddSubcategoryAddSubcategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtc3ViY2F0ZWdvcnkvYWRkLXN1YmNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AddSubcategoryComponent */

  /***/
  function srcAppAdminAdminDashboardAddSubcategoryAddSubcategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSubcategoryComponent", function () {
      return AddSubcategoryComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var AddSubcategoryComponent =
    /*#__PURE__*/
    function () {
      function AddSubcategoryComponent(formbuilder, activeRoute, ss, as, aas, route) {
        _classCallCheck(this, AddSubcategoryComponent);

        this.formbuilder = formbuilder;
        this.activeRoute = activeRoute;
        this.ss = ss;
        this.as = as;
        this.aas = aas;
        this.route = route;
      }

      _createClass(AddSubcategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.subcategoryForm = this.formbuilder.group({
            'subcategory': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this13.subcategoryId = params['id'];
          });
          this.ss.getCategories().subscribe(function (res) {
            // console.log(res)
            _this13.categories = res;
          }, function (err) {// console.log(err);
          });
          this.ss.getAllSubCategories().subscribe(function (res) {
            // console.log(res)
            _this13.subcategories = res;

            for (var i = 0; i < _this13.subcategories.length; i++) {
              if (_this13.subcategories[i].id == _this13.subcategoryId) {
                _this13.subcategoryForm.setValue({
                  category: _this13.subcategories[i].category.id,
                  subcategory: _this13.subcategories[i].subcategory
                });
              }
            }
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          if (event.target.files.length > 0) {
            this.file = event.target.files[0];
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          this.aas.isLoggedIn();

          if (this.subcategoryId) {
            this.as.updateSubCategory(this.aas.getAdminAccessToken(), this.file, this.subcategoryForm.value.category, this.subcategoryForm.value.subcategory, this.subcategoryId).subscribe(function (res) {
              // console.log(res);
              _this14.route.navigate(['../../allSubcategory'], {
                relativeTo: _this14.activeRoute
              });
            }, function (err) {// console.log(err)
            });
          } else {
            this.as.postSubCategory(this.aas.getAdminAccessToken(), this.file, this.subcategoryForm.value.category, this.subcategoryForm.value.subcategory).subscribe(function (res) {
              // console.log(res);
              _this14.route.navigate(['../allSubcategory'], {
                relativeTo: _this14.activeRoute
              });
            }, function (err) {// console.log(err)
            });
          }
        }
      }]);

      return AddSubcategoryComponent;
    }();

    AddSubcategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__["AdminServiceService"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AddSubcategoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-subcategory',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-subcategory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add-subcategory.component.css */
      "./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_4__["AdminServiceService"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AddSubcategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

    var AdminDashboardComponent =
    /*#__PURE__*/
    function () {
      function AdminDashboardComponent(aas, route) {
        _classCallCheck(this, AdminDashboardComponent);

        this.aas = aas;
        this.route = route;
        this.items = [{
          title: 'Order Status',
          link: './'
        }, {
          title: 'Users',
          link: 'users'
        }, {
          title: 'Category',
          children: [{
            title: 'Add category',
            link: 'category'
          }, {
            title: 'All category',
            link: 'allCategory'
          }]
        }, {
          title: 'Subcategory',
          children: [{
            title: 'Add subcategory',
            link: 'subcategory'
          }, {
            title: 'All subcategory',
            link: 'allSubcategory'
          }]
        }, {
          title: 'Professional',
          children: [{
            title: 'Add Professional',
            link: 'addProfessional'
          }, {
            title: 'All professional',
            link: 'professionals'
          }]
        }, {
          title: 'Add Question',
          link: 'add-question'
        }, {
          title: 'Add Options',
          link: 'add-option'
        }, {
          title: 'Bulk Message',
          link: 'bulk-message'
        }];
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.aas.removeAdminAccessToken();
          this.aas.removeAdminRefreshToken();
          this.route.navigate(['../']);
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_1__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminDashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-dashboard',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-dashboard.component.css */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_1__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAdminOrderDetailsAdminOrderDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1vcmRlci1kZXRhaWxzL2FkbWluLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: AdminOrderDetailsComponent */

  /***/
  function srcAppAdminAdminDashboardAdminOrderDetailsAdminOrderDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminOrderDetailsComponent", function () {
      return AdminOrderDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
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

    var AdminOrderDetailsComponent =
    /*#__PURE__*/
    function () {
      function AdminOrderDetailsComponent(as, activeRoute, aas, route) {
        _classCallCheck(this, AdminOrderDetailsComponent);

        this.as = as;
        this.activeRoute = activeRoute;
        this.aas = aas;
        this.route = route;
      }

      _createClass(AdminOrderDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this15.orderId = params['id'];
          });
          this.as.getSpecificOrder(this.aas.getAdminAccessToken(), this.orderId).subscribe(function (res) {
            // console.log(res);
            _this15.orders = res;

            _this15.as.getSubCatProfessional(_this15.aas.getAdminAccessToken(), _this15.orders[0].subcategory.id).subscribe(function (res2) {
              // console.log(res2);
              _this15.professionals = res2;
            }, function (err2) {// console.log(err2)
            });
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onView",
        value: function onView(id) {
          this.route.navigate(['../../professionals/' + id], {
            relativeTo: this.activeRoute
          });
        }
      }, {
        key: "onAccept",
        value: function onAccept(order_id) {
          var _this16 = this;

          this.aas.isLoggedIn(); // console.log(this.option)

          var accepted = {
            'service_status': 'Accepted',
            'professional_assigned': this.option
          };
          this.as.updateStatus(this.aas.getAdminAccessToken(), order_id, accepted).subscribe(function (res) {
            // console.log(res);
            _this16.route.navigate(['../../'], {
              relativeTo: _this16.activeRoute
            });
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onDecline",
        value: function onDecline(order_id) {
          var _this17 = this;

          this.aas.isLoggedIn();
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
              var declined = {
                'service_status': 'Declined'
              };

              _this17.as.updateStatus(_this17.aas.getAdminAccessToken(), order_id, declined).subscribe(function (res) {
                // console.log(res);
                _this17.route.navigate(['../../'], {
                  relativeTo: _this17.activeRoute
                });
              }, function (err) {// console.log(err)
              });
            }
          });
        }
      }, {
        key: "onComplete",
        value: function onComplete(order_id) {
          var _this18 = this;

          this.aas.isLoggedIn();
          var completed = {
            'service_status': 'Completed',
            'payment_status': true
          };
          this.as.updateStatus(this.aas.getAdminAccessToken(), order_id, completed).subscribe(function (res) {
            // console.log(res);
            _this18.route.navigate(['../../'], {
              relativeTo: _this18.activeRoute
            });
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return AdminOrderDetailsComponent;
    }();

    AdminOrderDetailsComponent.ctorParameters = function () {
      return [{
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminOrderDetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-order-details',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-order-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-order-details.component.css */
      "./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AdminOrderDetailsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/all-category/all-category.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/all-category/all-category.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAllCategoryAllCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hbGwtY2F0ZWdvcnkvYWxsLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/all-category/all-category.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/all-category/all-category.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AllCategoryComponent */

  /***/
  function srcAppAdminAdminDashboardAllCategoryAllCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllCategoryComponent", function () {
      return AllCategoryComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var AllCategoryComponent =
    /*#__PURE__*/
    function () {
      function AllCategoryComponent(ss, as, route, activeRoute, aas) {
        _classCallCheck(this, AllCategoryComponent);

        this.ss = ss;
        this.as = as;
        this.route = route;
        this.activeRoute = activeRoute;
        this.aas = aas;
      }

      _createClass(AllCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.ss.getCategories().subscribe(function (res) {
            // console.log(res);
            _this19.categories = res;
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this20 = this;

          this.as.deleteCategory(this.aas.getAdminAccessToken(), id).subscribe(function (res) {
            // console.log(res);
            _this20, _this20.ngOnInit();
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigate(['../category', id], {
            relativeTo: this.activeRoute
          });
        }
      }]);

      return AllCategoryComponent;
    }();

    AllCategoryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
      }];
    };

    AllCategoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-all-category',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./all-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-category/all-category.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./all-category.component.css */
      "./src/app/admin/admin-dashboard/all-category/all-category.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]])], AllCategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/all-professional/all-professional.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/all-professional/all-professional.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAllProfessionalAllProfessionalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hbGwtcHJvZmVzc2lvbmFsL2FsbC1wcm9mZXNzaW9uYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/all-professional/all-professional.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/all-professional/all-professional.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AllProfessionalComponent */

  /***/
  function srcAppAdminAdminDashboardAllProfessionalAllProfessionalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllProfessionalComponent", function () {
      return AllProfessionalComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
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

    var AllProfessionalComponent =
    /*#__PURE__*/
    function () {
      function AllProfessionalComponent(ss, as, aas, route, activeRoute) {
        _classCallCheck(this, AllProfessionalComponent);

        this.ss = ss;
        this.as = as;
        this.aas = aas;
        this.route = route;
        this.activeRoute = activeRoute;
        this.showProfessionals = [];
        this.noProfessional = false;
      }

      _createClass(AllProfessionalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.ss.getprofessionals().subscribe(function (res) {
            // console.log(res);
            _this21.professionals = res;

            for (var i = 0; i < _this21.professionals.length; i++) {
              _this21.showProfessionals.push(_this21.professionals[i]);
            }
          }, function (err) {// console.log(err)
          });
          this.ss.getCategories().subscribe(function (res) {
            // console.log(res)
            _this21.categories = res;
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this22 = this;

          // console.log(id);
          this.as.deleteProfessionals(this.aas.getAdminAccessToken(), id).subscribe(function (res) {
            // console.log(res);
            _this22.ngOnInit();
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onView",
        value: function onView(id) {
          this.route.navigate(['../professionals/' + id], {
            relativeTo: this.activeRoute
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigate(['../addProfessional/' + id], {
            relativeTo: this.activeRoute
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
      }]);

      return AllProfessionalComponent;
    }();

    AllProfessionalComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    AllProfessionalComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-all-professional',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./all-professional.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-professional/all-professional.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./all-professional.component.css */
      "./src/app/admin/admin-dashboard/all-professional/all-professional.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], AllProfessionalComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAllSubcategoryAllSubcategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hbGwtc3ViY2F0ZWdvcnkvYWxsLXN1YmNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AllSubcategoryComponent */

  /***/
  function srcAppAdminAdminDashboardAllSubcategoryAllSubcategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllSubcategoryComponent", function () {
      return AllSubcategoryComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var AllSubcategoryComponent =
    /*#__PURE__*/
    function () {
      function AllSubcategoryComponent(ss, route, activeRoute, as, aas) {
        _classCallCheck(this, AllSubcategoryComponent);

        this.ss = ss;
        this.route = route;
        this.activeRoute = activeRoute;
        this.as = as;
        this.aas = aas;
        this.showsubcat = [];
      }

      _createClass(AllSubcategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.ss.getCategories().subscribe(function (res) {
            // console.log(res);
            _this23.categories = res;
          }, function (err) {// console.log(err)
          });
          this.ss.getAllSubCategories().subscribe(function (res) {
            // console.log(res);
            _this23.subcategories = res;

            for (var i = 0; i < _this23.subcategories.length; i++) {
              _this23.showsubcat.push(_this23.subcategories[i]);
            }
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this24 = this;

          this.as.deleteSubCategory(this.aas.getAdminAccessToken(), id).subscribe(function (res) {
            // console.log(res);
            _this24.ngOnInit();
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.route.navigate(['../subcategory', id], {
            relativeTo: this.activeRoute
          });
        }
      }, {
        key: "onCategory",
        value: function onCategory(id) {
          var _this25 = this;

          this.showsubcat = [];

          if (id != 0) {
            this.ss.getSubCategories(id).subscribe(function (res) {
              // console.log(res);
              _this25.subcat = res;

              for (var i = 0; i < _this25.subcat.length; i++) {
                _this25.showsubcat.push(_this25.subcat[i]);
              }
            }, function (err) {// console.log(err)
            });
          } else {
            for (var i = 0; i < this.subcategories.length; i++) {
              this.showsubcat.push(this.subcategories[i]);
            }
          }
        }
      }]);

      return AllSubcategoryComponent;
    }();

    AllSubcategoryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
      }];
    };

    AllSubcategoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-all-subcategory',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./all-subcategory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./all-subcategory.component.css */
      "./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]])], AllSubcategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardBulkMessageBulkMessageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9idWxrLW1lc3NhZ2UvYnVsay1tZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BulkMessageComponent */

  /***/
  function srcAppAdminAdminDashboardBulkMessageBulkMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BulkMessageComponent", function () {
      return BulkMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
    /* harmony import */


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

    var BulkMessageComponent =
    /*#__PURE__*/
    function () {
      function BulkMessageComponent(aas, as, route, formbuilder, activeRoute) {
        _classCallCheck(this, BulkMessageComponent);

        this.aas = aas;
        this.as = as;
        this.route = route;
        this.formbuilder = formbuilder;
        this.activeRoute = activeRoute;
      }

      _createClass(BulkMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bulkMessageForm = this.formbuilder.group({
            'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }
      }, {
        key: "onMessage",
        value: function onMessage() {
          var _this26 = this;

          this.aas.isLoggedIn();
          this.as.postMessage(this.aas.getAdminAccessToken(), this.bulkMessageForm.value).subscribe(function (res) {
            // console.log(res);
            _this26.route.navigate(['../'], {
              relativeTo: _this26.activeRoute
            });
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return BulkMessageComponent;
    }();

    BulkMessageComponent.ctorParameters = function () {
      return [{
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_1__["AdminAuthService"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    BulkMessageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-bulk-message',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./bulk-message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./bulk-message.component.css */
      "./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_1__["AdminAuthService"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], BulkMessageComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/create-category/create-category.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/create-category/create-category.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardCreateCategoryCreateCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9jcmVhdGUtY2F0ZWdvcnkvY3JlYXRlLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/create-category/create-category.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/create-category/create-category.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CreateCategoryComponent */

  /***/
  function srcAppAdminAdminDashboardCreateCategoryCreateCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function () {
      return CreateCategoryComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var ImageSnippet = function ImageSnippet(src, file) {
      _classCallCheck(this, ImageSnippet);

      this.src = src;
      this.file = file;
    };

    var CreateCategoryComponent =
    /*#__PURE__*/
    function () {
      function CreateCategoryComponent(formbuilder, as, ss, activeRoute, aas, route) {
        _classCallCheck(this, CreateCategoryComponent);

        this.formbuilder = formbuilder;
        this.as = as;
        this.ss = ss;
        this.activeRoute = activeRoute;
        this.aas = aas;
        this.route = route;
      }

      _createClass(CreateCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.categoryForm = this.formbuilder.group({
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this27.categoryId = params['id'];
          });
          this.ss.getCategories().subscribe(function (res) {
            // console.log(res)
            _this27.categories = res;

            for (var i = 0; i < _this27.categories.length; i++) {
              if (_this27.categories[i].id == _this27.categoryId) {
                _this27.categoryForm.setValue({
                  category: _this27.categories[i].category
                });
              }
            }
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          if (event.target.files.length > 0) {
            this.file = event.target.files[0];
          }
        }
      }, {
        key: "onWallpaper",
        value: function onWallpaper(event) {
          if (event.target.files.length > 0) {
            this.wallpaper = event.target.files[0];
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this28 = this;

          this.aas.isLoggedIn();

          if (this.categoryId) {
            this.as.updateCategory(this.aas.getAdminAccessToken(), this.file, this.categoryForm.value.category, this.wallpaper, this.categoryId).subscribe(function (res) {
              // console.log(res);
              _this28.route.navigate(['../../allCategory'], {
                relativeTo: _this28.activeRoute
              });
            }, function (err) {// console.log(err)
            });
          } else {
            this.as.postCategory(this.aas.getAdminAccessToken(), this.file, this.categoryForm.value.category, this.wallpaper).subscribe(function (res) {
              // console.log(res);
              _this28.route.navigate(['../allCategory'], {
                relativeTo: _this28.activeRoute
              });
            }, function (err) {// console.log(err)
            });
          }
        }
      }]);

      return CreateCategoryComponent;
    }();

    CreateCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CreateCategoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-create-category',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./create-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/create-category/create-category.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./create-category.component.css */
      "./src/app/admin/admin-dashboard/create-category/create-category.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], CreateCategoryComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/orders/orders.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/orders/orders.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardOrdersOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host nb-tab {\n    padding: 1.25rem;\n  }\n\n#new{\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7QUFFRjtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCBuYi10YWIge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gIH1cblxuI25ld3tcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/orders/orders.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/orders/orders.component.ts ***!
    \******************************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppAdminAdminDashboardOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
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
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

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

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(as, aas, route, activeRoute, toastr) {
        _classCallCheck(this, OrdersComponent);

        this.as = as;
        this.aas = aas;
        this.route = route;
        this.activeRoute = activeRoute;
        this.toastr = toastr;
        this.orders = [];
        this.Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000000
        });
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.as.getAdminCount().subscribe(function (res) {
            _this29.count = res; // console.log(this.count);
          }, function (err) {// console.log(err);
          });
          var x = new channels.WebSocketBridge();
          var y = new channels.WebSocketBridge();
          x.connect('wss://wofo24.com:8443/pending/');
          y.connect('wss://wofo24.com:8443/admin_update/'); // console.log(x);
          // console.log(this.orders);

          x.listen(function (action) {
            // console.log('RESPONSE:', action)
            _this29.orders.unshift(action); // console.log(this.orders);


            _this29.count.order = _this29.count.order + 1;

            _this29.toastr.success('Incoming Booking', 'Order Id ' + action.id, {
              positionClass: 'toast-bottom-right',
              timeOut: 3000000
            }); // this.Toast.fire({
            //   type: 'success',
            //   title: 'New Order' + action.id 
            // })

          });
          y.listen(function (action) {
            // console.log('RESPONSE2:', action)
            for (var i = 0; i < _this29.orders.length; i++) {
              if (_this29.orders[i].id == action.id) {
                _this29.orders[i].service_status = action.service_status;
                break;
              }
            }

            _this29.toastr.error('Order cancelled', 'Order Id ' + action.id, {
              positionClass: 'toast-bottom-right',
              timeOut: 3000000
            });
          });
          this.as.getOrders(this.aas.getAdminAccessToken()).subscribe(function (res) {
            // console.log(res)
            _this29.orders = [];
            _this29.coming = res;

            for (var i = 0; i < _this29.coming.length; i++) {
              _this29.orders.push(_this29.coming[i]);
            }
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onView",
        value: function onView(order_id) {
          this.route.navigate(['order-deatils/' + order_id], {
            relativeTo: this.activeRoute
          });
        }
      }, {
        key: "onAccept",
        value: function onAccept(order_id) {
          var _this30 = this;

          this.aas.isLoggedIn();
          var accepted = {
            'service_status': 'Accepted'
          };
          this.as.updateStatus(this.aas.getAdminAccessToken(), order_id, accepted).subscribe(function (res) {
            // console.log(res)
            _this30.ngOnInit();
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onDecline",
        value: function onDecline(order_id) {
          var _this31 = this;

          this.aas.isLoggedIn();
          var cancelled = {
            'service_status': 'Cancelled'
          };
          this.as.updateStatus(this.aas.getAdminAccessToken(), order_id, cancelled).subscribe(function (res) {
            // console.log(res)
            _this31.ngOnInit();
          }, function (err) {// console.log(err)
          });
        }
      }, {
        key: "onComplete",
        value: function onComplete(order_id) {
          var _this32 = this;

          this.aas.isLoggedIn();
          var completed = {
            'service_status': 'Completed',
            'payment_status': true
          };
          this.as.updateStatus(this.aas.getAdminAccessToken(), order_id, completed).subscribe(function (res) {
            // console.log(res)
            _this32.ngOnInit();
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    OrdersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-orders',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/orders/orders.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./orders.component.css */
      "./src/app/admin/admin-dashboard/orders/orders.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/users/users.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/users/users.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/users/users.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/users/users.component.ts ***!
    \****************************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppAdminAdminDashboardUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(as, aas) {
        _classCallCheck(this, UsersComponent);

        this.as = as;
        this.aas = aas;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.as.getUsers(this.aas.getAdminAccessToken()).subscribe(function (res) {
            // console.log(res);
            _this33.users = res; // console.log(this.users)
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]
      }];
    };

    UsersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-users',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/users/users.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./users.component.css */
      "./src/app/admin/admin-dashboard/users/users.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]])], UsersComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardViewProfessionalsViewProfessionalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC92aWV3LXByb2Zlc3Npb25hbHMvdmlldy1wcm9mZXNzaW9uYWxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ViewProfessionalsComponent */

  /***/
  function srcAppAdminAdminDashboardViewProfessionalsViewProfessionalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProfessionalsComponent", function () {
      return ViewProfessionalsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var ViewProfessionalsComponent =
    /*#__PURE__*/
    function () {
      function ViewProfessionalsComponent(as, ss, activeRoute, aas) {
        _classCallCheck(this, ViewProfessionalsComponent);

        this.as = as;
        this.ss = ss;
        this.activeRoute = activeRoute;
        this.aas = aas;
      }

      _createClass(ViewProfessionalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this34.professionalId = params['id'];
          });
          this.as.getProfessional(this.aas.getAdminAccessToken(), this.professionalId).subscribe(function (res) {
            // console.log(res);
            _this34.professional = res; // console.log(this.professional)
          }, function (err) {// console.log(err)
          });
        }
      }]);

      return ViewProfessionalsComponent;
    }();

    ViewProfessionalsComponent.ctorParameters = function () {
      return [{
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"]
      }, {
        type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
      }];
    };

    ViewProfessionalsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-view-professionals',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./view-professionals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./view-professionals.component.css */
      "./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"], src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]])], ViewProfessionalsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-login/admin-login.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/admin/admin-login/admin-login.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminLoginAdminLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-card {\n    margin: 1rem 30rem;\n  }\n\n.forgot{\n    cursor: pointer;\n    font-size: 0.8rem\n}\n\n.validation{\n    color:red;\n    font-size: 0.8rem;\n    margin-left: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUNBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtIDMwcmVtO1xuICB9XG5cbi5mb3Jnb3R7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtXG59XG4udmFsaWRhdGlvbntcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-login/admin-login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminLoginComponent */

  /***/
  function srcAppAdminAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
      return AdminLoginComponent;
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


    var _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

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

    var AdminLoginComponent =
    /*#__PURE__*/
    function () {
      function AdminLoginComponent(formbuilder, as, aas, route) {
        _classCallCheck(this, AdminLoginComponent);

        this.formbuilder = formbuilder;
        this.as = as;
        this.aas = aas;
        this.route = route;
        this.numberFormat = '[6-9][0-9]{9}';

        if (this.aas.isLoggedIn()) {
          this.route.navigate(['/']);
        }
      }

      _createClass(AdminLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminForm = this.formbuilder.group({
            'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.numberFormat)])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this35 = this;

          this.as.postAdminLogin(this.adminForm.value).subscribe(function (res) {
            // console.log(res);
            _this35.admin = res;

            _this35.aas.storeAdminAccessToken(_this35.admin.access);

            _this35.aas.storeAdminRefreshToken(_this35.admin.refresh);

            _this35.adminForm.reset();

            _this35.route.navigate(['admin', 'admin-dashboard']);
          }, function (err) {
            // console.log(err);
            if (err.error.error == "Entry restricted, Not an admin") {
              _this35.adminForm.reset();

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Try Again',
                text: 'Entry restricted, Not an admin.',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            } else if (err.error.error == "Invalid Credentials") {
              _this35.adminForm.reset();

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Try Again',
                text: 'Invalid Credentials',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            }
          });
        }
      }, {
        key: "onForgot",
        value: function onForgot() {
          this.route.navigate(['admin', 'forgot-pass']);
        }
      }]);

      return AdminLoginComponent;
    }();

    AdminLoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }, {
        type: _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdminLoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/admin-login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-login.component.css */
      "./src/app/admin/admin-login/admin-login.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AdminLoginComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-login/forgot-pass/forgot-pass.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/admin-login/forgot-pass/forgot-pass.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminLoginForgotPassForgotPassComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-card {\n    margin: 1rem 30rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tbG9naW4vZm9yZ290LXBhc3MvZm9yZ290LXBhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWxvZ2luL2ZvcmdvdC1wYXNzL2ZvcmdvdC1wYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gMzByZW07XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-login/forgot-pass/forgot-pass.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-login/forgot-pass/forgot-pass.component.ts ***!
    \************************************************************************/

  /*! exports provided: ForgotPassComponent */

  /***/
  function srcAppAdminAdminLoginForgotPassForgotPassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function () {
      return ForgotPassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

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

    var ForgotPassComponent =
    /*#__PURE__*/
    function () {
      function ForgotPassComponent(as, formbuilder, route, activeRoute, aas) {
        _classCallCheck(this, ForgotPassComponent);

        this.as = as;
        this.formbuilder = formbuilder;
        this.route = route;
        this.activeRoute = activeRoute;
        this.aas = aas;
        this.numberFormat = '[6-9][0-9]{9}';

        if (this.aas.isLoggedIn()) {
          this.route.navigate(['/']);
        }
      }

      _createClass(ForgotPassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotForm = this.formbuilder.group({
            'phone_number': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberFormat)]))
          });
        }
      }, {
        key: "onForgot",
        value: function onForgot() {
          var _this36 = this;

          this.as.postAdminForgot(this.forgotForm.value).subscribe(function (res) {
            // console.log(res)
            _this36.userdetail = res;
            _this36.userId = _this36.userdetail.user_id; // console.log(this.userId);

            _this36.route.navigate(['../reset-pass', _this36.userId], {
              relativeTo: _this36.activeRoute
            });
          }, function (err) {
            // console.log(err);
            if (err.error.error == "Not an Admin User") {
              _this36.forgotForm.reset();

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Try Again',
                text: 'Not an Admin User',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            }
          });
        }
      }]);

      return ForgotPassComponent;
    }();

    ForgotPassComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
      }];
    };

    ForgotPassComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-forgot-pass',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./forgot-pass.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/forgot-pass/forgot-pass.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./forgot-pass.component.css */
      "./src/app/admin/admin-login/forgot-pass/forgot-pass.component.css"))["default"]]
    }), __metadata("design:paramtypes", [src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_1__["AdminServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]])], ForgotPassComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-login/reset-pass/reset-pass.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/admin-login/reset-pass/reset-pass.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminLoginResetPassResetPassComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-card {\n    margin: 1rem 30rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tbG9naW4vcmVzZXQtcGFzcy9yZXNldC1wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1sb2dpbi9yZXNldC1wYXNzL3Jlc2V0LXBhc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNhcmQge1xuICAgIG1hcmdpbjogMXJlbSAzMHJlbTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-login/reset-pass/reset-pass.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-login/reset-pass/reset-pass.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ResetPassComponent */

  /***/
  function srcAppAdminAdminLoginResetPassResetPassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPassComponent", function () {
      return ResetPassComponent;
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


    var src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/admin-service.service */
    "./src/app/services/admin-service.service.ts");
    /* harmony import */


    var src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/admin-auth.service */
    "./src/app/services/admin-auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

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

    var ResetPassComponent =
    /*#__PURE__*/
    function () {
      function ResetPassComponent(formbuilder, activeRoute, as, route, aas) {
        _classCallCheck(this, ResetPassComponent);

        this.formbuilder = formbuilder;
        this.activeRoute = activeRoute;
        this.as = as;
        this.route = route;
        this.aas = aas;
        this.notSame = true;

        if (this.aas.isLoggedIn()) {
          this.route.navigate(['/']);
        }
      }

      _createClass(ResetPassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.activeRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this37.userId = params['id'];
          });
          this.resetForm = this.formbuilder.group({
            'otp': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            'new_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onReset",
        value: function onReset() {
          var _this38 = this;

          this.as.postAdminReset(this.resetForm.value, this.userId).subscribe(function (res) {
            // console.log(res);
            _this38.route.navigate(['admin']);
          }, function (err) {
            // console.log(err);
            if (err.error.error == "Invalid OTP") {
              _this38.resetForm.reset();

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Try Again',
                text: 'Entry restricted, Not an admin.',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this39 = this;

          this.resetForm.controls['confirm_password'].valueChanges.subscribe(function (value) {
            var password = _this39.resetForm.get('new_password').value;

            var confirmPassword = _this39.resetForm.get('confirm_password').value;

            if (password === confirmPassword) {
              _this39.notSame = false;
            } else {
              _this39.notSame = true;
            } // console.log(this.notSame);

          }); // return password === confirmPassword ? null : { notSame: true }
        }
      }]);

      return ResetPassComponent;
    }();

    ResetPassComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]
      }];
    };

    ResetPassComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-reset-pass',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./reset-pass.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/reset-pass/reset-pass.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./reset-pass.component.css */
      "./src/app/admin/admin-login/reset-pass/reset-pass.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_4__["AdminAuthService"]])], ResetPassComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-login/admin-login.component */
    "./src/app/admin/admin-login/admin-login.component.ts");
    /* harmony import */


    var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-dashboard/orders/orders.component */
    "./src/app/admin/admin-dashboard/orders/orders.component.ts");
    /* harmony import */


    var _admin_dashboard_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-dashboard/create-category/create-category.component */
    "./src/app/admin/admin-dashboard/create-category/create-category.component.ts");
    /* harmony import */


    var _admin_dashboard_all_category_all_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-dashboard/all-category/all-category.component */
    "./src/app/admin/admin-dashboard/all-category/all-category.component.ts");
    /* harmony import */


    var _admin_dashboard_all_subcategory_all_subcategory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-dashboard/all-subcategory/all-subcategory.component */
    "./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.ts");
    /* harmony import */


    var _admin_dashboard_add_subcategory_add_subcategory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-dashboard/add-subcategory/add-subcategory.component */
    "./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.ts");
    /* harmony import */


    var _admin_dashboard_all_professional_all_professional_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin-dashboard/all-professional/all-professional.component */
    "./src/app/admin/admin-dashboard/all-professional/all-professional.component.ts");
    /* harmony import */


    var _admin_dashboard_view_professionals_view_professionals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin-dashboard/view-professionals/view-professionals.component */
    "./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.ts");
    /* harmony import */


    var _admin_dashboard_add_professional_add_professional_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin-dashboard/add-professional/add-professional.component */
    "./src/app/admin/admin-dashboard/add-professional/add-professional.component.ts");
    /* harmony import */


    var _admin_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin-dashboard/users/users.component */
    "./src/app/admin/admin-dashboard/users/users.component.ts");
    /* harmony import */


    var _admin_dashboard_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-dashboard/admin-order-details/admin-order-details.component */
    "./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.ts");
    /* harmony import */


    var _admin_dashboard_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin-dashboard/add-questions/add-questions.component */
    "./src/app/admin/admin-dashboard/add-questions/add-questions.component.ts");
    /* harmony import */


    var _admin_dashboard_add_options_add_options_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin-dashboard/add-options/add-options.component */
    "./src/app/admin/admin-dashboard/add-options/add-options.component.ts");
    /* harmony import */


    var _admin_dashboard_bulk_message_bulk_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-dashboard/bulk-message/bulk-message.component */
    "./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.ts");
    /* harmony import */


    var _services_admin_authguard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../services/admin-authguard.service */
    "./src/app/services/admin-authguard.service.ts");
    /* harmony import */


    var _admin_login_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-login/forgot-pass/forgot-pass.component */
    "./src/app/admin/admin-login/forgot-pass/forgot-pass.component.ts");
    /* harmony import */


    var _admin_login_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin-login/reset-pass/reset-pass.component */
    "./src/app/admin/admin-login/reset-pass/reset-pass.component.ts");

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
      component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_2__["AdminLoginComponent"]
    }, {
      path: 'forgot-pass',
      component: _admin_login_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPassComponent"]
    }, {
      path: 'reset-pass/:id',
      component: _admin_login_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_19__["ResetPassComponent"]
    }, {
      path: 'admin-dashboard',
      canActivate: [_services_admin_authguard_service__WEBPACK_IMPORTED_MODULE_17__["AdminAuthguardService"]],
      component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"],
      children: [{
        path: '',
        component: _admin_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"]
      }, {
        path: 'category',
        component: _admin_dashboard_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_5__["CreateCategoryComponent"],
        pathMatch: 'full'
      }, {
        path: 'category/:id',
        component: _admin_dashboard_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_5__["CreateCategoryComponent"],
        pathMatch: 'full'
      }, {
        path: 'allCategory',
        component: _admin_dashboard_all_category_all_category_component__WEBPACK_IMPORTED_MODULE_6__["AllCategoryComponent"]
      }, {
        path: 'allSubcategory',
        component: _admin_dashboard_all_subcategory_all_subcategory_component__WEBPACK_IMPORTED_MODULE_7__["AllSubcategoryComponent"]
      }, {
        path: 'subcategory',
        component: _admin_dashboard_add_subcategory_add_subcategory_component__WEBPACK_IMPORTED_MODULE_8__["AddSubcategoryComponent"]
      }, {
        path: 'subcategory/:id',
        component: _admin_dashboard_add_subcategory_add_subcategory_component__WEBPACK_IMPORTED_MODULE_8__["AddSubcategoryComponent"]
      }, {
        path: 'professionals',
        component: _admin_dashboard_all_professional_all_professional_component__WEBPACK_IMPORTED_MODULE_9__["AllProfessionalComponent"]
      }, {
        path: 'professionals/:id',
        component: _admin_dashboard_view_professionals_view_professionals_component__WEBPACK_IMPORTED_MODULE_10__["ViewProfessionalsComponent"]
      }, {
        path: 'addProfessional',
        component: _admin_dashboard_add_professional_add_professional_component__WEBPACK_IMPORTED_MODULE_11__["AddProfessionalComponent"]
      }, {
        path: 'addProfessional/:id',
        component: _admin_dashboard_add_professional_add_professional_component__WEBPACK_IMPORTED_MODULE_11__["AddProfessionalComponent"]
      }, {
        path: 'users',
        component: _admin_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"]
      }, {
        path: 'order-deatils/:id',
        component: _admin_dashboard_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_13__["AdminOrderDetailsComponent"]
      }, {
        path: 'add-question',
        component: _admin_dashboard_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_14__["AddQuestionsComponent"]
      }, {
        path: 'add-option',
        component: _admin_dashboard_add_options_add_options_component__WEBPACK_IMPORTED_MODULE_15__["AddOptionsComponent"]
      }, {
        path: 'bulk-message',
        component: _admin_dashboard_bulk_message_bulk_message_component__WEBPACK_IMPORTED_MODULE_16__["BulkMessageComponent"]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-login/admin-login.component */
    "./src/app/admin/admin-login/admin-login.component.ts");
    /* harmony import */


    var _admin_dashboard_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-dashboard/create-category/create-category.component */
    "./src/app/admin/admin-dashboard/create-category/create-category.component.ts");
    /* harmony import */


    var _admin_dashboard_all_category_all_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-dashboard/all-category/all-category.component */
    "./src/app/admin/admin-dashboard/all-category/all-category.component.ts");
    /* harmony import */


    var _admin_dashboard_all_subcategory_all_subcategory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-dashboard/all-subcategory/all-subcategory.component */
    "./src/app/admin/admin-dashboard/all-subcategory/all-subcategory.component.ts");
    /* harmony import */


    var _admin_dashboard_add_subcategory_add_subcategory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-dashboard/add-subcategory/add-subcategory.component */
    "./src/app/admin/admin-dashboard/add-subcategory/add-subcategory.component.ts");
    /* harmony import */


    var _admin_dashboard_add_professional_add_professional_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin-dashboard/add-professional/add-professional.component */
    "./src/app/admin/admin-dashboard/add-professional/add-professional.component.ts");
    /* harmony import */


    var _admin_dashboard_all_professional_all_professional_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin-dashboard/all-professional/all-professional.component */
    "./src/app/admin/admin-dashboard/all-professional/all-professional.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _admin_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-dashboard/users/users.component */
    "./src/app/admin/admin-dashboard/users/users.component.ts");
    /* harmony import */


    var _admin_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin-dashboard/orders/orders.component */
    "./src/app/admin/admin-dashboard/orders/orders.component.ts");
    /* harmony import */


    var _admin_dashboard_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin-dashboard/admin-order-details/admin-order-details.component */
    "./src/app/admin/admin-dashboard/admin-order-details/admin-order-details.component.ts");
    /* harmony import */


    var _admin_dashboard_view_professionals_view_professionals_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-dashboard/view-professionals/view-professionals.component */
    "./src/app/admin/admin-dashboard/view-professionals/view-professionals.component.ts");
    /* harmony import */


    var _admin_dashboard_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-dashboard/add-questions/add-questions.component */
    "./src/app/admin/admin-dashboard/add-questions/add-questions.component.ts");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_dashboard_add_options_add_options_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin-dashboard/add-options/add-options.component */
    "./src/app/admin/admin-dashboard/add-options/add-options.component.ts");
    /* harmony import */


    var _admin_dashboard_bulk_message_bulk_message_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin-dashboard/bulk-message/bulk-message.component */
    "./src/app/admin/admin-dashboard/bulk-message/bulk-message.component.ts");
    /* harmony import */


    var _services_admin_authguard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../services/admin-authguard.service */
    "./src/app/services/admin-authguard.service.ts");
    /* harmony import */


    var _admin_login_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin-login/forgot-pass/forgot-pass.component */
    "./src/app/admin/admin-login/forgot-pass/forgot-pass.component.ts");
    /* harmony import */


    var _admin_login_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin-login/reset-pass/reset-pass.component */
    "./src/app/admin/admin-login/reset-pass/reset-pass.component.ts");

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

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"], _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"], _admin_dashboard_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_5__["CreateCategoryComponent"], _admin_dashboard_all_category_all_category_component__WEBPACK_IMPORTED_MODULE_6__["AllCategoryComponent"], _admin_dashboard_all_subcategory_all_subcategory_component__WEBPACK_IMPORTED_MODULE_7__["AllSubcategoryComponent"], _admin_dashboard_add_subcategory_add_subcategory_component__WEBPACK_IMPORTED_MODULE_8__["AddSubcategoryComponent"], _admin_dashboard_add_professional_add_professional_component__WEBPACK_IMPORTED_MODULE_9__["AddProfessionalComponent"], _admin_dashboard_all_professional_all_professional_component__WEBPACK_IMPORTED_MODULE_10__["AllProfessionalComponent"], _admin_dashboard_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"], _admin_dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"], _admin_dashboard_admin_order_details_admin_order_details_component__WEBPACK_IMPORTED_MODULE_15__["AdminOrderDetailsComponent"], _admin_dashboard_view_professionals_view_professionals_component__WEBPACK_IMPORTED_MODULE_16__["ViewProfessionalsComponent"], _admin_dashboard_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_17__["AddQuestionsComponent"], _admin_dashboard_add_options_add_options_component__WEBPACK_IMPORTED_MODULE_19__["AddOptionsComponent"], _admin_dashboard_bulk_message_bulk_message_component__WEBPACK_IMPORTED_MODULE_20__["BulkMessageComponent"], _admin_login_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPassComponent"], _admin_login_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_23__["ResetPassComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_18__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"]],
      providers: [_services_admin_authguard_service__WEBPACK_IMPORTED_MODULE_21__["AdminAuthguardService"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/services/admin-auth.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/admin-auth.service.ts ***!
    \************************************************/

  /*! exports provided: AdminAuthService */

  /***/
  function srcAppServicesAdminAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthService", function () {
      return AdminAuthService;
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


    var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-service.service */
    "./src/app/services/admin-service.service.ts");
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
    };

    var AdminAuthService =
    /*#__PURE__*/
    function () {
      function AdminAuthService(as, route) {
        _classCallCheck(this, AdminAuthService);

        this.as = as;
        this.route = route;
      }

      _createClass(AdminAuthService, [{
        key: "storeAdminRefreshToken",
        value: function storeAdminRefreshToken(token) {
          localStorage.setItem('Refresh-admin', token);
        }
      }, {
        key: "storeAdminAccessToken",
        value: function storeAdminAccessToken(token) {
          localStorage.setItem('Access-admin', token);
        }
      }, {
        key: "getAdminRefreshToken",
        value: function getAdminRefreshToken() {
          return localStorage.getItem('Refresh-admin');
        }
      }, {
        key: "getAdminAccessToken",
        value: function getAdminAccessToken() {
          return localStorage.getItem('Access-admin');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var _this40 = this;

          this.currentDate = new Date(); // console.log(this.currentDate);

          if (this.getAdminAccessToken()) {
            if (this.currentDate > this.getRefreshTokenExpirationDate(this.getAdminRefreshToken())) {
              this.removeAdminAccessToken();
              this.removeAdminRefreshToken();
              this.route.navigate(['']);
              return false;
            }

            if (this.currentDate < this.getTokenExpirationDate(this.getAdminAccessToken())) {
              return true;
            } else {
              this.removeAdminAccessToken(); // console.log('refresh token');
              // console.log(this.getAdminRefreshToken());

              var refresh = {
                "refresh": this.getAdminRefreshToken()
              };
              console.log(refresh);
              this.as.postAdminRefreshToken(refresh).subscribe(function (res) {
                console.log(res);
                _this40.newAccessToken = res;

                _this40.storeAdminAccessToken(_this40.newAccessToken.access);

                return true;
              }, function (err) {// console.log(err);
              });
              return false;
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
        key: "removeAdminAccessToken",
        value: function removeAdminAccessToken() {
          localStorage.removeItem('Access-admin');
        }
      }, {
        key: "removeAdminRefreshToken",
        value: function removeAdminRefreshToken() {
          localStorage.removeItem('Refresh-admin');
        }
      }]);

      return AdminAuthService;
    }();

    AdminAuthService.ctorParameters = function () {
      return [{
        type: _admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AdminAuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AdminAuthService);
    /***/
  },

  /***/
  "./src/app/services/admin-authguard.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/admin-authguard.service.ts ***!
    \*****************************************************/

  /*! exports provided: AdminAuthguardService */

  /***/
  function srcAppServicesAdminAuthguardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthguardService", function () {
      return AdminAuthguardService;
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


    var _admin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-auth.service */
    "./src/app/services/admin-auth.service.ts");

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

    var AdminAuthguardService =
    /*#__PURE__*/
    function () {
      function AdminAuthguardService(adminauth, router) {
        _classCallCheck(this, AdminAuthguardService);

        this.adminauth = adminauth;
        this.router = router;
      }

      _createClass(AdminAuthguardService, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.adminauth.isLoggedIn() === true) {
            return true;
          } else {
            this.router.navigate(['']);
          }
        }
      }]);

      return AdminAuthguardService;
    }();

    AdminAuthguardService.ctorParameters = function () {
      return [{
        type: _admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
      }];
    };

    AdminAuthguardService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])], AdminAuthguardService);
    /***/
  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map