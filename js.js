window.addEventListener('DOMContentLoaded',function(){
    let check_cont = document.querySelectorAll(".check");
    let is_checked = [false,false,false];       //Array for all 3 checkbox 

    for(let i=0;i<=2;i++){
        check_cont[i].addEventListener("click", function(){
            is_checked[i] = !is_checked[i];   

            let child = check_cont[i].querySelector(".is_checked");
            child.checked = is_checked;     //change checkbox 
        
            //Display dot in checkbox
            if(is_checked[i]==true){            
                child.style.display = "block";      
            }else{
                child.style.display = "none";
            }
        });
    }
});