


{/* <input id="u-name" type="text" placeholder=" your name "> */}
{/* <input id="u-email" type="text" placeholder="you e-mail "> */}
{/* <input id="u-contact" type="text" placeholder="contact no "> */}
{/* <input id="u-image" type="text" placeholder="image-'url'"> */}
{/* <input id="u-Location" type="text" placeholder="Location"> */}
{/* <input id="u-comName" class="input6" type="text" placeholder="company-name and (Year - Present)'"> */}
{/* <input id="u-degree" class="input7" type="text" placeholder="Degree-name and (Year of passing)'"> */}


function createResume(){
    let input1 =document.querySelector("#u-name").value.trim()
    let input2 =document.querySelector("#u-email").value.trim()
    let input3 =document.querySelector("#u-contact").value.trim()
    let input4 =document.querySelector("#u-image").value.trim()
    let input5 =document.querySelector("#u-Location").value.trim()
    let input6 =document.querySelector("#u-comName").value.trim()
    let input7 =document.querySelector("#u-degree").value.trim()
    let input8 =document.querySelector("#u-skills").value.trim()

  if(!input1 ||!input2 ||!input3 ||!input4 ||!input5 ||!input6 ||!input7){
    alert("Please fill in all fields before creating a card!");
    return;
  }
    let resumeHtml=`<div class="resume">
            <header class="header">
                <div class="contact">
                    <h1>Name : ${input1}</h1>
                    <p>Email:  ${input2}</p>
                    <p>Phone:  ${input3}</p>
                    <p>Location:  ${input5} </p>
                </div>

                <div class="userImg">
                    <img src=" ${input4}">
                </div>

            </header>
            <section class="section">
                <h2>Summary</h2>
                <p>A brief summary about yourself, you brief summary about yourself, your skills, and experiry about
                    yourself, your skills, and experience.r skills, and experience.</p>
            </section>
            <section class="section">
                <h2>Experience</h2>
                <p><strong>Job Title</strong> - ${input6}</p>
                <p>-Describe your role and achievements.escribe your role and achievements.escribe your role and
                    achievements.</p>
                <p>-Describe your role and achievements.escribe your role and achievements.escribe your role and
                    achievements.</p>
            </section>
            <section class="section">
                <h2>Education</h2>
                <p><strong>Degree</strong> -  ${input7}</p>
            </section>
            <section class="section">
                <h2>Skills</h2>
                <p>List your key skilland achments.escribe your role and achievements.escribe your role ands here.</p>
                <h2> ${input8} </h2>
            

            </section>
       </div>`

       let res=document.querySelector("#resume-container")
       res.innerHTML+=resumeHtml
}





// function createCards() {
//     let userIMg=document.querySelector("#cardIMg").value
//     let userTitel=document.querySelector("#cardtitle").value
//     let userInfo=document.querySelector("#card-dis").value
//     let userbtn=document.querySelector("#card-btn").value
    
//     let card = document.createElement("div");
//     card.classList.add("cards");
//     card.innerHTML = `
//         <img src="${userIMg}" alt="Card Image">
//         <h3>${userTitel}</h3>
//         <p>${userInfo}</p>
//          <button>${userbtn}</button> `

//     document.getElementById("card-box").appendChild(card);
      
// }






   