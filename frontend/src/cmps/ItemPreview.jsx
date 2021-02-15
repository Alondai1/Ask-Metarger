import React, { useState } from 'react'

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import StarIcon from '@material-ui/icons/Star';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function ItemPreview({ item,  onSelectItem, selectedItem }) {
console.log(selectedItem);

const classNames = selectedItem===item.name ?'item-preview selected' : 'item-preview' 


    return (
        <div onClick={() => onSelectItem(item.name)} className={classNames}>
            <img src={item.imgUrl} alt="" />
            <span>{item.name}</span>
        </div>
    )
}

export default ItemPreview
