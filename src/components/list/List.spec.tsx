import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {List} from './'

describe('List Component', ()=>{
    it('Should render list items', ()=>{
        const { getByText, rerender, queryByText} = render(<List initialItems={['Tiago', 'Lucas', 'Pedro']} />)
        
        expect(getByText('Tiago')).toBeInTheDocument()
        expect(getByText('Lucas')).toBeInTheDocument()
        expect(getByText('Pedro')).toBeInTheDocument()
        
        rerender(<List initialItems={['Julia']} />)
        
        expect(screen.getByText('Julia')).toBeInTheDocument()
        expect(screen.queryByText('Pedro')).not.toBeInTheDocument()
    })
    
    it('Should be able to add new item to the list', async ()=> {
        const { getByText, getByPlaceholderText } = render(<List initialItems={[]} />)
        const addButton = getByText('Add')
        const inputElement = getByPlaceholderText('New Item')

        await userEvent.type(inputElement, 'New')
        await userEvent.click(addButton)

        await waitFor( async () => {
            expect(getByText('New')).toBeInTheDocument()
        })
    })

    it('Should be able to remove new item to the list', async ()=> {
        const { getByText, getAllByText, queryByText } = render(<List initialItems={['Tiago']} />)
        const addButton = getByText('Add')
        const removeButtons = getAllByText('Remove')

        await userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Tiago')).not.toBeInTheDocument()
        })
    })
})