import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class TestServiceModuleService {
    constructor() { }
}
TestServiceModuleService.ɵfac = function TestServiceModuleService_Factory(t) { return new (t || TestServiceModuleService)(); };
TestServiceModuleService.ɵprov = ɵɵdefineInjectable({ token: TestServiceModuleService, factory: TestServiceModuleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TestServiceModuleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class TestServiceModuleComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestServiceModuleComponent.ɵfac = function TestServiceModuleComponent_Factory(t) { return new (t || TestServiceModuleComponent)(); };
TestServiceModuleComponent.ɵcmp = ɵɵdefineComponent({ type: TestServiceModuleComponent, selectors: [["dev-testServiceModule"]], decls: 2, vars: 0, template: function TestServiceModuleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " test-service-module works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TestServiceModuleComponent, [{
        type: Component,
        args: [{
                selector: 'dev-testServiceModule',
                template: `
    <p>
      test-service-module works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class TestComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponentComponent.ɵfac = function TestComponentComponent_Factory(t) { return new (t || TestComponentComponent)(); };
TestComponentComponent.ɵcmp = ɵɵdefineComponent({ type: TestComponentComponent, selectors: [["dev-test-component"]], decls: 2, vars: 0, template: function TestComponentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "test-component works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TestComponentComponent, [{
        type: Component,
        args: [{
                selector: 'dev-test-component',
                templateUrl: './test-component.component.html',
                styleUrls: ['./test-component.component.css']
            }]
    }], function () { return []; }, null); })();

class TestServiceModuleModule {
}
TestServiceModuleModule.ɵmod = ɵɵdefineNgModule({ type: TestServiceModuleModule });
TestServiceModuleModule.ɵinj = ɵɵdefineInjector({ factory: function TestServiceModuleModule_Factory(t) { return new (t || TestServiceModuleModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TestServiceModuleModule, { declarations: [TestServiceModuleComponent, TestComponentComponent], exports: [TestServiceModuleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TestServiceModuleModule, [{
        type: NgModule,
        args: [{
                declarations: [TestServiceModuleComponent, TestComponentComponent],
                imports: [],
                exports: [TestServiceModuleComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of test-service-module
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TestServiceModuleComponent, TestServiceModuleModule, TestServiceModuleService };
//# sourceMappingURL=test-service-module.js.map
