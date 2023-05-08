import React from 'react';
import photo from '../../images/mainPhoto.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__large-title">Илья</h3>
          <p className="about-me__info">Фронтенд-разработчик, 22 года</p>
          <p className="about-me__description">
            Живу и учусь в Москве. Люблю развиваться, становиться лучше. Курс Веб-разработчик от Яндекса
            помог мне понять, что мне интересна веб-разработка. Поэтому стараюсь двигаться в этом
            направлении. Хочу становиться только лучше и развиваться.
          </p>
          <a
            href="https://github.com/Flaty"
            className="about-me__link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
        <img src={photo} alt="фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;

