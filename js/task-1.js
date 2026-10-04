const categories = document.querySelector('#categories');

console.log('Number of categories:', categories.children.length);

for (const item of categories.children) {
  const title = item.querySelector('h2').textContent;
  const counter = item.querySelectorAll('li').length;

  console.log('Category:', title);
  console.log('Elements:', counter);
}
