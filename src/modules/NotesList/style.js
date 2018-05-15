import styled from 'styled-components';
import Theme from '../Theme';

export const StyledNotesList = styled.div`
  width: 100%;
  position: relative;
  display: block;

  ol {
    padding-left: 0;
    list-style: none;

    &:before {
      display: block;
      position: absolute;
      width: 1px;
      height: calc(100% - 150px);
      left: 60px;
      z-index: 1;
      top: 100px;
      content: ' ';
    }

    li.notes--item--list {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 50px;

      .notes--item--list--avatar {
        margin-right: 16px;
        z-index: 2;
      }

      .notes--item--list--order {
        margin-left: 24px;
        margin-right: 8px;
        font-size: 100px;
        color: ${Theme.colors.elements[400]};
        display: flex;
        flex-direction: row;
        width: 100px;
        min-width: 100px;
        max-width: 100px;
        justify-content: flex-end;
        position: relative;

        &.notes--item--first-letter span::first-letter {
          font-size: 80px;
        }

        &:before {
          position: absolute;
          left: 0;
          content: '_';
          color: ${Theme.colors.elements[400]};
        }

      }

      .notes--item--list--wrapper {
        flex-grow: 1;
      }

      .notes--item--list--wrapper--info {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
      }
      @media only screen and (max-width : 768px) {
        .notes--item--list--wrapper--info {
          flex-direction: column;
        }
        .mobile--course--notes-inner {
          display: none!important;
        }
      }

      .notes--item--list--wrapper--title {
        margin-bottom: 8px;
        * {
          color: ${Theme.colors.text[100]};
        }
      }

      .notes--item--list--wrapper--text {
        font-size: 16px;
        color: ${Theme.colors.text[300]};
      }

      .notes--timeline {
        margin-top: 40px;
      }

      .notes--timeline--list--item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 16px;

        .notes--item--datetime {
          width: 130px;
          font-family: 'san_francisco_textsemibold';
          font-size: 22px;
          color: ${Theme.colors.text[300]};
          letter-spacing: 3px;
          max-width: 130px;
          min-width: 130px;
        }

        .notes--item--note {
          flex-grow: 1;
          border-bottom: 1px solid ${Theme.colors.elements[400]};
          font-size: 16px;
          padding-bottom: 4px;
          font-family: 'san_francisco_textregular';
          color: ${Theme.colors.text[200]};
          padding: 4px;
        }

        .notes--item--icon {
          margin-left: 16px;

          svg {
            fill: ${Theme.colors.text[300]}!important;
          }
        }
      }
    }
  }

  div.toolbar--notes {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;
