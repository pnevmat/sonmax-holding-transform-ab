const select = document.querySelector('[finalOfferSelectHeader]');
const selectValue = select.children[0];
const selectList = document.querySelector('[selectBody]');
const selectListItems = [...selectList.children];
select.addEventListener('click', () => close());

selectListItems.forEach(item => {
  item.addEventListener('click', () => {
    selectValue.innerText = item.innerText;
    close();
  });
});

function close() {
  selectList.classList.toggle('is-hiden');
}
