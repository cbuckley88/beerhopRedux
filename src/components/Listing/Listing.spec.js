import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Listing from './Listing'
import styles from './styles.module.css'

describe('<Listing />', () => {
  let wrapper;
  const places = [{
    name: 'Denver'
  }, {
    name: "Richmond"
  }];
  beforeEach(() => {
    wrapper = shallow(<Listing title={'Bars'}
                      places={places} />)
  });

  it('wraps the component in a listing css class', () => {
    expect(wrapper.find(`.${styles.container}`))
      .to.be.defined;
  })

  it('has an item for each place in the places prop', () => {
    expect(wrapper.find('Item').length)
      .to.equal(places.length);
  })

})
