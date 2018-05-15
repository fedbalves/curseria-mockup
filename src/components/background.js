import React from 'react';
import styled from 'styled-components';

// import bgImage from 'https://curseria.com/img/interno/login_cursodrbarakat.jpg';

const StyledBackground = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: block;
  background-image: url(https://curseria.com/img/interno/login_cursodrbarakat.jpg);
`

let Background = () => <StyledBackground />;

export default Background;
