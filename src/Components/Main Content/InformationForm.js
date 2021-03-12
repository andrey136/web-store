import React from 'react';
import '../../App.css';
import front_pic from '../../img/factory_pic.jpg'

class InformationForm extends React.Component {
    render(){
        return (
        <div className="information-form sample flex-container">
            <div className="front-pic">
                <img src={front_pic}></img>
            </div>
            <div className="company-description">
                <div className="title">О нас</div>
                <p>Наша компания работает на рынке с 2017 года. Команда наших экспертов и 
                    аналитиков следят за обновлениями и предлагают одни из самых выгодных предложений в сфере 
                    электронной техники.</p>
                <p>Помимо нашей основной деятельности мы соотрудничаем с благотворительными организациями. Десять процентов от нашей выручки мы отправляем в детский фонд. </p>
            </div>
        </div>
  );
    }
  
}

export default InformationForm;
