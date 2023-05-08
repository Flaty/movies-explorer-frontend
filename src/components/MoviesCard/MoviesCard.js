import React from 'react';
import './MoviesCard.css';

function formatDuration(duration) {
  const hours = Math.floor(duration / 60); // вычисляем количество полных часов
  const minutes = duration % 60; // вычисляем количество оставшихся минут
  return `${hours}ч ${minutes}м`; // возвращаем отформатированную строку
}

function MoviesCard({ card, isSavedFilms }) {
  const cardSaveButtonClassName = `${
    card.saved ? 'card__save-button card__save-button_active' : 'card__save-button'
  }`;

  const formattedDuration = formatDuration(card.duration); // преобразуем длительность в формат "ччмм"

  const imageUrl = card.local
  ? card.image.url
  : `https://api.nomoreparties.co${card.image.url}`; //для опредления данные берутся локально или нет

  return (
    <li className="card">
      <img
        className="card__image"
        alt={card.nameRU}
        src={imageUrl} 
      />
      <div className="card__container">
        <div className="card__info-container">
          <h2 className="card__text">{card.nameRU}</h2>
        </div>
        {isSavedFilms ? (
          <button className="card__delete-button"></button>
        ) : (
          <button className={cardSaveButtonClassName}></button>
        )}
      </div>
      <span className="card__time">{formattedDuration}</span> {/* выводим преобразованную длительность */}
    </li>
  );
}

export default MoviesCard;
