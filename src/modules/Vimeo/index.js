import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dimensions from 'react-dimensions';
import isNil from 'lodash/isNil';
import map from 'lodash/map';
import size from 'lodash/size';
import filter from 'lodash/filter';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Button from '../../components/button';
import VimeoPlayer from '@u-wave/react-vimeo';
import api from '../../api';

import { StyledVimeo } from './style';
import { submitNotes, watchVideo, deleteBookmark } from './action'

import parseSeconds from '../../utils/parseSeconds';

class TextContainerComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.node,
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <TextField
          fullWidth={true}
          multiLine={true}
          rowsMax={8}
          name={`note_${this.props.noteId}`}
          value={this.state.value}
          onChange={this.handleChange}
          hintStyle={{
            color: '#C3CEE3'
          }}
          underlineStyle={{
            color: '#1D2028'
          }}
        />
        <i className="notes--delete--button" onClick={() => this.props.deleteNote(this.props.noteId)}>excluir</i>
      </div>
    )
  }
}

class VimeoComponent extends Component {

  constructor(props){
    super(props)

    this.state = {
      open: false,
      paused: false,
      value: '',
      seconds: 0,
      data: this.props.item,
    }

    this.handleNote.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleNote = () => {

    this.setState({
      open: true,
      paused: true,
    })
  }

  handleClickNote = () => {
    this.props.submitNotes({
      note: this.state.value,
      time: this.state.seconds,
      leasson_id: this.props.id,
    })
    this.setState({
      value: '',
    })
  }

  closeNote = () => {
    this.setState({
      open: false,
      paused: false,
    })
  }

  watchVideo = currentTime => {
    var wait = 15
    var isAble = (Math.floor(currentTime.seconds) % wait) === 0

    this.setState({
      seconds: parseInt(currentTime.seconds, 0),
    })

    if (isAble) {
      api.post('https://api.curseria.com/api/leasson_statuses/', {
        leasson_status: {
          leasson_id: this.props.id,
          time_stoped: parseInt(currentTime.seconds, 0),
        }
      })
    }
  }

  completeVideo = () => {
    api.post('https://api.curseria.com/api/leasson_statuses/', {
      leasson_status: {
        leasson_id: this.props.id,
        times_watch: 1,
      }
    })
  }

  deleteNote = id => {
    api.delete(`https://api.curseria.com/api/bookmarks/${id}`)
    var d = filter(this.state.data.bookmarks, i => i.id !== id)
    var _data = this.state.data
    _data.bookmarks = d
    this.setState({
      data: _data
    })
  }

  render() {
    const width = this.props.containerWidth;
    const item = !isNil(this.state.data) ? this.state.data : undefined

    return (
      <StyledVimeo>

        {!isNil(item) &&
          <VimeoPlayer
            video={`https://player.vimeo.com/video/${item.video_id}`}
            paused={this.state.paused}
            onEnd={this.completeVideo}
            onTimeUpdate={this.watchVideo}
            width={width}
            autoplay
          />
        }

          {this.state.open ?
            <div className="video--overlay--bookmarks">
              <h3>Suas Anotações</h3>

              <div className="float--button--notes">
                <FlatButton onClick={this.closeNote} label="fechar" />
              </div>

              <ul className="video--overlay--bookmarks--list">
                {map(item.bookmarks, (node,i) =>
                  <li key={node.id}>
                    <span>{parseSeconds(node.time)}</span>
                    <TextContainerComponent key={i} node={node.note} noteId={node.id} deleteNote={this.deleteNote} />
                  </li>
                )}
                <li key={size(item.bookmarks)+1}>
                  <FlatButton label="salvar" onClick={this.handleClickNote} />
                  <TextField
                    fullWidth={true}
                    multiLine={true}
                    hintText="Adicione uma nova nota..."
                    rowsMax={8}
                    value={this.state.value}
                    onChange={this.handleChange}
                    name="insert_note_field"
                    hintStyle={{
                      color: '#C3CEE3'
                    }}
                    underlineStyle={{
                      color: '#1D2028'
                    }}
                  />
                </li>
              </ul>
            </div>
          :<div className="video--overlay--bookmarks--button">
            <Button
              onClick={this.handleNote}
              type="action"
              label="Criar Nota" />
          </div>
          }
      </StyledVimeo>
    )
  }
}

VimeoComponent = connect(
  ({content}) => ({content}),
  {submitNotes, watchVideo, deleteBookmark}
)(VimeoComponent)

export default Dimensions()(VimeoComponent);
