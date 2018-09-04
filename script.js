var menu_content;
menu_content = document.getElementById("menu-contnt");
var likePage;
likePage = document.getElementById("like");
/* this is the like and unlike function*/
function like(){
    
    if (likePage.style.color == "blue") {
        
        likePage.style.color = "white";
    }
    
    else if (likePage.style.color == "#blue") {
             
        
        likePage.style.color = "white";
             }
  else 
  { likePage.style.color = "blue"; }
}


likePage.addEventListener("click", like);

/* this is the sliding in menu function*/
function reveal_menu() {
    
    if (menu_content.style.right  === "0vw" || menu_content.style.display == "block") {
        
        menu_content.style.right = "-20vw";
        menu_content.style.display = "none";
        
    } 
    
        
    else {
        menu_content.style.right = "0vw";
        menu_content.style.display = "block";
        }
}