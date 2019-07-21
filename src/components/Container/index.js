import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px; /* a largura maxima*/
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto; /*80 são margens e esse auto centraliza as laterais */

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row; /* ESTUDAR acho que é pra colocar um do lado do outro*/
    align-items: center; /* Essas configs alinham o icone com o texto ou os itens */

    svg {
      margin-right: 10px; /*configurando o nosso icone dando uma margem */
    }
  }
`;

export default Container;
