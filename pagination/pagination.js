document.addEventListener("DOMContentLoaded",function(){
    let product=[];
    let page =1;

    const fetchProducts = async() =>{
        try{
            const res = await fetch("https://dummyjson.com/products?limit=100");
            const data = await res.json()
            if(data && data.products){
                products = data.products
                render()
        
            }
        }catch(e){
            console.log("Error",e)
        }
    }
})