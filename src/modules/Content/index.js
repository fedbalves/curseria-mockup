import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import Link from 'react-router-dom/Link';
import isNil from 'lodash/isNil';
import findIndex from 'lodash/findIndex';

import ImageBackground from '../ImageBackground';
import ClassList from '../ClassList';
import MaterialList from '../MaterialList';
import NotesList from '../NotesList';
import Material from '../Material';
import CommentList from '../CommentList';
import Button from '../../components/button';
import Grid from '../../components/grid';
import Divider from '../../components/divider';
import FullCourseStatus from '../FullCourseStatus';
import CommentBoxComponent from '../CommentBox';

import { loadApp } from './action';

class ContentComponent extends Component {

  componentWillMount() {
    this.props.loadApp()
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  renderHome() {
    return (
      !isNil(this.props.content.course) &&
      <div>
        <ImageBackground
          src={this.props.content.course.cover}
          alt={this.props.content.course.name}>

          <Link to={this.props.content.course.last_leasson === 0 ? `/classes/material/${this.props.content.course.leassons[0].id}` : `/classes/material/${this.props.content.course.last_leasson}`}>
            <Button
              label={this.props.content.course.last_leasson === 0 ? 'Iniciar aula 1' : `Continuar aula ${findIndex(this.props.content.course.leassons, item => item.id === this.props.content.course.last_leasson)+1}`} />
          </Link>

          <FullCourseStatus />

        </ImageBackground>

        <Grid>
          <ClassList />
        </Grid>

        <Divider
          primary="Material Extra"
          secondary="Material de apoio do curso" />

        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start">
          <MaterialList />
        </Grid>
      </div>
    )
  }

  renderMaterial(props) {
    return (
      !isNil(this.props.content.course) &&
      <div>
        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start">
          <Material {...props} />
        </Grid>

        <Divider
          primary="Material Extra"
          secondary="Material de apoio do curso" />

        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start">
          <MaterialList />
        </Grid>

        <Divider
          primary="Discussão"
          secondary="Comente e crie interações com outros alunos" />

        <Grid
          display="flex"
          alignItems="flex-start"
          custom="column"
          className="custom--grid"
          justifyContent="flex-start">
          <CommentBoxComponent {...props} />
          <CommentList {...props} />
        </Grid>
      </div>
    )
  }

  renderNotes() {
    return (
      !isNil(this.props.content.course) &&
      <div>
        <Divider
          primary="Suas Anotações"
          secondary="Veja seus lembretes e em quais momentos foram feitos" />

        <Grid
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start">
          <NotesList />
        </Grid>
      </div>
    )
  }

  render() {
    return (
      this.props.content.fetching ?
      <Grid
        style={{minHeight: 'calc(100vh - 490px)'}}
        display="flex"
        alignItems="center"
        justifyContent="center">
          <h3>Carregando...</h3>
      </Grid>
      :(!isNil(this.props.content.course) && this.props.content.course.status === 'preorder') ?
      <Redirect to="/success" />
      :<Switch>
        <Route exact path="/classes/home" render={() => this.renderHome()} />
        <Route exact path="/classes/material/:id" render={props => this.renderMaterial(props)} />
        <Route exact path="/classes/notes" render={() => this.renderNotes()} />
      </Switch>
    )
  }
}

ContentComponent = connect(
  ({content}) => ({content}),
  {loadApp}
)(ContentComponent)

export default ContentComponent
