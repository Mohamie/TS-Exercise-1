"use strict";
var Click;
(function (Click) {
    Click[Click["REGISTER"] = 0] = "REGISTER";
    Click[Click["TERMS"] = 1] = "TERMS";
})(Click || (Click = {}));
var FormControl;
(function (FormControl) {
    FormControl[FormControl["FORNAMES"] = 0] = "FORNAMES";
    FormControl[FormControl["SURNAME"] = 1] = "SURNAME";
    FormControl[FormControl["NICKNAME"] = 2] = "NICKNAME";
    FormControl[FormControl["EMAIL"] = 3] = "EMAIL";
    FormControl[FormControl["PASSWORD"] = 4] = "PASSWORD";
    FormControl[FormControl["CONFIRMPASSWORD"] = 5] = "CONFIRMPASSWORD";
})(FormControl || (FormControl = {}));
var Message;
(function (Message) {
    Message[Message["SUCCESS"] = 0] = "SUCCESS";
    Message[Message["ERROR"] = 1] = "ERROR";
})(Message || (Message = {}));
/// <reference path="Click.ts" />
/// <reference path="FormControl.ts" />
/// <reference path="Message.ts" />
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.getCheckboxValue = function () {
        var inputElement = document.getElementById('terms');
        return inputElement.checked;
    };
    Utility.getInputValue = function (elementId) {
        var inputElement = document.getElementById(elementId);
        return inputElement.value;
    };
    Utility.setOnClickEvent = function (elementID, clickedElement) {
        var _this = this;
        var inputElement = document.getElementById(elementID);
        if (clickedElement === Click.TERMS) {
            inputElement.addEventListener('click', function () {
                if (_this.getCheckboxValue()) {
                    document.getElementById('register').removeAttribute('disabled');
                }
                else {
                    document.getElementById('register').setAttribute('disabled', 'true');
                }
            });
        }
        if (clickedElement === Click.REGISTER) {
            inputElement.addEventListener('click', function () {
                _this.formValidation();
            });
        }
    };
    Utility.formValidation = function () {
        //declarations
        var fornames = this.getInputValue('fornames');
        var surname = this.getInputValue('surname');
        var nickname = this.getInputValue('nickname');
        var email = this.getInputValue('email');
        var password = this.getInputValue('password');
        var confirmPassword = this.getInputValue('confirmPassword');
        //validations
        this.validateForm(fornames, FormControl.FORNAMES);
        this.validateForm(surname, FormControl.SURNAME);
        this.validateForm(nickname, FormControl.NICKNAME);
        this.validateForm(email, FormControl.EMAIL);
        this.validateForm(password, FormControl.PASSWORD);
        this.validateForm(password, FormControl.CONFIRMPASSWORD, confirmPassword);
    };
    Utility.validateForm = function (inputValue, formControl, confirmPassword) {
        switch (formControl) {
            case FormControl.FORNAMES:
                {
                    //requied
                    if (inputValue.length === 0) {
                        this.printMessage("Invalid Fornames", Message.ERROR);
                    }
                    else {
                        this.printMessage("Forname Validated", Message.SUCCESS);
                    }
                    break;
                }
            case FormControl.SURNAME:
                {
                    //required
                    if (inputValue.length < 2) {
                        this.printMessage("Invalid Surname", Message.ERROR);
                    }
                    else {
                        this.printMessage("Surname Validated", Message.SUCCESS);
                    }
                    break;
                }
            case FormControl.NICKNAME:
                {
                    //not required
                    break;
                }
            case FormControl.EMAIL:
                {
                    var reg = /@/gi;
                    if (inputValue.length < 4 || inputValue.search(reg) === -1) {
                        this.printMessage("Invalid Email", Message.ERROR);
                    }
                    else {
                        this.printMessage("Email Validated", Message.SUCCESS);
                    }
                    break;
                }
            case FormControl.PASSWORD:
                {
                    if (inputValue.length < 4) {
                        this.printMessage("Invalid Password", Message.ERROR);
                    }
                    else {
                        this.printMessage("Password Validated", Message.SUCCESS);
                    }
                    break;
                }
            case FormControl.CONFIRMPASSWORD:
                {
                    //validate passwords
                    if (inputValue.length > 0) {
                        if (inputValue === confirmPassword) {
                            this.printMessage("Confirm Password Validated", Message.SUCCESS);
                        }
                        else {
                            this.printMessage("Confirm Password does not match Password", Message.ERROR);
                        }
                    }
                    break;
                }
        }
    };
    Utility.printMessage = function (message, messageInfo) {
        if (messageInfo === Message.SUCCESS) {
            console.log(message);
        }
        else {
            console.error(message);
        }
    };
    return Utility;
}());
var ArrayUtility = /** @class */ (function () {
    function ArrayUtility() {
    }
    ArrayUtility.runArrayMethods = function () {
        var _this = this;
        document.getElementById('arrays').addEventListener('click', function () {
            _this.numbersMethod();
            _this.namesMethod();
        });
    };
    ArrayUtility.numbersMethod = function () {
        console.log('--------------------------------------------------------');
        console.log('Numbers Arrays');
        console.log('--------------------------------------------------------');
        var numbers = [89, 5, 56, 102, 7];
        console.log("Original Array: " + numbers);
        var result = numbers.filter(function (element) { return element > 50; });
        console.log("Numbers greater than '50': " + result);
        console.log();
        var numbersTwo = [89, 5, 56, 102, 7];
        console.log("Original Array: " + numbersTwo);
        numbersTwo.pop();
        console.log("After Removing Last Number: " + numbersTwo);
        console.log();
        var numbersThree = [89, 5, 56, 102, 7];
        console.log("Original Array: " + numbersThree);
        numbersThree.push(78);
        console.log("After Pushing '78' To The Array: " + numbersThree);
        console.log();
        var numbersFour = [89, 5, 56, 102, 7];
        console.log("Original Array: " + numbersFour);
        console.log("Index of number '5': " + numbersThree.indexOf(5));
        console.log();
        var numbersFive = [89, 5, 56, 102, 7];
        console.log("Original Array: " + numbersFive);
        numbersFive.unshift(14, 67);
        console.log("After adding '14' and '67' to the beginning: " + numbersFive);
        console.log();
        var numbersSix = [1, 2, 3];
        var letters = ['a', 'b', 'c'];
        console.log("Original Arrays: " + numbersSix + " \n" + letters);
        console.log("After combining arrays: " + numbersSix.toString().concat(letters.toString()));
        console.log();
        console.log('--------------------------------------------------------');
    };
    ArrayUtility.namesMethod = function () {
        console.log('--------------------------------------------------------');
        console.log('Name Arrays');
        console.log('--------------------------------------------------------');
        var names = ["John", "Sarah", "Beth", "Adam", "Peter"];
        console.log("Original Array: " + names);
        names.splice(2, 2, "Cindy", "Zoe");
        console.log("Array after replacing Beth and Adam: " + names);
        console.log();
        var namesTwo = ["John", "Sarah", "Beth", "Adam", "Peter"];
        console.log("Original Array: " + namesTwo);
        namesTwo.splice(3, 1);
        console.log("Array after removing Adam: " + namesTwo);
        console.log();
        var namesThree = ["John", "Sarah", "Beth", "Adam", "Peter"];
        console.log("Original Array: " + namesThree);
        console.log("Array after slice: " + namesThree.slice(1, 4));
        console.log();
        console.log('--------------------------------------------------------');
    };
    ArrayUtility.numbers = [89, 5, 56, 102, 7];
    ArrayUtility.names = ["John", "Sarah", "Beth", "Adam", "Peter"];
    return ArrayUtility;
}());
/// <reference path="Utility.ts" />
/// <reference path="ArrayUtility.ts" />
//Checkbox click event
Utility.setOnClickEvent('terms', Click.TERMS);
//Button click event
Utility.setOnClickEvent('register', Click.REGISTER);
//
ArrayUtility.runArrayMethods();
//# sourceMappingURL=app.js.map