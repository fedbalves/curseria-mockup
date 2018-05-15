import React, { Component } from 'react';
import { connect } from 'react-redux';
import isNil from 'lodash/isNil';
import map from 'lodash/map';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { StyledClassList } from './style';
import { normalizeModules } from './model';
import ClassItem from '../ClassItem';

class ClassListComponent extends Component {

  addZeroBefore = n => n < 10 ? `0${n}` : n

  renderItems() {
    const course = normalizeModules(this.props.content.course.leassons)
    const data = course

    return (
      map(data, (item, i) =>
        !isNil(item) &&
        <ReactCSSTransitionGroup
          transitionName="page"
          transitionAppear={ true }
          transitionAppearTimeout={ 700 }
          transitionEnterTimeout={ 700 }
          transitionLeaveTimeout={ 700 }
          component={() => <ClassItem item={item} />}
          key={i} />
      )
    )
  }

  render() {
    return (
      <StyledClassList>
        {!this.props.content.fetching && this.renderItems()}
      </StyledClassList>
    )
  }
}

ClassListComponent = connect(
  ({content}) => ({content}),
)(ClassListComponent)

export default ClassListComponent
