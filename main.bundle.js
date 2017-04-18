webpackJsonp([0,3],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cartData__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(af) {
        this.af = af;
        this.cartItems = __WEBPACK_IMPORTED_MODULE_1__cart_cartData__["a" /* cartData */].cart;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-root',
        template: "\n              <div class=\"container main\">\n                <my-header [count]=\"cartItems.length\" #myHeader></my-header>\n                <router-outlet></router-outlet>\n              </div>\n             \n            ",
        styles: [__webpack_require__(557)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/app.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartData; });
var cartData = {
    cart: [
        {
            id: 1,
            coffeeId: 1,
            qty: 2,
            comment: "add less sugar"
        },
        {
            id: 2,
            coffeeId: 2,
            qty: 4,
            comment: "add less sugar too"
        },
        {
            id: 3,
            coffeeId: 3,
            qty: 5,
            comment: "add more sugar"
        }
    ]
};
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/cartData.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coffees_category_category_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeeEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CoffeeEditComponent = (function () {
    // Other
    function CoffeeEditComponent(router, route, af, coffeeService, formBuilder, changeDetectorRef, categoryService, firebaseApp, fb) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.af = af;
        this.coffeeService = coffeeService;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.categoryService = categoryService;
        this.imageUrl = "";
        this.uploaded = false;
        this.hideOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        // private alreadyUploaded: boolean = false;
        this.storageFolderName = "images/";
        this.coffeeId = "";
        // Initialize image cropping
        this.name = 'Angular2';
        this.cropperSettings1 = new __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__["b" /* CropperSettings */]();
        this.cropperSettings1.width = 400;
        this.cropperSettings1.height = 333;
        this.cropperSettings1.canvasWidth = 400;
        this.cropperSettings1.canvasHeight = 333;
        this.cropperSettings1.croppedWidth = 240;
        this.cropperSettings1.croppedHeight = 200;
        this.data1 = {};
        this.firebaseApp = firebaseApp;
        this.sdkDb = fb.database();
        this.$categories = this.categoryService.loadCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
        this.$types = this.categoryService.loadTypes().subscribe(function (types) {
            _this.types = types;
        });
        // for testing
        // const storageRef = firebaseApp.storage().ref().child('images/-KgsGiSv3bOdKv2Oc4221');
        // storageRef.getDownloadURL().then(url => console.log(url));
    }
    CoffeeEditComponent.prototype.ngOnInit = function () {
        // Load coffee from firebase
        // this.$subscription = this.route.params.subscribe(
        //   (params: any) => {
        //     if (params.hasOwnProperty('id')) {
        //       this.isNew = false;
        //       this.coffeeService.loadCoffee(params['id']).subscribe(
        //         coffee => {
        //           this.coffee = coffee;
        //           this.imageUrl = coffee.url;
        //           this.initForm();
        //         });
        //     } else {
        //       this.isNew = true;
        //       this.initForm();
        //     }
        // });
        var _this = this;
        console.log("on init");
        this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/cup-of-black-coffee1.jpg?alt=media&token=94afc335-0a25-4956-aea8-6d1fe140b65d";
        this.isNew = true;
        this.initForm();
        this.$subscription = this.coffeeService.editCoffeeData.subscribe(function (data) {
            if (!data.isNew) {
                _this.isNew = false;
                _this.coffeeService.loadCoffee(data.coffeeId).subscribe(function (coffee) {
                    _this.coffee = coffee;
                    _this.imageUrl = coffee.url;
                    _this.selectedType = coffee.type;
                    _this.selectedCategory = coffee.category;
                    // console.log(this.imageUrl);
                    _this.initForm();
                });
            }
            else {
                _this.isNew = true;
                _this.initForm();
            }
        });
    };
    CoffeeEditComponent.prototype.initForm = function () {
        var coffeeName = '';
        var price = null;
        var category = '';
        var type = '';
        // console.log(this.isNew);
        if (!this.isNew) {
            coffeeName = this.coffee.name;
            price = this.coffee.price;
            type = this.selectedType;
            category = this.selectedCategory;
        }
        this.coffeeForm = this.formBuilder.group({
            name: [coffeeName, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            price: [price, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            category: [category, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            type: [type]
        });
    };
    CoffeeEditComponent.prototype.cropped = function (bounds) {
        this.croppedHeight = bounds.bottom - bounds.top;
        this.croppedWidth = bounds.right - bounds.left;
        this.uploaded = true;
        console.log("cropped " + this.cropper);
    };
    CoffeeEditComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
            console.log("file changed " + image);
        };
        myReader.readAsDataURL(file);
        console.log("file change " + this.cropper);
    };
    // test() {
    //   console.log(this.imageUrl);
    // }
    CoffeeEditComponent.prototype.createCoffee = function () {
        var _this = this;
        console.log(this.coffeeForm.value);
        if (this.isNew) {
            this.sdkDb.ref().child("coffees")
                .push(this.coffeeForm.value).then(function (item) {
                var coffeeId = item.key;
                var newImageKey = _this.addOneToImageKey(coffeeId);
                _this.addImageToStorage(coffeeId, _this.data1.image, newImageKey, null);
            });
        }
        else {
            this.updateCoffee();
        }
    };
    CoffeeEditComponent.prototype.updateCoffee = function () {
        console.log('edit');
        this.updateNameAndOthers(this.coffee.$key);
        if (this.data1.image != undefined) {
            this.imageStorageInsert(this.data1.image, this.coffee.$key);
        }
        // let test = this.addOneToImageKey("-KgZQwY1d44h_vQXBgJNaNaN");
    };
    CoffeeEditComponent.prototype.imageStorageInsert = function (inputImage, $key) {
        var _this = this;
        this.sdkDb.ref("coffees/" + $key).once('value').then(function (snapshot) {
            var oldImageKey = snapshot.val().imageKey;
            var newImageKey = _this.addOneToImageKey(oldImageKey);
            _this.addImageToStorage($key, inputImage, newImageKey, oldImageKey);
        });
    };
    CoffeeEditComponent.prototype.clearDataAndReturn = function () {
        console.log("clear and return");
        this.cropper.reset();
        this.data1 = {};
        this.hideOutput.emit();
        this.uploaded = false;
        this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/cup-of-black-coffee1.jpg?alt=media&token=94afc335-0a25-4956-aea8-6d1fe140b65d";
    };
    CoffeeEditComponent.prototype.addOneToImageKey = function (oldImageKey) {
        if (this.isNew) {
            return oldImageKey + 1;
        }
        var newNum = Number(oldImageKey.substr(oldImageKey.length - 1)) + 1;
        var newImageKey = oldImageKey.slice(0, -1) + newNum;
        return newImageKey;
    };
    CoffeeEditComponent.prototype.addImageToStorage = function (coffeeId, inputImage, newImageKey, oldImageKey) {
        var _this = this;
        // add new image to storage
        var image = inputImage.split("base64,");
        console.log(coffeeId, image, newImageKey, oldImageKey, this.storageFolderName);
        var storageRef = this.firebaseApp.storage().ref().child(this.storageFolderName + newImageKey);
        storageRef.putString(image[1], 'base64').then(function (snapshot) {
            // get imagedownload url
            var downloadURL = snapshot.downloadURL;
            _this.imageUrl = downloadURL;
            console.log("successfully added an image and update key");
            // update and delete coffee $key
            if (!_this.isNew) {
                _this.deteleImageInStorage(oldImageKey);
            }
            _this.updateImageKeyAndUrl(coffeeId, newImageKey, downloadURL);
        }).catch(function (error) {
            // Handle unsuccessful uploads
            console.log("error uploading: " + error);
        });
    };
    CoffeeEditComponent.prototype.updateImageKeyAndUrl = function (coffeeId, newImageKey, downloadURL) {
        this.af.database.object("coffees/" + coffeeId).update({
            imageKey: newImageKey,
            url: downloadURL
        }).catch(function (error) {
            // Handle unsuccessful uploads
            console.log("error updating img key and url: " + error);
        });
        this.clearDataAndReturn();
    };
    CoffeeEditComponent.prototype.updateNameAndOthers = function (coffeeId) {
        this.af.database.object("coffees/" + coffeeId).update(this.coffeeForm.value)
            .catch(function (error) {
            // Handle unsuccessful uploads
            console.log("error update name and others: " + error);
        });
        if (this.data1.image == undefined) {
            this.hideOutput.emit();
        }
    };
    CoffeeEditComponent.prototype.deteleImageInStorage = function (imageKey) {
        this.firebaseApp.storage().ref().child(this.storageFolderName + imageKey)
            .delete().then(function () {
            // File deleted successfully
            console.log("successfully deleted the image");
        }).catch(function (error) {
            // Uh-oh, an error occurred!
            console.log("error deleting the image");
        });
    };
    CoffeeEditComponent.prototype.ngOnDestroy = function () {
        console.log('on destroy');
        this.$subscription.unsubscribe();
        this.$categories.unsubscribe();
        this.$types.unsubscribe();
    };
    return CoffeeEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cropper', undefined),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__["a" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__["a" /* ImageCropperComponent */]) === "function" && _a || Object)
], CoffeeEditComponent.prototype, "cropper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Boolean)
], CoffeeEditComponent.prototype, "isNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], CoffeeEditComponent.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])("hideModal"),
    __metadata("design:type", Object)
], CoffeeEditComponent.prototype, "hideOutput", void 0);
CoffeeEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-coffee-edit',
        template: __webpack_require__(598),
        styles: [__webpack_require__(559)]
    }),
    __param(7, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* FirebaseApp */])),
    __param(8, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseRef */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__coffees_coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__coffees_coffee_service__["a" /* CoffeeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ChangeDetectorRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__coffees_category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__coffees_category_category_service__["a" /* CategoryService */]) === "function" && _h || Object, Object, Object])
], CoffeeEditComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee-edit.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coffee; });
var Coffee = (function () {
    function Coffee($key, url, name, category, type, price, comment) {
        this.$key = $key;
        this.url = url;
        this.name = name;
        this.category = category;
        this.type = type;
        this.price = price;
        this.comment = comment;
    }
    Coffee.fromJsonList = function (array) {
        return array.map(Coffee.fromJson);
    };
    Coffee.fromJson = function (_a) {
        var $key = _a.$key, url = _a.url, name = _a.name, category = _a.category, type = _a.type, price = _a.price, comment = _a.comment;
        return new Coffee($key, url, name, category, type, price, comment);
    };
    return Coffee;
}());

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queue_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueueComponent = (function () {
    function QueueComponent(queueService) {
        this.queueService = queueService;
    }
    QueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.queue.customerName = this.queueService.queue.customerName;
        this.queueService.getQueue().subscribe(function (queues) { return _this.queues = queues; });
    };
    QueueComponent.prototype.deleteQueue = function ($key) {
        this.queueService.deleteQueue($key);
    };
    return QueueComponent;
}());
QueueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-queue',
        template: __webpack_require__(603),
        styles: [__webpack_require__(562)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__queue_service__["a" /* QueueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__queue_service__["a" /* QueueService */]) === "function" && _a || Object])
], QueueComponent);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/queue.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 378;


