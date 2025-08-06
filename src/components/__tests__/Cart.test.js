import RestaurantMenu from "../RestaurantMenu"
import {fireEvent, render,screen} from '@testing-library/react'
import { act } from 'react'
import Header from "../Header"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import MOCK_DATA from '../mocks/mockResMenuData.json'
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA),
    })
})



it('should load res menu component',async()=>{
    await act(async()=>render(<BrowserRouter><Provider store={appStore}><RestaurantMenu/><Header/><Cart/></Provider></BrowserRouter>));
    const header=screen.getByText('Biryani 5');
    fireEvent.click(header);
    const items=screen.getAllByTestId('fooditems')
    expect(items.length).ToBe(5);



    const addBtns=screen.getByRole('button',{name:"Add +"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBe(1);

    fireEvent.click(screen.getByRole('button',{name:"Clear Cart"}));
    expect(screen.getAllByTestId('fooditems').length).toBe(0);
    



})