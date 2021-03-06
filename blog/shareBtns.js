console.log("Share Btns")
const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
// const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
// const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
//   const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check this out: ");
//   let postImg = encodeURI(pinterestImg.src);


  document.getElementById("fbLink").setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`);
  console.log(document.getElementById("fbLink"))

  document.getElementById("tweetLink").setAttribute("href", `https://twitter.com/intent/tweet?text=${postUrl}`);
  console.log(document.getElementById("tweetLink"))

  document.getElementById("linkedInLink").setAttribute("href", `http://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=Fam. A Financial company&summary=The best time to invest? Yesterday.
  &source=Fam. A Financial company`);
  console.log(document.getElementById("linkedInLink"))

  // facebookBtn.setAttribute(
  //   "href",
  //   `https://www.facebook.com/sharer.php?u=${postUrl}`
  // );

  // twitterBtn.setAttribute(
  //   "href",
  //   `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  // );


  // linkedinBtn.setAttribute(
  //   "href",
  //   `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  // );

//   whatsappBtn.setAttribute(
//     "href",
//     `https://wa.me/?text=${postTitle} ${postUrl}`
//   );
}

init();