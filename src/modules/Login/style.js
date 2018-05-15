import styled from 'styled-components';
import Theme from '../Theme';

export const StyledLogin = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 600px;
  padding: 50px 30px;
  background-color: ${Theme.colors.bases[100]};
  border-radius: 16px;

  h2 {
    position: relative;
    font-family: san_francisco_textregular;
    font-size: 28px;
    line-height: 1.29;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    text-align: left;
    margin: 50px 0 16px 0;
    align-self: flex-start;
    color: ${Theme.colors.text[200]};
    text-indent: 32px;

    &:after {
      content: '';
      width: 92px;
      height: 10px;
      display: block;
      position: relative;
      margin-top: 15px;
      background-color: ${Theme.colors.bases[300]};
      box-shadow: 0px 3px 13px 0 ${Theme.colors.bases[100]};
    }
  }

  .formControl {
    display: block;
    align-self: flex-start;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${Theme.colors.elements[300]};
    margin: 22.5px 0;

    input {
      border: none;
      background-color: transparent;
      font-family: san_francisco_textregular;
      height: 45px;
      width: calc(100% - 16px);
      font-size: 21px;
      line-height: 1.52;
      letter-spacing: 0.6px;
      text-align: left;
      padding: 0 8px;
      color: ${Theme.colors.elements[300]};
      &::placeholder {
        color: ${Theme.colors.elements[300]};
      }
    }
  }

  .login--simple--link {
    display: block;
    font-family: san_francisco_textlight;
    font-size: 16px;
    line-height: 2;
    letter-spacing: 0.5px;
    text-align: left;
    color: ${Theme.colors.elements[300]};
  }

  .login--action--button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  p {
    font-family: san_francisco_textregular;
    padding: 20px;
    font-size: 25px;
    line-height: 1.44;
    letter-spacing: 1.3px;
    text-align: center;
    color: ${Theme.colors.text[200]};
  }

  .login--auth--error {
    display: block;
    font-family: san_francisco_textlight;
    font-size: 14px;
    line-height: 2;
    letter-spacing: 0.5px;
    text-align: right;
    color: ${Theme.colors.action.red};
  }

  .login--auth--email {
    display: block;
    font-family: san_francisco_textlight;
    font-size: 16px;
    line-height: 2;
    letter-spacing: 0.5px;
    text-align: left;
    color: #FFF;

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width : 768px) {
    h2 {
      font-size: 22px;
      line-height: 1;
      letter-spacing: 1.1px;
      text-align: center;
      margin: 30px 0 16px 0;
      align-self: flex-start;
      text-indent: 12px;
      width: 100%;
    }

    .formControl {
      height: 35px;
      margin: 12.5px 0;

      input {
        height: 35px;
        font-size: 18px;
        line-height: 1.32;
      }
    }

    .login--simple--link {
      font-size: 14px;
      margin-top: 8px;
      line-height: 1;
    }

    .login--auth--error {
      font-size: 12px;
      line-height: 1.5;
      margin-top: 8px;
    }

    .login--auth--email {
      line-height: 1;
      font-size: 14px;
    }

    .login--action--button div {
      margin-right: 0;
    }

    p {
      padding: 8px;
      font-size: 20px;
      line-height: 1.24;
      letter-spacing: 1px;
    }
  }

`
