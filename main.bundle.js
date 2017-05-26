webpackJsonp([0,3],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cartData__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(23);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: "\n              <div class=\"container main\">\n                <my-header [count]=\"cartItems.length\" #myHeader></my-header>\n                <router-outlet></router-outlet>\n              </div>\n             \n            ",
        styles: [__webpack_require__(560)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/app.component.js.map

/***/ }),

/***/ 141:
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

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__ = __webpack_require__(300);
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
        // Other
        this.spinning = false;
        this.notReady = true;
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
            _this.spinning = false;
            _this.notReady = true;
            if (!data.isNew) {
                _this.isNew = false;
                _this.coffeeService.loadCoffee(data.coffeeId).subscribe(function (coffee) {
                    _this.coffee = coffee;
                    _this.imageUrl = coffee.url;
                    _this.selectedType = coffee.type;
                    _this.selectedCategory = coffee.category;
                    _this.notReady = false;
                    // console.log(this.imageUrl);
                    // console.log(!this.isNew, !this.uploaded, !(!this.isNew && !this.uploaded), (!this.coffeeForm.valid || !(!this.isNew && !this.uploaded)) || this.spinning);
                    _this.initForm();
                });
            }
            else {
                _this.isNew = true;
                _this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/cup-of-black-coffee1.jpg?alt=media&token=94afc335-0a25-4956-aea8-6d1fe140b65d";
                _this.initForm();
                //  console.log(this.isNew, this.uploaded);
                console.log(!_this.isNew, !_this.uploaded, (!_this.isNew && _this.uploaded), _this.spinning);
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
            name: [coffeeName, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(13)])],
            price: [price, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(5)])],
            category: [category, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            type: [type, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
    };
    CoffeeEditComponent.prototype.cropped = function (bounds) {
        this.croppedHeight = bounds.bottom - bounds.top;
        this.croppedWidth = bounds.right - bounds.left;
        this.uploaded = true;
        this.notReady = false;
        console.log("cropped " + this.cropper);
        console.log(!this.isNew, !this.uploaded, !(!this.isNew && !this.uploaded), this.spinning);
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
        this.spinning = true;
        if (this.isNew) {
            this.sdkDb.ref().child("coffees")
                .push(this.coffeeForm.value).then(function (item) {
                var coffeeId = item.key;
                var newImageKey = _this.addOneToImageKey(coffeeId);
                _this.addImageToStorage(coffeeId, _this.data1.image, newImageKey, null);
            });
        }
        else {
            console.log(this.spinning);
            this.updateCoffee();
        }
    };
    CoffeeEditComponent.prototype.updateCoffee = function () {
        ;
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
        this.notReady = true;
        this.cropper.reset();
        this.data1 = {};
        this.hideOutput.emit();
        this.uploaded = false;
        this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/cup-of-black-coffee1.jpg?alt=media&token=94afc335-0a25-4956-aea8-6d1fe140b65d";
        this.spinning = false;
    };
    CoffeeEditComponent.prototype.clearWhenNoImage = function () {
        this.spinning = false;
        this.notReady = true;
        if (this.data1.image == undefined) {
            this.hideOutput.emit();
        }
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
        var _this = this;
        this.af.database.object("coffees/" + coffeeId).update({
            imageKey: newImageKey,
            url: downloadURL
        })
            .then(function () { return _this.clearDataAndReturn(); })
            .catch(function (error) {
            // Handle unsuccessful uploads
            console.log("error updating img key and url: " + error);
        });
    };
    CoffeeEditComponent.prototype.updateNameAndOthers = function (coffeeId) {
        var _this = this;
        this.af.database.object("coffees/" + coffeeId).update(this.coffeeForm.value).then(function () { return _this.clearWhenNoImage(); }).catch(function (error) {
            // Handle unsuccessful uploads
            console.log("error update name and others: " + error);
        });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('cropper', undefined),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__["a" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_img_cropper__["a" /* ImageCropperComponent */]) === "function" && _a || Object)
], CoffeeEditComponent.prototype, "cropper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], CoffeeEditComponent.prototype, "isNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CoffeeEditComponent.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])("hideModal"),
    __metadata("design:type", Object)
], CoffeeEditComponent.prototype, "hideOutput", void 0);
CoffeeEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-coffee-edit',
        template: __webpack_require__(602),
        styles: [__webpack_require__(562)]
    }),
    __param(7, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["f" /* FirebaseApp */])),
    __param(8, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["e" /* FirebaseRef */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__coffees_coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__coffees_coffee_service__["a" /* CoffeeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__coffees_category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__coffees_category_category_service__["a" /* CategoryService */]) === "function" && _h || Object, Object, Object])
], CoffeeEditComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee-edit.component.js.map

/***/ }),

