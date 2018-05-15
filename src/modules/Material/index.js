import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import Link from 'react-router-dom/Link';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { StyledMaterial } from './style'
// import { MockData } from './model'
import EvaluateMaterial from '../EvaluateMaterial';
import Tag from '../../components/tag';
import Button from '../../components/button';
import Vimeo from '../Vimeo';

class MaterialComponent extends Component {
  addZeroBefore = n => n < 10 ? `0${n}` : n

  render() {
    const id = parseInt(this.props.match.params.id, 0)
    let item = !isEmpty(this.props.content.course) ? filter(map(this.props.content.course.leassons, (d,i) => {
      d.order = i + 1
      return d
    }), item => item.id === id) : undefined
    item = !isNil(item) ? !isEmpty(item[0]) ? item[0] : undefined : undefined

    return (
      <StyledMaterial {...this.props}>
        {!isNil(item) &&
        <ReactCSSTransitionGroup
          transitionName="page"
          transitionAppear={ true }
          transitionAppearTimeout={ 700 }
          transitionEnterTimeout={ 700 }
          transitionLeaveTimeout={ 700 }
          component="li"
          className="item--list">

            <span className="item--list--order">{this.addZeroBefore(item.order)}</span>

            <div className="item--list--wrapper">
              <h2 className="item--list--wrapper--title">{item.name}</h2>
              <p className="item--list--wrapper--text">{item.description}</p>

              <div className="item--list--wrapper--detail">
                <div className="item--list--wrapper--detail--info">
                  <div>
                    <div>{map(item.tags, (tag, i) => <Tag key={i} label={tag} />)}</div>
                  </div>
                </div>

                <Link to={"/classes/notes"}>
                  <Button
                    label="Anotações"
                    noicon={"true"}
                    nohash={"true"}
                    type="action" />
                </Link>

              </div>

              <Vimeo item={item} id={id} />

              <EvaluateMaterial item={item} id={id} />
            </div>

        </ReactCSSTransitionGroup>}

      </StyledMaterial>
    )
  }
}

MaterialComponent = connect(
  ({content}) => ({content})
)(MaterialComponent)

export default MaterialComponent
