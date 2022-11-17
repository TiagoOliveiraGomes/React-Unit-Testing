import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', ()=>{
    it('Should render list items', ()=>{
        const { getByText} = render(<App />)
        
        expect(getByText('Tiago')).toBeInTheDocument()
        expect(getByText('Lucas')).toBeInTheDocument()
        expect(getByText('Pedro')).toBeInTheDocument()
    })
    
    it('Should be able to add new item to the list', async ()=> {
        const { getByText, getByPlaceholderText } = render(<App />)
        const addButton = getByText('Add')
        const inputElement = getByPlaceholderText('New Item')

        await userEvent.type(inputElement, 'New')
        await userEvent.click(addButton)

        await waitFor( async () => {
            expect(getByText('New')).toBeInTheDocument()
        })
    })

    it('Should be able to remove new item to the list', async ()=> {
        const { getByText, getAllByText, queryByText } = render(<App />)
        const addButton = getByText('Add')
        const removeButtons = getAllByText('Remove')

        await userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Tiago')).not.toBeInTheDocument()
        })
    })
})