/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(393);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coffees_coffee_pipe__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__coffees_category_category_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coffees_coffee_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_firebase_config__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__queue_queue_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__queue_queue_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__coffee_edit_coffee_edit_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_img_cropper__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__coffees_category_category_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_alert__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
        ].concat(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* navigatableComponents */], [
            __WEBPACK_IMPORTED_MODULE_6__coffees_coffee_pipe__["a" /* CoffeePipe */],
            __WEBPACK_IMPORTED_MODULE_7__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__coffees_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__coffees_coffee_component__["a" /* CoffeeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__queue_queue_component__["a" /* QueueComponent */],
            __WEBPACK_IMPORTED_MODULE_18__coffee_edit_coffee_edit_component__["a" /* CoffeeEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_img_cropper__["a" /* ImageCropperComponent */]
        ]),
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["b" /* routeConfig */]),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_firebase_config__["a" /* firebaseConfig */], __WEBPACK_IMPORTED_MODULE_12__environments_firebase_config__["b" /* authConfig */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__coffees_coffee_service__["a" /* CoffeeService */], __WEBPACK_IMPORTED_MODULE_17__queue_queue_service__["a" /* QueueService */], __WEBPACK_IMPORTED_MODULE_20__coffees_category_category_service__["a" /* CategoryService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coffees_coffees_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cart_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queue_queue_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffee_edit_coffee_edit_component__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigatableComponents; });




var routeConfig = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_0__coffees_coffees_component__["a" /* CoffeesComponent */] },
    { path: "cart", component: __WEBPACK_IMPORTED_MODULE_1__cart_cart_component__["a" /* CartComponent */] },
    { path: "queue", component: __WEBPACK_IMPORTED_MODULE_2__queue_queue_component__["a" /* QueueComponent */] },
    { path: "coffee", children: [
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_3__coffee_edit_coffee_edit_component__["a" /* CoffeeEditComponent */]
            },
            {
                path: ':id/edit',
                component: __WEBPACK_IMPORTED_MODULE_3__coffee_edit_coffee_edit_component__["a" /* CoffeeEditComponent */]
            }
        ] },
];
var navigatableComponents = [
    __WEBPACK_IMPORTED_MODULE_0__coffees_coffees_component__["a" /* CoffeesComponent */],
    __WEBPACK_IMPORTED_MODULE_1__cart_cart_component__["a" /* CartComponent */],
    __WEBPACK_IMPORTED_MODULE_2__queue_queue_component__["a" /* QueueComponent */],
    __WEBPACK_IMPORTED_MODULE_3__coffee_edit_coffee_edit_component__["a" /* CoffeeEditComponent */]
];
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/app.routing.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queue_queue_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { element } from 'protractor/globals';



