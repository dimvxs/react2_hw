import React from 'react';
import './block1.css';
 

const ListItem = ({ value, name }) => (
  <div className='inBlock'>
    <img src={value}/>
    <a href="#">{name}</a>
  </div>
);

const Block1 = ({ pictureLinks, names }) => {
  return (
    <div className="block1">
      {pictureLinks.map((item, index) => (
        <ListItem key={index} value={item} name={names[index]} />
      ))}
    </div>
  );
};





  

 

export function Part1(){
    const names = ["Ноутбуки", "Компьютеры", "Мониторы", "Gaming", "Планшеты", "Кабели и переходники"];
    const pictureLinks = ["./images/notebooks.png", "./images/pcs.png", "./images/monitors.png", "./images/gaming.png", "./images/ipads.png", "./images/usb.png"];
    return(<Block1 pictureLinks = {pictureLinks} names = {names}></Block1>);
}
