/**
 * dotenv-mustache - A node package to help apply the mustache templating language to dotenv variables
 * @version v1.0.0
 * @link https://github.com/samcrosoft/dotenv-mustache
 * @license MIT
 */
/**
 * Created by Adebola on 17/02/2016.
 */
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var dotenv = require("dotenv");
var Mustache = require("mustache");

/**
 * THis methos will apply mustache style rendering to the enviroment variables
 * @param oConfig
 * @returns {*}
 */

exports["default"] = function (oConfig) {
    Object.keys(oConfig).forEach(function (key) {
        var value = oConfig[key] + '';

        if (value.indexOf("{{") > -1) {
            oConfig[key] = Mustache.render(value, process.env);
        }
    });

    Object.keys(oConfig).forEach(function (key) {
        process.env[key] = oConfig[key];
    });

    return oConfig;
};

module.exports = exports["default"];