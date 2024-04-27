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
  }; // Работает!

// Для подготовки отправки формы ввода данных
const form = document.getElementById("contact-form"); 

function handleFormSubmit(event) {
  // Просим форму не отправлять данные самостоятельно
  event.preventDefault()
  console.log('Отправка!')
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // предотвращаем поведение браузера по умолчанию 
  

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

  form.addEventListener("submit", () => { //обработка отправки формы
    button.textContent = "Отправлено";
  })
  
});

// API c браузером. LocalStorage
localStorage.setItem('username', 'text'); // Сохранение данных
var username = localStorage.getItem('username'); // Получение данных
console.log(username);
localStorage.removeItem('username');

// Карусель
const container = document.getElementById("myCarousel");
const options = { infinite: false };

new Carousel(container, options);