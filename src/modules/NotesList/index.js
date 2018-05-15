import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import Link from 'react-router-dom/Link';
// import Avatar from 'material-ui/Avatar';
// import IconKeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { StyledNotesList } from './style';
// import Theme from '../Theme';
// import Button from '../../components/button';
import parseSeconds from '../../utils/parseSeconds';
import CourseStatus from '../CourseStatus';

// import Popover from 'material-ui/Popover/Popover';
// import { Menu, MenuItem } from 'material-ui/Menu';

class NotesListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    })
  }

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    })
  }

  renderTimeline(node) {
    const data = node

    return (
      <ol className="notes--timeline--list">
        {map(data, (item, i) =>
          <li className="notes--timeline--list--item" key={i}>
            <span className="notes--item--datetime">{parseSeconds(item.time)}</span>
            <div className="notes--item--note">{item.note}</div>
          </li>
        )}
      </ol>
    )
  }

  // <div className="notes--item--icon">
  //   <FloatingActionButton
  //     mini={true}
  //     backgroundColor={Theme.colors.elements[100]}>
  //     <IconKeyboardArrowDown />
  //   </FloatingActionButton>
  // </div>

  renderItems() {
    const data = this.props.content.course.leassons

    return (
      map(data, (item, i) =>
      !isEmpty(item.bookmarks) &&
      <ReactCSSTransitionGroup
        transitionName="page"
        transitionAppear={ true }
        transitionAppearTimeout={ 700 }
        transitionEnterTimeout={ 700 }
        transitionLeaveTimeout={ 700 }
        component="li"
        className="notes--item--list"
        key={i}>

          <div className="mobile--course--notes-inner">
            <CourseStatus
              width={174}
              height={174}
              item={item}
            />
          </div>

          <div className="notes--item--list--wrapper--info">
            <div className={`notes--item--list--order ${item.order >= 10 && 'notes--item--first-letter'}`}>
                <span>{item.order}</span>
            </div>

            <div className="notes--item--list--wrapper">
              <h2 className="notes--item--list--wrapper--title">
                <Link to={`/classes/material/${item.id}`} color="inherit">{item.name}</Link>
              </h2>
              <p className="notes--item--list--wrapper--text">{item.description}</p>
              <div className="notes--timeline">
                {this.renderTimeline(item.bookmarks)}
              </div>
            </div>
          </div>

        </ReactCSSTransitionGroup>
      )
    )
  }

  render() {
    return (
      <StyledNotesList>
        <ol>
          {this.renderItems()}
        </ol>
      </StyledNotesList>
    )
  }
}

// <div className="toolbar--notes">
//   <Button
//     label="Filtrar"
//     onClick={this.handleClick}
//   />
//   <Popover
//     open={this.state.open}
//     anchorEl={this.state.anchorEl}
//     anchorOrigin={this.state.anchorOrigin}
//     targetOrigin={this.state.targetOrigin}
//     onRequestClose={this.handleRequestClose}
//   >
//     <Menu>
//       {map(this.props.content.course.leassons, item => item.available &&
//         <MenuItem key={item.id} primaryText={item.name} />)}
//     </Menu>
//   </Popover>
// </div>

NotesListComponent = connect(
  ({content}) => ({content}),
)(NotesListComponent)

export default NotesListComponent
