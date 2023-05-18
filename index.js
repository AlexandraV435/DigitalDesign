const buttonUp = document.getElementById("buttonUp");
const wrapper = document.querySelector("#wrapper");
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const shoesBtn = document.querySelector("#shoes");
const jacketsBtn = document.querySelector("#jackets");
const dressesBtn = document.querySelector("#dresses");
const shortsBtn = document.querySelector("#shorts");
const buttonBuyModal = document.querySelector("#buttonBuyModal");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");
const buttonsBuy = document.querySelectorAll(".buttonBuy");
const colors = document.querySelector("#colors");
const commentInput = document.getElementById("commentInput");
const countInput = document.getElementById("countInput");
const uShoes = document.getElementById("uShoes");
const uDresses = document.getElementById("uDresses");
const uShorts = document.getElementById("uShorts");
const uJackets = document.getElementById("uJackets");
const wrapperModal = document.getElementById("wrapperModal");
const mode = document.getElementById("mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

let stat = false;

const cloth = [
  {
  name: 'Туфли',
  enName: "shoes",
  elements: {
    shoes1: {
      id: 0,
      name: 'Лоферы TENDANCE',
      date: '25.03.2022',
      img: './styles/images/shoes/loafers.png',
      colors: ['red', 'blue', 'green']
    },
    shoes2: {
      id: 1,
      name: 'Лоферы T.TACCARDI',
      date: '25.03.2022',
      img: './styles/images/shoes/loafers-2.png',
      colors: ['red', 'blue', 'white']
    },
    shoes3: {
      id: 2,
      name: 'Туфли',
      date: '25.03.2022',
      img: './styles/images/shoes/shoes.png',
      colors: ['red', 'yellow', 'white', 'green']
    },  
    shoes4: {
      id: 3,
      name: 'Лоферы T.TACCARDI',
      date: '01.09.2022',
      img: './styles/images/shoes/loafers-2.png',
      colors: ['red', 'blue', 'white']
    },  
    shoes5: {
      id: 4,
      name: 'Туфли',
      date: '09.07.2022',
      img: './styles/images/shoes/shoes.png',
      colors: ['pink', 'blue', 'white']
    },  
    shoes6: {
      id: 5,
      name: 'Лоферы TENDANCE',
      date: '25.03.2022',
      img: './styles/images/shoes/loafers-2.png',
      colors: ['red', 'blue', 'green', 'white']
    },  
    shoes7: {
      id: 6,
      name: 'Лоферы T.TACCARDI',
      date: '01.09.2022',
      img: './styles/images/shoes/loafers-2.png',
      colors: ['red', 'blue', 'pink']
    },  
    shoes8: {
      id: 7,
      name: 'Лоферы T.TACCARDI',
      date: '09.07.2022',
      img: './styles/images/shoes/loafers.png',
      colors: ['red', 'blue', 'white']
    }, 
    shoes9: {
      id: 8,
      name: 'Туфли',
      date: '25.03.2022',
      img: './styles/images/shoes/shoes.png',
      colors: ['red', 'green', 'white']
    },  
    shoes10: {
      id: 9,
      name: 'Лоферы T.TACCARDI',
      date: '01.09.2022',
      img: './styles/images/shoes/loafers-2.png',
      colors: ['orange', 'blue', 'white']
    },
    shoes11: {
      id: 10,
      name: 'Лоферы TENDANCE',
      date: '09.07.2022',
      img: './styles/images/shoes/loafers.png',
      colors: ['red', 'blue', 'white']
    },
    shoes12: {
      id: 11,
      name: 'Туфли',
      date: '25.03.2022',
      img: './styles/images/shoes/shoes.png',
      colors: ['red', 'blue', 'orange']
    },
  }
},
{ 
  name: 'Куртки',
  enName: "jackets",
  elements: {
    jackets1: {
      id: 0,
      name: 'Пуховик',
      date: '25.03.2022',
      img: './styles/images/jackets/jacket1.png',
      colors: ['red', 'blue', 'green']
    },
    jackets2: {
      id: 1,
      name: 'Куртка',
      date: '01.09.2022',
      img: './styles/images/jackets/jacket2.png',
      colors: ['red', 'blue', 'white']
    },
    jackets3: {
      id: 2,
      name: 'Ветровка',
      date: '25.03.2022',
      img: './styles/images/jackets/jacket3.png',
      colors: ['red', 'yellow', 'blue', 'white']
    },  
    jackets4: {
      id: 3,
      name: 'Пуховик',
      date: '09.07.2022',
      img: './styles/images/jackets/jacket1.png',
      colors: ['red', 'blue', 'white']
    },  
    jackets5: {
      id: 4,
      name: 'Куртка',
      date: '01.09.2022',
      img: './styles/images/jackets/jacket2.png',
      colors: ['pink', 'blue', 'white']
    },  
    jackets6: {
      id: 5,
      name: 'Ветровка',
      date: '25.03.2022',
      img: './styles/images/jackets/jacket3.png',
      colors: ['red', 'blue', 'white']
    },  
    jackets7: {
      id: 6,
      name: 'Пуховик',
      date: '09.07.2022',
      img: './styles/images/jackets/jacket1.png',
      colors: ['red', 'blue', 'pink']
    },  
    jackets8: {
      id: 7,
      name: 'Куртка',
      date: '01.09.2022',
      img: './styles/images/jackets/jacket2.png',
      colors: ['red', 'blue', 'white']
    }, 
    jackets9: {
      id: 8,
      name: 'Пуховик',
      date: '25.03.2022',
      img: './styles/images/jackets/jacket1.png',
      colors: ['red', 'green', 'blue', 'white']
    },  
    jackets10: {
      id: 9,
      name: 'Ветровка',
      date: '01.09.2022',
      img: './styles/images/jackets/jacket3.png',
      colors: ['orange', 'blue', 'white']
    },
    jackets11: {
      id: 10,
      name: 'Куртка',
      date: '25.03.2022',
      img: './styles/images/jackets/jacket2.png',
      colors: ['red', 'blue', 'white']
    },
    jackets12: {
      id: 11,
      name: 'Куртка',
      date: '09.07.2022',
      img: './styles/images/jackets/jacket2.png',
      colors: ['red', 'blue', 'orange']
    },
    jackets13: {
      id: 12,
      name: 'Пуховик',
      date: '09.07.2022',
      img: './styles/images/jackets/jacket1.png',
      colors: ['red', 'blue', 'orange']
    },
    jackets14: {
      id: 13,
      name: 'Ветровка',
      date: '25.03.2022',
      img: './styles/images/jackets/jacket3.png',
      colors: ['red', 'blue', 'orange']
    },
  }
},
{
  name: 'Шорты',
  enName: "shorts",
  elements: {
    shorts1: {
      id: 0,
      name: 'Шорты',
      date: '25.03.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['red', 'blue', 'green']
    },
    shorts2: {
      id: 1,
      name: 'Велосипедки',
      date: '01.09.2022',
      img: './styles/images/shorts/shorts2.png',
      colors: ['red', 'blue', 'white']
    },
    shorts3: {
      id: 2,
      name: 'Шорты',
      date: '25.03.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['red', 'yellow', 'white']
    },  
    shorts4: {
      id: 3,
      name: 'Велосипедки',
      date: '09.07.2022',
      img: './styles/images/shorts/shorts2.png',
      colors: ['red', 'blue', 'white']
    },  
    shorts5: {
      id: 4,
      name: 'Шорты',
      date: '01.09.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['pink', 'blue', 'white']
    },  
    shorts6: {
      id: 5,
      name: 'Велосипедки',
      date: '25.03.2022',
      img: './styles/images/shorts/shorts2.png',
      colors: ['red', 'blue', 'white']
    },  
    shorts7: {
      id: 6,
      name: 'Шорты',
      date: '09.07.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['red', 'blue', 'pink']
    },  
    shorts8: {
      id: 7,
      name: 'Велосипедки',
      date: '01.09.2022',
      img: './styles/images/shorts/shorts2.png',
      colors: ['red', 'blue', 'white']
    }, 
    shorts9: {
      id: 8,
      name: 'Шорты',
      date: '25.03.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['red', 'green', 'white']
    },  
    shorts10: {
      id: 9,
      name: 'Велосипедки',
      date: '01.09.2022',
      img: './styles/images/shorts/shorts2.png',
      colors: ['orange', 'blue', 'white']
    },
    shorts11: {
      id: 10,
      name: 'Шорты',
      date: '25.03.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['red', 'blue', 'white']
    },
    shorts12: {
      id: 11,
      name: 'Велосипедки',
      date: '09.07.2022',
      img: './styles/images/shorts/shorts2.png',
      colors: ['red', 'blue', 'orange']
    },
    shorts13: {
      id: 12,
      name: 'Шорты',
      date: '09.07.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['red', 'blue', 'orange']
    },  
    shorts14: {
      id: 13,
      name: 'Велосипедки',
      date: '09.07.2022',
      img: './styles/images/shorts/shorts2.png',
      colors: ['red', 'blue', 'orange']
    },  
    shorts15: {
      id: 14,
      name: 'Шорты',
      date: '09.07.2022',
      img: './styles/images/shorts/shorts1.png',
      colors: ['red', 'blue', 'orange']
    },
  }
},
{
  name: 'Платья',
  enName: "dresses",
  elements: {
    dresses1: {
      id: 0,
      name: 'Платье',
      date: '25.03.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['red', 'blue', 'green']
    },
    dresses2: {
      id: 1,
      name: 'Платье',
      date: '01.09.2022',
      img: './styles/images/dresses/dress2.png',
      colors: ['red', 'blue', 'white']
    },
    dresses3: {
      id: 2,
      name: 'Платье',
      date: '25.03.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['red', 'yellow', 'white']
    },  
    dresses4: {
      id: 3,
      name: 'Платье',
      date: '09.07.2022',
      img: './styles/images/dresses/dress2.png',
      colors: ['red', 'blue', 'white']
    },  
    dresses5: {
      id: 4,
      name: 'Платье',
      date: '01.09.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['pink', 'blue', 'white']
    },  
    dresses6: {
      id: 5,
      name: 'Платье',
      date: '25.03.2022',
      img: './styles/images/dresses/dress2.png',
      colors: ['red', 'blue', 'white']
    },  
    dresses7: {
      id: 6,
      name: 'Платье',
      date: '09.07.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['red', 'blue', 'pink']
    },  
    dresses8: {
      id: 7,
      name: 'Платье',
      date: '01.09.2022',
      img: './styles/images/dresses/dress2.png',
      colors: ['red', 'blue', 'white']
    }, 
    dresses9: {
      id: 8,
      name: 'Платье',
      date: '25.03.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['red', 'green', 'white']
    },  
    dresses10: {
      id: 9,
      name: 'Платье',
      date: '01.09.2022',
      img: './styles/images/dresses/dress2.png',
      colors: ['orange', 'blue', 'white']
    },
    dresses11: {
      id: 10,
      name: 'Платье',
      date: '25.03.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['red', 'blue', 'white']
    },
    dresses12: {
      id: 11,
      name: 'Платье',
      date: '09.07.2022',
      img: './styles/images/dresses/dress2.png',
      colors: ['red', 'blue', 'orange']
    },
    dresses13: {
      id: 12,
      name: 'Платье',
      date: '09.07.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['red', 'blue', 'orange']
    },  
    dresses14: {
      id: 13,
      name: 'Платье',
      date: '09.07.2022',
      img: './styles/images/dresses/dress2.png',
      colors: ['red', 'blue', 'orange']
    },  
    dresses15: {
      id: 14,
      name: 'Платье',
      date: '09.07.2022',
      img: './styles/images/dresses/dress1.png',
      colors: ['red', 'blue', 'orange']
    },
  }
},
];

window.onload = addElements(cloth);

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    buttonUp.style.opacity = '1';
  } else {
    buttonUp.style.opacity = '0';
   }
})

