import { Given, When, Then } from '@cucumber/cucumber';
import { strict as assert } from 'assert';

let cucumbers = 0;
let carrots = 0;
let salads = 0;

Given('I have {int} cucumbers', function (count: number) {
    cucumbers = count;
});

When('I eat {int} cucumbers', function (eaten: number) {
    cucumbers -= eaten;
});

Then('I have {int} cucumber', function (expected: number) {
    assert.equal(cucumbers, expected);
});

Given('I have {int} carrots', function (count: number) {
    carrots = count;
});

When('I eat {int} carrots', function (eaten: number) {
    carrots -= eaten
});

When('I make a salad with {int} cucumbers and {int} carrots', function (usedCucumbers: number, usedCarrots: number) {
    cucumbers -= usedCucumbers;
    carrots -= usedCarrots;
    salads++;
});

Then('I have {int} salads', function (expected: number) {
    assert.equal(salads, expected);
});

Then('I have {int} salad', function (expected: number) {
    assert.equal(salads, expected);
});