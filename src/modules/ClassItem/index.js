import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import Tag from '../../components/tag';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CourseStatus from '../CourseStatus';
import Button from '../../components/button';
import { StyleClassItem } from './style';

const StyleOpacity = {
  opacity: 0.2,
}

class ClassItemComponent extends Component {
  state = {
    viewMore: false,
  }

  toggleClick = () => {
    this.setState({viewMore: !this.state.viewMore});
  }

  addZeroBefore = n => n < 10 ? `0${n}` : n

  renderDetail(item) {

    return (
      <ReactCSSTransitionGroup
        transitionName="page"
        transitionAppear={ true }
        transitionAppearTimeout={ 700 }
        transitionEnterTimeout={ 700 }
        transitionLeaveTimeout={ 700 }>

        <div className="item--list--wrapper--detail">
          <div className="item--list--wrapper--detail--info">
            <div>

              <p className="info--paragraph">
                <span>{`${parseInt(item.duration/60,0)} minutos totais`}</span>
                <span>{`${parseInt(item.time_stoped/60,0)} minutos assistidos`}</span>
                {item.times_watch > 0 && <b>[você completou essa aula]</b>}
              </p>

              <div>
                {map(item.tags, (tag, i) => <Tag key={i} label={tag} />)}

                <Link to={"/classes/notes"}>
                  <Tag color="yellow" label={'Anotações'} />
                </Link>
              </div>

            </div>

            <div className="item--list--play insider">
              <CourseStatus
                width={174}
                height={174}
                item={item}
              />
              <div className="info--detail--courseStatus">{parseInt(item.percent*100, 0)}%</div>
            </div>
          </div>
        </div>

      </ReactCSSTransitionGroup>
    )
  }

  render() {
    const item = this.props.item;

    return (
      <StyleClassItem>
        <span className="item--list--order">{this.addZeroBefore(item.order)}</span>

        <div className="item--list--wrapper">
          {!isEmpty(item.module) && <Button
            className="item--module--name"
            label={item.module}
            noicon={"true"}
            nohash={"true"}
            color="blue"
            type="action" />}

          <h2 className="item--list--wrapper--title" style={!item.available ? StyleOpacity : {}}>
            {!item.available ? <span>{item.name}</span> : <Link to={`/classes/material/${item.id}`} color="inherit">{item.name}</Link>}
          </h2>
          <p className="item--list--wrapper--text" style={!item.available ? StyleOpacity : {}}>{item.description}</p>

          {(this.state.viewMore && item.available) && this.renderDetail(item)}

          {item.available && <Button
            type="more"
            label={this.state.viewMore ? 'ver menos' : 'ver mais'}
            onClick={this.toggleClick} />}
        </div>

        {item.available && <div className="item--list--play outsider" style={{alignSelf: this.state.viewMore ? 'flex-end' : 'center'}}>
          <CourseStatus
            width={200}
            height={200}
            item={item}
          />
        </div>}
      </StyleClassItem>
    )
  }
}

export default ClassItemComponent;
