let pics_ar = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

let counter = 0;


window.onload = function () {
    updateUi();
    declarViewEvent();   //הכוונה להכרזה של אירועים שנמגיעים עם התצוגה של ה
                        //body


}

function declarViewEvent() {

    let back_btn = document.querySelector("#back_btn")

    let next_btn = document.querySelector("#next_btn")


    back_btn.addEventListener("click",function(){
        counter--;
       
        if (counter < 0 ) {
            counter = pics_ar.length-1;

        }

        updateUi();
    })



    next_btn.addEventListener("click",function(){
        counter++;
       
        if (counter > pics_ar.length-1) {
            counter = 0;

        }

        updateUi();
    })

}

function updateUi() {
    document.querySelector("#id_img").src = "img/" + pics_ar[counter];

}