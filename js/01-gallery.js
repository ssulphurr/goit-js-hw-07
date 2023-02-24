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
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="100%" height="100%">`
  )
  instance.show()
}
