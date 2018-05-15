import React, { Component } from 'react';
import { arc } from 'd3-shape';
import { Motion, spring } from 'react-motion';
import Link from 'react-router-dom/Link';

import { StyledMainCircle, StyleMainText, StyleMainDecorator, StyleMainTextFull } from './style';
import Svg from '../../components/svg';
import Theme from '../Theme';

class CourseStatusContainer extends Component {
  render() {
    const width = this.props.width;
    const height = this.props.height;
    const radius = this.props.main ? 140 / 2 : 91.9 / 2;
    const thickness = this.props.main ? 22 : 16;
    const padding = 6;
    const value = this.props.item.percent > 1 ? 1 : this.props.item.percent;
    const valueHuman = Math.floor(value * 100);

    const drawArcClip = arc()
      .innerRadius(0)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(Math.PI * 2);

    const drawArc = v => arc()
      .innerRadius(radius + padding)
      .outerRadius(radius + thickness)
      .startAngle(0)
      .endAngle((Math.PI * 2) * v);

    const drawArcFull = arc()
      .innerRadius(radius + padding)
      .outerRadius(radius + thickness)
      .startAngle(0)
      .endAngle(Math.PI * 2);

    return (
      <Svg {...this.props}>

          {this.props.main ?

            <g transform={`translate(${width/2}, ${height/2})`}>

              <circle cx={0} cy={0} r={70} style={StyledMainCircle} />

              <Motion defaultStyle={{x: 0}} style={{x: spring(valueHuman)}}>
                {valueHuman => <text
                  textAnchor="middle"
                  dx={valueHuman < 10 ? -5 : -10}
                  dy={value === 1 ? 15 : 25}
                  style={value === 1 ? StyleMainTextFull : StyleMainText}>
                    {Math.floor(valueHuman.x)}
                </text>}
              </Motion>

              <text
                textAnchor="start"
                dx={valueHuman < 10 ? 15 : 30}
                dy={0}
                style={StyleMainDecorator}>%</text>

              <path
                fill={Theme.colors.elements[500]}
                d={drawArcFull()}
                style={{opacity: 0.3}}
              />

              <Motion defaultStyle={{x: 0}} style={{x: spring(value)}}>
                {value =>
                  <path
                    fill={Theme.colors.action.red}
                    d={drawArc(value.x)()} />}
              </Motion>

            </g>

            :<g transform={`translate(${width/2}, ${height/2})`}>

              <clipPath id={`clip-path${this.props.item.id}`}>
                 <path d={drawArcClip()} />
              </clipPath>

              <image
                clipPath={`url(#clip-path${this.props.item.id})`}
                href={this.props.item.thumb}
                x={-radius}
                y={-radius}
                height={radius*2}
                width={radius*2}
                className={'image--svg--course'}
              />

              <Link to={`/classes/material/${this.props.item.id}`}>
                <g transform={`scale(0.5) translate(-3065 -1230)`}>
                  <path
                    fill={'#FFFFFF'}
                    style={{opacity: 0.9, cursor: 'pointer',}}
                    d="M3108.31,1223.78a7.565,7.565,0,0,1,0,13.1l-34.57,19.97-34.57,19.96a7.557,7.557,0,0,1-11.34-6.54V1190.4a7.561,7.561,0,0,1,11.34-6.55l34.57,19.97Z"
                  />
                </g>
              </Link>

              <path
                fill={Theme.colors.elements[500]}
                d={drawArcFull()}
              />

              <Motion defaultStyle={{x: 0}} style={{x: spring(value)}}>
                {value =>
                  <path
                    fill={Theme.colors.action.red}
                    d={drawArc(value.x)()} />
                }
              </Motion>

            </g>}

      </Svg>
    )
  }
}

export default CourseStatusContainer
