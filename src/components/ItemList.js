import React from 'react'
import { addItem } from '../utils/cartSlice';
import {useDispatch} from 'react-redux'

function ItemList({ items,dummy }) {


  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    //dispatch an action
    dispatch(addItem(item))
  }
  
  return (
    <div>
      {items.map((item) => (
        <div data-testid='fooditems'
         key={item.card.info.id} className='p-2 m-2 border border-black border-b-2 text-left'>
            
          <div className='p-2'>
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
          </div>
          <p className='text-xs'>{item.card.info.description}</p>
          <div className='w-3/12 p-4 absolute'>
            <img src={CDN_URL + item.card.info.imageId} className='w-36' />
            <button  onClick={()=>
handleAddItem(item)} className='p-2 bg-white shadow-lg absolute m-auto'>Add+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList