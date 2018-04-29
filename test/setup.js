import React from 'react';
import { expect } from 'chai';
import { jsdom } from 'jsdom';

const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.window;

global.document = doc;
global.window = doc.defaultView;

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.React = React;
global.expect = expect;
