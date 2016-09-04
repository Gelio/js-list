/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
// import {expect} from 'chai';
import {List} from '../lib/list';

describe('List', () => {
  describe('constructor', () => {
    it('should initiate with no initial value', () => {
      const list = new List();
      expect(list).to.exist;
      expect(list.getLength()).to.equal(0);
    });

    it('should initiate with an initial value', () => {
      const initialValue = 'initial';
      const list = new List(initialValue);

      expect(list).to.exist;
      expect(list.getLength()).to.equal(1);
      expect(list.getHead().value).to.equal(initialValue);
    });
  });

  describe('pushBack', () => {
    it('should push values to the back', () => {
      const values = ['lorem', 'ipsum', 'dolor', 'et'];
      const list = new List();

      values.forEach(value => list.pushBack(value));
      expect(list.getLength()).to.equal(values.length);
      expect(list.getTail().value).to.equal(values[values.length - 1]);
    });
  });

  describe('push', () => {
    it('should insert a value at a specific position', () => {
      const values = ['lorem', 'ipsum', 'dolor', 'et'];
      const list = new List();

      values.forEach(value => list.pushBack(value));
      list.push('inserted', 2);

      expect(list.getLength()).to.equal(5);
      expect(list.get(2).value).to.equal('inserted');
    });
  });

  describe('remove', () => {
    let list;

    beforeEach(() => {
      const values = ['lorem', 'ipsum', 'dolor', 'et'];
      list = new List();

      values.forEach(value => list.pushBack(value));
    });

    it('should remove a specific node', () => {
      const valueToDelete = list.get(2).value;
      list.remove(valueToDelete);
      expect(list.getLength()).to.equal(3);
      expect(list.find(valueToDelete)).to.equal.false;
    });

    it('should remove the head', () => {
      const previousHead = list.getHead();
      list.remove(previousHead.value);
      expect(list.getLength()).to.equal(3);
      expect(list.getHead().value).to.equal(previousHead.next.value);
      expect(list.find(previousHead.value)).to.not.exist;
    });

    it('should remove the tail', () => {
      const previousTail = list.getTail();
      list.remove(previousTail.value);
      expect(list.getLength()).to.equal(3);
      expect(list.find(previousTail)).to.not.exist;
    });
  });

  describe('getValues', () => {
    it('should return an empty array for an empty list', () => {
      const list = new List();
      const values = list.getValues();

      expect(Array.isArray(values)).to.be.true;
      expect(values.length).to.equal(0);
    });

    it('should return an array of values', () => {
      const initialValues = ['lorem', 'ipsum', 'dolor', 'et'];
      const list = new List();
      initialValues.forEach(value => list.pushBack(value));

      const valuesGot = list.getValues();
      expect(Array.isArray(valuesGot)).to.be.true;
      expect(valuesGot.length).to.equal(initialValues.length);
      expect(valuesGot).to.deep.equal(initialValues);
    });
  });
});
