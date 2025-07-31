import React from 'react'

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className='p-2 m-2 border border-black border-b-2 text-left'>
            
          <div className='p-2'>
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
          </div>
          <p className='text-xs'>{item.card.info.description}</p>
          <div className='w-3/12 p-4 absolute'>
            <img src={CDN_URL + item.card.info.imageId} className='w-36' />
            <button className='p-2 bg-white shadow-lg absolute m-auto'>Add+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList