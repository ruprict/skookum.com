/*global jest:true, describe: true, it: true, expect: true, spyOn: true*/
/*eslint no-console: 0*/

jest.dontMock('../index.js');

describe('FilterBar', function() {
  it('validates on propTypes', function() {
    spyOn(console, 'warn');

    const React = require('react');
    const Renderer = require('react/lib/ReactTestUtils').createRenderer();
    const FilterBar = require('../index.js');

    Renderer.render(
      <FilterBar />
    );

    Renderer.render(
      <FilterBar items=[{to: 'hello', text: 'World'}] />
    );

    const REQUIRED_PROP_TYPES = [
      'items',
    ];

    expect(console.warn.calls.length).toBe(REQUIRED_PROP_TYPES.length);
    expect(console.warn.calls[0].args[0]).toBe(
      'Warning: Failed propType: Required prop `' +
      REQUIRED_PROP_TYPES[0] +
      '` was not specified in `FilterBar`.'
    );
  });

  it('renders', function() {
    const React = require('react');
    const Renderer = require('react/lib/ReactTestUtils').createRenderer();
    const FilterBar = require('../index.js');

    Renderer.render(
      <FilterBar />
    );

    const result = Renderer.getRenderOutput();

    expect(result).toBeDefined();
  });
});
