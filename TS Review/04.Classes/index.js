"use strict";
// Classes
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.tomate = false;
        this.cheese = "";
        this.bacon = false;
        this.otherIngredients = [];
    }
    Pizza.prototype.setTomate = function () {
        this.tomate = true;
        return this;
    };
    Pizza.prototype.setCheese = function (cheese) {
        this.cheese = cheese;
        return this;
    };
    Pizza.prototype.setBacon = function () {
        this.bacon = true;
        return this;
    };
    Pizza.prototype.setOtherIngredients = function (ingredients) {
        this.otherIngredients = ingredients;
        return this;
    };
    Pizza.prototype.build = function () {
        return this;
    };
    return Pizza;
}());
var pepperoniPizza = new Pizza();
pepperoniPizza
    .setTomate()
    .setBacon()
    .setCheese("Mozzarella")
    .setOtherIngredients(["Jamon", "Maiz"])
    .build();
console.log(pepperoniPizza);
