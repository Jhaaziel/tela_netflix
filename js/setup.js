$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5 //Ele está dizendo que na tle podem caber até 5 itens//
    }
  }
})
