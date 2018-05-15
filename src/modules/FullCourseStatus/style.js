import styled from 'styled-components';
import Theme from '../Theme';

export const StyledContentStatus = styled.div`
  align-self: center;
  flex-direction: column;
  display: flex;
  max-width: 190px;
  min-width: 190px;
  width: 100%;

  .FullCourseStatus--label {
    display: block;
    font-family: san_francisco_displayheavy;
    font-size: 15px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 3px;
    text-align: center;
    text-transform: uppercase;
    margin: 15px 0;
    color: ${Theme.colors.action.red};
    &:hover {
      text-decoration: underline;
    }
  }

  .FullCourseStatus--icon {
    color: ${Theme.colors.action.red}!important;
    text-align: center;
    margin: auto;

    margin-top: 16px;
  }
`;
