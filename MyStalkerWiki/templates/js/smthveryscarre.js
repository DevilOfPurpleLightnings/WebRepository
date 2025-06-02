function openItemsArticle(item) {
    // Видалення старих елементів
    [".pda-game", ".categories", ".category_items"].forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.remove();
    });

    const main_div = document.querySelector(".main_div");

    const item_content = document.createElement("div");
    item_content.classList.add("category_items");

    // Заголовок предмету
    const title = document.createElement('p');
    title.textContent = item.name;
    title.classList.add('title');
    item_content.appendChild(title);

    // Контейнер опису і таблиці
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("item-flex-container");

    // Ліва колонка — опис
    const leftColumn = document.createElement("div");
    leftColumn.classList.add("item-left-column");

    if (item.description && item.description.description) {
        const description = document.createElement('p');
        description.textContent = item.description.description;
        leftColumn.appendChild(description);
    } else {
        const noDesc = document.createElement('p');
        noDesc.textContent = "Опис відсутній.";
        leftColumn.appendChild(noDesc);
    }

    flexContainer.appendChild(leftColumn);

    // Права колонка — таблиця, якщо є атрибути
    if (item.description && Array.isArray(item.description.attributes)) {
        const rightColumn = document.createElement("div");
        rightColumn.classList.add("item-right-column");

        const table = document.createElement('table');
        table.classList.add('stalker-table');

        const titleRow = document.createElement('tr');
        const titleCell = document.createElement('th');
        titleCell.textContent = item.name;
        titleCell.colSpan = 2;
        titleCell.classList.add("table-title");
        titleRow.appendChild(titleCell);
        table.appendChild(titleRow);

        for (let attribute of item.description.attributes) {
            const row = document.createElement('tr');

            if (attribute.label === "image") {
                const imgCell = document.createElement('td');
                imgCell.colSpan = 2;
                const img = document.createElement('img');
                img.src = attribute.value;
                img.alt = "Зображення";
                img.style.maxWidth = "100%";
                img.style.borderRadius = "6px";
                imgCell.appendChild(img);
                row.appendChild(imgCell);
            } else {
                const labelCell = document.createElement('td');
                labelCell.textContent = attribute.label;

                const valueCell = document.createElement('td');
                valueCell.textContent = attribute.value;

                row.appendChild(labelCell);
                row.appendChild(valueCell);
            }

            table.appendChild(row);
        }

        rightColumn.appendChild(table);
        flexContainer.appendChild(rightColumn);
    }

    item_content.appendChild(flexContainer);

    // Обробка статей
    if (item.description && Array.isArray(item.description.articles)) {
        for (let article of item.description.articles) {
            const articleBlock = document.createElement("div");
            articleBlock.classList.add("article-block");

            // Заголовок статті
            const articleTitle = document.createElement("h3");
            articleTitle.textContent = article.Title || "Untitled";
            articleTitle.classList.add("section-title");
            articleBlock.appendChild(articleTitle);

            // Контент статті
            if (Array.isArray(article.content)) {
                for (let contentItem of article.content) {
                    const contentRow = document.createElement("div");
                    contentRow.classList.add("article-content-row");

                    if (contentItem.type === "text") {
                        const paragraph = document.createElement("p");
                        paragraph.textContent = contentItem.value;
                        paragraph.classList.add("article-text");
                        contentRow.appendChild(paragraph);

                        if (contentItem.haveimg && contentItem.image) {
                            const img = document.createElement("img");
                            img.src = contentItem.image;
                            img.alt = "Зображення статті";
                            img.classList.add("article-image");
                            contentRow.appendChild(img);
                        }
                    }

                    else if ((contentItem.type === "orderedlist" || contentItem.type === "unorderedlist") && Array.isArray(contentItem.value)) {
                        // Додатковий текст перед списком
                        if (contentItem.valueText) {
                            const preListText = document.createElement("p");
                            preListText.textContent = contentItem.valueText;
                            contentRow.appendChild(preListText);
                        }

                        // Власне список
                        const list = contentItem.type === "orderedlist" ? document.createElement("ol") : document.createElement("ul");

                        for (let item of contentItem.value) {
                            const li = document.createElement("li");
                            li.textContent = item;
                            list.appendChild(li);
                        }

                        contentRow.appendChild(list);
                    }

                    articleBlock.appendChild(contentRow);
                }
            }

            item_content.appendChild(articleBlock);
        }
    }   
  
    main_div.appendChild(item_content);
}