/***/ 143:
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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(uid, email, name, imageUrl) {
        this.uid = uid;
        this.email = email;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    User.prototype.isLoggedIn = function () {
    };
    return User;
}());

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/user.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queue_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__(54);
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
    function QueueComponent(queueService, loginService) {
        this.queueService = queueService;
        this.loginService = loginService;
    }
    QueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queueService.getQueue().subscribe(function (queues) { return _this.queues = queues; });
    };
    QueueComponent.prototype.deleteQueue = function ($key) {
        this.queueService.deleteQueue($key);
    };
    QueueComponent.prototype.ngOnDestroy = function () {
    };
    return QueueComponent;
}());
QueueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-queue',
        template: __webpack_require__(608),
        styles: [__webpack_require__(566)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__queue_service__["a" /* QueueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__queue_service__["a" /* QueueService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], QueueComponent);

var _a, _b;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/queue.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 380;


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(395);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coffees_coffee_pipe__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__coffees_category_category_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coffees_coffee_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_firebase_config__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__queue_queue_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__queue_queue_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__coffee_edit_coffee_edit_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_img_cropper__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__coffees_category_category_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_alert__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_service__ = __webpack_require__(54);
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
            __WEBPACK_IMPORTED_MODULE_19_ng2_img_cropper__["a" /* ImageCropperComponent */],
            __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */]
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
        providers: [__WEBPACK_IMPORTED_MODULE_13__coffees_coffee_service__["a" /* CoffeeService */],
            __WEBPACK_IMPORTED_MODULE_17__queue_queue_service__["a" /* QueueService */],
            __WEBPACK_IMPORTED_MODULE_20__coffees_category_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_24__login_login_service__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/app.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coffees_coffees_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cart_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queue_queue_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffee_edit_coffee_edit_component__ = __webpack_require__(142);
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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queue_queue_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_user__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_service__ = __webpack_require__(54);
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
    function CartComponent(coffeeService, formBuilder, queueService, router, af, loginService) {
        this.coffeeService = coffeeService;
        this.formBuilder = formBuilder;
        this.queueService = queueService;
        this.router = router;
        this.af = af;
        this.loginService = loginService;
        this.cartItems = this.coffeeService.cartCoffees;
        this.newTotal = 0;
        this.newCount = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__login_user__["a" /* User */](null, null, null, null);
    }
    CartComponent.prototype.assignUserInfo = function () {
        if (!this.loginService.user.name && this.loginService.user.email) {
            this.customerName = this.loginService.user.email;
        }
        else {
            this.customerName = this.loginService.user.name;
        }
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize user name if no name then use email
        this.assignUserInfo();
        this.$logIn = this.loginService.isLoggedIn.subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                // console.log("logged in");
                _this.assignUserInfo();
                // console.log(this.customerName);
                _this.onSubmit();
            }
            else {
                // console.log("false");
                _this.customerName = null;
            }
        });
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
            // console.log(this.newTotal, this.newCount);
            _this.coffeeService.updateFetchCounts(_this.newCount);
            _this.total = _this.newTotal;
            //update coffee service cart coffee qty
            _this.coffeeService.cartCoffees = cartCoffes;
        });
    };
    CartComponent.prototype.initForm = function () {
        var customerName = this.customerName;
        var customerImage = this.loginService.user.imageUrl;
        var cartCoffees = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormArray */]([]);
        this.cartItems.forEach(function (coffee) {
            cartCoffees.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({
                coffeeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.coffeeId),
                coffeeName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.coffeeName),
                coffeeType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.coffeeType),
                qty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.qty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                price: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.price),
                comment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.comment),
                imageUrl: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */](coffee.imageUrl)
            }));
        });
        this.cartForm = this.formBuilder.group({
            customerName: [customerName],
            customerImage: [customerImage],
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
        this.cartItems.splice(index, 1);
    };
    CartComponent.prototype.setToZero = function () {
        this.customerName = null;
        this.coffeeService.cartCoffees = [];
        this.coffeeService.updateFetchCounts(0);
    };
    CartComponent.prototype.addToQueue = function () {
        this.queueService.addQueue(this.cartForm.value);
        this.setToZero();
        this.router.navigate(['queue']);
    };
    CartComponent.prototype.onSubmit = function () {
        console.log(this.cartForm.value);
        if (this.customerName == undefined || this.customerName == null) {
            this.loginModal.show();
        }
        else {
            this.addToQueue();
        }
    };
    CartComponent.prototype.update = function () {
        var _this = this;
        this.cartForm.value.forEach(function (data) {
            _this.newTotal = 0;
            _this.newCount = 0;
            var cartCoffes = [];
            data.cartCoffees.forEach(function (coffee) {
                _this.newTotal += coffee.qty * coffee.price;
                _this.newCount += coffee.qty;
                cartCoffes.push(coffee);
            });
            _this.coffeeService.updateFetchCounts(_this.newCount);
            _this.total = _this.newTotal;
            _this.coffeeService.cartCoffees = cartCoffes;
        });
    };
    CartComponent.prototype.minus = function (i) {
        if (this.cartForm.value.cartCoffees[i].qty > 1) {
            this.cartForm.value.cartCoffees[i].qty--;
            this.total -= Number(this.cartForm.value.cartCoffees[i].price);
            this.coffeeService.fetchCounts(-1);
            //update coffee service cart coffee qty
            this.coffeeService.cartCoffees = this.cartForm.value.cartCoffees;
        }
    };
    CartComponent.prototype.plus = function (i) {
        this.cartForm.value.cartCoffees[i].qty++;
        this.total += Number(this.cartForm.value.cartCoffees[i].price);
        this.coffeeService.fetchCounts(1);
        //update coffee service cart coffee qty
        this.coffeeService.cartCoffees = this.cartForm.value.cartCoffees;
    };
    CartComponent.prototype.hideModal = function () {
        this.loginModal.hide();
    };
    CartComponent.prototype.onHasName = function (name) {
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.$logIn.unsubscribe();
    };
    return CartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('staticModal'),
    __metadata("design:type", Object)
], CartComponent.prototype, "loginModal", void 0);
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'cart',
        template: __webpack_require__(601),
        styles: [__webpack_require__(561)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__queue_queue_service__["a" /* QueueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__queue_queue_service__["a" /* QueueService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AngularFire */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__login_login_service__["a" /* LoginService */]) === "function" && _f || Object])
], CartComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/cart.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category__ = __webpack_require__(389);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])("filter"),
    __metadata("design:type", Object)
], CategoryComponent.prototype, "filterOutput", void 0);
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'category-selector',
        template: __webpack_require__(603),
        styles: ["\n       .active {\n            text-decoration: underline;\n       }\n       a {\n           font-family: \"Helvetica Neue\", \"Helvetica\";\n           font-size: 14px;\n           \n       }\n       span {\n           font-family: \"Helvetica Neue\", \"Helvetica\";\n           font-size: 14px;\n       }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], CategoryComponent);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/category.component.js.map

/***/ }),

/***/ 389:
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

/***/ 390:
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

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coffee__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cartData__ = __webpack_require__(141);
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
        this.coffeeCountModel = 1;
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
        this.coffeeService.addToCart(this.coffee, Number(this.coffeeCount), this.comment);
        this.coffeeCount = 1;
        this.alerts.push({
            type: 'md-local',
            msg: this.coffee.name + " is added to cart",
            timeout: 2000
        });
        this.comment = "";
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffee__["a" /* Coffee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffee__["a" /* Coffee */]) === "function" && _a || Object)
], CoffeeComponent.prototype, "coffee", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], CoffeeComponent.prototype, "editCoffeeOutput", void 0);
CoffeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'coffee-component',
        template: __webpack_require__(604),
        styles: [__webpack_require__(563)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__coffee_service__["a" /* CoffeeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CoffeeComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee.component.js.map

/***/ }),

/***/ 392:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'coffeeFilter',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], CoffeePipe);

//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee.pipe.js.map

/***/ }),

/***/ 393:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('staticModal'),
    __metadata("design:type", Object)
], CoffeesComponent.prototype, "button", void 0);
CoffeesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'coffee',
        template: __webpack_require__(605)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffee_service__["a" /* CoffeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__category_category_service__["a" /* CategoryService */]) === "function" && _c || Object])
], CoffeesComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffees.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coffees_category_category_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__(54);
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
    function HeaderComponent(coffeeService, categorySerivce, loginService) {
        var _this = this;
        this.coffeeService = coffeeService;
        this.categorySerivce = categorySerivce;
        this.loginService = loginService;
        this.clicked = false;
        this.loginStatus = false;
        this.$logIn = this.loginService.isLoggedIn.subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                console.log("login");
                _this.loginStatus = true;
                _this.customerName = _this.loginService.user.name;
            }
            else {
                console.log("false");
                _this.loginStatus = false;
                _this.customerName = null;
            }
        });
    }
    HeaderComponent.prototype.onFilter = function (filter) {
        this.categorySerivce.categoryChanged.emit(filter);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coffeeCounts = this.coffeeService.getCoffeeCounts();
        this.$coffeeCounts = this.coffeeService.coffeeCountsChanged
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
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.$coffeeCounts.unsubscribe();
        this.$logIn.unsubscribe();
    };
    HeaderComponent.prototype.login = function () {
        this.loginModal.show();
    };
    HeaderComponent.prototype.hideModal = function () {
        this.loginModal.hide();
    };
    HeaderComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    HeaderComponent.prototype.accountInfo = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('staticModal'),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "loginModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "count", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-header',
        template: __webpack_require__(606),
        styles: [__webpack_require__(564)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coffees_coffee_service__["a" /* CoffeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__coffees_category_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__coffees_category_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/header.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(140);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/index.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, formBuilder) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.newAccount = true;
        this.posted = false;
        this.customerNameOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.modalOff = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initLoginForm();
        this.initRegisterForm();
    };
    LoginComponent.prototype.initLoginForm = function () {
        var email = '';
        var password = '';
        this.loginForm = this.formBuilder.group({
            email: [email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            password: [password, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    LoginComponent.prototype.initRegisterForm = function () {
        var email = '';
        var password = '';
        var confirm = '';
        this.registerForm = this.formBuilder.group({
            email: [email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            password: [password, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            confirm: [confirm, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    LoginComponent.prototype.loginAsGuest = function (name) {
        this.customerNameOutput.emit(name);
    };
    LoginComponent.prototype.toggleLogin = function () {
        if (this.newAccount == true) {
            this.newAccount = false;
        }
        else {
            this.newAccount = true;
        }
    };
    LoginComponent.prototype.register = function () {
        var email = this.registerForm.value.email;
        var password = this.registerForm.value.password;
        this.loginService.register(email, password);
        this.posted = true;
    };
    LoginComponent.prototype.facebookLogin = function () {
        var _this = this;
        this.loginService.facebookLogin()
            .then(function (authState) {
            _this.modalOff.emit(true);
        })
            .catch(function (error) { return console.log(error); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var email = this.loginForm.value.email;
        var password = this.loginForm.value.password;
        this.loginService.login(email, password)
            .then(function (authState) {
            _this.modalOff.emit(true);
        })
            .catch(function (error) { return console.log(error); });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "customerNameOutput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "modalOff", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(607),
        styles: [__webpack_require__(565)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/login.component.js.map

/***/ }),

