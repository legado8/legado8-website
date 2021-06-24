import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: 960px;
  padding: 3rem 0;
  display: flex;

  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    flex: 1 1 auto;
    justify-content: flex-end;

    li {
      list-style: none;
      margin: 0;
      padding: 0 0 0 1rem;
      a {
        color: white;
      }
    }
  }
`;
