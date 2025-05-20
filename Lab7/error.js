const url = `data/categories.json`;

let categories = [];

let laptops = {
  "category": "Laptop",
  "items": [
    { "id": 201, "name": "Ноутбук ACER Nitro V 16 ANV16-41-R6A0", "shortname": "acer", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "price": "57 999₴", "image": "a" },
    { "id": 202, "name": "ASUS TUF Gaming A15", "shortname": "pavilion", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "price": "22 199₴", "image": "b" },
    { "id": 203, "name": "Microsoft Surface Laptop 6 (ZLU-00026) Platinum", "shortname": "fe", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "price": "144 351₴", "image": "c" },
    { "id": 204, "name": "Gigabyte Aorus Master 16 BYHC5UAE65SH Dark Tide", "shortname": "noname", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "price": "174 999₴", "image": "d" }
  ]
}
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
        fetch(`data/${cName}.json`)
        .then(response => response.json())
        .then(data => {
          //Видаляємо категорії
          let check_element = document.getElementById("categories");
          if(check_element) check_element.remove();
          else return;

          console.log("Open category catalog");

          //Добавлення каталогу товарів
          const spec_el = document.createElement("div");
          spec_el.id = "catalog";
          document.getElementById("mainblock").appendChild(spec_el);

          for(item of data.items){
            const catalog_item = document.createElement("div");
            const title = document.createElement("h2");
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
