function appear() {
    document.querySelector(".ul-list").classList.toggle("display");
   }

  
   var text = document.querySelector(".text-div");
   function hover(){
       if(document.getElementsByClassName(".image").style.hover){
           text.style.display = 'block';
       }
   }