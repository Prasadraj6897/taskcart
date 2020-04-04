import React, { Component } from 'react'
import { connect } from 'react-redux';
import {add_items, remove_item, sub_item} from "../actions/actions"

class cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {id:1,title:'Nike', price:80, show:false},
                {id:2,title:'Adidas', price:90, show:false},
                {id:3,title:'Fila', price:120, show:false},
                {id:4,title:'F-sports', price:200, show:false},
                {id:5,title:'Puma', price:400, show:false}
            ],
            addedItems: [],
        }
    }
    handleAddClick = (id) => {
        const total = this.props.items.item.total ? this.props.items.item.total : 0;
        const addedItems = this.props.items.item.addedItem ? this.props.items.item.addedItem :  [];
        this.props.add_items(id, this.state.items, addedItems, total);
        this.state.items[id-1].show = true 
    }

    handleRemoveClick = (id) => {
        this.props.remove_item(id, this.state.items, this.props.items.item.addedItem, this.props.items.item.total); 
        this.state.items[id-1].show = false
    }

    handleSubClick = (id) => {
        this.props.sub_item(id, this.state.items, this.props.items.item.addedItem, this.props.items.item.total); 
        console.log("asdsd", this.props.items.item.addedItem)
        {
            this.props.items.item.addedItem.map((item) => {
                if(item.id ===1)
                {
                    this.state.items[id - 1].show = true
                }
                else if(item.id ===2)
                {
                    this.state.items[id - 1].show = true
                }
                else if(item.id ===3)
                {
                    this.state.items[id - 1].show = true
                }
                else if(item.id ===4)
                {
                    this.state.items[id - 1].show = true
                }
                else if(item.id ===5)
                {
                    this.state.items[id - 1].show = true
                }
                else {
                    this.state.items[id - 1].show = false
                }
                
            })
        }
    }

    render() {
        const {items} = this.state
        const listitems = this.props.items.item.addedItem
        const total = this.props.items.item.total
        return (
            <div>
                 <h3>Our items</h3>
                   {
                    items.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>Item : {item.title}</p>
                                <p><b>Price: {item.price}</b></p>
                                <button onClick={()=>{this.handleAddClick(item.id, item.title, item.price)}}>Add</button>
                                <div>
                                    {item.show === true ? <button onClick={()=>{this.handleSubClick(item.id)}}>Remove</button> : ""}
                                </div>             
                                < br />
                                <span>-------------------------------------</span>
                            </div>
                        )
                    })
                }
                 { listitems ? 
                    <div>
                        <h3>Cart</h3>
                        {
                            listitems.map((item) => {
                                return(
                                    <div key={item.id}>
                                       <span>Item : {item.title} </span>
                                       <p>Price: {item.price} (each)</p>
                                       <p>Quantity: {item.quantity}</p>
                                       <button onClick={()=>{this.handleRemoveClick(item.id)}}>Remove {item.title}</button>< br />
                                       <span>===================================</span>
                                    </div>
                                )
                            })
                        
                        }
                        <p>total : {total}</p>
                    </div>
                    
                    :
                    ""
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      items: state.item
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        add_items: (id, items, addedItems, total)=>{dispatch(add_items(id, items, addedItems, total))},
        remove_item: (id, items, addedItems, total)=>{dispatch(remove_item(id, items, addedItems, total))},
        sub_item: (id, items, addedItems, total)=>{dispatch(sub_item(id, items, addedItems, total))}
    }
}


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(cart)
