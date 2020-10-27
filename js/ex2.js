const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];

const countryInput = document.querySelector("input");
const suggestion = document.getElementById("suggestions");

const suggestElement = country => {
    const element = document.createElement("div");
    element.classList.add("suggestion");
    element.textContent = country;
    element.addEventListener("click", e => {
        countryInput.value = e.target.textContent;
        suggestion.innerHTML = "";
    });
    return element;
};

countryInput.addEventListener("input", () => {
    suggestion.innerHTML = "";
    countryList.forEach(country => {
        if (country.startsWith(countryInput.value)) {
            suggestion.appendChild(suggestElement(country));
        }
    });
});

