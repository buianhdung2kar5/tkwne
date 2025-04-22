import { params } from "./params.js";

const api = "https://daca-62l9.vercel.app/database.json";

export const drawProduct = () => {
  const apiProduct = `${api}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}`;
  fetch(apiProduct)
    .then((response) => response.json())
    .then((data) => {
      let htmls = "";
      data.khogiaodien.forEach((item) => {
        htmls += `
                    <div class="inner-box">
                        <div class="inner-image">
                            <img src="${item.image}" alt="">
                        </div>
                        <h2>${item.title}</h2>
                        <div class="inner-content">
                            <p>Giá: ${item.price}</p>
                            <a href="${item.link}" target="_blank">Chi Tiết</a>
                        </div>
                        <div class="them"><a href="http://127.0.0.1:5500/Project-Daca/thanhtoan.html" target="_blank" class="buy-btn"
                        data-title="${item.title}"
                        data-price="${item.price}"
                        data-image="${item.image}"
                        data-link="${item.link}">Mua Hàng</a></div>    
                    </div>
                    `;
      });
      let divShop = document.querySelector("#innerShop");
      divShop.innerHTML = htmls;
    });
};
