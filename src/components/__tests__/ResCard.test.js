import {render} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from '..//mocks/resCard.data.json'
import '@testing-library/dom'


it('should render restaurant card component with props data',()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name=screen.getByText('...');
    expect(name).toBeInDocument;
})