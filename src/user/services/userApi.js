const BASE_URL="http://127.0.0.1:8000";

export const getAllProducts =async ()=>{
    const response =await fetch(`${BASE_URL}/products/filter`);

    if(!response.ok){
        throw new Error("Failed to fetch product")
    }

    return response.json();
}

// search and filter

export const filterProduct =async (category,min,max)=>{

    let url=`${BASE_URL}/products/filter?`;

    if(category){
        url+=`category=${category}&`;
    }
    if(min){
        url+=`min_price=${min}&`;
    }
    if(max){
        url+=`max_price=${max}&`;
    }

    const response=await fetch(url);

    if(!response.ok){
        throw new Error("Failed to filter the product");
    }

    return response.json();
}