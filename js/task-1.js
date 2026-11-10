const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  const count = category.querySelectorAll('li').length;
  console.log(`Elements: ${count}`);
});
