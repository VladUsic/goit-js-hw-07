const categories = document.querySelectorAll('#categories > li');
console.log('categories:', categories);


categories.forEach((element) => {
    const paragraphName = element.querySelector('h2').textContent;
    const listLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${paragraphName}; Количество элементов: ${listLength}`);
});