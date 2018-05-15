import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';
import find from 'lodash/find';
import Avatar from 'material-ui/Avatar';
// import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import CommentIcon from 'material-ui-icons/Comment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { StyledCommentList } from './style';
import { GroupNestedComments } from './model';
import Button from '../../components/button';
import CommentBoxComponent from '../CommentBox/'

import api from '../../api';

class CommentListComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: this.props.content.course,
      id: parseInt(this.props.match.params.id, 0),
      showReply: false,
      commentReplyBox: undefined,
    }
  }

  removeComment = id => {
    api.delete(`https://api.curseria.com/api/leasson_comments/${id}`)
    var dt = this.state.data
    var i = dt.leassons[findIndex(dt.leassons, item => item.id === this.state.id)]
    var _data = filter(i.comments, i => i.id !== id)
    i.comments = _data
    dt.leassons[findIndex(dt.leassons, item => item.id === this.state.id)] = i
    this.setState({
      data: dt
    })
  }

  handleReply = id => {
    this.setState({
      showReply: !this.state.showReply,
      commentReplyBox: id,
    })
  }

  isIn = id => {
    var d = this.state.data.leassons[findIndex(this.state.data.leassons, item => item.id === this.state.id)]
    return !isNil(find(d.comments, i => i.id === id))
  }

  renderItems(items) {
    const id = this.state.id
    const item = isEmpty(items) ? !isEmpty(this.state.data) ?
      GroupNestedComments(this.state.data.leassons[findIndex(this.state.data.leassons, item => item.id === this.state.id)]) : undefined : items

    return (
      !isNil(item) &&
        map(item, (item, i) =>
          this.isIn(item.id) &&
          <ReactCSSTransitionGroup
            transitionName="page"
            transitionAppear={ true }
            transitionAppearTimeout={ 700 }
            transitionEnterTimeout={ 700 }
            transitionLeaveTimeout={ 700 }
            component="li"
            className="item--list" key={i}>

            <Avatar
              size={80}
              alt={item.user_name}
              src={item.gravatar}
            />

            <div className="item--list--wrapper">
              <h2 className="item--list--wrapper--title">{item.user_name}</h2>
              <p className="item--list--wrapper--text">{item.comments}</p>

              <div className="item--list--comment--actions">

                {item.user_email === this.props.session.user.email && <Button
                  type="comment-action"
                  label="Excluir"
                  onClick={() => this.removeComment(item.id)}
                />}

                {isEmpty(items) && <Button
                  type="comment-action"
                  icon={<CommentIcon />}
                  label="Responder"
                  onClick={() => this.handleReply(item.id)}
                />}

              </div>

              {(this.state.showReply && this.state.commentReplyBox === item.id) && <CommentBoxComponent replybox paramId={id} id={item.id} />}

              {!isEmpty(item.nested) &&
                <StyledCommentList>
                  {this.renderItems(item.nested)}
                </StyledCommentList>
              }

            </div>

          </ReactCSSTransitionGroup>
        )
    )
  }

  // <Button
  //   type="comment-action"
  //   icon={<FavoriteIcon />}
  //   label="Curtir" />

  render() {
    return (
      <StyledCommentList>
        {this.renderItems()}
      </StyledCommentList>
    )
  }
}

CommentListComponent = connect(
  ({content, session}) => ({content, session}),
)(CommentListComponent)

export default CommentListComponent