mode.addEventListener("click", () => {
  let phar = document.querySelectorAll("p");
  let h2 = document.querySelectorAll("h2");
  let h3 = document.querySelectorAll("h3");
  let h4 = document.querySelectorAll("h4");
  let ul = document.querySelectorAll("ul");
  console.log(phar)
  if (!stat) {
    main.style.background = '#2b2b2b';
    header.style.background = '#2b2b2b';
    footer.style.background = '#2b2b2b';
    phar.forEach(p => {
      p.classList.add('darkMode')
    })

    ul.forEach(ul => {
      ul.classList.add('darkMode')
    })

    h2.forEach(h2 => {
      h2.classList.add('darkMode')
    })

    h3.forEach(h3 => {
      h3.classList.add('darkMode')
    })

    h4.forEach(h4 => {
      h4.classList.add('darkMode')
    })

  } 
  if (stat) {
    main.style.background = 'white';
    header.style.background = 'white';
    footer.style.background = 'white';

    phar.forEach(p => {
      p.classList.remove('darkMode')
    })

    ul.forEach(ul => {
      ul.classList.remove('darkMode')
    })

    h2.forEach(h2 => {
      h2.classList.remove('darkMode')
    })

    h3.forEach(h3 => {
      h3.classList.remove('darkMode')
    })

    h4.forEach(h4 => {
      h4.classList.remove('darkMode')
    })
  }
  stat = !stat;

})

