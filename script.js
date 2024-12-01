let btnopen = document.querySelector(".btnopen");
let btnclose = document.querySelector(".btnclose");
let modal = document.querySelector(".new-modal");
let state = true;

function openModal() {
  state = true;
}

function closeModal() {
  state = false;
}
function handleModal() {
  if (state) {
    modal.classList.remove("close");
  } else {
    modal.classList.add("close");
  }
}
btnopen.addEventListener("click", () => {
  openModal();
  handleModal();
});
btnclose.addEventListener("click", () => {
  closeModal();
  handleModal();
});
