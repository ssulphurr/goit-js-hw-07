import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// markup

const galleryItemsMarkup = galleryItems
.map(({preview, original, description}) => 
    `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `)
    .join("");

const galleryEl = document.querySelector(".gallery")

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup)