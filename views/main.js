const input = document.getElementById("country");
const auCode = document.getElementById("au");
const caCode = document.getElementById("ca");
const ieCode = document.getElementById("ie");
const nzCode = document.getElementById("nz");
const zaCode = document.getElementById("za");
const gbCode = document.getElementById("gb");
const usCode = document.getElementById("us");
const siteTitle = document.getElementById("site-title");
const scrollDown = document.getElementById("scroll-down");

const codeInput = (code) => {
    input.value = code;
}

auCode.addEventListener("click", () => {
    codeInput("AU");
    document.location.href="#site-title";
})

caCode.addEventListener("click", () => {
    codeInput("CA");
    document.location.href="#site-title";
})

ieCode.addEventListener("click", () => {
    codeInput("IE");
    document.location.href="#site-title";
})

nzCode.addEventListener("click", () => {
    codeInput("NZ");
    document.location.href="#site-title";
})

zaCode.addEventListener("click", () => {
    codeInput("ZA");
    document.location.href="#site-title";
})

gbCode.addEventListener("click", () => {
    codeInput("GB");
    document.location.href="#site-title";
})

usCode.addEventListener("click", () => {
    codeInput("US");
    document.location.href="#site-title";
})

scrollDown.addEventListener("click", () => {
    document.location.href="#country-codes";
})