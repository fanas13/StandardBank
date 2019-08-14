"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var phonebook_service_1 = require("./phonebook.service");
describe('PhonebookService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(phonebook_service_1.PhonebookService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=phonebook.service.spec.js.map