import React,  { Component } from 'react';
import StarIcon from 'material-ui-icons/Star';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import IconButton from 'material-ui/IconButton';
import map from 'lodash/map';
import api from '../../api';

import { StyledEvaluate } from './style'

class EvaluateMaterialComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      point: this.props.item.point,
      label: this.props.item.point === 0 ? 'avalie essa aula' : 'você avaliou essa aula'
    }

    this.ClickEvaluate.bind(this)
  }

  ClickEvaluate = point => {
    this.setState({
      point: point
    })
    api.post('https://api.curseria.com/api/leasson_points/', {
      leasson_point: {
        leasson_id: this.props.id,
        point: point,
      }
    })
  }

  render() {
    return (
      <StyledEvaluate>
        <p>{this.state.label}</p>
        <div className="evaluate-by-stars">
          {map([1,2,3,4,5], i => <IconButton className="evaluate-by-stars--button" key={i}>
            {i > this.state.point ? <StarBorderIcon onClick={() => this.ClickEvaluate(i)} /> : <StarIcon onClick={() => this.ClickEvaluate(i)} />}
          </IconButton>)}
        </div>
      </StyledEvaluate>
    )
  }
}

// <div className="evaluation">
//   <span>4.8</span>
// </div>

export default EvaluateMaterialComponent
