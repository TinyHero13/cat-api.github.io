const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const btn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async() => {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;     
};

const loadImg = async () => {
    catImg.src = await getCats();
}

btn.addEventListener("click", loadImg);

loadImg();