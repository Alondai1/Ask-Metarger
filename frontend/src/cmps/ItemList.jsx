import React from 'react'
import ItemPreview from './ItemPreview'

function ItemList({items, ...rest}) {
    console.log('item-list', items);
    return (
        <div className="item-list">
            {
                items.map(item=><ItemPreview {...rest} key={item._id} item={item}/>)
            }
           
         
          
    
        </div>
    )
}

export default ItemList
