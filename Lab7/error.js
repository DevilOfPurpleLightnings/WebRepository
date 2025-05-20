const url = `data/categories.json`;

function openCategories(){
  //Провіряємо на наявність категорій
  if(document.getElementById("categories")) return;
  //Читаємо данні з сервера
  fetch(url)
  .then(response => response.json())
  .then(data => {
    //Чистимо каталог лист
    let clear = document.getElementById("catalog");
    if(clear) clear.remove();
    categories = data;
    //Виводимо дебаг-текст
    console.log("Open category.");
    //Створюємо та добавляємо div-categories
    const el = document.createElement("div");
    el.id = "categories";
    document.getElementById("mainblock").appendChild(el);

    //Створюємо та добавляжмо кнопки категорій =_=
    for(let category of categories){
      const button = document.createElement("button");
      button.textContent = category.name;
      el.appendChild(button);

      //Клік-лістенер
      button.addEventListener('click', () => {
        fetch(`data/${category.shortname}.json`)
        .then(response => response.json())
        .then(data_category => {
          //Видаляємо категорії
          let check_element = document.getElementById("categories");
          if(check_element) check_element.remove();
          else return;

          console.log("Open category catalog");

          //Добавлення каталогу товарів
          const spec_el = document.createElement("div");
          spec_el.id = "catalog";
          const catalog_title = document.createElement("h2");
          catalog_title.textContent = `Категорія: ${data_category.category}`
          spec_el.appendChild(catalog_title);

          for(item of data_category.items){
            const catalog_item = document.createElement("div");
            const title = document.createElement("h3");
            const description = document.createElement("p");
            const price = document.createElement("p");
            const img = document.createElement('img');

            title.textContent = item.name;
            description.textContent = item.description;
            price.textContent = "Price: " + item.price;
            img.src = item.image;
            catalog_item.classList.add("catalog_item");

            catalog_item.appendChild(img);
            catalog_item.appendChild(title);
            catalog_item.appendChild(description);
            catalog_item.appendChild(price);
            spec_el.appendChild(catalog_item);
          }
          document.getElementById("mainblock").appendChild(spec_el);
        }).catch(err => {
          console.error('Помилка завантаження JSON');
          console.error(err);
        });
      });
    }
  }).catch(err => {
    console.error('Помилка завантаження JSON');
    console.error(err);
  });
};

function homeButton(){
  //Чистимо html-документ
  console.log("Return to home.");
  let el = document.getElementById("categories");
  if(el) el.remove();
  el = document.getElementById("catalog");
  if(el) el.remove();
};
