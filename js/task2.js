const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const conteinerVeg = document.querySelector('#ingredients');
console.log('conteinerVeg:', conteinerVeg);

const createVegLi = document.createElement('li');

const createListLi = (array) => array
    .map((vegetable) => {
        const createLi = document.createElement('li');
        createLi.classList = 'list';
        createLi.textContent = vegetable;
        createVegLi.append(createLi);
    });

createListLi(ingredients);

conteinerVeg.append(createVegLi);



// conteinerVeg.classList.add(
//         const potato = document.createElement('li'); potato.textContent = ingredients[0];
//         const onions = document.createElement('li'); onions.textContent = ingredients[1];
//         const garlic = document.createElement('li'); garlic.textContent = ingredients[2];
//         const tomatoes = document.createElement('li'); tomatoes.textContent = ingredients[3];
//         const greens = document.createElement('li'); greens.textContent = ingredients[4];
//         const condiments = document.createElement('li'); condiments.textContent = ingredients[5]; conteinerVeg.appendChild(potato); conteinerVeg.appendChild(onions); conteinerVeg.appendChild(garlic); conteinerVeg.appendChild(tomatoes); conteinerVeg.appendChild(greens); conteinerVeg.appendChild(condiments);