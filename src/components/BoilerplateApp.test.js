import React from 'react'
import { render, waitForElement, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BoilerplateApp from './BoilerplateApp'

afterEach(cleanup)

it('renders and compare to snapshot', () => {
  const { asFragment } = render(<BoilerplateApp />)
  expect(asFragment()).toMatchSnapshot()
});

describe('Test example for __boilerplate',  () => {
  it('Update the __boilerplateDuck store', async () => {
    const { getByTestId } = render( <BoilerplateApp /> ),
    fieldNode = await waitForElement( () => getByTestId('inputEl') ),
    btnNode = await waitForElement( () => getByTestId('buttonEl') ),
    h2Node = await waitForElement( () => getByTestId('h2El') ),
    testText = 'test text'

    fireEvent.change(fieldNode, { target: {value: testText} })
    expect(fieldNode.value).toEqual(testText)

    fireEvent.click(btnNode)
    
    expect(h2Node).toHaveTextContent(testText)
  })
})
