"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = require("@angular/cdk/layout");
var testing_1 = require("@angular/core/testing");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var main_nav_component_1 = require("./main-nav.component");
describe('MainNavComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [main_nav_component_1.MainNavComponent],
            imports: [
                animations_1.NoopAnimationsModule,
                layout_1.LayoutModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(main_nav_component_1.MainNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=main-nav.component.spec.js.map