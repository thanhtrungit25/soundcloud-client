import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const doc = jsdom.jsdom('<!doctype html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.React = React;
global.expect = expect;
