import React from 'react'
import styled from 'styled-components'
const WrapperButton = styled.div`
padding-top : 42px;
padding-left : 40px;
button{
    background: rgba(110, 112, 122, 1);
    min-width : 161px;
    height : 40px;
    color : rgba(231, 231, 235, 1);
    font-size: 16px;
    line-height: 19px;
    padding-left : 18px;
    padding-right : 18px;
    box-sizing : border-box;
    border : none;
}
`

export const SearchButton = ({ onClick, placeholder, text }) => {
    return <WrapperButton>
        <button
            placeholder={placeholder}
            onClick={onClick}>{text}</button>
    </WrapperButton>
}

