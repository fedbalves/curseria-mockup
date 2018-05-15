import styled from 'styled-components';

export const StyleImageBackground = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 400px;

  .ImageBackground--wrapper {
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  @media only screen and (max-width : 768px) {
    .ImageBackground--wrapper + .ImageBackground--wrapper a {
      order: 2;
      align-self: center;
    }
  }
`
