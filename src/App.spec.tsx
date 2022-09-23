import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
    it('should render list items', () => {
        const { getByText } = render(<App />)
        expect(getByText('José')).toBeInTheDocument()
        expect(getByText('Marcos')).toBeInTheDocument()
        expect(getByText('Mike')).toBeInTheDocument()
    })
    
    it('should be able to add new item to the list', () => {
        const { getByText, debug } = render(<App />)
        const addButton = getByText('Adicionar')

        
        debug()
        userEvent.dblClick(addButton)
        debug()

        expect(getByText('New')).toBeInTheDocument()
    })
})