var CartComponent = (function () {
    function CartComponent(coffeeService, formBuilder, queueService, router) {
        this.coffeeService = coffeeService;
        this.formBuilder = formBuilder;
        this.queueService = queueService;
        this.router = router;
        this.cartItems = this.coffeeService.cartCoffees;
        this.newTotal = 0;
        this.newCount = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.calculateTotal();
        this.initForm();
        // update cart in real time when qty changes
        this.updateCartRealTime();
    };
    CartComponent.prototype.updateCartRealTime = function () {
        var _this = this;
        this.cartForm.valueChanges.subscribe(function (data) {
            _this.newTotal = 0;
            _this.newCount = 0;
            var cartCoffes = [];
            data.cartCoffees.forEach(function (coffee) {
                _this.newTotal += coffee.qty * coffee.price;
                _this.newCount += coffee.qty;
                cartCoffes.push(coffee);
            });
            console.log(_this.newTotal, _this.newCount);
            _this.coffeeService.updateFetchCounts(_this.newCount);
            _this.total = _this.newTotal;
            //update coffee service cart coffee qty
            _this.coffeeService.cartCoffees = cartCoffes;
        });
    };
    CartComponent.prototype.initForm = function () {
        var customerName = "Arm";
        var cartCoffees = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormArray */]([]);
        this.cartItems.forEach(function (coffee) {
            cartCoffees.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({
                coffeeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.coffeeId),
                coffeeName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.coffeeName),
                coffeeType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.coffeeType),
                qty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.qty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                price: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.price),
                comment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.comment)
            }));
        });
        this.cartForm = this.formBuilder.group({
            customerName: [customerName],
            cartCoffees: cartCoffees
        });
    };
    CartComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.cartItems.forEach(function (element) {
            _this.total = _this.total + element.qty * element.price;
        });
    };
    CartComponent.prototype.delete = function (index) {
        this.cartForm.controls['cartCoffees'].removeAt(index);
        // this.coffeeService.fetchCounts(-(this.cartItems[index]).qty);
        this.cartItems.splice(index, 1);
        // this.calculateTotal();
    };
    CartComponent.prototype.setToZero = function () {
        this.coffeeService.cartCoffees = [];
        this.coffeeService.updateFetchCounts(0);
    };
    CartComponent.prototype.onSubmit = function () {
        this.queueService.addQueue(this.cartForm.value);
        //update coffee service cart coffees and cart items to []
        this.setToZero();
        this.router.navigate(['queue']);
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'cart',
        template: __webpack_require__(597),
        styles: [__webpack_require__(558)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__queue_queue_service__["a" /* QueueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__queue_queue_service__["a" /* QueueService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/cart.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(categoryService) {
        this.categoryService = categoryService;
        this.activeStatus = {};
        this.allStatus = true;
        this.typesOuput = [];
        this.category = new __WEBPACK_IMPORTED_MODULE_1__category__["a" /* Category */](null, []);
        this.filterOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.loadCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
        this.$category = this.categoryService.loadTypes().subscribe(function (types) {
            _this.types = types;
            _this.types.forEach(function (type) {
                _this.typesOuput.push(type.name);
                type.status = true;
            });
        });
    };
    CategoryComponent.prototype.loadAllTypes = function () {
        var _this = this;
        this.typesOuput = [];
        this.types.forEach(function (type) {
            _this.typesOuput.push(type.name);
            type.status = true;
        });
        this.category.types = this.typesOuput;
    };
    CategoryComponent.prototype.emitCategory = function () {
        this.filterOutput.emit(this.category);
    };
    CategoryComponent.prototype.boxChanges = function ($event, boxName) {
        // Filter types
        if ($event) {
            this.typesOuput.push(boxName);
        }
        else {
            this.typesOuput.splice(this.typesOuput.indexOf(boxName), 1);
        }
        this.category.types = this.typesOuput;
        this.emitCategory();
    };
    CategoryComponent.prototype.filter = function (category) {
        var _this = this;
        this.allStatus = false;
        this.categories.forEach(function (element) {
            if (element.$key == category.$key) {
                _this.activeStatus[element.$key] = true;
            }
            else {
                _this.activeStatus[element.$key] = false;
            }
        });
        // this.typesOuput = [];
        this.loadAllTypes();
        this.types.forEach(function (type) { return console.log(type.status); });
        this.category.$key = category.$key;
        this.emitCategory();
    };
    CategoryComponent.prototype.filterAll = function () {
        var _this = this;
        this.allStatus = true;
        this.categories.forEach(function (element) {
            _this.activeStatus[element.$key] = false;
        });
        // this.typesOuput = [];
        this.loadAllTypes();
        this.category.$key = null;
        this.emitCategory();
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.$category.unsubscribe();
    };
    return CategoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])("filter"),
    __metadata("design:type", Object)
], CategoryComponent.prototype, "filterOutput", void 0);
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'category-selector',
        template: __webpack_require__(599),
        styles: ["\n       .active {\n            text-decoration: underline;\n       }\n       a {\n           font-family: \"Helvetica Neue\", \"Helvetica\";\n           font-size: 14px;\n           \n       }\n       span {\n           font-family: \"Helvetica Neue\", \"Helvetica\";\n           font-size: 14px;\n       }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], CategoryComponent);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/category.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category($key, types) {
        this.$key = $key;
        this.types = types;
    }
    return Category;
}());

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/category.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeeOutput; });
var CoffeeOutput = (function () {
    function CoffeeOutput(isNew, coffeeId) {
        this.isNew = isNew;
        this.coffeeId = coffeeId;
    }
    return CoffeeOutput;
}());

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee-output.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coffee__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cartData__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoffeeComponent = (function () {
    function CoffeeComponent(coffeeService, router) {
        this.coffeeService = coffeeService;
        this.router = router;
        this.editCoffeeOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.mouseOver = false;
        this.added = false;
        this.coffeeCount = 1;
        this.cart = __WEBPACK_IMPORTED_MODULE_2__cart_cartData__["a" /* cartData */].cart;
        this.comment = "";
        this.alerts = [];
    }
    CoffeeComponent.prototype.ngOnInit = function () {
    };
    CoffeeComponent.prototype.plus = function () {
        this.coffeeCount++;
        // console.log("plus");
    };
    CoffeeComponent.prototype.minus = function () {
        if (this.coffeeCount > 1) {
            this.coffeeCount--;
        }
        // console.log("minus");  
    };
    CoffeeComponent.prototype.addCoffeeAlert = function () {
        var _this = this;
        this.added = true;
        setTimeout(function () {
            _this.added = false;
        }, 1000);
    };
    CoffeeComponent.prototype.add = function () {
        this.addCoffeeAlert();
        this.coffeeService.addToCart(this.coffee, this.coffeeCount, this.comment);
        this.coffeeCount = 1;
        this.alerts.push({
            type: 'md-local',
            msg: this.coffee.name + " is added to cart",
            timeout: 2000
        });
    };
    CoffeeComponent.prototype.editCoffee = function () {
        // this.router.navigate(['/coffee', this.coffee.$key, "edit"]);
        // let outputData = new CoffeeOutput(false, this.coffee.$key);
        // this.editCoffeeOutput.emit(outputData);
        this.coffeeService.editCoffee(false, this.coffee.$key);
        this.editCoffeeOutput.emit();
    };
    CoffeeComponent.prototype.deleteCoffee = function () {
        console.log("delete coffee " + this.coffee.$key);
        this.coffeeService.deleteCoffee(this.coffee.$key);
    };
    CoffeeComponent.prototype.over = function () {
        this.mouseOver = true;
        // console.log('over');
    };
    CoffeeComponent.prototype.out = function () {
        this.mouseOver = false;
        // console.log('out');
    };
    return CoffeeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffee__["a" /* Coffee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffee__["a" /* Coffee */]) === "function" && _a || Object)
], CoffeeComponent.prototype, "coffee", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], CoffeeComponent.prototype, "editCoffeeOutput", void 0);
CoffeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'coffee-component',
        template: __webpack_require__(600),
        styles: [__webpack_require__(560)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__coffee_service__["a" /* CoffeeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CoffeeComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CoffeePipe = (function () {
    function CoffeePipe() {
        this.output = [];
    }
    CoffeePipe.prototype.transform = function (array, args) {
        this.output = [];
        // console.log('arg', array, args);
        if (args != null) {
            for (var i = 0; i < array.length; i++) {
                if (args.$key != null) {
                    if (array[i].category === args.$key && args.types.indexOf(array[i].type) >= 0) {
                        this.output.push(array[i]);
                    }
                }
                else {
                    if (args.types.indexOf(array[i].type) >= 0) {
                        this.output.push(array[i]);
                    }
                }
            }
            return this.output;
        }
        else {
            return array;
        }
    };
    return CoffeePipe;
}());
CoffeePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'coffeeFilter',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], CoffeePipe);

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee.pipe.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoffeesComponent = (function () {
    function CoffeesComponent(coffeeService, router, categoryService) {
        var _this = this;
        this.coffeeService = coffeeService;
        this.router = router;
        this.categoryService = categoryService;
        this.$coffee = this.coffeeService.loadAllCoffees().subscribe(function (coffees) { return _this.coffees = coffees; });
        this.categoryService.categoryChanged.subscribe(function (filterArg) {
            _this.filterArg = filterArg;
            console.log(filterArg);
        });
    }
    CoffeesComponent.prototype.onFilter = function (filter) {
        this.filterArg = filter;
    };
    CoffeesComponent.prototype.onNgInit = function () {
    };
    CoffeesComponent.prototype.newCoffee = function () {
        // this.router.navigate(['/coffee/new']);
        // this.editCoffeeOutput.emit(outputData);
        this.coffeeService.editCoffee(true, "");
        this.button.show();
    };
    CoffeesComponent.prototype.onNgDestroy = function () {
        this.$coffee.unsubscribe();
    };
    CoffeesComponent.prototype.hide = function () {
        this.button.hide();
    };
    CoffeesComponent.prototype.hideModal = function () {
        this.hide();
    };
    CoffeesComponent.prototype.onEdit = function (coffeeOutput) {
        // console.log('edit');
        this.button.show();
    };
    return CoffeesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('staticModal'),
    __metadata("design:type", Object)
], CoffeesComponent.prototype, "button", void 0);
CoffeesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'coffee',
        template: __webpack_require__(601)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffee_service__["a" /* CoffeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */]) === "function" && _c || Object])
], CoffeesComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffees.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coffees_category_category_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(coffeeService, categorySerivce) {
        this.coffeeService = coffeeService;
        this.categorySerivce = categorySerivce;
        this.clicked = false;
    }
    ;
    HeaderComponent.prototype.onFilter = function (filter) {
        this.categorySerivce.categoryChanged.emit(filter);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coffeeCounts = this.coffeeService.getCoffeeCounts();
        this.coffeeService.coffeeCountsChanged
            .subscribe(function (coffeeCounts) { return _this.coffeeCounts = coffeeCounts; });
    };
    HeaderComponent.prototype.openNav = function () {
        if (!this.clicked) {
            document.getElementById("mySidenav").style.width = "17%";
            document.getElementById("mySidenav").style.paddingLeft = "4%";
            document.getElementById("mySidenav").style.paddingRight = "4%";
            this.clicked = true;
        }
        else {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("mySidenav").style.paddingLeft = "0%";
            document.getElementById("mySidenav").style.paddingRight = "0%";
            this.clicked = false;
        }
    };
    HeaderComponent.prototype.menuOut = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.paddingLeft = "0%";
        document.getElementById("mySidenav").style.paddingRight = "0%";
        this.clicked = false;
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "count", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'my-header',
        template: __webpack_require__(602),
        styles: [__webpack_require__(561)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__coffees_category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__coffees_category_category_service__["a" /* CategoryService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/header.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(139);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/index.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/environment.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_index__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authConfig; });

var firebaseConfig = {
    apiKey: "AIzaSyC2-Bt2eP64CxHbztz6YLomHHz0PkvzYnw",
    authDomain: "oasit-b6bc8.firebaseapp.com",
    databaseURL: "https://oasit-b6bc8.firebaseio.com",
    storageBucket: "oasit-b6bc8.appspot.com",
    messagingSenderId: "334270939180"
};
var authConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_0_angularfire2_index__["e" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_0_angularfire2_index__["f" /* AuthMethods */].Password
};
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/firebase.config.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/polyfills.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffee__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coffee_output__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CoffeeService = (function () {
    function CoffeeService(http, fb, af, firebaseApp) {
        this.http = http;
        this.af = af;
        // coffee variables
        this.cartCoffees = [];
        this.coffeeCounts = 0;
        this.coffeeCountsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.outputData = new __WEBPACK_IMPORTED_MODULE_4__coffee_output__["a" /* CoffeeOutput */](true, "");
        this.editCoffeeData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.storageFolderName = "images/";
        // coffee upload
        this.alreadyUploaded = false;
        this.sdkDb = fb.database();
        this.firebaseApp = firebaseApp;
    }
    CoffeeService.prototype.addToCart = function (coffee, count, comment) {
        var alreadyInCart = false;
        // Check to see if this coffee is already added
        // this.cart.forEach(cartCoffee => {
        //     if (coffee.$key == cartCoffee.coffeeId) {
        //          cartCoffee.qty += count;
        //          cartCoffee.comment = comment;
        //          alreadyInCart = true;
        //     } 
        // });
        if (!alreadyInCart) {
            this.cartCoffees.push({
                coffeeId: coffee.$key,
                coffeeName: coffee.name,
                coffeeType: coffee.type,
                qty: count,
                price: coffee.price,
                comment: comment
            });
        }
        this.fetchCounts(count);
    };
    CoffeeService.prototype.loadAllCoffees = function () {
        return this.af.database.list('coffees')
            .map(__WEBPACK_IMPORTED_MODULE_3__coffee__["a" /* Coffee */].fromJsonList);
    };
    CoffeeService.prototype.loadCoffee = function ($key) {
        return this.af.database.object("coffees/" + $key);
    };
    CoffeeService.prototype.deleteCoffee = function ($key) {
        var _this = this;
        // get coffee image key
        this.sdkDb.ref("coffees/" + $key).once('value').then(function (snapshot) {
            var imageKey = snapshot.val().imageKey;
            // removing the coffee
            _this.af.database.object("coffees/" + $key).remove()
                .then(function () {
                // deleting image in storage
                _this.deteleImageInStorage(imageKey);
            })
                .catch(function (error) { return console.log("Error"); });
        });
    };
    CoffeeService.prototype.deteleImageInStorage = function (imageKey) {
        this.firebaseApp.storage().ref().child(this.storageFolderName + imageKey)
            .delete().then(function () {
            // File deleted successfully
            console.log("successfully deleted the image");
        }).catch(function (error) {
            // Uh-oh, an error occurred!
            console.log("error deleting the image");
        });
        console.log("delete image in storage " + imageKey);
    };
    CoffeeService.prototype.getCoffeeCounts = function () {
        return this.coffeeCounts;
    };
    CoffeeService.prototype.fetchCounts = function (count) {
        this.coffeeCounts = this.coffeeCounts + count;
        return this.coffeeCountsChanged.emit(this.coffeeCounts);
    };
    // update and fetch counts when qty changes in cart
    CoffeeService.prototype.updateFetchCounts = function (newCount) {
        this.coffeeCounts = newCount;
        this.fetchCounts(0);
    };
    CoffeeService.prototype.editCoffee = function (isNew, inputId) {
        this.outputData.isNew = isNew;
        this.outputData.coffeeId = inputId;
        this.editCoffeeData.emit(this.outputData);
    };
    return CoffeeService;
}());
CoffeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseRef */])),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _b || Object, Object])
], CoffeeService);

