document.addEventListener("DOMContentLoaded", () => {
    fetch("/static/assets/data/articles.json")
      .then((res) => res.json())
      .then((data) => {
        renderHotArticle(data);
      });
  });
  
  function renderHotArticle(data) {
    const ar = document.getElementById("hot_article");
    ar.innerHTML = "";
  
    data.forEach((hot_ar) => {
      const article = document.createElement("article");
      article.className = "new-articles";
      article.innerHTML = `
        <div class="inner-image">
          <a href="${hot_ar.link}">
            <img src="${hot_ar.image}" alt="${hot_ar.alt}">
          </a>
          <div class="overplay"></div>
        </div>
        <div class="content-desc">
          <div class="inner-content">
            <a class="text" href="${hot_ar.link}">${hot_ar.title}</a>
          </div>
          <div class="timeline">${hot_ar.date}</div>
        </div>
      `;
      ar.appendChild(article);
    });
  }
  