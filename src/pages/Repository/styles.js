import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold; /*deixar em negrito*/
  display: flex;
  justify-content: center; /*alinha os itens na horizontal*/
  align-items: center; /*alinha itens de diferentes tamanhos*/
  height: 100vh; /*aqui pega 100% da altura como parametro p/ centralizar*/
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column; /*alinha os itens em coluna um debaixo do outro*/
  align-items: center; /*alinha centralizado*/

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    /*estilizar a logo, no caso a img*/
    width: 120px;
    border-radius: 50%; /*assim vai ficar sempre aredondada*/
    margin-top: 20px;
    border: 2px solid #eee;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4; /*aumenta 40% do line-height tradicional*/
    text-align: center;
    max-width: 400px; /*largura maxima do texto*/
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex; /*alinha na horizontal*/
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 35px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1; /*utiliza todo o espaço disponivel e não ultrapassa o limite*/
      margin-left: 15px; /*pra se distanciar da imagem do usuario*/

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            /*quando passa o mouse sobre o link*/
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600; /*uma especie de grau de escurecimento da fonte*/
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueDiv = styled.div`
  display: flex;
  padding-top: 30px;
  border-top: 1px solid #eee;
  margin-top: 20px;
  justify-content: center;

  button {
    width: 100px;
    border: 1px solid #ccc;
    color: #444;
    background: #ccc;
    padding: 10px 10px;
    font-weight: 600;
    transition: all 0.3s;
    margin: 8px;
    border-radius: 4px;

    &:hover {
      background: #719;
      color: #fff;
    }
  }
`;
export const PageButton = styled.div`
  display: flex;

  button {
    margin-top: 15px;
    border: none;
    color: #444;
    background: none;
    line-height: 1;
    font-size: 15px;
    display: inline-flex;
    padding: 5px 8px;
    transition: all 0.3s;

    &.back {
      margin-right: auto;
    }

    &.next {
      margin-left: auto;
    }

    &:hover {
      color: #719;
    }
  }
`;
