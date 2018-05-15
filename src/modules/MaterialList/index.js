import React, { Component } from 'react';
import map from 'lodash/map';
import isNil from 'lodash/isNil';
import { connect } from 'react-redux';

import { StyledMaterialList } from './style';
import Button from '../../components/button';
import Image from '../../components/image';

class MaterialListComponent extends Component {

  renderItems() {
    const data = !isNil(this.props.content.course) ? this.props.content.course.course_materials : undefined

    return (
      !isNil(data) &&
      map(data, item =>
        <li className="item--list" key={item.id}>

          <Image
            className="item--list--image"
            width={100}
            height={100}
            alt={item.title}
            src={item.thumb}
          />

          <div className="item--list--wrapper">
            <h2 className="item--list--wrapper--title">{item.title}</h2>
            <p className="item--list--wrapper--text">{item.description}</p>

            <a href={item.link} target="_blank">
              <Button
                type="action"
                label="Download" />
            </a>
          </div>

        </li>
      )
    )
  }

  render() {
    return (
      <StyledMaterialList>
        {this.renderItems()}
      </StyledMaterialList>
    )
  }
}

MaterialListComponent = connect(
  ({content}) => ({content})
)(MaterialListComponent)

export default MaterialListComponent
