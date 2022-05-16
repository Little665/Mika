const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';

  const target_two = document.querySelectorAll('[data-anime_two]');
  const animationClass_two = 'animate_two';

  const target_three = document.querySelectorAll('[data-anime_three]')
  const animationClass_three = 'animate_three'

  function animeScroll_two() {
    const scroll_top = window.pageYOffset - 700;
    target_two.forEach(function(element) {
      if((scroll_top) > element.offsetTop) {
        element.classList.add(animationClass_two);
      } else {
        element.classList.remove(animationClass_two);
      }
    })
  }
  
  animeScroll_two();

  function animeScroll_three() {
    const scroll_top = window.pageYOffset - 1400;
    target_three.forEach(function(element) {
      if((scroll_top) > element.offsetTop) {
        element.classList.add(animationClass_three);
      } else {
        element.classList.remove(animationClass_three);
      }
    })
  }

  animeScroll_three()

  function animeScroll() {
    const windowTop = window.pageYOffset - 100;
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
      animeScroll_two();
      animeScroll_three();
    }, 200));
  }


//const imgs = document.querySelectorAll(".img_carrossel");
//const img = document.querySelectorAll(".img_carrossel img");

//let idx = 0;

//function carrossel() {
  //idx++;

  //if(idx > img.length - 1){
    //idx = 0;
  //}

    
  //imgs.style.transform = `translateX(${-idx * 570}px)`;
//}

//setInterval(carrossel, 3000);

function display_styles(div_one, div_two) {
  const menuCommands = document.querySelector(div_one)
  let menuDisplay = document.querySelector(div_two)

  menuCommands.addEventListener("mouseover", () => {
      menuDisplay.style.display = "block";
  })

  menuCommands.addEventListener("mouseout", () => {
      menuDisplay.style.display = "none";
  });
}
display_styles(".one_left", ".container_menu_commands")


function add_icon_top(div_one, div_two) {
  display_styles(div_one, div_two)
}
add_icon_top(".container_one_button_add", ".add_icon_top")

function slash_commands(div_one, div_two) {
  display_styles(div_one, div_two)
}
slash_commands(".one_botton", ".container_menu_slash_commands")

function slash_blog(div_one, div_two) {
  display_styles(div_one, div_two)
}
slash_blog(".one_blog", ".container_menu_blog")

function loja_item_one(div_one, div_two) {
  display_styles(div_one, div_two)
}
loja_item_one(".itens_one", ".img_info")

function loja_item_two(div_one, div_two) {
  display_styles(div_one, div_two)
}
loja_item_two(".itens_two", ".img_info_two")

function loja_item_three(div_one, div_two) {
  display_styles(div_one, div_two)
}
loja_item_three(".itens_three", ".img_info_three")

function loja_item_four(div_one, div_two) {
  display_styles(div_one, div_two)
}
loja_item_four(".itens_four", ".img_info_four")

function loja_item_cinco(div_one, div_two) {
  display_styles(div_one, div_two)
}
loja_item_cinco(".itens_cinco", ".img_info_cinco")

function loja_item_seis(div_one, div_two) {
  display_styles(div_one, div_two)
}
loja_item_seis(".itens_seis", ".img_info_seis")

function loja_item_sete(div_one, div_two) {
  display_styles(div_one, div_two)
}
loja_item_sete(".itens_sete", ".img_info_sete")


let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
	
})

document.addEventListener('click', (e) => {
    const click_on = e.target;

    let infor_loja = document.querySelector('.loja_bloco_info')

    if(click_on.classList.contains('click_info')) {
      if(infor_loja.style.opacity == '0') {
          infor_loja.style.opacity = '1'
      } else {
        infor_loja.style.opacity = '0'
      }
    }

})