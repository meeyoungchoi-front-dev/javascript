window.onload = function() {
    function buttonCountDown(e) {
        let yearInput = document.getElementById("yearInput").value;
        let monthInput = document.getElementById("monthInput").value;
        let dayInput = document.getElementById("dayInput").value;
        console.log("D-Day: " + yearInput + "년 " + monthInput + "월 " + dayInput + "일 " );
    }
    
    
    
    const countDownButton = document.querySelector("#countDownButton");
    countDownButton?.addEventListener('click', buttonCountDown, false);
}




    





