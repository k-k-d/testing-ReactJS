import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import List from '../List';
import ListItem from '../ListItem';

// shallow rendering

describe('List tests with shallow', () => {

  // seeing if a number of list items are defined equal to the number of elements passed as prop

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<List items={items} />);
    console.log(wrapper.debug());
    expect(wrapper.find('ListItem')).toBeDefined();
    expect(wrapper.find('ListItem')).toHaveLength(items.length);
  });

  // seeing if an element exists

  it('renders a list item', () => {
    const items = ['Thor', 'Loki'];
    const wrapper = shallow(<List items={items} />);
    expect(wrapper.contains(<ListItem item='Thor'/>)).toBeTruthy();
  });

  // seeing if correct string is passed as prop to the child component

  it('renders correct text in item', () => {
    const items = ['John', 'James', 'Luke'];
    const wrapper = shallow(<List items={items} />);
    // console.log(wrapper.find(ListItem).get(0));
    expect(wrapper.find(ListItem).get(0).props.item).toEqual('John');
  });
});

// full rendering

describe('List tests with mount', () => {

  // seeing if a number of list items are defined equal to the number of elements passed as prop

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = mount(<List items={items} />);
    console.log(wrapper.debug());
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  // seeing if an element exists

  it('renders a list item', () => {
    const items = ['Thor', 'Loki'];
    const wrapper = mount(<List items={items} />);
    expect(wrapper.contains(<li key='Thor' className="item">Thor</li >)).toBeTruthy();
  });

  // seeing if text rendered finally is right

  it('renders correct text in item', () => {
    const items = ['John', 'James', 'Luke'];
    const wrapper = mount(<List items={items} />);
    // console.log(wrapper.find('.item').get(0));
    expect(wrapper.find('.item').get(0).props.children).toEqual('John');
  });
});

// static rendering

describe('List tests with render', () => {

  // seeing if a number of list items are defined equal to the number of elements passed as prop

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = render(<List items={items} />);
    console.log(wrapper);
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  // seeing if data within the most inward html tag is correct

  it('renders correct text in item', () => {
    const items = ['John', 'James', 'Luke'];
    const wrapper = render(<List items={items} />);
    // console.log(wrapper.find('.item').get(0).children[0].data);
    expect(wrapper.find('.item').get(0).children[0].data).toEqual('John');
  });
});