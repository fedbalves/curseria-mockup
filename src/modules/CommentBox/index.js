import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import { StyledCommentBox } from './style';
import { submitComment } from './action'
import Button from '../../components/button';

class CommentBoxComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: this.props.node,
      leasson: isNil(this.props.paramId) ? parseInt(this.props.match.params.id, 0) : this.props.paramId,
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  handleClick = () => {
    if (!isEmpty(this.state.value)) {
       this.props.submitComment({
          comments: this.state.value,
          leasson_id: this.state.leasson,
          in_reply: this.props.replybox ? this.props.id : 0,
       })

      this.setState({
        value: '',
      })
    }
  }

  render(){
    return (
      <StyledCommentBox>
        <div className="myWrapper">
          <TextField
            fullWidth={true}
            multiLine={true}
            underlineShow={false}
            rows={2}
            name="comment--box--field"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <Button
          type="action"
          className="myWrapper--submit--button"
          onClick={this.handleClick}
          label="Comentar" />
      </StyledCommentBox>
    )
  }
}

CommentBoxComponent = connect(
  ({content}) => ({content}),
  {submitComment}
)(CommentBoxComponent)

export default CommentBoxComponent