buttonUp.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

function addElements(args) { 
  args.forEach(el => {
    let name = document.createElement('h2');
    let cards = document.createElement('div');
    cards.className = 'cards'
    name.textContent = el.name;
    name.className = "name";
    name.id = `${el.enName}Card`;
    cards.appendChild(name);
    wrapper.appendChild(cards);
    for (key in el.elements) {
      let card = document.createElement('div');
      let nameEl = document.createElement('h3');
      let image = document.createElement('img');
      let date = document.createElement('p');
      let buttonBuy = document.createElement('button');
      let wrapperDate = document.createElement('div');
      let dayInfo = formatDate(el.elements[key].date);
      nameEl.textContent = el.elements[key].name;
      date.textContent = `Дата добавления: ${dayInfo}`;
      buttonBuy.textContent = 'Купить';
      image.className = 'imageCard';
      date.className = 'date';
      card.className = 'card';
      buttonBuy.className = 'buttonBuy';
      nameEl.className = 'nameEl';
      wrapperDate.className = "wrapperDate";
      buttonBuy.id = `${el.enName}_${el.elements[key].id}`;
      image.setAttribute('src', el.elements[key].img);
      cards.appendChild(card);
      card.appendChild(image);
      card.appendChild(nameEl);
      card.appendChild(wrapperDate);
      card.appendChild(buttonBuy);
      wrapperDate.appendChild(date);
    }
  })
  var shoesCard = document.getElementById("shoesCard");
  var jacketsCard = document.getElementById("jacketsCard");
  var dressesCard = document.getElementById("dressesCard");
  var shortsCard = document.getElementById("shortsCard");
  let buttonsBuy = document.querySelectorAll(".buttonBuy");
  buttonsBuy.forEach(button => {
    button.addEventListener("click", (button) => {
      while(colors.firstChild) {
        colors.removeChild(colors.firstChild)
      }
      getColors(button.target.id);
      wrapperModal.style.display = "block";
    })
  })
}

