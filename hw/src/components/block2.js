import React from 'react';
import './block2.css';


 const InListItem = ({secondName}) => (
<p><a id = "link" href="#">{secondName}</a></p>
 );





const ListItem = ({ value, name, secondName}) => (
<div>
<img src={value}/>
<p><a href="#">{name}</a></p>
<InListItem secondName={secondName} />
</div>
);



const Block2 = ({ pictureLinks, names, secondNames }) => {
    return (
      <div className="block1">
        {pictureLinks.map((item, index) => (
          <div key={index}>
            <ListItem value={item} name={names[index]} />
            {secondNames[index] && secondNames[index].map((secondName, i) => (
              <InListItem key={i} secondName={secondName} />
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export function Part2(){
    const names = ["Компьютерные комплектующие", "Сетевое оборудование", "Наушники и аксессуары", "Клавиатуры и мыши", "Аксессуары для электроники", "Оргтехника"];
    const pictureLinks = ["./images/technic.png", "./images/wifi.png", "./images/airpods.png", "./images/mouses.png", "./images/accessories.png", "./images/printers.png"];
    const secondNames = [
      [  "SSD",
        "Системы охлаждения",
        "Оперативная память",
        "Процессоры",
        "Материнские платы",
        "Жесткие диски и дисковые массивы",
        "Блоки питания"
      ],
      
      [
        "Маршрутизаторы",
        "Коммутаторы",
        "Сетевые адаптеры",
        "Пассивное сетевое оборудование",
        "Беспроводные точки доступа",
        "Ретрансляторы Wi-Fi",
        "Патч-корды"
      ],

      [
        "Компьютерные мыши",
        "Игровые поверхности",
        "Клавиатуры",
        "Комплект: клавиатура и мышь",
        "Аксессуары для клавиатур и мышек"
      ],

      [
        "Наушники",
        "TWS",
        "Игровые гарнитуры",
        "Вакуумные наушники",
        "Наушники вкладыши",
        "Накладные наушники",
        "Полноразмерные наушники",
        "Усилители для наушников",
        "Аксессуары для наушников"
      ],

      [
        "Флеш память USB",
        "Хабы и кардридеры",
        "Аксессуары для ПК и ноутбуков",
        "Комплектующие для ноутбуков",
        "Сетевые фильтры, адаптеры и удлинители",
        "Чехлы для планшетов",
        "Сумки, рюкзаки и чехлы для ноутбуков",
        "Чистящие средства"
      ],
      
      [
    "МФУ/Принтеры",
    "Сканеры",
    "Расходные материалы для принтеров",
    "Доски, флипчарты"
      ]
      
      
      
    ];


     
    return(<Block2 pictureLinks = {pictureLinks} names = {names} secondNames = {secondNames} />);
}





  

 

