
const searchBtn = document.querySelector(".searchBtn");
const dogContainer = document.querySelector(".dog-container");

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetchApi();
});

const fetchApi = async () => {
    const userValue = document.querySelector(".user-input").value.trim();
    dogContainer.innerHTML = "";

    const getResponse = await fetch("https://dogapi.dog/api/v2/breeds");
    const convertedJson = await getResponse.json();

    let responseData = convertedJson.data;

    if (!userValue) {
        dogContainer.innerHTML = `<p class="error-message">Enter a breed name!</p>`;
        return;
    }

    let found = false;
    responseData.forEach((i) => {
        let dogname = i.attributes.name;
        if (dogname.toLowerCase() === userValue.toLowerCase()) {
            found = true;
            let dogBox = document.createElement("div");
            dogBox.setAttribute("class", "dog-box");
            dogBox.innerHTML = `<h3>${dogname}</h3>
               <p>${i.attributes.description}</p>`;
            dogContainer.appendChild(dogBox);
        }
    });

    if (!found) {
        dogContainer.innerHTML = `<p class="error-message">Please enter a valid breed name!</p>`;
    }
};

