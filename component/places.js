import React from "react"
import styled from "styled-components"

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
      width: 150px;
      height: 174px;
    }
    ul {
        padding: 0;
        li {
            list-style : none;
            p {
               font-size: 36px;
            }             
            p+p {
                font-size : 18px;
            }
            h2 {
                font-size : 18px;
            }
            }
        }
       
`
export const CapitalCountryName = ({ src, temp, climat, date, capital }) => {
    return (
        <Wrapper>
            <img src={src} />
            <ul>
                <li>
                    <div>{temp}</div>
                    <p>{climat}</p>
                    <p>{date}</p>
                    <h2>{capital}</h2>
                </li>
            </ul>
        </Wrapper>

    )
}
