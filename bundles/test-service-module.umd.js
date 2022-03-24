(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('test-service-module', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['test-service-module'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var TestServiceModuleService = /** @class */ (function () {
        function TestServiceModuleService() {
        }
        return TestServiceModuleService;
    }());
    TestServiceModuleService.ɵfac = function TestServiceModuleService_Factory(t) { return new (t || TestServiceModuleService)(); };
    TestServiceModuleService.ɵprov = i0.ɵɵdefineInjectable({ token: TestServiceModuleService, factory: TestServiceModuleService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestServiceModuleService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var TestServiceModuleComponent = /** @class */ (function () {
        function TestServiceModuleComponent() {
        }
        TestServiceModuleComponent.prototype.ngOnInit = function () {
        };
        return TestServiceModuleComponent;
    }());
    TestServiceModuleComponent.ɵfac = function TestServiceModuleComponent_Factory(t) { return new (t || TestServiceModuleComponent)(); };
    TestServiceModuleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestServiceModuleComponent, selectors: [["dev-testServiceModule"]], decls: 2, vars: 0, template: function TestServiceModuleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " test-service-module works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestServiceModuleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'dev-testServiceModule',
                        template: "\n    <p>\n      test-service-module works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var TestComponentComponent = /** @class */ (function () {
        function TestComponentComponent() {
        }
        TestComponentComponent.prototype.ngOnInit = function () {
        };
        return TestComponentComponent;
    }());
    TestComponentComponent.ɵfac = function TestComponentComponent_Factory(t) { return new (t || TestComponentComponent)(); };
    TestComponentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestComponentComponent, selectors: [["dev-test-component"]], decls: 2, vars: 0, template: function TestComponentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "test-component works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestComponentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'dev-test-component',
                        templateUrl: './test-component.component.html',
                        styleUrls: ['./test-component.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var TestServiceModuleModule = /** @class */ (function () {
        function TestServiceModuleModule() {
        }
        return TestServiceModuleModule;
    }());
    TestServiceModuleModule.ɵmod = i0.ɵɵdefineNgModule({ type: TestServiceModuleModule });
    TestServiceModuleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TestServiceModuleModule_Factory(t) { return new (t || TestServiceModuleModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TestServiceModuleModule, { declarations: [TestServiceModuleComponent, TestComponentComponent], exports: [TestServiceModuleComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TestServiceModuleModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TestServiceModuleComponent, TestComponentComponent],
                        imports: [],
                        exports: [TestServiceModuleComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of test-service-module
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TestServiceModuleComponent = TestServiceModuleComponent;
    exports.TestServiceModuleModule = TestServiceModuleModule;
    exports.TestServiceModuleService = TestServiceModuleService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-service-module.umd.js.map
