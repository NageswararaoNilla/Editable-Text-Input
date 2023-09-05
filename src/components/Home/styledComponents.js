import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5d0fe;
`

export const ResponsiveContainer = styled.div`
  background-color: white;
  width: 40%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  border-radius: 12px;
`

export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0;
  height: 50px;
`

export const Input = styled.input`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 20px;
  width: 80%;
  max-width: 250px;
  height: 32px;
  padding: 8px 16px;
  margin-right: 12px;
  border-radius: 5px;
  border: 2px solid #cbd2d9;
  outline: none;
`

export const Text = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  width: 80%;
  min-width: 100px;
  max-width: 250px;
`

export const SaveButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background-color: #d946ef;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 75px;
  height: 30px;
  margin-left: 12px;
`
