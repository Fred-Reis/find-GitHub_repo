import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1; /*isso faz com que ele ocupe todo o espaço possivel */
    border: 1px solid ${props => (props.notRepo ? 'red' : '#eee')};
    padding: 10px 15px; /*1º emcima e embaixo e 2º laterais */
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex; /*essas 3 configs vão centerlizar o conteudo do botão*/
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between; /*aqui separa os itens*/
    align-items: center; /*aqui alinha mesmo se tiverem tamanhos diferentes*/

    & + li {
      /*essa config & + faz a estilização somente a partir do 2º componente igual*/
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none; /*retira a linha debaixo do link*/
    }
  }
`;
