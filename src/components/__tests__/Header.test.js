import Header from '../Header'
import { fireEvent, render } from '@testing-library/react'
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import {appStore} from '../../utils/appStore'



it("Login button should change on click to logout",()=>{
    render(
        <BrowserRouter>
<Provider store={appStore}>
    <Header/>
</Provider>
</BrowserRouter>
    );
    const loginButton=screen.getByText('login');
    fireEvent.click(loginButton);
    const logoutButton=screen.getByText('logout');
expect(logoutButton).toBeInDocument();
    
})