const HEROIMAGES = ["./images/desktop-image-hero-1.jpg", "./images/desktop-image-hero-2.jpg", "./images/desktop-image-hero-3.jpg"]

const HEROOBJECT = [
    {
        url: "./images/desktop-image-hero-1.jpg",
        header: "Discover innovative ways to decorate",
        paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        url: "./images/desktop-image-hero-2.jpg",
        header: "We are available all across the globe",
        paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        url: "./images/desktop-image-hero-3.jpg",
        header: "  Manufactured with the best materials",
        paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
let index = 0;
const NAVIGATE = (ev) => {
    let heroImage = document.querySelector(".hero");
    let heroHeader = document.querySelector("#changeArticle h1");
    let heroParagraph = document.querySelector("#changeArticle p");


    if (ev.target.id === "left") {
        (index === 0) ? index = 2 : index--;
    }
    else {
        (index === 2) ? index = 0 : index++;
    }

    heroImage.style.backgroundImage = `url("${HEROOBJECT[index].url}")`;
    heroHeader.innerText = HEROOBJECT[index].header;
    heroParagraph.innerText = HEROOBJECT[index].paragraph;

}


sliderNavButtonGroup.addEventListener("click", NAVIGATE);

