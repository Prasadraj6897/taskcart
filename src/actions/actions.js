import {ADD_ITEMS, REMOVE_ITEMS, SUB_ITEMS} from "../constants/constants"

export const add_items = (id, items, addedItem, total) =>{
    let newItem = items.find(item=> item.id === id)
    let existed_item= addedItem.find(item=> id === item.id)
    
    if(existed_item)
    {
        newItem.quantity += 1 
        total = total + newItem.price
        return{
            type: ADD_ITEMS,
            payload: {
                addedItem: addedItem,
                total : total  
            }
        }
   }
    else{
        newItem.quantity = 1;
        let newTotal = total + newItem.price 
        
        const newArray = addedItem;
        newArray.push(newItem);
        return{
                type: ADD_ITEMS,
                payload: {
                    addedItem: newArray,
                    total : newTotal
                }
        }
    }
 
};

export const remove_item = (id, items, addedItem, total) =>{

    let itemToRemove= items.find(item=> id === item.id)
    let new_items = addedItem.filter(item=> id !== item.id)
    
    let newTotal = total - (itemToRemove.price * itemToRemove.quantity)

    return{
        type: REMOVE_ITEMS,
        payload: {
            addedItem: new_items,
            total : newTotal
        }
    }
 
};

export const sub_item = (id, items, addedItem, total) =>{

    let PreItem = items.find(item=> item.id === id) 
    if(PreItem.quantity === 1){
        let new_items = addedItem.filter(item=>item.id !== id)
        let newTotal = total - PreItem.price
        return{
            type: SUB_ITEMS,
            payload: {
                addedItem: new_items,
                total : newTotal
            }
        }
    }
    else {
        PreItem.quantity -= 1
        let newTotal = total - PreItem.price
        return{
            type: SUB_ITEMS,
            payload: {
                addedItem: addedItem,
                total : newTotal
            }
        }
    }
 
};