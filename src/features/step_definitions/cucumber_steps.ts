import { Given, When, Then } from '@cucumber/cucumber';
import { strict as assert } from 'assert';
import {InventoryVegetables} from "../../utils/testUtils";

Given('I have {int} cucumbers', function (this: InventoryVegetables, count: number) {
    if (!this.inventory) {
        this.inventory = { cucumbers: 0, carrots: 0, salads: 0 };
    }
    this.inventory.cucumbers = count;
});

When('I eat {int} cucumbers', function (this:InventoryVegetables, eaten: number) {
    this.inventory.cucumbers -= eaten;
});

Then('I have {int} cucumber', function (this:InventoryVegetables, expected: number) {
    assert.equal(this.inventory.cucumbers, expected);
});

Given('I have {int} carrots', function (this:InventoryVegetables, count: number) {
    this.inventory.carrots = count;
});

When('I eat {int} carrots', function (this:InventoryVegetables, eaten: number) {
    this.inventory.carrots -= eaten
});

When('I make a salad with {int} cucumbers and {int} carrots', function (this:InventoryVegetables, usedCucumbers: number, usedCarrots: number) {
    this.inventory.cucumbers -= usedCucumbers;
    this.inventory.carrots -= usedCarrots;
    this.inventory.salads++;
});

Then('I have {int} salads', function (this:InventoryVegetables, expected: number) {
    assert.equal(this.inventory.salads, expected);
});

Then('I have {int} salad', function (this:InventoryVegetables, expected: number) {
    assert.equal(this.inventory.salads, expected);
});