/***/ 397:
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_index__ = __webpack_require__(23);
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
    provider: __WEBPACK_IMPORTED_MODULE_0_angularfire2_index__["c" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_0_angularfire2_index__["b" /* AuthMethods */].Password
};
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/firebase.config.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/polyfills.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coffee__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coffee_output__ = __webpack_require__(390);
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
        // this.coffeeCounts = count;
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
                comment: comment,
                imageUrl: coffee.url
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
        // console.log(this.coffeeCounts);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["e" /* FirebaseRef */])),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["f" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _b || Object, Object])
], CoffeeService);

var _a, _b;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/coffee.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(23);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* FirebaseRef */])),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["f" /* FirebaseApp */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object, Object])
], CategoryService);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/category.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(af) {
        var _this = this;
        this.af = af;
        this.isLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */](null, null, null, null);
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                // console.log("service login")
                // console.log(authState);
                _this.user.uid = authState.uid;
                _this.user.email = authState.auth.email;
                _this.user.imageUrl = authState.auth.photoURL;
                _this.user.name = authState.auth.displayName;
                // console.log(this.user);
                _this.isLoggedIn.emit(true);
            }
            else {
                // console.log("service logout")
                _this.user.uid = null;
                _this.user.email = null;
                _this.user.imageUrl = null;
                _this.user.name = null;
                _this.isLoggedIn.emit(false);
            }
        });
    }
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.af.auth.login({
                email: email,
                password: password
            }, {
                method: __WEBPACK_IMPORTED_MODULE_2_angularfire2_index__["b" /* AuthMethods */].Password,
                provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2_index__["c" /* AuthProviders */].Password
            })
                .then(function (authState) {
                resolve(authState);
            })
                .catch(function (error) { return resolve(error); });
        });
    };
    LoginService.prototype.register = function (email, password) {
        this.af.auth.createUser({
            email: email,
            password: password
        })
            .then(function (authState) {
        })
            .catch(function (error) { return console.log(error); });
    };
    LoginService.prototype.facebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.af.auth.login({
                provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2_index__["c" /* AuthProviders */].Facebook,
                method: __WEBPACK_IMPORTED_MODULE_2_angularfire2_index__["b" /* AuthMethods */].Popup
            })
                .then(function (authState) {
                resolve(authState);
            })
                .catch(function (error) { return resolve(error); });
        });
    };
    LoginService.prototype.logout = function () {
        this.af.auth.logout();
        // this.isLoggedIn.emit(false);
    };
    return LoginService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('staticModal'),
    __metadata("design:type", Object)
], LoginService.prototype, "loginModal", void 0);
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/login.service.js.map

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "\n.container.main {\n    padding-top: 85px;\n}\n\nhtml, body, .container.main {\n    font-family: \"Helvetica Neue\", \"Helvetica\", \"Hiragino Kaku Gothic Pro\", arial, sans-serif;\n    color: #211922;\n    font-size: 14px;\n    font-weight: 300;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".table>tbody>tr>td, .table>tfoot>tr>td{\n    /*vertical-align: middle;*/\n}\n@media screen and (max-width: 600px) {\n    table#cart tbody td .form-control{\n\t\twidth:20%;\n\t\tdisplay: inline !important;\n\t}\n\t.actions .btn{\n\t\twidth:36%;\n\t\tmargin:1.5em 0;\n\t}\n\t\n\t.actions .btn-info{\n\t\tfloat:left;\n\t}\n\t.actions .btn-danger{\n\t\tfloat:right;\n\t}\n\t\n\ttable#cart thead { display: none; }\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\n\ttable#cart tbody td:before {\n\t\tcontent: attr(data-th); font-weight: bold;\n\t\tdisplay: inline-block; width: 8rem;\n\t}\n\t\n\t\n\t\n\ttable#cart tfoot td{display:block; }\n\ttable#cart tfoot td .btn{display:block;}\n\t\n}\n\n.slide-row {\n    padding: 0;\n    background-color: #ffffff;\n    min-height: 150px;\n    border: 1px solid #e7e7e7;\n    overflow: hidden;\n    height: auto;\n    position: relative;\n}\n\n.cart-header {\n\tfont-weight: 400;\n\tfont-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n}\n\n.table thead>tr>th, .table tbody>tr>th, .table tfoot>tr>th, .table thead>tr>td, .table tbody>tr>td, .table tfoot>tr>td {\n/*padding: 8px;\nline-height: 1.428571429;\nvertical-align: top;\nborder-bottom: 1px solid #ddd;*/\n}\n\n.table>tbody+tbody {\n    border-top: 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".product-tile .img-middle {\n    cursor: pointer;\n    height: 0;\n    overflow: hidden;\n    padding-bottom: 100%;\n    position: absolute;\n    z-index: 0;\n}\n\n.img-middle .img-responsive {\n    margin: 0 auto;\n}\n\n.custom {\n    border: 1px solid #444;\n    border-radius: 6px;\n    padding: 2px;\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n}\n\n.product-info .product-title {\n    margin-bottom: 5px;\n    margin-top: 10px;\n}\n\n.product-info .product-comment {\n    margin-bottom: 5px;\n}\n\n.product-info {\n    color: #444;\n    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n    font-size: 14px;\n    line-height: 1.7;\n    min-height: 130px;\n    max-height: 160px;\n    width: 100%;\n}\n\n.product-info a {\n    color: #444;\n    display: block;\n    text-decoration: none!important;\n    padding: 5px;\n    padding-top: 10px;\n    padding-bottom: 15px;\n}\n\n\n.product-price {\n    color: #000;\n    font-size: 15px;\n    font-weight: 700;\n    max-height: 50px;\n    min-height: 25px;\n\n}\n\n.product-price-wrapper {\n    width: 100%;\n}\n\n#product-boarder {\n    border: thin solid #999;\n    border-radius: 6px;\n    margin-bottom: 15px;\n    margin-top: 10px;\n    padding-bottom: 5px;\n    padding-left: 2px;\n    padding-right: 2px;\n}\n\n.product-info .x-container {\n    /*cursor: pointer;*/\n    /*padding-top: 10px;\n    padding-right: 20px;*/\n    position: absolute;\n    right: 20px;\n    top: 10px;\n    /*z-index: 2;*/\n    color: red;\n}\n\n.product-info .pencil-container {\n    cursor: pointer;\n    /*padding-top: 25px;\n    padding-right: 20px;*/\n    position: absolute;\n    right: 20px;\n    top: 25px;\n    z-index: 2;\n    color: orange;\n}\n\n:host >>> .alert-md-local {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    color: green;\n    text-align: right;\n    padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: white;\n    overflow-x: hidden;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    padding-top: 60px;\n    text-align:center;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    color: black;\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n\n}\n\n.sidenav a:hover{\n    color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    margin-left: 50px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "/*\n *\n * login-register modal\n * Autor: Creative Tim\n * Web-autor: creative.tim\n * Web script: http://creative-tim.com\n * \n */\n \n/*  Shake animation  */\n\n.division {\n    float: none;\n    margin: 0 auto 18px;\n    overflow: hidden;\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\n.division .line {\n    border-top: 1px solid #DFDFDF;\n    position: absolute;\n    top: 10px;\n    width: 34%;\n}\n.division .line.l {\n    left: 0;\n}\n.division .line.r {\n    right: 0;\n}\n.division span {\n    color: #424242;\n    font-size: 17px;\n}\n.box .social {\n    float: none;\n    margin: 0 auto 30px;\n    text-align: center;\n}\n\n.social .circle{\n    background-color: #EEEEEE;\n    color: #FFFFFF;\n    border-radius: 100px;\n    display: inline-block;\n    margin: 0 17px;\n    padding: 15px;\n}\n.social .circle .fa{\n    font-size: 16px;\n}\n.social .facebook{\n    background-color: #455CA8;\n    color: #FFFFFF;\n}\n.social .google{\n    background-color: #F74933;\n}\n.social .github{\n    background-color: #403A3A;\n}\n.facebook:hover{\n    background-color: #6E83CD;\n}\n.google:hover{\n    background-color: #FF7566;\n}\n.github:hover{\n    background-color: #4D4D4d;;\n}\n.forgot {\n    color: #797979;\n    margin-left: 0;\n    overflow: hidden;\n    text-align: center;\n    width: 100%;\n}\n.btn-login, .btn-register {\n    background-color: black;\n    border-color: #00BBFF;\n    border-width: 0;\n    color: #FFFFFF;\n    display: block;\n    margin: 0 auto;\n    padding: 15px 50px;\n    text-transform: uppercase;\n    width: 100%;\n}\n.btn-login:hover, .registerBox .btn-register:hover{\n    background-color: #444;\n    color: #FFFFFF;\n}\n.form-control{\n    border-radius: 3px;\n    background-color: rgba(0, 0, 0, 0.09);\n    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.09) inset;\n    color: #FFFFFF;\n}\n.form-control:hover{\n    background-color: rgba(0,0,0,.16);\n}\n.form-control:focus{\n    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.04) inset;\n    background-color: rgba(0,0,0,0.23);\n    color: #FFFFFF;\n}\n.box .form input[type=\"text\"], .box .form input[type=\"password\"] {\n    border-radius: 3px;\n    border: 1px solid #444;\n    background-color: white;\n\tcolor: #333;\n    font-size: 16px;\n    height: 46px;\n    margin-bottom: 5px;\n    padding: 13px 12px;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".md-user-image {\n    border-radius: 50%;\n    width: 34px;\n}\n\nimg {\n    border: 0 none;\n    box-sizing: border-box;\n    height: auto;\n    max-width: 100%;\n    vertical-align: middle;\n}\n\ni {\n    vertical-align: middle;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 185,
	"./af.js": 185,
	"./ar": 192,
	"./ar-dz": 186,
	"./ar-dz.js": 186,
	"./ar-kw": 187,
	"./ar-kw.js": 187,
	"./ar-ly": 188,
	"./ar-ly.js": 188,
	"./ar-ma": 189,
	"./ar-ma.js": 189,
	"./ar-sa": 190,
	"./ar-sa.js": 190,
	"./ar-tn": 191,
	"./ar-tn.js": 191,
	"./ar.js": 192,
	"./az": 193,
	"./az.js": 193,
	"./be": 194,
	"./be.js": 194,
	"./bg": 195,
	"./bg.js": 195,
	"./bn": 196,
	"./bn.js": 196,
	"./bo": 197,
	"./bo.js": 197,
	"./br": 198,
	"./br.js": 198,
	"./bs": 199,
	"./bs.js": 199,
	"./ca": 200,
	"./ca.js": 200,
	"./cs": 201,
	"./cs.js": 201,
	"./cv": 202,
	"./cv.js": 202,
	"./cy": 203,
	"./cy.js": 203,
	"./da": 204,
	"./da.js": 204,
	"./de": 207,
	"./de-at": 205,
	"./de-at.js": 205,
	"./de-ch": 206,
	"./de-ch.js": 206,
	"./de.js": 207,
	"./dv": 208,
	"./dv.js": 208,
	"./el": 209,
	"./el.js": 209,
	"./en-au": 210,
	"./en-au.js": 210,
	"./en-ca": 211,
	"./en-ca.js": 211,
	"./en-gb": 212,
	"./en-gb.js": 212,
	"./en-ie": 213,
	"./en-ie.js": 213,
	"./en-nz": 214,
	"./en-nz.js": 214,
	"./eo": 215,
	"./eo.js": 215,
	"./es": 217,
	"./es-do": 216,
	"./es-do.js": 216,
	"./es.js": 217,
	"./et": 218,
	"./et.js": 218,
	"./eu": 219,
	"./eu.js": 219,
	"./fa": 220,
	"./fa.js": 220,
	"./fi": 221,
	"./fi.js": 221,
	"./fo": 222,
	"./fo.js": 222,
	"./fr": 225,
	"./fr-ca": 223,
	"./fr-ca.js": 223,
	"./fr-ch": 224,
	"./fr-ch.js": 224,
	"./fr.js": 225,
	"./fy": 226,
	"./fy.js": 226,
	"./gd": 227,
	"./gd.js": 227,
	"./gl": 228,
	"./gl.js": 228,
	"./gom-latn": 229,
	"./gom-latn.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 237,
	"./it.js": 237,
	"./ja": 238,
	"./ja.js": 238,
	"./jv": 239,
	"./jv.js": 239,
	"./ka": 240,
	"./ka.js": 240,
	"./kk": 241,
	"./kk.js": 241,
	"./km": 242,
	"./km.js": 242,
	"./kn": 243,
	"./kn.js": 243,
	"./ko": 244,
	"./ko.js": 244,
	"./ky": 245,
	"./ky.js": 245,
	"./lb": 246,
	"./lb.js": 246,
	"./lo": 247,
	"./lo.js": 247,
	"./lt": 248,
	"./lt.js": 248,
	"./lv": 249,
	"./lv.js": 249,
	"./me": 250,
	"./me.js": 250,
	"./mi": 251,
	"./mi.js": 251,
	"./mk": 252,
	"./mk.js": 252,
	"./ml": 253,
	"./ml.js": 253,
	"./mr": 254,
	"./mr.js": 254,
	"./ms": 256,
	"./ms-my": 255,
	"./ms-my.js": 255,
	"./ms.js": 256,
	"./my": 257,
	"./my.js": 257,
	"./nb": 258,
	"./nb.js": 258,
	"./ne": 259,
	"./ne.js": 259,
	"./nl": 261,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 261,
	"./nn": 262,
	"./nn.js": 262,
	"./pa-in": 263,
	"./pa-in.js": 263,
	"./pl": 264,
	"./pl.js": 264,
	"./pt": 266,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 266,
	"./ro": 267,
	"./ro.js": 267,
	"./ru": 268,
	"./ru.js": 268,
	"./sd": 269,
	"./sd.js": 269,
	"./se": 270,
	"./se.js": 270,
	"./si": 271,
	"./si.js": 271,
	"./sk": 272,
	"./sk.js": 272,
	"./sl": 273,
	"./sl.js": 273,
	"./sq": 274,
	"./sq.js": 274,
	"./sr": 276,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 276,
	"./ss": 277,
	"./ss.js": 277,
	"./sv": 278,
	"./sv.js": 278,
	"./sw": 279,
	"./sw.js": 279,
	"./ta": 280,
	"./ta.js": 280,
	"./te": 281,
	"./te.js": 281,
	"./tet": 282,
	"./tet.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 289,
	"./tzm-latn": 288,
	"./tzm-latn.js": 288,
	"./tzm.js": 289,
	"./uk": 290,
	"./uk.js": 290,
	"./ur": 291,
	"./ur.js": 291,
	"./uz": 293,
	"./uz-latn": 292,
	"./uz-latn.js": 292,
	"./uz.js": 293,
	"./vi": 294,
	"./vi.js": 294,
	"./x-pseudo": 295,
	"./x-pseudo.js": 295,
	"./yo": 296,
	"./yo.js": 296,
	"./zh-cn": 297,
	"./zh-cn.js": 297,
	"./zh-hk": 298,
	"./zh-hk.js": 298,
	"./zh-tw": 299,
	"./zh-tw.js": 299
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
webpackContext.id = 571;


/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<!--<form [formGroup]=\"cartForm\" (ngSubmit)=\"onSubmit()\">\n    <h2>Coffee Cart</h2>\n    <div>\n        <ul class=\"list-group\" formArrayName=\"cartCoffees\">\n            <table class=\"table\">\n                <tr>\n                    <th>Coffee</th>\n                    <th>Type</th>\n                    <th>Qty</th>\n                    <th>Comment</th>\n                    <th>Cost</th>\n                    <th>Delete</th>\n                    <th></th>\n                </tr>\n            </table>\n            <table class=\"table\">\n            <div *ngFor=\"let coffee of cartForm.controls['cartCoffees'].controls; let i = index\">\n                \n                    <tr formGroupName=\"{{i}}\">\n                        <td>\n                            <input type=\"text\" \n                                    class=\"form-control\"\n                                    formControlName=\"coffeeName\">\n                        </td>           \n                        <td>\n                            <input type=\"text\" \n                                    class=\"form-control\"\n                                    formControlName=\"coffeeType\">\n                        </td>\n                        <td>\n                            <input type=\"number\" \n                                    class=\"form-control\"\n                                    formControlName=\"qty\">\n                        </td>\n                    \n                        <td>\n                            <input type=\"text\" \n                                    class=\"form-control\"\n                                    formControlName=\"comment\">\n                        </td> \n                        <td>\n                            <input type=\"number\" \n                                    class=\"form-control\"\n                                    formControlName=\"price\">\n                        </td>\n                        \n                        <td><button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"delete(i)\">Delete</button></td> \n                    </tr> \n                        \n            </div>\n            </table>   \n        \n        </ul>\n        <div><input type=\"text\" \n                class=\"form-control\"\n                formControlName=\"customerName\"></div>\n        <div>Total: {{total}}</div>\n        \n        <div>\n            <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        </div>\n\n    </div>\n</form>-->\n\n\n<form [formGroup]=\"cartForm\" (ngSubmit)=\"onSubmit()\" (keydown.enter)=\"$event.preventDefault()\">\n<div class=\"container col-sm-12 col-md-10 col-md-offset-1\">\n\t<table formArrayName=\"cartCoffees\" id=\"cart\" class=\"table table-hover table-condensed\">\n    \t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th style=\"width:45%\" class=\"cart-header\">Product</th>\n\t\t\t\t\t\t\t<th style=\"width:12%\" class=\"cart-header\">Price</th>\n\t\t\t\t\t\t\t<th style=\"width:15%\" class=\"cart-header\">Quantity</th>\n\t\t\t\t\t\t\t<th style=\"width:21%\" class=\"text-center cart-header\">Subtotal</th>\n\t\t\t\t\t\t\t<th style=\"width:7%\" class=\"cart-header\"></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody\n\t\t\t\t\t *ngFor=\"let coffee of cartForm.controls['cartCoffees'].controls; let i = index\">\n\t\t\t\t\t\t<tr formGroupName=\"{{i}}\">\n\t\t\t\t\t\t\t<td data-th=\"Product\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 hidden-xs\"><img src={{cartForm.value.cartCoffees[i].imageUrl}} alt=\"...\" class=\"img-responsive\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\" style=\"padding-right:35px\">\n\t\t\t\t\t\t\t\t\t\t<h5 style=\"margin:5px;font-weight:300\">{{cartForm.value.cartCoffees[i].coffeeName}} ({{cartForm.value.cartCoffees[i].coffeeType}})</h5>\n\t\t\t\t\t\t\t\t\t\t<p><textarea type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"comment\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top:0;padding-bottom:0;background-color:white\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Comment here...\"></textarea></p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Price\" style=\"padding-top:15px\">{{cartForm.value.cartCoffees[i].price}}</td>\n\t\t\t\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t\t\t\t<!--<input type=\"number\" \n                                    class=\"form-control\"\n                                    formControlName=\"qty\"\n\t\t\t\t\t\t\t\t\tstyle=\"padding-top:8px\">-->\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\" style=\"padding: 0; padding-top: 2px\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn\" (click)=\"minus(i)\" style=\"padding: 0\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-minus-square fa-2x\"></i> \n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\" style=\"padding: 0\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"quant[1]\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control input-number\" \n\t\t\t\t\t\t\t\t\t\t\tvalue = {{cartForm.value.cartCoffees[i].qty}}\n\t\t\t\t\t\t\t\t\t\t\tmin=\"1\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: center;background-color:white;color:black\"\n\t\t\t\t\t\t\t\t\t\t\t#qtyInput\n\t\t\t\t\t\t\t\t\t\t\tdisabled> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\" style=\"padding: 0; padding-top: 2px; padding-right: 1px\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn\" (click)=\"plus(i)\" style=\"padding: 0\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-square fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Subtotal\" style=\"padding-top:15px\" class=\"text-center\">{{cartForm.value.cartCoffees[i].price * cartForm.value.cartCoffees[i].qty}}</td>\n\t\t\t\t\t\t\t<td class=\"\" data-th=\"\">\n\t\t\t\t\t\t\t\t<!--<button class=\"btn btn-info btn-sm\"><i class=\"fa fa-refresh\"></i></button>-->\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\" (click)=\"delete(i)\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t \n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr class=\"visible-xs\">\n\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Total: {{total}}</strong></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<!--<td><a href=\"#\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>-->\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t\t\t\t<td class=\"text-center\" >Total: {{total}}</td>\n\t\t\t\t\t\t\t<td><button type=\"submit\" class=\"btn btn-success\"\n\t\t\t\t\t\t\t [disabled]=\"cartItems.length <= 0\">Save</button></td>\n\t\t\t\t\t\t\t<!--<td><a class=\"btn btn-success btn-block\" type=\"submit\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>-->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n</div>\n</form>\n\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n                  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\"> \n    <div class=\"modal-content\" style=\"width:750px;height:475px;margin:0px;margin-left:-15%\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">USER ACCOUNT</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\t\t  \n\t\t<app-login (customerNameOutput)=\"onHasName($event)\"></app-login>\n\t\t\t\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<div class=\"col-sm-4 hidden-xs\">\n\t<img src={{user.imageUrl}} alt=\"...\" class=\"img-responsive\"/>\n\t<div>{{user.name}}</div>\n\t<div>{{user.email}}</div>\n\t<div>{{user.uid}}</div>\n</div>-->\n\n"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "\n\n<!--<div class=\"container\">\n<div class=\"col-md-5\">\n    <div class=\"form-area\">  \n        <form [formGroup]=\"coffeeForm\" (ngSubmit)=\"onSubmit()\">\n        <br style=\"clear:both\">\n                    <h3 style=\"margin-bottom: 25px; text-align: center;\">Form</h3>\n    \t\t\t\t\n            <img src={{imageUrl}} alt=\"...\" class=\"img-responsive\" *ngIf=\"!isNew\">\n\n            <div class=\"form-group\">\n              <input\n              type=\"text\" \n              class=\"form-control\" \n              id=\"name\" \n              placeholder=\"Coffee Name\"\n              FormControlName=\"name\">\n            </div>\n\n            <div class=\"form-group\">\n              <input\n              type=\"text\" \n              class=\"form-control\" \n              id=\"price\" \n              placeholder=\"Price\"\n              FormControlName=\"price\">\n            </div>\n\n            <div class=\"form-group\">\n              <span class=\"result\" *ngIf=\"data1.image\" >\n                <img [src]=\"data1.image\" \n                [width]=\"cropperSettings1.croppedWidth\" \n                [height]=\"cropperSettings1.croppedWidth\">\n              </span>\n              \n              <span>\n                <img-cropper [image]=\"data1\" [settings]=\"cropperSettings1\" (onCrop)=\"cropped($event)\"></img-cropper>\n              </span> \n                  \n            </div>\n\n        <button *ngIf=\"isNew\" (click)=\"createCoffee()\" type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\">Create</button>\n        <button *ngIf=\"!isNew\" (click)=\"updateCoffee()\" type=\"button\" id=\"submit\" name=\"submit\" class=\"btn btn-primary pull-right\">Edit</button>\n        </form>\n    </div>\n</div>\n</div>-->\n\n<form [formGroup]=\"coffeeForm\" (ngSubmit)=\"createCoffee()\">\n<div class=\"col-md-5\">\n<div class=\"product-title\">\n  <div class=\"img-middle\" align=\"middle\">\n      <img *ngIf=\"!uploaded\" \n        align=\"middle\" \n        alt=\"Simple Living Seneca Reclaimed Double 'X' Design Cocktail Table\" \n        class=\"img-responsive product-img\" \n        src={{imageUrl}}>  \n      <img [src]=\"data1.image\" *ngIf=\"data1.image && uploaded\"\n      [width]=\"cropperSettings1.croppedWidth\" \n      [height]=\"cropperSettings1.croppedHeight\">\n  </div>\n\n  <div class=\"product-info\" style=\"margin-top:5px;\">\n      \n      <div class=\"row\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Category</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n          <select class=\"form-control\"\n            formControlName=\"category\"\n            [(ngModel)]=\"selectedCategory\">\n            <option *ngFor=\"let category of categories; let i = index;\" \n                    [ngValue]=\"category.$key\">{{category.name}}</option>\n          </select>\n        </div>      \n      </div>\n      <div class=\"row form-group\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Type</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n          <select class=\"form-control\" \n            formControlName=\"type\"\n            [(ngModel)]=\"selectedType\">\n            <option *ngFor=\"let type of types\" \n              [ngValue]=\"type.name\"\n              [attr.selected]=\"type.name == name2 ? true : null\">{{type.name}}</option>\n          </select>\n        </div>      \n      </div>\n      \n      <div class=\"row\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Name</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n            <div class=\"product-title form-group\" style=\"margin:0px\">\n              <input class=\"form-control ng-touched ng-dirty ng-invalid\" \n                formControlName=\"name\" \n                id=\"name\" \n                placeholder=\"Name...\" \n                type=\"text\"\n                style=\"padding-left:5px\"\n                 maxlength=\"13\"> \n            </div>    \n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding:0px;margin-bottom:3px\">\n        <div class=\"col-md-4\">Price</div>\n        <div class=\"col-md-8\" style=\"padding:0px\">\n            <div class=\"product-title form-group\" style=\"margin:0px\">\n              <input class=\"form-control ng-touched ng-dirty ng-invalid\" \n                formControlName=\"price\" \n                id=\"price\" \n                placeholder=\"Price...\" \n                type=\"number\"\n                style=\"padding-left:5px\"\n                min=\"1\"\n                max=\"99999\"> \n            </div>    \n        </div>\n      </div>\n\n      \n      <!--<div class=\"col-md-4 pull-right\" style=\"padding: 0px; text-align: right; margin-top: 0px; margin-bottom: 2px\" disabled=\"\">\n          \n          <div class=\"col-md-4\" style=\"padding: 0; padding-top: 2px; padding-right:5px\">\n              <a class=\"btn\" style=\"padding:0px;color:#444;\">\n                  <i class=\"fa fa-minus-square fa-2x\"></i>\n              </a>\n          </div>\n          <div class=\"col-md-4\" style=\"padding: 0\">\n              <input \n                class=\"form-control input-number\" \n                min=\"1\" \n                name=\"quant[1]\" \n                style=\"text-align: center;\" \n                type=\"text\" \n                disabled=\"\">\n          </div>\n          <div class=\"col-md-4\" style=\"padding: 0; padding-top: 2px; padding-left: 0px;\">\n              <a class=\"btn\" style=\"padding: 0;color:#444;\">\n                  <i class=\"fa fa-plus-square fa-2x\"></i>\n              </a>\n          </div>\n      </div>-->\n\n      <!--<div class=\"product-comment\" style=\"padding: 0px\">\n          <textarea class=\"form-control ng-untouched ng-pristine ng-valid\" disabled=\"\" placeholder=\"please leave a comment here...\" style=\"min-width: 100%\"></textarea>\n      </div>-->\n      <!--<div class=\"product-price-wrapper\" style=\"margin-top:2px\">\n          <div class=\"col-md-8\" style=\"padding: 0px\">\n            <div class=\"col-md-2\" style=\"margin-top:5px;padding:0px\">THB</div>\n            <div class=\"col-md-10\" style=\"padding:0px\">\n              <div class=\"product-price standard\" \n                style=\"margin-right:12px\">\n                <input class=\"form-control ng-touched ng-dirty ng-invalid\" \n                  formControlName=\"price\" \n                  id=\"price\" \n                  placeholder=\"Price...\" \n                  type=\"text\" \n                  style=\"padding-left:5px;\"></div>\n            </div>\n          </div>\n          <div class=\"col-md-4\" style=\"padding: 0px; text-align: right\">\n              <button class=\"btn btn-success\" type=\"submit\">\n                  <i class=\"fa fa-coffee\" style=\"font-weight: bold;\" > Upload</i>\n              </button>\n          </div>\n      </div>-->\n\n  </div>\n\n  </div>\n</div>\n\n<div class=\"col-md-7\">\n    <span>\n      <img-cropper #cropper [image]=\"data1\" [settings]=\"cropperSettings1\" (onCrop)=\"cropped($event)\"></img-cropper>\n    </span>\n</div>\n<div class=\"row\" style=\"padding: 5px;padding-right: 20px\">\n    <button class=\"btn btn-default pull-right\" type=\"submit\" [disabled]=\"!coffeeForm.valid || notReady || spinning\">\n        <i class=\"fa fa-coffee\" style=\"font-weight: bold;\" *ngIf=\"!spinning\"></i>\n        <i class=\"fa fa-spinner fa-spin fa-fw\" aria-hidden=\"true\" *ngIf=\"spinning\"></i>\n        Upload\n    </button>\n</div>\n</form>\n<!--<button (click)=\"test()\">Test</button>-->"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<div style=\"border-bottom: thin solid #444;\">\n<div style=\"padding:5px\">\n  <a [class.active]=\"allStatus\" \n  (click)=filterAll()\n  style=\"color: #444\">ALL\n  </a>\n</div>\n\n<div *ngFor=\"let category of categories\"\n style=\"padding:5px\">\n <a [class.active]=\"activeStatus[category.$key]\" \n (click)=filter(category)\n style=\"color:#444\">{{category.name | uppercase}}</a>\n</div>\n\n</div>\n<!--<h5 style=\"color: #777;\">TYPES</h5>-->\n\n<div style=\"border-bottom: thin solid #444;\">\n      <div class=\"checkbox\" *ngFor=\"let type of types\">\n        <label>\n          <input type=\"checkbox\" [(ngModel)]=\"type.status\"\n              (change)=\"boxChanges($event.target.checked, type.name)\">\n          <span style=\"font-weight: 200;\">{{ type.name | uppercase}}</span>\n        </label>\n      </div>\n</div>\n\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"thumbnail\" style=\"height: 100%; width: 100%\">\n      \n            <div class=\"col\">\n            <img src={{coffee?.url}} \n                alt=\"...\" \n                class=\"img-responsive\" \n                style=\"min-height: 200px; \n                        width: 100%; \n                        display: block;\n                        padding: 0px;\n                        margin: 0px\">\n            </div>\n      \n        <div class=\"caption\">\n            <h3 style=\"margin: 0px\">{{coffee?.name}}</h3>\n            <p class=\"description\">{{coffee?.status}}</p>\n        \n        <div class=\"row\">\n            <div class=\"col-md-6\">{{coffee?.price | currency:'THB':true}}</div>\n            <div class=\"input-group col-md-6\" style=\"padding-right: 5px\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default btn-number\" (click)=\"minus()\">\n                        <span class=\"glyphicon glyphicon-minus\"></span>\n                    </button>\n                </span>\n                <input type=\"text\" name=\"quant[1]\" class=\"form-control input-number\" value={{coffeeCount}} min=\"1\">\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default btn-number\" (click)=\"plus()\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                </span>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"padding: 5px\">\n            <textarea class=\"form-control\" style=\"min-width: 100%\" [(ngModel)]='comment'></textarea>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n                <button class=\"btn btn-success pull-left\" type=\"button\" (click)=\"add()\">Add to cart</button>\n            </div>\n            <div class=\"col-md-5\" style=\"padding-right: 0px\">\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-warning pull-right\" type=\"button\" (click)=\"editCoffee()\">\n                        <span class=\"glyphicon glyphicon-pencil\"></span>\n                    </button>\n                </div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"deleteCoffee()\">\n                        <span class=\"glyphicon glyphicon-remove\"></span>\n                    </button>\n                </div>\n            </div>\n           \n            \n            <div *ngIf=\"added\">Coffee has been added</div>\n        </div>\n\n        </div>\n       \n    </div>-->\n\n\n\n<div [ngClass]=\"!mouseOver ? 'product-title' : 'product-title custom'\" \n    id=\"product-boarder\" \n    (mouseover)='over()'\n    (mouseleave)='out()'>\n    \n    \n    <div class=\"img-middle\">\n        <img alt=\"Simple Living Seneca Reclaimed Double 'X' Design Cocktail Table\" \n        src= {{coffee?.url}} \n        class=\"img-responsive product-img \"\n        align=\"middle\" \n        style=\"border-radius: 8px;padding-top:2px\">\n    </div>\n\n    <div class=\"product-info\" style=\"height:200px\">\n        <div *ngIf=\"mouseOver\" style=\"height:5px\">\n            <div class=\"x-container\" (click)=\"deleteCoffee()\">\n                <i class=\"fa fa-times-rectangle-o\" aria-hidden=\"true\"></i>\n            </div>\n            <br>\n            <div class=\"pencil-container\"  (click)=\"editCoffee()\">\n                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n            </div>\n        </div>\n        \n        <div style=\"font-size: 11px;\">({{coffee?.type}})</div>\n        <div class=\"col-md-6 pull-left\" style=\"padding: 0px;font-weight: 200;\">\n            <div class=\"product-title pull-left\">{{coffee?.name}} </div>    \n        </div>\n        <div class=\"col-md-6 pull-right\"\n            style=\"padding: 0px; text-align: right; margin-top: 5px; margin-bottom: 2px\">\n            \n            <div class=\"col-md-3\" style=\"padding: 0; padding-top: 2px\">\n                <a class=\"btn\" (click)=\"minus()\" style=\"padding: 0\">\n                    <i class=\"fa fa-minus-square fa-2x\"></i>\n                </a>\n            </div>\n            <div class=\"col-md-6\" style=\"padding: 0\">\n                <input type=\"text\" name=\"quant[1]\" \n                    class=\"form-control input-number\" \n                    [(ngModel)]=\"coffeeCount\"\n                    min=\"1\"\n                    style=\"text-align: center;\">\n            </div>\n            <div class=\"col-md-3\" style=\"padding: 0; padding-top: 2px; padding-right: 1px\">\n                <a class=\"btn\" (click)=\"plus()\" style=\"padding: 0\">\n                    <i class=\"fa fa-plus-square fa-2x\"></i>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"product-comment\" style=\"padding: 0px\">\n            <textarea class=\"form-control\" \n                style=\"min-width: 100%\" \n                [(ngModel)]='comment'\n                placeholder=\"please leave a comment here...\"></textarea>\n        </div>\n        <div class=\"product-price-wrapper\">\n            <div class=\"col-md-6\" style=\"padding: 0px;\">\n                <div class=\"product-price standard\" style=\"font-weight: 400;\">{{ coffee?.price | currency:'THB':true}}</div>\n            </div>\n            <div class=\"col-md-6\" \n                style=\"padding: 0px; text-align: right\">\n                <button type=\"button\" \n                    class=\"btn btn-default\" \n                    (click)=\"add()\"\n                    *ngIf=\"mouseOver\">\n                    <i class=\"fa fa-shopping-cart\" style=\"font-weight: bold;font-weight: 500;\"> Add</i>\n                </button>\n                <!--<button class=\"btn btn-default pull-right\" type=\"button\" (click)=\"deleteCoffee()\">\n                    <span class=\"glyphicon glyphicon-remove\"></span>\n                </button>-->\n            </div>\n        </div>\n\n    </div>\n      \n</div>\n\n<div *ngFor=\"let alert of alerts\">\n  <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><span [innerHtml]=\"alert.msg\"></span></alert>\n</div>\n\n\n\n\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\n\n  <div class=\"row\">\n    <!--<div class=\"col-md-2 col-lg-2\">\n     \n        <div class=\"refinement-group\" style=\"border-right: 1px solid #DDD\">\n          \n          <div style=\"color: black;font-size:14px;\">MENUS</div>\n         \n          <category-selector (filter)=\"onFilter($event)\"></category-selector>\n        </div>\n\n    </div>-->\n\n    \n   \n            <!--<div (filter)=\"onFilter($event)\">\n            </div>-->\n\n            <div class=\"col-md-3 col-lg-3\" \n                *ngFor=\"let coffee of coffees | coffeeFilter:filterArg; let i = index;\"\n                style=\"background-color: white; height: 425px;\">\n                <coffee-component [coffee]=\"coffee\" (editCoffeeOutput)=\"onEdit($event)\"></coffee-component>\n            </div>\n            \n            <div class=\"col-md-3 col-lg-3\" style=\"margin-top:10px;\">\n               <a (click)=\"newCoffee()\"\n                style=\"color: #444;font-weight: 300;\">\n                <i class=\"fa fa-plus-square-o fa-2x\"></i>&nbsp; <u>New Coffee</u>\n              </a>         \n            </div>\n     \n    \n  </div><!--/row-->\n \n  <hr>\n\n  <footer>\n    <div>© Arm Company 2017</div>\n  </footer>\n\n</div><!--/.container-->\n\n\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n                  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\"> \n    <div class=\"modal-content\" style=\"width:750px;height:475px;margin:0px;margin-left:-15%\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">ADD NEW COFFEE</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-coffee-edit (hideModal)=\"hideModal()\"></app-coffee-edit>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar-full\">\n    <div id=\"navbar\">\n       <!--    \n        navbar-default can be changed with navbar-ct-blue navbar-ct-azzure navbar-ct-red navbar-ct-green navbar-ct-orange  \n        -->\n        <nav class=\"navbar navbar-ct-azzure navbar-fixed-top\" role=\"navigation\"\n            style=\"background-color: black;\">\n          \n          <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand navbar-brand-logo\" style=\"margin:0px\" [routerLink]=\"['/']\">\n                    <!--<div class=\"logo\">\n                    <img src=\"https://firebasestorage.googleapis.com/v0/b/oasit-b6bc8.appspot.com/o/bee1_85V_icon.ico?alt=media&token=b806fa13-ff6e-4277-9a05-9902a6fb67f6\">\n                    </div>-->\n                    <div class=\"brand\">  \n                       <span style=\"font-size:30px;cursor:pointer;color:white;margin-left:25px;\" \n                       (click)=\"openNav()\">&#9776;</span>\n                    </div>\n                    <div class=\"brand\">  O.A.SIT \n                        <p style=\"font-size: 12px\">SUANPHUENG</p>\n                    </div>\n              </a>\n            </div>\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              \n              <ul class=\"nav navbar-nav\">  \n                  \n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"javascript:void(0);\" data-toggle=\"search\" class=\"hidden-xs\">\n                            <i class=\"pe-7s-search\"></i>\n                            <!--<p>Search</p>-->\n                        </a>\n                    </li>\n\n                    <li>\n                        <a [routerLink]=\"['/queue']\">\n                            <i class=\"pe-7s-note2\"></i>\n                            <!--<p>Queue</p>-->\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/cart']\">\n                            <i class=\"pe-7s-cart\">\n                                <span class=\"label\" style=\"font-size: 11px;\">{{coffeeCounts}}</span>\n                            </i>\n                            <!--<p>Cart</p>-->\n                        </a>\n                    </li> \n                    <li class=\"dropdown\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"pe-7s-user\"></i>\n                                <!--<p>Account <b class=\"caret\"></b></p>-->\n                            </a>\n                          <ul class=\"dropdown-menu\">\n                            <li><a (click)=\"login()\" *ngIf=\"!loginStatus\">Login/ Signup</a></li>\n                            <li><a (click)=\"accountLogin()\"  *ngIf=\"loginStatus\">{{customerName}}</a></li>\n                            <li><a (click)=\"logout()\">Logout</a></li>\n                          </ul>\n                    </li>\n               </ul>\n               <form class=\"navbar-form navbar-right navbar-search-form\" role=\"search\">                  \n                 <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                 </div> \n              </form>\n              \n            </div>\n          </div>\n        </nav>\n       <!--<div class=\"blurred-container\">\n            <div class=\"img-src\" style=\"background-image: url('images/bg.jpg')\"></div>\n        </div>-->\n    </div>\n\n</div> \n\n<div id=\"mySidenav\" \n    class=\"sidenav\" \n    style=\"margin-top: 55px; \n        font-weight: 200; \n        text-align: left; \n        padding-top:35px;\"\n        (mouseleave)=\"menuOut()\">\n  <category-selector (filter)=\"onFilter($event)\"></category-selector>\n</div>\n\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n                  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\"> \n    <div class=\"modal-content\" style=\"width:750px;height:475px;margin:0px;margin-left:-15%\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">USER ACCOUNT</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\t\t  \n\t\t<app-login (customerNameOutput)=\"onHasName($event)\" (modalOff)=\"hideModal()\"></app-login>\n\t\t\t\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "    \n    <div class=\"box\">\n\t\t\t<div class=\"content\">\n\t\t\t\t<div class=\"col-md-6 login\" style=\"margin-bottom:15px\">\n\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t<!--<a class=\"circle github\" href=\"/auth/github\">\n\t\t\t\t\t\t\t<i class=\"fa fa-github fa-fw\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a id=\"google_login\" class=\"circle google\" href=\"/auth/google_oauth2\">\n\t\t\t\t\t\t\t<i class=\"fa fa-google-plus fa-fw\"></i>\n\t\t\t\t\t\t</a>-->\n\t\t\t\t\t\t<a id=\"facebook_login\" class=\"circle facebook\" \n\t\t\t\t\t\t\t(click)=\"facebookLogin()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-facebook fa-fw\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"division\">\n\t\t\t\t\t\t<div class=\"line l\"></div>\n\t\t\t\t\t\t\t<span>or</span>\n\t\t\t\t\t\t<div class=\"line r\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"error\"></div>\n\t\t\t\t\t<h4 class=\"modal-title\" *ngIf=\"newAccount\">Login with</h4>\n\t\t\t\t\t<h4 class=\"modal-title\" *ngIf=\"!newAccount\">Register with</h4>\n\t\t\t\t\t<div class=\"form loginBox\" *ngIf=\"newAccount\">\n\t\t\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\t\t\t\t\t\t<input formControlName=\"email\" class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\">\n\t\t\t\t\t\t<input formControlName=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\">\n\t\t\t\t\t\t<input class=\"btn btn-default btn-login\" type=\"submit\" value=\"Login\">\n\t\t\t\t\t\t<!--<input class=\"btn btn-default btn-login\" type=\"button\" value=\"Logout\" (click)=\"logout()\">-->\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form\" *ngIf=\"!newAccount\">\n\t\t\t\t\t\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"email\" type=\"text\" placeholder=\"Email\" name=\"email\">\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\">\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"confirm\" type=\"password\" placeholder=\"Repeat Password\" name=\"password_confirmation\">\n\t\t\t\t\t\t<input class=\"btn btn-default btn-register\"\n               type=\"submit\" value=\"Create account\" \n               name=\"commit\" (click)=\"register()\"\n               [disabled]=\"posted\">\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 login\">\n\t\t\t\t\t<h4 class=\"modal-title\"> Guest account </h4>\n\t\t\t\t\t<div class=\"form loginBox\">\n\t\t\t\t\t\t<!--<form method=\"post\" action=\"/login\" accept-charset=\"UTF-8\">-->\n\t\t\t\t\t\t<input id=\"email\" class=\"form-control\" type=\"text\" placeholder=\"Name\" \t\tname=\"name\" #guestInput>\n\t\t\t\t\t\t<input class=\"btn btn-default btn-login\" \n\t\t\t\t\t\t\ttype=\"button\" \n\t\t\t\t\t\t\tvalue=\"Login as guest\"\n\t\t\t\t\t\t\t(click)=\"loginAsGuest(guestInput.value)\">\n\t\t\t\t\t\t<!--</form>-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n    <div class=\"forgot login-footer\" *ngIf=\"newAccount\">\n\t\t\t\t<span>Looking to \n\t\t\t\t\t\t<a (click)=\"toggleLogin()\">create an account</a>\n\t\t\t\t?</span>\n\t\t\t</div>\n\t\t\t<div class=\"forgot register-footer\" *ngIf=\"!newAccount\">\n\t\t\t\t\t<span>Already have an account?</span>\n\t\t\t\t\t<a (click)=\"toggleLogin()\" >Login</a>\n\t\t\t</div>"

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container col-sm-12 col-md-10 col-md-offset-1\">\n\t<!--<table class=\"table table-hover table-condensed\">\n    \t\t\t\t<thead>\n                        \n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th style=\"width:45%\" class=\"cart-header\">Product</th>\n\t\t\t\t\t\t\t<th style=\"width:12%\" class=\"cart-header\">Price</th>\n\t\t\t\t\t\t\t<th style=\"width:15%\" class=\"cart-header\">Quantity</th>\n\t\t\t\t\t\t\t<th style=\"width:21%\" class=\"text-center cart-header\">Subtotal</th>\n\t\t\t\t\t\t\t<th style=\"width:7%\" class=\"cart-header\"></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody  *ngFor=\"let queue of queues\">\n\t\t\t\t\t\t<tr *ngFor=\"let cartCoffee of queue.cartCoffees\">\n\t\t\t\t\t\t\t<td data-th=\"Product\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 hidden-xs\"><img src=\"\" alt=\"...\" class=\"img-responsive\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\" style=\"padding-right:35px\">\n\t\t\t\t\t\t\t\t\t\t<h5 style=\"margin:5px;font-weight:300\">{{cartCoffee.coffeeName}} {{cartCoffee.coffeeType}}</h5>\n\t\t\t\t\t\t\t\t\t\t<p><textarea type=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top:0;padding-bottom:0;background-color:white\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Comment here...\">{{cartCoffee.comment}}</textarea></p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Price\" style=\"padding-top:15px\">13</td>\n\t\t\t\t\t\t\t<td data-th=\"Quantity\">\n                                    {{cartCoffee.qty}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Subtotal\" style=\"padding-top:15px\" class=\"text-center\"></td>\n\t\t\t\t\t\t\t<td class=\"\" data-th=\"\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-sm\"><i class=\"fa fa-refresh\"></i></button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\" (click)=\"delete(i)\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t \n\t\t\t\t\t</tbody>\n\n\t\t\t\t</table>-->\n\n                    <div class=\"panel panel-default\" *ngFor=\"let queue of queues; let i = index\">\n                        <div class=\"panel-heading\">\n                           \n                                \n                                \n                                <div class=\"chat_user_avatar\">\n                                    <img *ngIf=\"queue?.customerImage != null\" src={{queue?.customerImage}} class=\"md-user-image\">\n                                    <i class=\"fa fa-user-circle fa-2x\" aria-hidden=\"true\" *ngIf=\"queue?.customerImage == null\"></i>    \n                                     <span> &nbsp; {{queue.customerName}}</span>\n                                     <span> &nbsp; (Status: Ready) </span>\n                                     <button class=\"btn btn-danger btn-sm\" \n                                      (click)=\"deleteQueue(queue.$key)\"\n                                      style=\"float:right\"><i class=\"fa fa-trash-o\"></i></button>               \n                                </div>\n                     \n                                \n                        </div>\n                        <div class=\"panel-body\" >\n                             \n                        <div class=\"chat_message_wrapper chat_message_right\" *ngFor=\"let cartCoffee of queue.cartCoffees\">\n                                \n                                <ul class=\"chat_message\">\n                                    <li>\n                                        <p>\n                                            {{cartCoffee.coffeeName}}\n                                            <span class=\"chat_message_time\">13:34</span>\n                                        </p>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                        </div>\n\n</div>\n<!--</form>-->\n\n\n\n\n"

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(23);
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
        var queue = { customerName: cart.customerName, customerImage: cart.customerImage, cartCoffees: cart.cartCoffees };
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["e" /* FirebaseRef */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === "function" && _b || Object])
], QueueService);

var _a, _b;
//# sourceMappingURL=/Users/arm/Documents/projects/oasit/OASIT-Project/oasit/src/queue.service.js.map

/***/ })

},[649]);
//# sourceMappingURL=main.bundle.js.map