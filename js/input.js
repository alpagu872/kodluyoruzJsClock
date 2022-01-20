function isimSor(){

    let name = prompt("Adınız: ")
    document.getElementById("myName").innerText = name
}

function saatiGoster(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDate()
    let month = date.getMonth() + 1;

    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;

    let time = h + ":" + m  + ":"+ s + " "  + day+"."+0+month ;

    document.querySelector("#myClock").innerText = time

    document.querySelector("#myClock").textContent = time

    setTimeout(saatiGoster, 1000)

}
isimSor();
saatiGoster();
