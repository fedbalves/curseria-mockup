import styled from 'styled-components';
import Theme from '../Theme';

export const StyledMaterial = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;

  li.item--list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid ${Theme.colors.elements[500]};
    margin-bottom: 16px;
    padding-bottom: 16px;

    &:last-child {
      border-bottom: 0;
    }

    span.item--list--order {
      color: ${Theme.colors.elements[400]};
      font-size: 60px;
      font-family: 'san_francisco_textbold';
      display: flex;
      flex-direction: row;
      min-width: 120px;
      max-width: 120px;
      justify-content: space-between;

      &:after {
        content: '_';
        position: relative;
        width: 30px;
        margin: 0 8px;
        bottom: 10px;
        color: ${Theme.colors.elements[500]};
      }
    }

    div.item--list--wrapper {
      flex-grow: 2;

      h2.item--list--wrapper--title {
        margin-bottom: 16px;
      }

      p.item--list--wrapper--text {
        color: ${Theme.colors.text[300]};
        font-size: 16px;
      }

      div.item--list--wrapper--detail {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 24px 0;

        .item--list--wrapper--detail--info {
          display: flex;
          justify-content: flex-start;
          flex-direction: row;

          .info--paragraph {
            color: ${Theme.colors.text[300]};
            font-size: 12px;
            font-family: 'san_francisco_textbold';

            span,
            b {
              display: inline-block;
              margin-right: 16px;
              text-transform: uppercase;
            }

            b {
              font-size: 14px
              color: ${Theme.colors.action.red};
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width : 768px) {
    li.item--list {
      flex-direction: column;
    }
  }

`
