const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
//Помещаем endpоint в перменную чтобы потом было легче с ним мработать

//Функция для кнопки случаного покемона
async function getRandomPokemon () {
  try {
    const pokemonId = Math.floor(Math.random() * 898) + 1 // Генерируем случайный ID покемона от 1 до 898
    //fetch - это метод из брузера для отправки запросов
    const response = await fetch(apiUrl + pokemonId) //Отправляем запрос на сервер с случайным числом (Случайное число - это случайный покемон)
    const data = await response.json()
    const pokemon = {
      name: data.name,
      number: data.id,
      image: data.sprites.front_default,
      types: data.types.map(type => type.type.name)
    }
    displayPokemon(pokemon) //Вызывает функцию displayPokemon, которая отображает информацию о покемоне на странице
  } catch (error) {
    alert(error)
  }
   //Обрабатывает любые ошибки, которые могут возникнуть во время выполнения запроса
  //В случае ошибки он выведет нам его в alert()
}

//Функция что отобразить наши данные на страницу - Оновызывается когда данные УСПЕШНО получены
function displayPokemon (pokemon) {
  const sprite = document.querySelector('.sprite')
  const name = document.querySelector('.name')
  const number = document.querySelector('.number')
  const types = document.querySelector('.types')
  //Находит элементы на странице, которые будут отображать информацию о покемоне

  sprite.src = pokemon.image
  name.textContent = pokemon.name
  number.textContent = `#${pokemon.number}`
  types.innerHTML = ''

  //Устанавливает значения элементов на странице, используя свойства объекта pokemon

  pokemon.types.forEach(type => {
    const li = document.createElement('li')
    li.classList.add(type)
    li.textContent = type
    types.appendChild(li)
  })

  //Создает элемент списка для каждого типа покемона, устанавливает
  //соответствующий класс CSS и добавляет его в соответствующий элемент на странице.
}


// async/await - это синтаксический сахар для работы с промисами в JavaScript. 
//Он позволяет писать асинхронный код более легко и читаемо.

// Ключевое слово async используется для обозначения асинхронной функции.
// Асинхронная функция всегда возвращает промис.

// Ключевое слово await используется для ожидания результата выполнения промиса. 
// Оно может использоваться только внутри асинхронной функции. Когда await используется с промисом,
// он блокирует выполнение функции до тех пор, пока промис не выполнится.