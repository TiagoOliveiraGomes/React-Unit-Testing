import { render, waitFor } from '@testing-library/react'
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
        const { getByText, getByPlaceholderText, findByText } = render(<App />)
        const addButton = getByText('Add')
        const inputElement = getByPlaceholderText('New Item')

        await userEvent.type(inputElement, 'New')
        await userEvent.click(addButton)

        await waitFor( async () => {
            expect(getByText('New')).toBeInTheDocument()
        })
        // expect(await findByText('New')).toBeInTheDocument()
    })
})