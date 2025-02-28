


 function createCards() {
    let userIMg=document.querySelector("#cardIMg").value
    let userTitel=document.querySelector("#cardtitle").value
    let userInfo=document.querySelector("#card-dis").value
    let userbtn=document.querySelector("#card-btn").value
    
    let card = document.createElement("div");
    card.classList.add("cards");
    card.innerHTML = `
        <img src="${userIMg}" alt="Card Image">
        <h3>${userTitel}</h3>
        <p>${userInfo}</p>
         <button>${userbtn}</button> `

    document.getElementById("card-box").appendChild(card);

   
}



