// testing code goes here

'use strict'

//var jasmine = require('jasmine');
//var expect = jasmine.expect;

var getPrimes = require("../app/getPrimes.js");



  describe("Determine the prime numbers from zero to number: ", function() {

    describe("Case for Empty input", function() {

      it("should return 'Input must be a Number' for an empty array", function() {
        expect(getPrimes()).toBe('Input must be a Number');
      });

    });

    describe("Case for input < 0", function() {

      it("should return 'Input must be Positive' for -7", function() {
        expect(getPrimes(-7)).toBe('Number must be Positive');
      });

    });

    describe("Case for input = 0", function() {

      it("should return 'Input must be Positive' for 0", function() {
        expect(getPrimes(0)).toBe('Number must be Positive');
      });

    });

    describe("Case for input is String", function() {

      it("should return 'Input must be a Number' for a'NO'", function() {
        expect(getPrimes('NO')).toBe('Input must be a Number');
      });

    });

    describe("Case for Positive input", function() {

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ] for 45", function() {
        expect(getPrimes(45).toString()).toBe([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43].toString());
      });
    });

    describe("Case for Positive input", function() {

      it("should return [2, 3, 5, 7] for 10", function() {
        expect(getPrimes(10).toString()).toBe([2, 3, 5, 7].toString());
      }); 

    });

  });