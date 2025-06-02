document.addEventListener("DOMContentLoaded", function () {
  const navBGame = document.getElementById("navBGame");
  const navBMap = document.getElementById("navBMap");
  const navBHome = document.getElementById("navBHome");

  navBGame.addEventListener("click", function () {
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

    const main_div = document.querySelector(".main_div");
    const home = document.querySelector(".home");
    home.classList.add("home_hidden");

    const game_content = document.createElement("div");
    const title = document.createElement("p");
    const description = document.createElement("p");
    const img = document.createElement("img");

    title.textContent = "PDA-GAME";
    title.classList.add("section-title");
    description.textContent = "There's nothing here.";
    img.src = "special.png";

    game_content.classList.add("pda-game");
    game_content.appendChild(title);
    game_content.appendChild(description);
    game_content.appendChild(img);
    main_div.appendChild(game_content);
  });

  navBMap.addEventListener("click", function () {
    fetch("templates/data/categories.json")
      .then((response) => response.json())
      .then((data) => {
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
        const categories = data;
        const main_div = document.querySelector(".main_div");
        const home = document.querySelector(".home");
        home.classList.add("home_hidden");
        const game_content = document.createElement("div");
        game_content.classList.add("categories");
        for (let category of categories) {
          const item = document.createElement("p");
          item.textContent = category.name;
          item.addEventListener("click", () => openCategoryItems(category));
          game_content.appendChild(item);
        }
        main_div.appendChild(game_content);
      });
  });

  function openCategoryItems(category) {
    console.log(category);
    fetch(`templates/data/${category.dataname}`)
      .then((response) => response.json())
      .then((data) => {
        let check = document.querySelector(".pda-game");
        if (check) check.remove();
        check = document.querySelector(".categories");
        if (check) check.remove();
        const category_data = data;

        const main_div = document.querySelector(".main_div");
        const game_content = document.createElement("div");

        game_content.classList.add("category_items");

        const title = document.createElement("p");
        title.textContent = `Категорія: ${category.name}`;
        title.classList.add("section-title");
        game_content.appendChild(title);
        category_data.sort((a, b) => a.name.localeCompare(b.name));
        for (let item of category_data) {
          const div_item = document.createElement("p");
          div_item.textContent = item.name;
          div_item.addEventListener("click", () => openItemsArticle(item));
          game_content.appendChild(div_item);
        }
        main_div.appendChild(game_content);
      });
  }
  navBHome.addEventListener("click", function () {
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
  });
});
