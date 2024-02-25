import deadpoolP from '../assets/deadpoolP.jpeg'
import HawkP from '../assets/HawkP.jpeg'
import StarP from '../assets/StarP.jpeg'
import LokyP from '../assets/LokyP.jpeg'
import avenger1 from '../assets/avenger1.jpeg'
import avenger5 from '../assets/avenger5.jpeg'
import spman1 from '../assets/spman1.jpeg'
import spman2 from '../assets/spman2.jpeg'
import xmen1 from '../assets/xmen1.jpeg'
import xmen2 from '../assets/xmen2.jpeg'


export const data = [
  {
    id: 2334612321,
    name: 'Deadpool zipper jacket',
    originalPrice: 29.50,
    offerPrice: 19.99,
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation u
    llamco laboris nisi ut aliquip ex ea commodo consequat.
    deserunt mollit anim id est laborum.`,
    sizeOptions: ['XS', 'S', 'M'],
    variants: [
      {
        name: 'Deadpool zipper jacket',
        img: deadpoolP,
        color: '#7d1826'
      },
      {
        name: 'Hawkeye zipper jacket',
        img: HawkP,
        color: '#392324'
      },
      {
        name: 'Star Lord zipper jacket',
        img: StarP,
        color: '#572225'
      },
      {
        name: 'Loky zipper jacket',
        img: LokyP,
        color: '#ab8230'
      },
    ],
  },
  {
    id: 1234552387,
    name: 'Captain America zipper jacket',
    originalPrice: null,
    offerPrice: 19.99,
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation u
    llamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.`,
    sizeOptions: ['XS', 'S', 'M', 'L'],
    variants: [
      {
        name: 'Captain America zipper jacket',
        img: avenger1,
        color: '#22394f',
      },
    ],
  },
  {
    id: 7543752321,
    name: 'MoonLight zipper jacket',
    originalPrice: 49.99,
    offerPrice: null,
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation u
    llamco laboris nisi ut aliquip ex ea commodo consequat. 
    sunt in culpa qui officia 
    deserunt mollit anim id est laborum.`,
    sizeOptions: ['XS', 'S'],
    variants: [
      {
        name: 'MoonLight zipper jacket',
        img: avenger5,
        color: '#252525',
      },
    ],
  },
  {
    id: 2223752321,
    name: 'Dark Spider-Man zipper jacket',
    originalPrice: 24.99,
    offerPrice: null,
    img: deadpoolP,
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation u
    llamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
    occaecat cupidatat non proident.`,
    sizeOptions: ['S', 'M'],
    variants: [
      {
        name: 'Dark Spider-Man zipper jacket',
        img: spman1,
        color: '#86090a',
      },
    ],
  },
  {
    id: 5674752321,
    name: 'Spider-Man zipper jacket',
    originalPrice: null,
    offerPrice: 19.99,
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation u
    llamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.`,
    sizeOptions: ['XS', 'S', 'M'],
    variants: [
      {
        name: 'Dark Spider-Man zipper jacket',
        img: spman2,
        color: '#86100e',
      },
    ],
  },
  {
    id: 56700898721,
    name: 'X-Men zipper jacket',
    originalPrice: 60.99,
    offerPrice: null,
    description: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.`,
    sizeOptions: ['XS', 'S', 'M'],
    variants: [
      {
        name: 'X-Men zipper jacket',
        img: xmen1,
        color: '#1c1c1c',
      },
    ],
  },
  {
    id: 982560898721,
    name: 'X-Men Logan zipper jacket',
    originalPrice: 50.99,
    offerPrice: null,
    description: `Ut enim ad minim veniam, quis nostrud exercitation u
    llamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.`,
    sizeOptions: ['XS', 'S', 'M'],
    variants: [
      {
        name: 'X-Men Logan zipper jacket',
        img: xmen2,
        color: '#b99727',
      },
    ],
  }
]