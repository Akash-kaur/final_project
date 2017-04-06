function getdata(st,tp){
    var b=dynamicproduct(st);
    
    var isthtml='<div class="container"><div class="product-img"><div class="pro-img"><img src="'+b[0]+'"></div><div class="product-detail"><h2>'+b[3]+'</h2><p>Web ID: 1089772</p><img src="images/rating.png" alt="" /><span class="pro-review">&nbsp 19,343 Ratings & 2,442 Reviews</span><div class="pro-rate"><span>'+b[2]+'</span><span class="pro-less">'+b[1]+'</span><span class="pro-offer">2% OFF</span></div><p><b>Availability:</b> In Stock</p><div class="pro-code"><span>Check Delivery</span><input type="text" placeholder="Enter the Code"><span><a href="#">Check</a></span></div><div class="prod-btn"><div class="pro-btn"><a href="javascript:void(0)" onclick="javascript:getdata('+st+',2);">Add to cart</a></div><div class="pro-btn"><a href="javascript:void(0)" onclick="javascript:getdata('+st+',2);">Buy Now</a></div></div><a href="#"><img src="images/share.png"></a></div></div></div>';
     
     var cart='<div class="container"><h1>My Cart</h1><div class=add-cart><table><thead><tr class="cart-menu"><td class="image">Image</td><td class="description">Product Name</td><td class="price">Price</td><td class="quantity">Quantity</td><td class="total">Total</td></tr></thead><tbody><tr><td class="cart-pro"><a href=""><img src="'+b[0]+'"></a></td><td class="cart-des"><h4><a href="">'+b[3]+'</a></h4></td><td class="cart-price"><p>'+b[2]+'</p></td><td class="cart-qua"><div class="cart-button">1</div></td><td class="cart-to"><p>'+b[2]+'</p></td></tr></tbody></table></div><div class="sub"><p>Subtotal (1 item) : <span>'+b[2]+'</span></p></div><div class="btn-shop"><div class="shop-btn place"><a href="javascript:void(0)" onclick="javascript:getdata(0,3);">Place Order</a></div></div></div>';
     
     var info='<div class="container"><h1>Delivery Address Detail</h1><form action="" style="border:1px solid #ccc"><div class="check-dt"><div class="frm-lvl"><label>Name</label><br><input type="text" placeholder="First Name"></div><div class="frm-lvl"><label>Last Name</label><br><input type="text" placeholder="Last Name"></div><div class=frm-lvl><label>Email Address</label><br><input type="text" placeholder="Email Address"></div><div class="frm-lvl"><label>Mobile no.</label><br><input type="text" placeholder="Mobile no."></div><div class="frm-lvl"><label>Country</label><br><input type="text" placeholder="Country"></div><div class="frm-lvl"><label>State</label><br><input type="text" placeholder="State"></div><div class="frm-lvl"><label>Pincode</label><br><input type="text" placeholder="Pincode"></div><div class="frm-lvl"><label>Address 1</label><br><input type="text" placeholder="Address"></div><div class="frm-lvl"><label>Address 2</label><br><input type="text" placeholder="Address"></div></div><input type="checkbox" checked="checked">Remember me<div class="dlv-btn"><div class="del-btn"><a href="javascript:void(0)" onclick="javascript:getdata(0,4);">Processed</a></div><div class="del-btn dlt"><a href="javascript:void(0)">Cancel</a></div></div></form></div>';
     
     var msg='<div class="container"><div class="order-sucess"><h1>Success</h1><img src="images/success-icon.png"><p>Thanks so much for your message. We check e-mail frequently and will try our best to respond to your inquiry.</p><a href="index.html">Back to home</a></div></div>';
     
     if(tp==1){
        document.getElementById("products-item").innerHTML="";
        document.getElementById("products-item").style.visibility="hidden";       
        document.getElementById("cont2").style.visibility="visible";
        document.getElementById("cont2").innerHTML=isthtml;
     }else if(tp==2){
        document.getElementById("cont2").innerHTML="";
        document.getElementById("cont2").style.visibility="hidden";
        document.getElementById("cont3").style.visibility='visible'; 
        document.getElementById("cont3").innerHTML=cart;
     }else if(tp==3){
        document.getElementById("cont3").innerHTML="";
        document.getElementById("cont3").style.visibility="hidden";
        document.getElementById("cont4").style.visibility='visible'; 
        document.getElementById("cont4").innerHTML=info;
     }else if(tp==4){
        document.getElementById("cont4").innerHTML="";
        document.getElementById("cont4").style.visibility="hidden";
        document.getElementById("cont5").style.visibility='visible';
        document.getElementById("cont5").innerHTML=msg;
     }
   
}

function dynamicproduct(el){
var image="";
var mrp="";
var price="";
var name="";

switch(el){
    case 1:
        image="images/phn-img.jpg";
        mrp="$ 200";
        price="$ 150";
        name="Iphone 7";
        break;
    case 2:
        image="images/shoes.jpg";
        mrp="$ 90";
        price="$ 50";
        name="Branded Shoes";
        break;
    case 3:
        image="images/shoes1.jpg";
        mrp="$ 25";
        price="$ 15";
        name="Mens Casual Shoes";
        break;
    case 4:
        image="images/shirt.jpg";
        mrp="$ 28";
        price="$ 20";
        name="Designer Men's Formal Shirt";
        break;
    case 5:
        image="images/tshirt.jpg";
        mrp="$ 28";
        price="$ 25";
        name="Nike Men's Tshirt";
        break;
    case 6:
       image="images/shirt-01.jpg";
         mrp="$ 28";
        price="$ 20";
        name="Blue Formal Shirt";
        break;
}

var innrht=[image,mrp,price,name];

 return innrht;

}