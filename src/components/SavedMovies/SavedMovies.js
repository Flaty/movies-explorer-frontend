import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const movies = [
  {
    _id: 1,
    image: { url: 'https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639270503_35-abrakadabra-fun-p-oblozhki-dlya-tetradei-yevangelion-chb-36.jpg' },
    nameRU: 'Евангелион',
    duration: 1333,
    saved: true,
    local: true,
  },
  {
    _id: 2,
    image: { url: 'https://sun9-62.userapi.com/impg/zKFK1YBAId0WWo9iZNyWr1KU1AKmn5PyDx551A/kny9f9eIF-M.jpg?size=1080x813&quality=96&sign=747599e085e4901b4455b28d4842c3ce&c_uniq_tag=ZG6KYNlWTnz-ZDXlZwquMBfD_Y0YbHYKulkc58OSG0E&type=album' },
    nameRU: 'Токийский гуль',
    duration: 3332,
    saved: false,
    local: true,
  },
  {
    _id: 3,
    image: { url: 'https://static2.mangapoisk.ru/pages/452/55274/Qseq0kNBdklIqTMFQadv91ptVOHzXIVIWyEwi9cy.jpg' },
    nameRU: 'Дневник будущего',
    duration: 1113,
    saved: false,
    local: true,
  },
];



function SavedMovies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList cards={movies} isSavedFilms={true} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
