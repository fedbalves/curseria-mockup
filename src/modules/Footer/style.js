import styled from 'styled-components';
import Theme from '../Theme';

export const StyledFooter = styled.footer`
  display: block;
  position: relative;
  height: 400px;
  background-color: ${Theme.colors.bases[300]};

  @media (max-width: 1200px) {
		max-width: calc(100% - 30px);
	}

  .Footer--lettering {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
  }

  @media only screen and (max-width : 768px) {
    max-width: 100%!important;
    height: 200px!important;

    .Footer--Curseria.outset {
      display: flex!important;
    }

    .Footer--Curseria.inset {
      display: none!important;
    }

    .Footer--Curseria {
      border-top: 1px solid ${Theme.colors.bases[100]};

      p {
        max-width: 100%!important;
        letter-spacing: 10px!important;
        margin: 16px auto 0 auto!important;
      }
    }
  }

  .Footer--Curseria {

    &.outset {
      display: none;
    }

    p {
      max-width: calc(100% - 250px);
      font-family: 'san_francisco_textbold';
      width: 100%;
      letter-spacing: 25px;
      margin-left: 40px;
      color: ${Theme.colors.text[300]};
    }

    b {
      color: ${Theme.colors.text[200]};
    }
  }
`
