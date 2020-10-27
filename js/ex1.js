const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
};

const createOption = (text, value) => {
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element;
};

const createLiElement = text => {
    const element = document.createElement("li");
    element.textContent = text;
    return element;
};
const houseElement = document.querySelector("select");

houses.forEach(house => {
    houseElement.appendChild(createOption(house.name, house.code));
});

houseElement.addEventListener("change", e => {

    const characters = getCharacters(e.target.value);
    const characterElement = document.getElementById("characters");


    characterElement.innerHTML = "";


    characters.forEach(character => {
        characterElement.appendChild(createLiElement(character));
    });
});


