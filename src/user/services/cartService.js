// we are taking data
export const getCart =()=>{
    const cart=localStorage.getItem("cart");
    return cart ? JSON.parse(cart):[];
};

// we are saving the data

export const saveCart=(cart)=>{
    localStorage.setItem("cart",JSON.stringify(cart));
}

// add to cart
export const addToCart=(product)=>{
    let cart=getCart();

    const exist=cart.find((p)=>p.product_id ===product.product_id);

    if(exist){
        exist.qty+=1;
    }
    else{
        cart.push({...product,qty:1});
    }

    saveCart(cart);
};

// remove
// filter will create a new array
export const removeFromCart=(productId)=>{
    let cart=getCart().filter((p)=>p.product_id !==productId);
    saveCart(cart);
}

// update

export const updateQty=(productId,qty) =>{
    let cart=getCart();

    cart=cart.map((p)=>
        p.product_id === productId ?{...p,qty}:p
    );
    saveCart(cart);
};

export const clearCart=()=>{
    saveCart([]);
};







// JSON.parse ->converting JSON strings into JavaScript objects
// JSON.stringify ->converting an object into a JSON string

// For storing purpose we will be usinf stringify format because we will be storing in the text format
// For retrieving the data we will be using parse
