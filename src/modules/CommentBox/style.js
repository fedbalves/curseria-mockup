import styled from 'styled-components';
import Theme from '../Theme'

export const StyledCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  .myWrapper {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    border: 1px solid ${Theme.colors.elements[500]};
    padding: 10px;
    margin: 20px 0;
    width: calc(100% - 16px);
    background-color: ${Theme.colors.bases[300]};
  }

  .myWrapper--submit--button {
    align-self: flex-end!important;
  }

  * {
    color: #FFF!important;
  }

  @media only screen and (max-width : 768px) {
    width: calc(100% - 16px)!important;
  }
`
