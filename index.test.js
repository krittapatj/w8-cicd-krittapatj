const test = require('node:test');
const assert = require('node:assert/strict');
const { createMessage } = require('./index');

test('returns a greeting for the supplied name', () => {
  assert.equal(
    createMessage('Krit'),
    'Hello, Krit! CI/CD is working.'
  );
});

test('uses a default name when no name is supplied', () => {
  assert.equal(
    createMessage(),
    'Hello, Cloud Student! CI/CD is working.'
  );
});

test('supports an empty string name', () => {
  assert.equal(
    createMessage(''),
    'Hello, ! CI/CD is working.'
  );
});

test('supports a Thai name', () => {
  assert.equal(
    createMessage('สมชาย'),
    'Hello, สมชาย! CI/CD is working.'
  );
});