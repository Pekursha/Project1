let ageTitle=document.getElementById("age");console.log("Hello world");

  window.onload = () => { 
    const header = document.querySelector('header'); 
     
    document.addEventListener('scroll', event => { 
        console.log(event.target.scrollTop) 
    }); 
     
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll'); 
     
    for (let link of smoothScrollLinks) { 
      link.addEventListener('click', event => { 
         event.preventDefault(); 
         
        const target = event.target; 
        const elementToScroll = document.querySelector(target.getAttribute('href')); 
        elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'center'}); 
      }); 
    } 
  }; // Работает!!! 

// Для кнопки
  const button = document.querySelector('.click-btn');
  const input = document.createInput.value; //хотелось валидировать данные, но что-то здесь не получается
  if (!text) {
    alert('Заполните поле!');
    return
  } 
  else {
    button.addEventListener("click", (event) => {
    button.textContent = "отправлено";
  });
  }

// Для подготовки отправки формы ввода данных
const form = document.getElementById("contacts-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = Array.from(event.target.elements).map((element) => {
    return {
      name: element.name,
      value: element.value,
    };
  });

  data = data.filter((element) => { // фильтрует
    if (element.name) {
      return true;
    } else {
      return false;
    }
  });

  const formData = new FormData(); // специально для отправки на сервер

  data.forEach((element) => {             //проходит по всем эл массива
    formData.append(element.name, element.value);
  });

  console.log(formData);
});

// API c сервером
fetch('https://dog.ceo/dog-api/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Здесь можно обрабатывать полученные данные
    })
    .catch(error => console.error('Ошибка:', error));

// API c браузером. LocalStorage
localStorage.setItem('username', 'text'); // Сохранение данных
var username = localStorage.getItem('username'); // Получение данных
console.log(username);
localStorage.removeItem('username');

// Карусель
const container = document.getElementById("myCarousel");
const options = { infinite: false };

new Carousel(container, options);