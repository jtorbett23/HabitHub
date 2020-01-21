import React from 'react';
import ReactDOM from 'react-dom';
import List from '../src/components/List';
import { mount } from 'enzyme';
import { expect } from 'chai';
          
const dummyData = [
    {
      "completed": [
        true
      ],
    "_id": "5e26e0397bd56f3754ed6d19",
    "name": "washing",
    "streak": 3,
    "lastCompleted": "2020-01-19T00:00:00.000Z"
  },
  {
    "completed": [
      true,
      true,
      false
    ],
    "_id": "5e26e0397bd56f3754ed6d1a",
    "name": "pushups",
    "streak": 100,
    "lastCompleted": "2020-01-19T00:00:00.000Z"
  }];

describe('List', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
  // Checks if a list of habits is rendered in the 
  it("Displays a list of habits", () => {
    const wrapper = mount(<List />);
    wrapper.setProps({ habits: dummyData });
    expect(wrapper.find('.habit')).to.have.lengthOf(2);
  });
})