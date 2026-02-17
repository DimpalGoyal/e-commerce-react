import headphoneImg from '../assets/headphone.jpg'
import keyboardImg from '../assets/keyboard.jpg'
import laptopImg from '../assets/laptop.avif'
import monitorImg from '../assets/monitor.jpg'
import gamepadImg from '../assets/gamepad.jpg'
import smartphoneImg from '../assets/smartphone.jpg'
import smartwatchImg from '../assets/smartwatch.jpg'


const products = [
  {
    id: 1,
    name: "Headphones",
    price: 500,
    src: headphoneImg
  },
  {
    id: 2,
    name: "Laptop",
    price: 55000,
    src: laptopImg 
  },
  {
    id: 3,
    name: "Smartphone",
    price: 15000,
    src: smartphoneImg 
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1200,
    src: keyboardImg 
  },
  {
    id: 5,
    name: "Gaming Controller",
    price: 3500,
    src: gamepadImg
  },
  {
    id: 6,
    name: "Monitor",
    price: 9000,
    src: monitorImg
  },
  {
    id: 7,
    name: "Tablet",
    price: 12000,
    src: "https://picsum.photos/200?random=7"
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 3000,
    src: smartwatchImg
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 2500,
    src: "https://picsum.photos/200?random=9"
  },
];

/**
 * Retrieve the list of available products.
 * @returns {Array<{id: number, name: string, price: number, src: string}>} Array of product objects with properties `id`, `name`, `price`, and `src`.
 */
export function getProducts(){
    return products;
}