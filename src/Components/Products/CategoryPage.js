import React from 'react';
import '../../App.css';
import Product from './Product';

class CategoryPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mobile_devices:{
                0: {
                    model:"Смартфон Samsung Galaxy Z Fold2",
                    description: "В сложенном виде Samsung Galaxy Z Fold2 оснащен 6.2 дюймовым экраном Cover Screen, комфортно умещающийся в одной руке. Поднимите внешнюю крышку смартфона и перед вами откроется 7.6-дюймовый главный экран как у планшета, покрытый сверхтонким стеклом Samsung Ultra Thin Glass.",
                    price: 164999,
                    quantity: 0,
                    img: require('../../img/phone-2.jpg')
                },
                1: {
                    model:"Смартфон Apple iPhone 12 Pro",
                    description: `Это iPhone 12 Pro. Великолепный яркий дисплей Super Retina XDR 6,1 дюйма. Передняя панель Ceramic Shield, с которой риск повреждений дисплея при падении 
                    в 4 раза ниже. Потрясающее качество снимков при слабом освещении благодаря системе камер Pro. Оптический зум с диапазоном 4x. Съёмка, монтаж 
                    и воспроизведение видео кинематографического качества в стандарте Dolby Vision.`,
                    price: 99999,
                    quantity: 0,
                    img: require('../../img/iphone-pic.jpg')
                },
            },
            refrigerators:{
                0: {
                    model:"Винный шкаф Miele KWT6834SGS",
                    description: "Винный шкаф Miele KWT6834SGS создаёт идеальные условия для хранения благородного напитка. Тонированное стекло дверцы защищает бутылки от ультрафиолетовых лучей, а полки из натурального букового дерева – от вибрации.",
                    price: 599000 ,
                    quantity: 0,
                    img: require('../../img/fridge-1.jpg')
                },
                1: {
                    model:"Холодильник Bosch KGN39AI31R",
                    description: "Холодильник Bosch KGN39AI31R выполнен в цвете нержавеющая сталь. Прибор оснащен общим полезным объемом 366 литров. Постоянная температура в интерьере холодильника - решающий фактор в достижении длительного срока хранения продуктов.",
                    price: 57990,
                    quantity: 0,
                    img: require('../../img/fridge-2.jpg')
                },
                2: {
                    model:"Холодильник LG DoorCooling+",
                    description: "Технология DoorCooling+ обеспечивает дополнительное охлаждение из панели в верхней части корпуса. Оно выполняется на 32% быстрее, чем в моделях без этой системы. За счёт этого на всех полках, в том числе на тех, что установлены в двери, поддерживается постоянная температура. ",
                    price: 49990,
                    quantity: 0,
                    img: require('../../img/fridge-3.jpg')
                },
            },
            computers:{
                0: {
                    model:"Ноутбук Apple MacBook Pro 13",
                    description: "Чип Apple M1 преображает возможности MacBook Pro 13 дюймов. В этот чип интегрирован целый ряд компонентов. Это 8-ядерный процессор, который прекрасно справляется со сложными задачами в области фотографии, программирования, видеомонтажа и не только. Потрясающий 8-ядерный графический процессор, с которым обработка сложной графики происходит мгновенно, а игры просто летают. Мощная 16-ядерная система Neural Engine, которая поднимает машинное обучение на новый уровень в ваших любимых приложениях.",
                    price: 129990,
                    quantity: 0,
                    img: require('../../img/mac-book.jpg')
                },
                1: {
                    model:"Ноутбук ASUS TP412FA-EC404T",
                    description: `14-дюймовый экран девайса поддерживает разрешение Full HD и способен раскрываться на 360°, чтобы обладатель модели мог спокойно продемонстрировать файлы собравшимся рядом коллегам или товарищам. Для этого инженеры компании использовали шарнир ErgoLift, который демонстрирует впечатляющую выносливость, выдерживая до 20 тысяч циклов открытия-закрытия.`,
                    price: 44990,
                    quantity: 0,
                    img: require('../../img/laptop-1.jpeg')
                },
                2: {
                    model:"Ноутбук игровой HP OMEN 15-en0019ur 1U3C7EA",
                    description: `Ноутбук HP OMEN 15-en0019ur стильно выглядит и предоставляет широкие возможности для игры. Встроенный аккумулятор позволяет не заботиться о подзарядке в течение примерно 6 часов.Сочетание шестиядерного процессора AMD Ryzen 5 4600H и дискретной видеокарты Nvidia GeForce GTX1650Ti обеспечивает высокую производительность и позволяет запускать современные игры с максимальными настройками графики. Играй столько, сколько захочешь – система охлаждения Tempest эффективно препятствует перегреву.`,
                    price: 74990,
                    quantity: 0,
                    img: require('../../img/laptop-2.jpg')
                },
            },
            TVs:{
                0: {
                    model:"Телевизор LED Samsung",
                    description: `Телевизор LED Samsung UE43TU8500UXRU устанавливается на устойчивую подставку, располагающуюся по центру. Аппарат представлен в черном корпусе с экраном диагональю 43" (109 см), что позволит сделать его центральным прибором, вокруг которого будет сосредоточена мебель. Для экономии пространства вам доступна фиксация устройства на стене. К телевизору можно подключать мобильную технику и накопители, поддерживающие разъем USB.`,
                    price: 39999,
                    quantity: 0,
                    img: require('../../img/samsung-tv.jpg')
                },
                1: {
                    model:"Телевизор LED Sony",
                    description: `43ʺ (108 см) Телевизор LED Sony KD-43XG7005BR имеет тонкий корпус черного цвета, устанавливаемый на прочные ножки. Также телевизор можно будет закрепить на стене. Наличие процессора и ОС Linux предусматривают использование телевизора для работы с графикой, а также обеспечивают его функциональность. Для подключения кабельных или спутниковых каналов в телевизоре имеются цифровые тюнеры.`,
                    price: 43499,
                    quantity: 0,
                    img: require('../../img/Tv-screen.jpg')
                },
                2: {
                    model:"Телевизор LED LG",
                    description: `Телевизор LED LG 49UK6200PLA - многофункциональное устройство, которое должно присутствовать в каждом доме. Представленная модель стала обладательницей классической черной расцветки рамки и подставки, благодаря чему она станет идеальным дополнением любого помещения. Если вы дорожите каждым метром свободного пространства в комнате, закрепите этот телевизор на стене при помощи кронштейна с размерами VESA 300 x 300, которое приобретается отдельно.`,
                    price: 29999,
                    quantity: 0,
                    img: require('../../img/Tv-screen-2.jpg')
                },
            },
            current_category: "mobile_devices"
        }
    }

    incrementQuantity(key, cat_info){

        console.log('INCR', key, cat_info);
        // let current_category = cat_info.category
        // let category = this.getState()
        // // let product = category[key];
        // // product.quantity = product.quantity + 1;
        // console.log(category)

        // if(current_category == "TVs"){
        //     this.setState({
        //         TVs: category
        //     });
        // } else if(current_category == "mobile_devices"){
        //     this.setState({
        //         TVs: category
        //     });
        // } else if(current_category == "refrigerators"){
        //     this.setState({
        //         refrigerators: category
        //     });
        // } else if(current_category == "computers"){
        //     this.setState({
        //         computers: category
        //     });
        // }

        
    }

    render() {
        let current_category = this.props.category_info.category;
        // let current_category = this.state.current_category;
        console.log(this.props)

        return (
            <div className="category-page">
                <div id="title-category-page">{this.props.category_info.title}</div>

                {/* {Object.keys(this.state[this.state.current_category]).map(key => */}
                {Object.keys(this.state[current_category]).map(key =>
                <Product 
                model={this.state[current_category][key].model}
                description={this.state[current_category][key].description}
                price={this.state[current_category][key].price}
                quantity={this.state[current_category][key].quantity}
                img={this.state[current_category][key].img}
                incrementQuantity={() => this.incrementQuantity(key, current_category)}
                key={key}/>)
                }
            </div>
        );
    }

}

export default CategoryPage;
