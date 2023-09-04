// grab rating btns
const ratingBtn = document.querySelectorAll(".rating-btn");
const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".thank-you-card");
const submitBtn = document.querySelector(".rating-card__sumbit-btn");
const rateAgainBtn = document.querySelector(".thank-you-card__btn");
thankyouCard.style.display="none";

submitBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    ratingCard.style.display="none";
    thankyouCard.style.display="block";
})
rateAgainBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    ratingCard.style.display="block";
    thankyouCard.style.display="none";
})
        // 
            // function ratingSelected()  {
            //     ratingCard.style.display="none";
            //     thankyouCard.style.display="block";
            //     document.querySelector(".thank-you-card__text").innerHTML = `You selected ${document.querySelector(".rating-btn").innerHTML} out of 5`;
            // };
            // ratingBtn.forEach((btn) => {btn.addEventListener("click", ratingSelected)});

ratingBtn.forEach((btn) => {
    btn.addEventListener("click",  ()=> {
        document.querySelector(".thank-you-card__text").innerHTML = `You selected ${btn.innerHTML} out of 5`;
    });
});


