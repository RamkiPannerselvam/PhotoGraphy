/* global describe, it */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Component from '../src';
import expect from 'expect';

let listOptions = {
  label: 'item',
  options: [{
    text: 'Option 1',
    value: 1
  }, {
    text: 'Option 2',
    value: 1
  }, {
    text: 'Option 3',
    value: 1
  }, {
    text: 'Option 4',
    value: 1
  }, {
    text: 'Option 5',
    value: 1
  }, {
    text: 'Option 6',
    value: 1
  }, {
    text: 'Option 7',
    value: 1
  }, {
    text: 'Option 8',
    value: 1
  }, {
    text: 'Option 9',
    value: 1
  }, {
    text: 'Option 10',
    value: 1
  }, {
    text: 'Option 11',
    value: 1
  }, {
    text: 'Option 12',
    value: 1
  }, {
    text: 'Option 13',
    value: 1
  }, {
    text: 'Option 14',
    value: 1
  }, {
    text: 'Option 15',
    value: 1
  }, {
    text: 'Option 16',
    value: 1
  }, {
    text: 'Option 17',
    value: 1
  }, {
    text: 'Option 18',
    value: 1
  }, {
    text: 'Option 19',
    value: 1
  }, {
    text: 'Option 20',
    value: 1
  }, {
    text: 'Option 21',
    value: 1
  }, {
    text: 'Option 22',
    value: 1
  }, {
    text: 'Option 23',
    value: 1
  }, {
    text: 'Option 24',
    value: 1
  }, {
    text: 'Option 25',
    value: 1
  }, {
    text: 'Option 26',
    value: 1
  }, {
    text: 'Option 27',
    value: 1
  }, {
    text: 'Option 28',
    value: 1
  }, {
    text: 'Option 29',
    value: 1
  }, {
    text: 'Option 30',
    value: 1
  }, {
    text: 'Option 31',
    value: 1
  }, {
    text: 'Option 32',
    value: 1
  }, {
    text: 'Option 33',
    value: 1
  }, {
    text: 'Option 34',
    value: 1
  }, {
    text: 'Option 35',
    value: 1
  }, {
    text: 'Option 36',
    value: 1
  }, {
    text: 'Option 37',
    value: 1
  }, {
    text: 'Option 38',
    value: 1
  }, {
    text: 'Option 39',
    value: 1
  }, {
    text: 'Option 40',
    value: 1
  }],
  onItemClick: (clickType, selection) => {
    console.log(selection);
  },
  itemRender: (object) => {
    return <div>{object.text} - {object.value}</div>;
  }
};

describe('Checking Rendering', function () {
  let component = mount(<Component {...listOptions} />);

  it('component is rendered', function () {
    expect(component).toExist();
  });
});
