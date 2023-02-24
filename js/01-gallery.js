import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// markup

const galleryItemsMarkup = galleryItems
  .map(
    ({preview, original, description}) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
  )
  .join(" ");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

// delegation

galleryEl.addEventListener("click", clickFunction);

function clickFunction(event) {
  event.preventDefault();

  if(event.target.nodeName !== "IMG") {
    return;
  }

  const imgSourse = event.target.dataset.source;
  console.log(imgSourse)
}