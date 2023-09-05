import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  InputContainer,
  Input,
  Text,
  SaveButton,
} from './styledComponents'

class Home extends Component {
  state = {savedText: false, inputText: ''}

  onClickSaveButton = () => {
    this.setState(prev => ({savedText: !prev.savedText}))
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {savedText, inputText} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {savedText ? (
              <Text>{inputText}</Text>
            ) : (
              <Input
                value={inputText}
                onChange={this.onChangeInput}
                type="text"
              />
            )}
            <SaveButton type="button" onClick={this.onClickSaveButton}>
              {savedText ? 'Edit' : 'Save'}
            </SaveButton>
          </InputContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default Home
