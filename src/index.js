/**
 * Created by Adebola on 17/02/2016.
 */
"use strict"
let dotenv = require("dotenv");
let Mustache = require("mustache");


/**
 * THis methos will apply mustache style rendering to the enviroment variables
 * @param oConfig
 * @returns {*}
 */
export default function (oConfig) {
    Object.keys(oConfig).forEach(function (key) {
        var value = oConfig[key] + '';

        if (value.indexOf("{{") > -1) {
            oConfig[key] = Mustache.render(value, process.env);
        }

    })

    Object.keys(oConfig).forEach(function (key) {
        process.env[key] = oConfig[key]
    })

    return oConfig;
}

