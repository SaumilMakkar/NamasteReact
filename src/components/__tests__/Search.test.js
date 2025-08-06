import {fireEvent, render,screen} from '@testing-library/react'
import Body from '../Body.js'
import data from '../mocks/mockResListData.json'
import { act } from 'react'
import { BrowserRouter } from 'react-router-dom'


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data);
        }
    })
})

describe("Contact Us Page Test Case",()=>{


beforeAll(()=>{
console.log('Hello');
})

beforeEach(()=>{
    console.log('Before Each')
})

it('should render the body component with search field',async()=>{
   await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

   expect(cards.length).toBe(20);
   const searchButton=screen.getByRole('button',{name:'Search'});
   const searchInput=screen.getByTestId('searchInput');
   fireEvent.change(searchInput,{target:{value:'burger'}});
   fireEvent.click('searchButton')

   //screen should load four cards.
   const cards=screen.getAllByTestId('res-card');
   
   expect(cards.length).toBe(4);

})
});