function formatDate(dateString) {
  let weekOfMonth;
  let dateParts = dateString.split('.'); 
  let date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); 
  let dayOfWeek = daysOfWeek[date.getDay()]; 
  let monthName = monthNames[date.getMonth()]; 
  let year = date.getFullYear(); 
  let day = +dateParts[0]
  if (day <= 7) {
    weekOfMonth = 1;
  } else if (day <= 14) {
    weekOfMonth = 2;
  } else if (day <= 21) {
    weekOfMonth = 3;
  } else if (day <= 28) {
    weekOfMonth = 4;
  } else {
    weekOfMonth = 5;
  }
  return (`${dayOfWeek}, ${weekOfMonth} неделя ${monthName} ${year} года`); 
}

function scrollWindow(card) {
  console.log(card)
  if (window.innerWidth > 719) {
    window.scrollTo({
      top: card.offsetTop - 200,
      behavior: "smooth"
    });
  } else {
    window.scrollTo({
      top: card.offsetTop,
      behavior: "smooth"
    });
  }
}

shoesBtn.addEventListener("click", function() {
  scrollWindow(shoesCard)
});

jacketsBtn.addEventListener("click", function() {
  scrollWindow(jacketsCard)
});

dressesBtn.addEventListener("click", () => {
  scrollWindow(dressesCard)

});

shortsBtn.addEventListener("click", () => {
  scrollWindow(shortsCard)
});

uShoes.addEventListener("click", () => {
  scrollWindow(shoesCard)
});

uDresses.addEventListener("click", () => {
  scrollWindow(dressesCard)
});

uShorts.addEventListener("click", () => {
  scrollWindow(shortsCard)
});

uJackets.addEventListener("click", () => {
  scrollWindow(jacketsCard)
});

function getColors(el) {
  let data = el.split('_');
  cloth.forEach(cards => {
    if (cards.enName == data[0]) {
      for (card in cards.elements) {
        if (cards.elements[card].id == data[1]) {
          cards.elements[card].colors.forEach(color => {
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.id = color;
            radioButton.className = "radioButton";
            radioButton.name = 'radioButton';
            colors.appendChild(radioButton);
          })
        }
      }
    }
  })
}

buttonBuyModal.addEventListener('click', function() {
  if (countInput.value < 1 || countInput.value % 1 !== 0) {
    alert('Введите целое положительное количество товаров');
  } else {
    wrapperModal.style.display = "none";
    alert('Покупка совершена!');
    while(colors.firstChild) {
      colors.removeChild(colors.firstChild)
    }
    countInput.value = "";
    commentInput.value = "";
  }
})

closeModal.addEventListener('click', function() {
  wrapperModal.style.display = "none";
  while(colors.firstChild) {
    colors.removeChild(colors.firstChild)
  }
  countInput.value = "";
  commentInput.value = "";
})