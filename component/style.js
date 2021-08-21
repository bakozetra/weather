import styled from "styled-components";

export const WrapperAll = styled.div`
    width : 100%;
    img {
     width: 100px;
    }
  `
export const WrapperLocation = styled.div`
    color :#A09FB1;
    background : #1e213a;
 @media(min-width:375px) {
    width:  30%;
    position : fixed;
    display : block;
    height : 100vh;
    ul {
      li {
        div {
          p span:first-child {
            font-size: 144px;
          }
        }
      }
    }
  }
   
  `
export const WrapperWeatherInDetail = styled.div`
  background: #100E1D;
  @media(min-width:375px) {
    width : 70%;
    margin-left:auto;
    padding-top:42px;
    
  }
  `
export const WeatherInDetail = styled.div`
    width : 90%;
    margin : auto;
    @media(min-width:375px) {
      width :75%;
      margin : auto;
      
    }
  `
export const Covert = styled.div`
   padding-bottom:66px; 
   text-align : end;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #e7e7eb;
      color: rgba(17, 14, 60, 1);
      font-size: 18px;
      font-weight: 700px;
      border:none;
    }
    button + button {
      margin-left : 12px;
      background: #585676;
      color : #E7E7EB;

    }
  
  `

