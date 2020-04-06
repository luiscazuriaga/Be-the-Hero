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
  color:  ${(props) => props.theme.colors.titlescolor};
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
    color:  ${(props) => props.theme.colors.input};
    
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
    color:  ${(props) => props.theme.colors.input};
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
    color: ${(props) => props.theme.colors.return};
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

.new-incident-container .content{
 
    width: 100%;
    padding: 96px;
    background: ${(props) => props.theme.colors.content};
    box-shadow: 0 0 100px rgba(0 ,0 ,0 , 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}


.profile-container ul li{

background: ${(props) => props.theme.colors.content};
padding: 24px;
border-radius: 8px;
position: relative;
}

.profile-container ul li button{

background: ${(props) => props.theme.colors.content};
position: absolute;
right: 24px;
top: 24px;
border: 0;

}


.profile-container ul li p{

color: #737380;
line-height: 21px;
font-size: 16px;
}

.register-container .content section h1{

${(props) => props.theme.colors.titlescolor};
margin:  64px 0 32px;
font-size: 32px;

}

.register-container .content section p{

font-size: 16px;
color: #737380;
line-height: 32px;


}
`
