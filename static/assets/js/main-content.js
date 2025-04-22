document.addEventListener("DOMContentLoaded", function () {
  fetch("/static/assets/data/main-content.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".row_js");
      container.innerHTML = ""; // Clear existing content

      data.forEach((item) => {
        const col = document.createElement("div");
        col.className = "col-12 col-xl-4 col-lg-6";

        col.innerHTML = `
                <div class="article-item">
  <div class="inner-image">
    <a href="${item.link}">
      <img src="${item.image}" alt="${item.title}">
    </a>
  </div>
  <div class="inner-content">
    <a href="${item.link}" class="event-title">${item.title}</a>
    <div class="timeline">
      <div class="time">${item.time}</div>
    </div>
    <div class="desc">${item.desc}</div>
  </div>
</div>

`;
        container.appendChild(col);
      });
    })
    .catch((error) => console.error("Lỗi khi đọc JSON:", error));
});
