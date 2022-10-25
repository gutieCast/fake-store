import React, { Component } from 'react';
import { ICartProps } from './interface';
import { Catalog } from '../Catalog';
import { IProduct } from '../Card/interface';
import {
    Box,
    Container,
        } from '@chakra-ui/react';
import { ICatalogState } from '../Catalog/interface';

class Cart extends Component< ICartProps, ICatalogState> {
    cartContent: any;
    totalItems: any;
    totalPrice: any;
    constructor(props: ICartProps) {
        super(props);
        
        this.cartContent;
        this.totalItems;
        this.totalPrice;
        // this.state = {
        //     products: []
        // };

    }
    
    ////Method to add product in the cart by id
    addItemToCart = (id: number) => {
        //Function to find product by id
        const itemCart = Catalog.state.products.find((product: { id: number; }) => product.id === id);
        //Handle the adding of product
        let itemToAdd = this.cartContent.find((item: IProduct) => item.id === id);
        // if is not exist in cart, added to it
        if (itemToAdd === undefined) {
            this.cartContent.push(
                {
                    itemCart,
                    numberOfUnits: 1
                }
            )
            // else, change number of units
        } else {
            itemToAdd.numberOfUnits++;
        }

        //Increment totalItems
        this.totalItems++;
        this.updateCart();
    }

    //Reset info in cart-off-canvas element and actualice the number in btn-cart's badge
    updateCart = () => {
        // cartDOM.innerHTML = "";
        // this.totalPrice = 0;
        // this.getCartItems();
        // this.getNumberOfItemsCart();
        // //Check if cart is empty to set interface
        // if (this.cartContent.length > 0) {
        //     this.calcSubtotal();
        // }
        // } else {
        //     subtotalDOM.innerHTML = 'There is nothing yet';
        // }
    }

    //Method to count the number of products and add it in btn-cart's badge
    getNumberOfItemsCart = () => {
        // document.getElementById("btn-cart").innerHTML +=
        //     `
        //     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        //     ${this.totalItems}</span>
        // `;
    };

    //Method to render items in the cart element
    getCartItems = () => {
        for (let item of this.cartContent) {
            // Destructuring item in cart to get properties
            const { itemCart: { id, title, price }, numberOfUnits } = item;
            // cartDOM.innerHTML +=
            //     `
            //     <tr class="cart item">
            //         <th scope="row">
            //             <button type="button" class="btn btn-outline-light" onclick=(cart.removeItem(${id}))>
            //                 <i class="bi bi-trash" style="color: red;"></i>
            //             </button>
            //         </th>
            //         <th><h6>${numberOfUnits}</h6></th>
            //         <th><h6>${title}</h6></th>
            //         <th><h6>$${(price * numberOfUnits).toFixed(2)}</h6></th>
            //         </tr>
            // `;
        }
    }

    // calcSubtotal = () => {
    //     if (fetched) {
    //         //Loop to calculate price for each item in cart
    //         for (let item of this.cartContent) {
    //             this.totalPrice += (item.itemCart.price * item.numberOfUnits.toFixed(2));
    //         }
    //         //Render totalIten in cart and the subtotal
    //         subtotalDOM.innerHTML =
    //             `
    //                 <div class="row w-100 row-cols-2 g-2">
    //                     <div class="col">
    //                         <div class="mb-3">
    //                             Subtotal (${this.totalItems} items):
    //                         </div> 
    //                     </div>
    //                     <div class="col">
    //                         <div class="mb-3 d-flex justify-content-end">
    //                             $${this.totalPrice.toFixed(2)}
    //                         </div> 
    //                     </div>
    //                 </div>
    //             `;
    //     }
    // }

    // Method to remove a item by id
    removeItem = (id: string) => {
        // const itemToDelete = this.cartContent.find(item: any => item.itemCart.id === id);
        // this.cartContent = this.cartContent.filter(item: any => item.itemCart.id !== id);
        // this.totalItems = this.totalItems - itemToDelete.numberOfUnits;
        // this.updateCart();
    }

    // Method to clean all cart data
    removeAll = () => {
        // this.cartContent = [];
        // this.totalItems = 0;
        // this.totalPrice = 0;
        // this.updateCart();
    }
}

export { Cart }