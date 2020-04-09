window.addEventListener('DOMContentLoaded',function(){
    let check_cont = document.querySelectorAll(".check");
    let is_checked = [false,false,false];

    for(let i=0;i<=check_cont.length;i++){
        check_cont[i].addEventListener("click", function(){
            is_checked[i] = !is_checked[i];
            let child = check_cont[i].children;
            child[0].checked = is_checked;
            console.log(i,is_checked[i]);
            if(is_checked[i]==true){
            child[1].children[0].style.display = "block";
            }
            else{
                child[1].children[0].style.display = "none";
            }
        });
    }
});