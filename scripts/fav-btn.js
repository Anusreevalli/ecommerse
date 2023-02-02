function captureFavoriteButtonClick(){
    const products$=document.getElementById("products")
    const favouriteButton$=products$.querySelectorAll(".btn-favorite");
    favouriteButton$.forEach(function(btn$){
        btn$.addEventListener("click",function(event){
        const target=event.target
        const favoriteBtn$ = target.closest(".btn-favorite")
     const selectedId = favoriteBtn$.getAttribute("data-id")
        console.log(selectedId)
        const selectedProductIndex = selectedProductIds.indexOf(selectedId)    
        const icon$=btn$.querySelector(".material-icons-outlined");
        if(selectedProductIndex!= -1){
        selectedProductIds.splice(selectedProductIndex,1);
        icon$.innerText = "favorite_border"
        }
        else{
            selectedProductIds.push(selectedId)
            icon$.innerText = "favorite"
           
        }
        console.log(selectedProductIds)
        const wishListCounter$ = document.getElementById("wishlistCounter")
        wishListCounter$.innerText = selectedProductIds.length;
       
        
    
        })

    })
}