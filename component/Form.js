import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../pages/Context';

const WrapperForm = styled.form`
&.form label{
  transform: translateX(-150);
}

&.showForm label{
  transform: translateX(0);
}
  
label {
  transition-property: transform;
  transition-duration: 1.5s;
  transition-delay: 0s;
  transition-timing-function: ease;
  transform: translateX(-150%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: rgba(30, 33, 58, 1);
  opacity: 1;
  width:459px;
  display: block;
  padding-top: 4rem;
.close {
    position: absolute;
    top: 23px;
    right: 40px;
    color: #E7E7EB;
    border: none;
    font-size: 1.5rem;
    background: rgba(30,33,58,1);
;
}
input {
  width: 268px;
  height: 48px;
  background: rgba(30, 33, 58, 1);
  margin-right: 1rem;
  text-align: center;
  margin-left: 2rem;
  margin-bottom: 2rem;

}
input + button {
  background: rgba(60, 71, 233, 1);
  width: 86px;
  height: 48px;
  color: white;
}
form button {
    width: 367px;
    height: 64px;
    background: rgba(30, 33, 58, 1);
    margin-bottom: 30px;
    margin-left: 2rem;
    color: white;
    border: none;
    text-align: left;
  }
form button:hover {
    border: 1px solid #616475;
    box-sizing: border-box;
}
}

`
export const Form = ({
    onClick,
    onChange,
    Submit,
    value,
    search,
    SubmitButton,
    placeholder,
    ...props
}) => {
    const { city } = useContext(Context)
    return (
        <WrapperForm className={props.className}>
            <label>
                <button className='close' type='button' onClick={onClick}>X</button>
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder} />
                <button onClick={Submit}>{search}</button>
                <div>
                    {city?.map(cit => {
                        return (
                            <form >
                                <button id={cit.title} onClick={SubmitButton}>{cit.title}</button>
                            </form>
                        )
                    }
                    )
                    }
                </div>
            </label>
        </WrapperForm>
    )
}