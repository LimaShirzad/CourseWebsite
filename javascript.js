class MYHeader extends HTMLElement {
    connectedCallback (){
    this.innerHTML=`
    <div class="container-fluid shadow header ">
    <div class="row m-0 p-0  shadow fixed-top ">
        <div class="col m-0 p-0  "> 
        <nav class="navbar m-0 p-0 " >
               <h1 class="navbar-brand fw-bold  h1 m-3" style="color: #0B60B0;" ><span>Web</span> Devolpment</h1>   

               <div class="icon">
                        <div class="shopping">
                            <h5 class="count">0</h5>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                       
                        <div class="menu">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                            
               </div>     

           </nav>
        </div>
   </div>
</div>
 

    `
    
    } 
}
customElements.define('my-header',MYHeader);





class Mysaidbar extends HTMLElement {
    connectedCallback (){
    this.innerHTML=`
    <div class="said_menu">
            <br>
            <i class="fa-solid fa-x" id="btn_close"></i>
                 <div class="said_bar">
                       <div class="item">
                           <i class="fa-solid fa-home"></i><a href="index.html">home</a>
                       </div>

                       <div class="item">
                        <i class="fa-solid fa-user"></i><a href="about.html">about</a>
                    </div>

                    <div class="item">
                        <i class="fa-solid fa-home" ></i><a id='call' href="contact.html">contact</a>
                    </div>

                    <div class="item">
                        <i class="fa-solid fa-user"></i><a href="course.html">course</a>
                    </div>
                 </div>
        </div> 

    `
   
    } 
}
customElements.define('my-saidbar',Mysaidbar);

let said=document.querySelector(".said_menu");
let btn_menu=document.querySelector(".menu");
btn_close=document.getElementById("btn_close");

btn_menu.addEventListener("click",function()
{

    said.style.right="0";

   
})
btn_close.addEventListener("click",function()
{
    said.style.right="-100%";
})
// making count function 
let oper=0;
function sum()
{
 
    let count=document.querySelector(".count");
     oper+=1;
     count.innerHTML=oper;     
}
// search in course

