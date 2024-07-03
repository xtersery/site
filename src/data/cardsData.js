import sand from './../assets/sand.jpg';
import lotus from './../assets/lotus.png'
import tower from './../assets/bk2.jpg'
import piramids from './../assets/piramyds.jpg'
import mountain from './../assets/mountain2.jpg'
import russia1 from './../assets/russia1.jpg'
import russia2 from './../assets/russia2.jpg'
import russia3 from './../assets/russia3.jpg'

const cards = [
    {
        title: 'Card-1',
        img: sand,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.`,
        price: 250,
        location: 'Israel',
        duration: '7 days'
    },
    {
        title: 'Card-2',
        img: russia1,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.`,
        price: 250,
        location: 'Russia',
        duration: '7 days'
    },
    {
        title: 'Card-3',
        img: sand,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.`,
        price: 250,
        location: 'Turkey',
        duration: '7 days'
    },
    {
        title: 'Card-4',
        img: russia2,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. `,
        price: 250,
        location: 'Russia',
        duration: '7 days'
    },
    {
        title: 'Card-5',
        img: sand,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. `,
        price: 250,
        location: 'China',
        duration: '7 days'
    },
    {
        title: 'Card-6',
        img: sand,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.`,
        price: 250,
        location: 'India',
        duration: '7 days'
    },
    {
        title: 'Card-7',
        img: russia3,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.`,
        price: 250,
        location: 'Russia',
        duration: '7 days'
    },
    {
        title: 'Card-8',
        img: sand,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.`,
        price: 250,
        location: 'Egypt',
        duration: '7 days'
    },
    {
        title: 'Card-9',
        img: sand,
        text: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.`,
        price: 250,
        location: 'Dubai',
        duration: '7 days'
    },

]


const bestCards = [
    {
        id: 1,
        title: 'Lotus-Dehli',
        img: lotus,
        text: `Included: Air ticket, Hotel, Breakfast, Tours, Airport Transfer.`,
        price: 2648,
        location: 'India',
        duration: '5 Days'
    },
    {
        id: 2,
        title: 'Burj Khalifa-DXB',
        img: tower,
        text: `Included: Air ticket, Hotel, Breakfast, Tours, Airport Transfer.`,
        price: 2648,
        location: 'Dubai',
        duration: '5 Days'
    },
    {
        id: 3,
        title: 'Piramids-Egypt',
        img: piramids,
        text: `Included: Air ticket, Hotel, Breakfast, Tours, Airport Transfer.`,
        price: 2648,
        location: 'Egypt',
        duration: '7 Days'
    },
    {
        id: 4,
        title: 'Mountain-Vietnam',
        img: mountain,
        text: `Included: Air ticket, Hotel, Breakfast, Tours, Airport Transfer.`,
        price: 2648,
        location: 'VT',
        duration: '7 Days '
    },
]

export {cards, bestCards};
