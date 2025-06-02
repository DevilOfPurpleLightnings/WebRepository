function sendFeedback(event, messageText) {
  event.preventDefault();

  const oldMessage = document.querySelector(".messege");
  if (oldMessage) oldMessage.remove();

  const message = document.createElement("div");
  message.className = "messege";
  message.innerHTML = `
    <button id="message_close">X</button>
    <p>${messageText}</p>
  `;

  document.body.appendChild(message);

  document
    .getElementById("message_close")
    .addEventListener("click", function () {
      message.remove();
    });

  setTimeout(() => {
    if (document.body.contains(message)) {
      message.remove();
    }
  }, 3000);
}

document.getElementById("support").addEventListener("click", function () {
  let check = document.querySelector(".pda-game");
  if (check) check.remove();
  check = document.querySelector(".categories");
  if (check) check.remove();
  check = document.querySelector(".category_items");
  if (check) check.remove();
  check = document.querySelector(".main_div1");
  if (check) check.remove();
  check = document.querySelector(".serach_div");
  if (check) check.remove();

  const home = document.querySelector(".home");
  home.classList.add("home_hidden");

  const main_div = document.querySelector(".main_div");
  const main = document.createElement("div");
  main.classList.add("main_div1");

  main.innerHTML = `    
    <h1 class="section-title">Зворотній зв'язок</h1>
    <p>Ваші відгуки та пропозиції допомагають нам покращувати ресурс.</p>
    <form id="feedbackForm">
        <label for="name">Ваше ім'я:</label>
        <input type="text" id="name" name="name" required>
        <label for="type">Тип проблеми:</label>
        <select id="type" name="type" required>
            <option value="" disabled selected>Виберіть тип проблеми</option>
            <option value="bug">Технічні проблеми</option>
            <option value="suggestion">Рекомендації</option>
            <option value="other">Інше</option>
        </select>
        <label for="text">Тема:</label>
        <input type="text" id="name" name="name" required>
        <label for="text">Повідомлення:</label>
        <textarea id="text" name="text" required></textarea>
        <button type="submit">Відправити</button>
    </form>
`;

  main_div.appendChild(main);

  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
      sendFeedback(event, "Ваше повідомлення надіслано.");
      this.reset();
    });
});

document.getElementById("search").addEventListener("click", function () {
  let check = document.querySelector(".pda-game");
  if (check) check.remove();
  check = document.querySelector(".categories");
  if (check) check.remove();
  check = document.querySelector(".category_items");
  if (check) check.remove();
  check = document.querySelector(".main_div1");
  if (check) check.remove();
  check = document.querySelector(".serach_div");
  if (check) check.remove();

  const home = document.querySelector(".home");
  home.classList.add("home_hidden");

  const main_div = document.querySelector(".main_div");
  const serach_div = document.createElement("div");
  serach_div.classList.add("serach_div");

  serach_div.innerHTML = `
    <h1 class="section-title">Пошук</h1>
    <form id="searchForm">
        <input type="text" id="searchInput" placeholder="Пошук">
        <button type="submit">Пошук</button>
    </form>
    <div id="searchResults"></div>
`;
  main_div.appendChild(serach_div);

  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const searchInput = document
        .getElementById("searchInput")
        .value.trim()
        .toLowerCase();
      console.log(searchInput);
      const files = [
        "templates/data/armors.json",
        "templates/data/weapons.json",
        "templates/data/character.json",
        "templates/data/consumables.json",
        "templates/data/artifacts.json",
        "templates/data/anomalies.json",
        "templates/data/questions.json",
        "templates/data/mutants.json",
      ];

      Promise.all(
        files.map((file) =>
          fetch(file)
            .then((response) => response.json())
            .catch(() => [])
        )
      )
        .then((allData) => {
          const data = allData.flat();
          const results = data.filter(
            (item) => item.name && item.name.toLowerCase().includes(searchInput)
          );
          const resultsDiv = document.getElementById("searchResults");
          if (results.length === 0) {
            resultsDiv.innerHTML = "<p>Нічого не знайдено.</p>";
          } else {
            resultsDiv.innerHTML =
              '<div class="card-container">' +
              results
                .map(
                  (item) => `
                <div class="card">
                  <h3>${item.name}</h3>
                  ${
                    item.image
                      ? `<img src="${item.image}" alt="${item.name}" class="card-image">`
                      : ""
                  }
                  ${
                    item.description && item.description.text1
                      ? `<p>${item.description.text1}</p>`
                      : ""
                  }
                </div>
                `
                )
                .join("") +
              "</div>";
          }
        })
        .catch(() => {
          document.getElementById("searchResults").innerHTML =
            "<p>Помилка пошуку.</p>";
        });
    });
});