var _a, _b;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CategoryService = (function () {
    function CategoryService(fb, af, firebaseApp) {
        this.af = af;
        this.categoryChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    CategoryService.prototype.loadCategories = function () {
        return this.af.database.list('categories');
    };
    CategoryService.prototype.loadTypes = function () {
        return this.af.database.list('types');
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseRef */])),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* FirebaseApp */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object, Object])
], CategoryService);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/category.service.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "\n.container.main {\n    padding-top: 85px;\n}\n\nhtml, body, .container.main {\n    font-family: \"Helvetica Neue\", \"Helvetica\", \"Hiragino Kaku Gothic Pro\", arial, sans-serif;\n    color: #211922;\n    font-size: 14px;\n    font-weight: 300;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, ".product-tile .img-middle {\n    cursor: pointer;\n    height: 0;\n    overflow: hidden;\n    padding-bottom: 100%;\n    position: absolute;\n    z-index: 0;\n}\n\n.img-middle .img-responsive {\n    margin: 0 auto;\n}\n\n.custom {\n    border: 1px solid #444;\n    border-radius: 6px;\n    padding: 2px;\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n}\n\n.product-info .product-title {\n    margin-bottom: 5px;\n    margin-top: 10px;\n}\n\n.product-info .product-comment {\n    margin-bottom: 5px;\n}\n\n.product-info {\n    color: #444;\n    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n    font-size: 14px;\n    line-height: 1.7;\n    min-height: 130px;\n    max-height: 160px;\n    width: 100%;\n}\n\n.product-info a {\n    color: #444;\n    display: block;\n    text-decoration: none!important;\n    padding: 5px;\n    padding-top: 10px;\n    padding-bottom: 15px;\n}\n\n\n.product-price {\n    color: #000;\n    font-size: 15px;\n    font-weight: 700;\n    max-height: 50px;\n    min-height: 25px;\n\n}\n\n.product-price-wrapper {\n    width: 100%;\n}\n\n#product-boarder {\n    border: thin solid #999;\n    border-radius: 6px;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    padding-bottom: 23px;\n    padding-left: 2px;\n    padding-right: 2px;\n}\n\n.product-info .x-container {\n    /*cursor: pointer;*/\n    /*padding-top: 10px;\n    padding-right: 20px;*/\n    position: absolute;\n    right: 20px;\n    top: 10px;\n    /*z-index: 2;*/\n    color: red;\n}\n\n.product-info .pencil-container {\n    cursor: pointer;\n    /*padding-top: 25px;\n    padding-right: 20px;*/\n    position: absolute;\n    right: 20px;\n    top: 25px;\n    z-index: 2;\n    color: orange;\n}\n\n:host >>> .alert-md-local {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    color: green;\n    text-align: right;\n    padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, ".sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: white;\n    overflow-x: hidden;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    padding-top: 60px;\n    text-align:center;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    color: black;\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n\n}\n\n.sidenav a:hover{\n    color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    margin-left: 50px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 183,
	"./af.js": 183,
	"./ar": 190,
	"./ar-dz": 184,
	"./ar-dz.js": 184,
	"./ar-kw": 185,
	"./ar-kw.js": 185,
	"./ar-ly": 186,
	"./ar-ly.js": 186,
	"./ar-ma": 187,
	"./ar-ma.js": 187,
	"./ar-sa": 188,
	"./ar-sa.js": 188,
	"./ar-tn": 189,
	"./ar-tn.js": 189,
	"./ar.js": 190,
	"./az": 191,
	"./az.js": 191,
	"./be": 192,
	"./be.js": 192,
	"./bg": 193,
	"./bg.js": 193,
	"./bn": 194,
	"./bn.js": 194,
	"./bo": 195,
	"./bo.js": 195,
	"./br": 196,
	"./br.js": 196,
	"./bs": 197,
	"./bs.js": 197,
	"./ca": 198,
	"./ca.js": 198,
	"./cs": 199,
	"./cs.js": 199,
	"./cv": 200,
	"./cv.js": 200,
	"./cy": 201,
	"./cy.js": 201,
	"./da": 202,
	"./da.js": 202,
	"./de": 205,
	"./de-at": 203,
	"./de-at.js": 203,
	"./de-ch": 204,
	"./de-ch.js": 204,
	"./de.js": 205,
	"./dv": 206,
	"./dv.js": 206,
	"./el": 207,
	"./el.js": 207,
	"./en-au": 208,
	"./en-au.js": 208,
	"./en-ca": 209,
	"./en-ca.js": 209,
	"./en-gb": 210,
	"./en-gb.js": 210,
	"./en-ie": 211,
	"./en-ie.js": 211,
	"./en-nz": 212,
	"./en-nz.js": 212,
	"./eo": 213,
	"./eo.js": 213,
	"./es": 215,
	"./es-do": 214,
	"./es-do.js": 214,
	"./es.js": 215,
	"./et": 216,
	"./et.js": 216,
	"./eu": 217,
	"./eu.js": 217,
	"./fa": 218,
	"./fa.js": 218,
	"./fi": 219,
	"./fi.js": 219,
	"./fo": 220,
	"./fo.js": 220,
	"./fr": 223,
	"./fr-ca": 221,
	"./fr-ca.js": 221,
	"./fr-ch": 222,
	"./fr-ch.js": 222,
	"./fr.js": 223,
	"./fy": 224,
	"./fy.js": 224,
	"./gd": 225,
	"./gd.js": 225,
	"./gl": 226,
	"./gl.js": 226,
	"./gom-latn": 227,
	"./gom-latn.js": 227,
	"./he": 228,
	"./he.js": 228,
	"./hi": 229,
	"./hi.js": 229,
	"./hr": 230,
	"./hr.js": 230,
	"./hu": 231,
	"./hu.js": 231,
	"./hy-am": 232,
	"./hy-am.js": 232,
	"./id": 233,
	"./id.js": 233,
	"./is": 234,
	"./is.js": 234,
	"./it": 235,
	"./it.js": 235,
	"./ja": 236,
	"./ja.js": 236,
	"./jv": 237,
	"./jv.js": 237,
	"./ka": 238,
	"./ka.js": 238,
	"./kk": 239,
	"./kk.js": 239,
	"./km": 240,
	"./km.js": 240,
	"./kn": 241,
	"./kn.js": 241,
	"./ko": 242,
	"./ko.js": 242,
	"./ky": 243,
	"./ky.js": 243,
	"./lb": 244,
	"./lb.js": 244,
	"./lo": 245,
	"./lo.js": 245,
	"./lt": 246,
	"./lt.js": 246,
	"./lv": 247,
	"./lv.js": 247,
	"./me": 248,
	"./me.js": 248,
	"./mi": 249,
	"./mi.js": 249,
	"./mk": 250,
	"./mk.js": 250,
	"./ml": 251,
	"./ml.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 254,
	"./ms-my": 253,
	"./ms-my.js": 253,
	"./ms.js": 254,
	"./my": 255,
	"./my.js": 255,
	"./nb": 256,
	"./nb.js": 256,
	"./ne": 257,
	"./ne.js": 257,
	"./nl": 259,
	"./nl-be": 258,
	"./nl-be.js": 258,
	"./nl.js": 259,
	"./nn": 260,
	"./nn.js": 260,
	"./pa-in": 261,
	"./pa-in.js": 261,
	"./pl": 262,
	"./pl.js": 262,
	"./pt": 264,
	"./pt-br": 263,
	"./pt-br.js": 263,
	"./pt.js": 264,
	"./ro": 265,
	"./ro.js": 265,
	"./ru": 266,
	"./ru.js": 266,
	"./sd": 267,
	"./sd.js": 267,
	"./se": 268,
	"./se.js": 268,
	"./si": 269,
	"./si.js": 269,
	"./sk": 270,
	"./sk.js": 270,
	"./sl": 271,
	"./sl.js": 271,
	"./sq": 272,
	"./sq.js": 272,
	"./sr": 274,
	"./sr-cyrl": 273,
	"./sr-cyrl.js": 273,
	"./sr.js": 274,
	"./ss": 275,
	"./ss.js": 275,
	"./sv": 276,
	"./sv.js": 276,
	"./sw": 277,
	"./sw.js": 277,
	"./ta": 278,
	"./ta.js": 278,
	"./te": 279,
	"./te.js": 279,
	"./tet": 280,
	"./tet.js": 280,
	"./th": 281,
	"./th.js": 281,
	"./tl-ph": 282,
	"./tl-ph.js": 282,
	"./tlh": 283,
	"./tlh.js": 283,
	"./tr": 284,
	"./tr.js": 284,
	"./tzl": 285,
	"./tzl.js": 285,
	"./tzm": 287,
	"./tzm-latn": 286,
	"./tzm-latn.js": 286,
	"./tzm.js": 287,
	"./uk": 288,
	"./uk.js": 288,
	"./ur": 289,
	"./ur.js": 289,
	"./uz": 291,
	"./uz-latn": 290,
	"./uz-latn.js": 290,
	"./uz.js": 291,
	"./vi": 292,
	"./vi.js": 292,
	"./x-pseudo": 293,
	"./x-pseudo.js": 293,
	"./yo": 294,
	"./yo.js": 294,
	"./zh-cn": 295,
	"./zh-cn.js": 295,
	"./zh-hk": 296,
	"./zh-hk.js": 296,
	"./zh-tw": 297,
	"./zh-tw.js": 297
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 567;


/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"cartForm\" (ngSubmit)=\"onSubmit()\">\n    <h2>Coffee Cart</h2>\n    <div>\n        <ul class=\"list-group\" formArrayName=\"cartCoffees\">\n            <table class=\"table\">\n                <tr>\n                    <th>Coffee</th>\n                    <th>Type</th>\n                    <th>Qty</th>\n                    <th>Comment</th>\n                    <th>Cost</th>\n                    <th>Delete</th>\n                    <th></th>\n                </tr>\n            </table>\n            <table class=\"table\">\n            <div *ngFor=\"let coffee of cartForm.controls['cartCoffees'].controls; let i = index\">\n                \n                    <tr formGroupName=\"{{i}}\">\n                        <td>\n                            <input type=\"text\" \n                                    class=\"form-control\"\n                                    formControlName=\"coffeeName\">\n                        </td>           \n                        <td>\n                            <input type=\"text\" \n                                    class=\"form-control\"\n                                    formControlName=\"coffeeType\">\n                        </td>\n                        <td>\n                            <input type=\"number\" \n                                    class=\"form-control\"\n                                    formControlName=\"qty\">\n                        </td>\n                    \n                        <td>\n                            <input type=\"text\" \n                                    class=\"form-control\"\n                                    formControlName=\"comment\">\n                        </td> \n                        <td>\n                            <input type=\"number\" \n                                    class=\"form-control\"\n                                    formControlName=\"price\">\n                        </td>\n                        \n                        <td><button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"delete(i)\">Delete</button></td> \n                    </tr> \n                        \n            </div>\n            </table>   \n        \n        </ul>\n        <div><input type=\"text\" \n                class=\"form-control\"\n                formControlName=\"customerName\"></div>\n        <div>Total: {{total}}</div>\n        \n        <div>\n            <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        </div>\n\n    </div>\n</form>\n"

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports = "\n\n<!--<div class=\"container\">\n<div class=\"col-md-5\">\n    <div class=\"form-area\">  \n        <form [formGroup]=\"coffeeForm\" (ngSubmit)=\"onSubmit()\">\n        <br style=\"clear:both\">\n                    <h3 style=\"margin-bottom: 25px; text-align: center;\">Form</h3>\n    \t\t\t\t\n            <img src={{imageUrl}} alt=\"...\" class=\"img-responsive\" *ngIf=\"!isNew\">\n\n            <div class=\"form-group\">\n              <input\n              type=\"text\" \n              class=\"form-control\" \n              id=\"name\" \n              placeholder=\"Coffee Name\"\n              FormControlName=\"name\">\n            </div>\n\n            <div class=\"form-group\">\n              <input\n              type=\"text\" \n              class=\"form-control\" \n              id=\"price\" \n              placeholder=\"Price\"\n              FormControlName=\"price\">\n            </div>\n\n            <div class=\"form-group\">\n              <span class=\"result\" *ngIf=\"data1.image\" >\n                <img [src]=\"data1.image\" \n                [width]=\"cropperSettings1.croppedWidth\" \n                [height]=\"cropperSettings1.croppedWidth\">\n              </span>\n              \n              <span>\n                <img-cropper [image]=\"data1\" [settings]=\"cropperSettings1\" (onCrop)=\"cropped($event)\"></img-cropper>\n              </span> \n                  \n            </div>\n\n        <button *ngIf=\"isNew\" (click)=\"createCoffee()\" type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\">Create</button>\n        <button *ngIf=\"!isNew\" (click)=\"updateCoffee()\" type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\">Edit</button>\n        </form>\n    </div>\n</div>\n</div>-->\n\n<form [formGroup]=\"coffeeForm\" (ngSubmit)=\"createCoffee()\">\n<div class=\"col-md-5\">\n<div class=\"product-title\">\n  <div class=\"img-middle\" align=\"middle\">\n      <img *ngIf=\"!uploaded\" \n        align=\"middle\" \n        alt=\"Simple Living Seneca Reclaimed Double 'X' Design Cocktail Table\" \n        class=\"img-responsive product-img\" \n        src={{imageUrl}}>  \n      <img [src]=\"data1.image\" *ngIf=\"data1.image && uploaded\"\n      [width]=\"cropperSettings1.croppedWidth\" \n      [height]=\"cropperSettings1.croppedHeight\">\n  </div>\n\n  <div class=\"product-info\" style=\"margin-top:5px;\">\n      \n      <div class=\"row\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Category</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n          <select class=\"form-control\"\n            formControlName=\"category\"\n            [(ngModel)]=\"selectedCategory\">\n            <option *ngFor=\"let category of categories; let i = index;\" \n                    [ngValue]=\"category.$key\">{{category.name}}</option>\n          </select>\n        </div>      \n      </div>\n      <div class=\"row form-group\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Type</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n          <select class=\"form-control\" \n            formControlName=\"type\"\n            [(ngModel)]=\"selectedType\">\n            <option *ngFor=\"let type of types\" \n              [ngValue]=\"type.name\"\n              [attr.selected]=\"type.name == name2 ? true : null\">{{type.name}}</option>\n          </select>\n        </div>      \n      </div>\n      \n      <div class=\"row\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Name</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n            <div class=\"product-title form-group\" style=\"margin:0px\">\n              <input class=\"form-control ng-touched ng-dirty ng-invalid\" \n                formControlName=\"name\" \n                id=\"name\" \n                placeholder=\"Name...\" \n                type=\"text\"\n                style=\"padding-left:5px\"> \n            </div>    \n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Price</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n            <div class=\"product-title form-group\" style=\"margin:0px\">\n              <input class=\"form-control ng-touched ng-dirty ng-invalid\" \n                formControlName=\"price\" \n                id=\"price\" \n                placeholder=\"Price...\" \n                type=\"text\"\n                style=\"padding-left:5px\"> \n            </div>    \n        </div>\n      </div>\n\n      \n      <!--<div class=\"col-md-4 pull-right\" style=\"padding: 0px; text-align: right; margin-top: 0px; margin-bottom: 2px\" disabled=\"\">\n          \n          <div class=\"col-md-4\" style=\"padding: 0; padding-top: 2px; padding-right:5px\">\n              <a class=\"btn\" style=\"padding:0px;color:#444;\">\n                  <i class=\"fa fa-minus-square fa-2x\"></i>\n              </a>\n          </div>\n          <div class=\"col-md-4\" style=\"padding: 0\">\n              <input \n                class=\"form-control input-number\" \n                min=\"1\" \n                name=\"quant[1]\" \n                style=\"text-align: center;\" \n                type=\"text\" \n                disabled=\"\">\n          </div>\n          <div class=\"col-md-4\" style=\"padding: 0; padding-top: 2px; padding-left: 0px;\">\n              <a class=\"btn\" style=\"padding: 0;color:#444;\">\n                  <i class=\"fa fa-plus-square fa-2x\"></i>\n              </a>\n          </div>\n      </div>-->\n\n      <!--<div class=\"product-comment\" style=\"padding: 0px\">\n          <textarea class=\"form-control ng-untouched ng-pristine ng-valid\" disabled=\"\" placeholder=\"please leave a comment here...\" style=\"min-width: 100%\"></textarea>\n      </div>-->\n      <!--<div class=\"product-price-wrapper\" style=\"margin-top:2px\">\n          <div class=\"col-md-8\" style=\"padding: 0px\">\n            <div class=\"col-md-2\" style=\"margin-top:5px;padding:0px\">THB</div>\n            <div class=\"col-md-10\" style=\"padding:0px\">\n              <div class=\"product-price standard\" \n                style=\"margin-right:12px\">\n                <input class=\"form-control ng-touched ng-dirty ng-invalid\" \n                  formControlName=\"price\" \n                  id=\"price\" \n                  placeholder=\"Price...\" \n                  type=\"text\" \n                  style=\"padding-left:5px;\"></div>\n            </div>\n          </div>\n          <div class=\"col-md-4\" style=\"padding: 0px; text-align: right\">\n              <button class=\"btn btn-success\" type=\"submit\">\n                  <i class=\"fa fa-coffee\" style=\"font-weight: bold;\" > Upload</i>\n              </button>\n          </div>\n      </div>-->\n\n  </div>\n\n  </div>\n</div>\n\n<div class=\"col-md-7\">\n    <span>\n      <img-cropper #cropper [image]=\"data1\" [settings]=\"cropperSettings1\" (onCrop)=\"cropped($event)\"></img-cropper>\n    </span>\n</div>\n<div class=\"row\" style=\"padding: 5px;padding-right: 20px\">\n    <button class=\"btn btn-default pull-right\" type=\"submit\">\n        <i class=\"fa fa-coffee\" style=\"font-weight: bold;\" > Upload</i>\n    </button>\n</div>\n</form>\n<!--<button (click)=\"test()\">Test</button>-->"

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

module.exports = "<div style=\"border-bottom: thin solid #444;\">\n<div style=\"padding:5px\">\n  <a [class.active]=\"allStatus\" \n  (click)=filterAll()\n  style=\"color: #444\">ALL\n  </a>\n</div>\n\n<div *ngFor=\"let category of categories\"\n style=\"padding:5px\">\n <a [class.active]=\"activeStatus[category.$key]\" \n (click)=filter(category)\n style=\"color:#444\">{{category.name | uppercase}}</a>\n</div>\n\n</div>\n<!--<h5 style=\"color: #777;\">TYPES</h5>-->\n\n<div style=\"border-bottom: thin solid #444;\">\n      <div class=\"checkbox\" *ngFor=\"let type of types\">\n        <label>\n          <input type=\"checkbox\" [(ngModel)]=\"type.status\"\n              (change)=\"boxChanges($event.target.checked, type.name)\">\n          <span style=\"font-weight: 200;\">{{ type.name | uppercase}}</span>\n        </label>\n      </div>\n</div>\n\n"

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"thumbnail\" style=\"height: 100%; width: 100%\">\n      \n            <div class=\"col\">\n            <img src={{coffee?.url}} \n                alt=\"...\" \n                class=\"img-responsive\" \n                style=\"min-height: 200px; \n                        width: 100%; \n                        display: block;\n                        padding: 0px;\n                        margin: 0px\">\n            </div>\n      \n        <div class=\"caption\">\n            <h3 style=\"margin: 0px\">{{coffee?.name}}</h3>\n            <p class=\"description\">{{coffee?.status}}</p>\n        \n        <div class=\"row\">\n            <div class=\"col-md-6\">{{coffee?.price | currency:'THB':true}}</div>\n            <div class=\"input-group col-md-6\" style=\"padding-right: 5px\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default btn-number\" (click)=\"minus()\">\n                        <span class=\"glyphicon glyphicon-minus\"></span>\n                    </button>\n                </span>\n                <input type=\"text\" name=\"quant[1]\" class=\"form-control input-number\" value={{coffeeCount}} min=\"1\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default btn-number\" (click)=\"plus()\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </span>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"padding: 5px\">\n            <textarea class=\"form-control\" style=\"min-width: 100%\" [(ngModel)]='comment'></textarea>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n                <button class=\"btn btn-success pull-left\" type=\"button\" (click)=\"add()\">Add to cart</button>\n            </div>\n            <div class=\"col-md-5\" style=\"padding-right: 0px\">\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-warning pull-right\" type=\"button\" (click)=\"editCoffee()\">\n                        <span class=\"glyphicon glyphicon-pencil\"></span>\n                    </button>\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"deleteCoffee()\">\n                        <span class=\"glyphicon glyphicon-remove\"></span>\n                    </button>\n                </div>\n            </div>\n           \n            \n            <div *ngIf=\"added\">Coffee has been added</div>\n        </div>\n\n        </div>\n       \n    </div>-->\n\n\n\n<div [ngClass]=\"!mouseOver ? 'product-title' : 'product-title custom'\" \n    id=\"product-boarder\" \n    (mouseover)='over()'\n    (mouseleave)='out()'>\n    \n    \n    <div class=\"img-middle\">\n        <img alt=\"Simple Living Seneca Reclaimed Double 'X' Design Cocktail Table\" \n        src= {{coffee?.url}} \n        class=\"img-responsive product-img \"\n        align=\"middle\" \n        style=\"border-radius: 8px;\">\n    </div>\n\n    <div class=\"product-info\" style=\"height:200px\">\n        <!--<div >-->\n            <div class=\"x-container\" (click)=\"deleteCoffee()\">\n                <i class=\"fa fa-times-rectangle-o\" aria-hidden=\"true\"></i>\n            </div>\n            <br>\n            <div class=\"pencil-container\"  (click)=\"editCoffee()\">\n                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n            </div>\n        <!--</div>-->\n        \n        <div style=\"font-size: 11px;\">({{coffee?.type}})</div>\n        <div class=\"col-md-6 pull-left\" style=\"padding: 0px;font-weight: 200;\">\n            <div class=\"product-title pull-left\">{{coffee?.name}} </div>    \n        </div>\n        <div class=\"col-md-6 pull-right\"\n            style=\"padding: 0px; text-align: right; margin-top: 5px; margin-bottom: 2px\">\n            \n            <div class=\"col-md-3\" style=\"padding: 0; padding-top: 2px\">\n                <a class=\"btn\" (click)=\"minus()\" style=\"padding: 0\">\n                    <i class=\"fa fa-minus-square fa-2x\"></i>\n                </a>\n            </div>\n            <div class=\"col-md-6\" style=\"padding: 0\">\n                <input type=\"text\" name=\"quant[1]\" \n                    class=\"form-control input-number\" \n                    value={{coffeeCount}} \n                    min=\"1\"\n                    style=\"text-align: center;\">\n            </div>\n            <div class=\"col-md-3\" style=\"padding: 0; padding-top: 2px; padding-right: 1px\">\n                <a class=\"btn\" (click)=\"plus()\" style=\"padding: 0\">\n                    <i class=\"fa fa-plus-square fa-2x\"></i>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"product-comment\" style=\"padding: 0px\">\n            <textarea class=\"form-control\" \n                style=\"min-width: 100%\" \n                [(ngModel)]='comment'\n                placeholder=\"please leave a comment here...\"></textarea>\n        </div>\n        <div class=\"product-price-wrapper\">\n            <div class=\"col-md-6\" style=\"padding: 0px;\">\n                <div class=\"product-price standard\" style=\"font-weight: 400;\">{{ coffee?.price | currency:'THB':true}}</div>\n            </div>\n            <div class=\"col-md-6\" \n                style=\"padding: 0px; text-align: right\">\n                <button type=\"button\" \n                    class=\"btn btn-default\" \n                    (click)=\"add()\"\n                    *ngIf=\"mouseOver\">\n                    <i class=\"fa fa-shopping-cart\" style=\"font-weight: bold;font-weight: 500;\"> Add</i>\n                </button>\n                <!--<button class=\"btn btn-default pull-right\" type=\"button\" (click)=\"deleteCoffee()\">\n                    <span class=\"glyphicon glyphicon-remove\"></span>\n                </button>-->\n            </div>\n        </div>\n\n    </div>\n      \n</div>\n\n<div *ngFor=\"let alert of alerts\">\n  <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><span [innerHtml]=\"alert.msg\"></span></alert>\n</div>\n\n\n\n\n"

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\n\n  <div class=\"row\">\n    <!--<div class=\"col-md-2 col-lg-2\">\n     \n        <div class=\"refinement-group\" style=\"border-right: 1px solid #DDD\">\n          \n          <div style=\"color: black;font-size:14px;\">MENUS</div>\n         \n          <category-selector (filter)=\"onFilter($event)\"></category-selector>\n        </div>\n\n    </div>-->\n\n    \n   \n            <!--<div (filter)=\"onFilter($event)\">\n            </div>-->\n\n            <div class=\"col-md-3 col-lg-3\" \n                *ngFor=\"let coffee of coffees | coffeeFilter:filterArg; let i = index;\"\n                style=\"background-color: white; height: 400px;\">\n                <coffee-component [coffee]=\"coffee\" (editCoffeeOutput)=\"onEdit($event)\"></coffee-component>\n                \n            </div>\n            \n            <div class=\"col-md-3 col-lg-3\" style=\"margin-top:10px;\">\n               <a (click)=\"newCoffee()\"\n                style=\"color: #444;font-weight: 300;\">\n                <i class=\"fa fa-plus-square-o fa-2x\"></i>&nbsp; <u>New Coffee</u>\n              </a>         \n            </div>\n     \n    \n  </div><!--/row-->\n \n  <hr>\n\n  <footer>\n    <div>© Arm Company 2017</div>\n  </footer>\n\n</div><!--/.container-->\n\n\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n                  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\"> \n    <div class=\"modal-content\" style=\"width:750px;height:475px;margin:0px;margin-left:-15%\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">ADD NEW COFFEE</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-coffee-edit (hideModal)=\"hideModal()\"></app-coffee-edit>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar-full\">\n    <div id=\"navbar\">\n       <!--    \n        navbar-default can be changed with navbar-ct-blue navbar-ct-azzure navbar-ct-red navbar-ct-green navbar-ct-orange  \n        -->\n        <nav class=\"navbar navbar-ct-azzure navbar-fixed-top\" role=\"navigation\"\n            style=\"background-color: black;\">\n          \n          <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand navbar-brand-logo\" style=\"margin:0px\" [routerLink]=\"['/']\">\n                    <!--<div class=\"logo\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/bee1_85V_icon.ico?alt=media&token=b806fa13-ff6e-4277-9a05-9902a6fb67f6\">\n                    </div>-->\n                    <div class=\"brand\">  \n                       <span style=\"font-size:30px;cursor:pointer;color:white;margin-left:25px;\" \n                       (click)=\"openNav()\">&#9776;</span>\n                    </div>\n                    <div class=\"brand\">  O.A.SIT \n                        <p style=\"font-size: 12px\">SUANPHUENG</p>\n                    </div>\n              </a>\n            </div>\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              \n              <ul class=\"nav navbar-nav\">  \n                  \n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"javascript:void(0);\" data-toggle=\"search\" class=\"hidden-xs\">\n                            <i class=\"pe-7s-search\"></i>\n                            <!--<p>Search</p>-->\n                        </a>\n                    </li>\n\n                    <li>\n                        <a [routerLink]=\"['/queue']\">\n                            <i class=\"pe-7s-note2\"></i>\n                            <!--<p>Queue</p>-->\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/cart']\">\n                            <i class=\"pe-7s-cart\">\n                                <span class=\"label\" style=\"font-size: 11px;\">{{coffeeCounts}}</span>\n                            </i>\n                            <!--<p>Cart</p>-->\n                        </a>\n                    </li> \n                    <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"pe-7s-user\"></i>\n                                <!--<p>Account <b class=\"caret\"></b></p>-->\n                            </a>\n                          <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                          </ul>\n                    </li>\n               </ul>\n               <form class=\"navbar-form navbar-right navbar-search-form\" role=\"search\">                  \n                 <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                 </div> \n              </form>\n              \n            </div>\n          </div>\n        </nav>\n       <!--<div class=\"blurred-container\">\n            <div class=\"img-src\" style=\"background-image: url('images/bg.jpg')\"></div>\n        </div>-->\n    </div>\n\n</div> \n\n<div id=\"mySidenav\" \n    class=\"sidenav\" \n    style=\"margin-top: 55px; \n        font-weight: 200; \n        text-align: left; \n        padding-top:35px;\"\n        (mouseleave)=\"menuOut()\">\n  <category-selector (filter)=\"onFilter($event)\"></category-selector>\n</div>"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table\">\n    <tr>\n        <th>Coffee</th>\n        <th>Type</th>\n        <th>Qty</th>\n        <th>Comment</th>\n        <th>Delete</th>\n    </tr>\n</table>\n     \n<div *ngFor=\"let queue of queues\">\n    \n    {{queue.customerName}}\n\n    <table class=\"table\">\n    <tr *ngFor=\"let cartCoffee of queue.cartCoffees\">\n        <td>{{cartCoffee.coffeeName}}</td>\n        <td>{{cartCoffee.coffeeType}}</td>\n        <td>{{cartCoffee.qty}}</td>\n        <td>{{cartCoffee.comment}}</td>\n    </tr>\n    </table>\n\n    <td><button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"deleteQueue(queue.$key)\">Delete</button>\n</div>\n\n<br>\n\n"

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(379);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var QueueService = (function () {
    function QueueService(http, fb, af) {
        this.http = http;
        this.af = af;
        this.queues = [];
        this.sdkDb = fb.database().ref();
    }
    QueueService.prototype.addQueue = function (cart) {
        // push queue to firebase without key
        var queue = { customerName: cart.customerName, cartCoffees: cart.cartCoffees };
        this.sdkDb.child("queue").push(queue);
    };
    QueueService.prototype.getQueue = function () {
        return this.af.database.list('queue');
    };
    QueueService.prototype.deleteQueue = function ($key) {
        console.log("queue/" + $key);
        this.af.database.object("queue/" + $key).remove();
    };
    return QueueService;
}());
QueueService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseRef */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _b || Object])
], QueueService);

var _a, _b;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/queue.service.js.map

/***/ })

},[644]);
//# sourceMappingURL=main.bundle.js.map