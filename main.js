
function ViewProductCategory(){

    var ProductCat= document.getElementById('CategoryInput').Value;
        switch(ProductCat){
            case "C":
                var ProductCat= document.getElementById("ViewCategory").innerHTML=
                "Category:Clothing";

            case "E":
                document.getElementById("View Category").innerHTML=
                "Category: Electronics";
            case "B"
                document.getElementById("ViewCategory").innerHTML=
                "Category: Books";
                break;
            default:
                window.alert("Invalid Categgory")
                
        }
}