let img = document.querySelector('#image');
let imgCaption = document.querySelector('#img-caption');

const listImage = [
    { id : 1,
      url:'https://www.ghibli.jp/gallery/howl049.jpg',
      caption:`Howl's house from "Howl's moving castle" movie`
    },
    { id : 2,
      url: 'https://www.ghibli.jp/gallery/totoro029.jpg' ,
      caption: 'From My Neighbor Totoro Movie'
    },
    { id : 3,
      url: 'https://www.ghibli.jp/gallery/mononoke033.jpg',
      caption: 'From Princess Mononoke movie'
    },
    { id : 4,
      url: 'https://www.ghibli.jp/gallery/porco025.jpg',
      caption:'From Porco Rosso Movie'
    },
    { id : 5,
      url: 'https://www.ghibli.jp/gallery/chihiro045.jpg',
      caption:'From Spirited Away Movie'
    },
    { id : 6,
      url: 'https://www.ghibli.jp/gallery/karigurashi020.jpg',
      caption:'From Arriety of Borrowing Movie'
    },
    { id : 7,
      url: 'https://www.ghibli.jp/gallery/majo047.jpg',
      caption:`From Kiky's Delivery Service Movie`
    },
    { id : 8,
      url: 'https://www.ghibli.jp/gallery/nausicaa007.jpg' ,
      caption: 'From Nausicaa of the Valley of the Wind'
    },
    { id : 9,
      url: 'https://www.ghibli.jp/gallery/kaguyahime005.jpg' ,
      caption:'From The Tale of Princess Kaguya Movie'
    }
    ];

let random = Math.floor(Math.random() * listImage.length);


img.src = listImage[random].url; 
imgCaption.innerText = listImage[random].caption;
