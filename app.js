const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".content");

// listening the event
about.addEventListener("click", (e) => {
  var id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  }
  article.forEach(content=>{
    content.classList.remove("active")
    if(content.id == id){
        content.classList.add('active')
    } 
  })
});
