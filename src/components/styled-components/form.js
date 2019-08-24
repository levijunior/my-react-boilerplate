import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  position: relative;
`
export const InputEl = styled.input`
  display:block;
  padding: 10px 20px;
  color: #222;
  background: white;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  margin: auto;
  width: 500px;
  max-width: 100%;
  margin-bottom:20px;
  box-sizing: border-box;
`

export const ButtonEl = styled.button`
  background: #61dafb;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  color: #222;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 3px;
  margin: auto;
  width: 500px;
  max-width: 100%;
  cursor: pointer;
`