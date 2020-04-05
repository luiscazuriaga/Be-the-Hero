import {createGlobalStyle} from 'styled-components'





export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');


*{

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{

  font:400 14px Roboto, sans-serif;
  background: ${(props) => props.theme.colors.background};
  -webkit-font-smoothing: antialiased;
  color:  ${(props) => props.theme.colors.text};
}

input, button, textarea{
    font:400 14px Roboto, sans-serif;
}

button{
    cursor: pointer
}

form input{

    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    color:  ${(props) => props.theme.colors.text};
    
}

form textarea {

    width: 100%;
    resize: vertical;
    max-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    color:  ${(props) => props.theme.colors.background};
}

.button {
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: 0.2s;
}

.button:hover{
    filter: brightness(90%);
}




.back-link{

    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 20px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s; 
}

.back-link{

    margin-right: 8px;
}

.back-link:hover{
   
    opacity: 0.8;

}
`