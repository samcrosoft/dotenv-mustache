/**
 * Created by Adebola on 22/02/2016.
 */
var assert = require('assert');
var dotEnv;
var dotMustache;

beforeEach(function (done) {
    dotEnv = require('dotenv').load({path: './test/.env'});
    dotMustache = require("../dist/index")(dotEnv);
    done();
})

describe('DotMustache', function () {
    it('pick up .env variable', function (done) {
        assert.equal(Object.keys(dotEnv).length, 3);
        done();
    });

    it('the env variable should match the result', function (done) {
        assert.equal(dotEnv['VARIABLE_ONE'], "varone");
        done();
    });

    it('it should perform the mustache substitution correctly', function (done) {
        var sCombine = dotEnv['VARIABLE_ONE'] + "-" + dotEnv['VARIABLE_TWO'];
        assert.equal(dotEnv['VARIABLE_THREE'], sCombine);
        done();
    });

});