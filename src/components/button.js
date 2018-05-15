import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
// import IconNavigateNext from 'material-ui-icons/NavigateNext';
// import IconAddCircle from 'material-ui-icons/AddCircle';
import IconExpandMore from 'material-ui-icons/ExpandMore';
import IconPlayArrow from 'material-ui-icons/PlayArrow';

import LinkIcon from '../icons/link';
import LoadMoreIcon from '../icons/loadMore';
import MoreViewIcon from '../icons/moreView';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';

import Theme from '../modules/Theme';

const StyledRaisedButton = styled(RaisedButton)`
  display: block;
  position: relative;
  margin: 30px;
  border-radius: 8px!important;
  background-color: transparent!important;

  div {
    height: 45px!important;
    line-height: 45px!important;
  }

  button {
    height: 45px!important;
    border-radius: 5px!important;
    background-image: linear-gradient(to bottom, #8b9ab7, #14293f), linear-gradient(#5e697e, #5e697e);
    background-blend-mode: soft-light, normal;
    box-shadow: 0px 1px 0 0 rgba(53, 60, 73, 0.5), inset 0px 1px 0 0 rgba(255, 255, 255, 0.5);
  }

  span {
    font-family: 'san_francisco_displaysemibold';
    text-transform: initial!important;
    font-size: 21px!important;
    width: 172px;
    height: 16px;
    font-weight: 600!important;
    line-height: 1.52;
    letter-spacing: 0.6px;
    text-align: left;
    white-space: nowrap;
  }
`

const StyledActionButton = styled(RaisedButton)`
  display: flex;
  align-self: center;
  position: relative;
  border-radius: 16px!important;
  height: 30px!important;

  button {
    border-radius: inherit!important;
    border: 1px solid ${props => props.color ? Theme.colors.action.blue : props.noicon ? Theme.colors.action.yellow : Theme.colors.action.red}!important;
    height: 30px!important;
    line-height: 26px!important;
  }

  span {
    font-family: 'san_francisco_textbold';
    font-size: 11.3px!important;
    font-weight: bold;
    letter-spacing: 0.8px!important;
    text-align: left;
    color: ${props => props.color ? Theme.colors.action.blue : props.noicon ? Theme.colors.action.yellow : Theme.colors.action.red}!important;
  }

  svg {
    margin-left: 4px!important;
  }
`

const StyledCommentActionButton = styled(FlatButton)`
  span,
  svg {
    color: ${props => props.label === 'Curtir' ? Theme.colors.action.red : Theme.colors.text[200]}!important;
    fill: ${props => props.label === 'Curtir' ? Theme.colors.action.red : Theme.colors.text[200]}!important;
  }
`

const StyledFlatButton = styled(FlatButton)`
  span {
    color: ${Theme.colors.elements[100]}!important;
    font-family: 'san_francisco_textbold';
    font-size: 11.3px!important;
    font-weight: bold;
    line-height: 2.84;
    letter-spacing: 0.6px;
    text-align: left;
  }
  svg {
    fill: ${Theme.colors.action.red}!important;
  }
`

const StyledFloatingActionButton = styled(FloatingActionButton)`
  button {
    border: 1px solid ${Theme.colors.elements[400]};
    background-color: ${Theme.colors.bases[200]}!important;

    svg {
      width: 100%!important;
      height: 100%!important;
      fill: ${Theme.colors.elements[100]}!important;
    }
  }
`

const StyledFloatingPlayButton = styled(FloatingActionButton)`
  margin-right: 16px;
  border: 2px solid ${Theme.colors.elements[100]};

  button {
    width: 80px!important;
    height: 80px!important;

    svg {
      width: 100%!important;
      height: 100%!important;
      fill: ${Theme.colors.elements[300]}!important;
    }
  }
`

const StyledIconExpandMore = styled(IconExpandMore)`
  background-color: ${Theme.colors.action.red};
  fill: ${Theme.colors.elements[600]}!important;
  border-radius: 50%;
`

let ButtonComponent = props => (
  props.type === "play" ?
    <StyledFloatingPlayButton {...props}
      backgroundColor={Theme.colors.elements[500]}>
      <IconPlayArrow />
    </StyledFloatingPlayButton>

  :props.type === "comment-action" ?
    <StyledCommentActionButton {...props}
      icon={props.icon} />

  :props.type === "action" ?
    <StyledActionButton {...props}
      backgroundColor={Theme.colors.bases[300]}
      icon={props.noicon ? null : <StyledIconExpandMore />}
      labelColor={Theme.colors.action.red} />

  :props.type === "more" ?
    <StyledFlatButton {...props}
      icon={props.label === 'ver mais' ?
        <MoreViewIcon width={17} height={17} />
        :<RemoveCircleIcon width={17} height={17} />}
    />

  :props.type === "loadmore" ?
    <StyledFloatingActionButton {...props}>
      <LoadMoreIcon width={57} height={57} />
    </StyledFloatingActionButton>

  :<StyledRaisedButton {...props}
    icon={<LinkIcon width={24} height={24} />}
    labelPosition="before"
    backgroundColor={Theme.colors.elements[500]}
    labelColor={Theme.colors.elements[100]} />
)

export default ButtonComponent
