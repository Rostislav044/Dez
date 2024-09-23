

import React, { useState, useEffect } from 'react';
import './Reviews.scss';

const translations = {
  ua: {
    title: "Відгуки наших клієнтів",
    buttonText: "Залишити відгук",
    seeMoreText: "Показати більше відгуків",
    seeLessText: "Згорнути відгуки",
    cancelButtonText: "Не залишати відгук",
    placeholders: {
      name: "Ваше ім'я",
      city: "Ваше місто",
      text: "Ваш відгук"
    },
    errors: {
      name: "Будь ласка, введіть ваше ім'я!",
      city: "Будь ласка, введіть ваше місто!",
      text: "Будь ласка, введіть ваш відгук!"
    },
    successMessage: "Дякуємо! Ваш відгук надіслано."
  },
  ru: {
    title: "Отзывы наших клиентов",
    buttonText: "Оставить отзыв",
    seeMoreText: "Показать больше отзывов",
    seeLessText: "Свернуть отзывы",
    cancelButtonText: "Не оставлять отзыв",
    placeholders: {
      name: "Ваше имя",
      city: "Ваш город",
      text: "Ваш отзыв"
    },
    errors: {
      name: "Пожалуйста, введите ваше имя!",
      city: "Пожалуйста, введите ваш город!",
      text: "Пожалуйста, введите ваш отзыв!"
    },
    successMessage: "Спасибо! Ваш отзыв отправлен."
  }
};

const Reviews = ({ currentLanguage }) => {
  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('uk', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const initialReviews = [
    { id: 1, name: 'Алексей', city: 'Киев', text: 'Отличная работа по дезинфекции! Быстро и качественно.', date: '12 серпня 2023', lang: 'ru' },
    { id: 2, name: 'Марія', city: 'Одеса', text: 'Дуже професійно! Дезінфекція на високому рівні.', date: '25 грудня 2023', lang: 'ua' },
    { id: 3, name: 'Ольга', city: 'Житомир', text: 'Дякуємо за якісну послугу! Тепер вдома чисто та безпечно.', date: '10 червня 2024', lang: 'ua' },
    { id: 4, name: 'Елена', city: 'Одесса', text: 'Удалили плесень . Всё на высшем уровне.', date: '2 липня 2024', lang: 'ru' },
    { id: 5, name: 'Андрей', city: 'Харьков', text: 'Устранили неприятный запах в офисе. Результат потрясающий!', date: '1 серпня 2024', lang: 'ru' },
    { id: 6, name: 'Оксана', city: 'Львів', text: 'Швидко вирішили проблему з комахами.', date: '1 серпня 2024', lang: 'ua' },
    { id: 7, name: 'Наталія', city: 'Київ', text: 'Дуже задоволена результатом.', date: '5 липня 2024', lang: 'ua' }
  ];

  const loadReviews = () => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : initialReviews;
  };

  const [reviews, setReviews] = useState(loadReviews);
  const [newReview, setNewReview] = useState({ name: '', city: '', text: '' });
  const [showForm, setShowForm] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!newReview.name) {
      formErrors.name = translations[currentLanguage].errors.name;
    }
    if (!newReview.city) {
      formErrors.city = translations[currentLanguage].errors.city;
    }
    if (!newReview.text) {
      formErrors.text = translations[currentLanguage].errors.text;
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const newReviewItem = { id: reviews.length + 1, ...newReview, date: getCurrentDate() };
      setReviews([...reviews, newReviewItem]);
      setNewReview({ name: '', city: '', text: '' });
      setShowForm(false);
      setErrors({});
      setShowModal(true); // Показать модальное окно
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { title, buttonText, placeholders, seeMoreText, seeLessText, cancelButtonText } = translations[currentLanguage];

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="reviews-container">
      <h2>{title}</h2>

      <div className="reviews-list-container">
        <ul className="reviews-list">
          {visibleReviews.map((review) => (
            <li key={review.id} className="review-item">
              <div className="review-header">
                <strong>{review.name}</strong> ({review.city}) — <span className="review-date">{review.date}</span>
              </div>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {reviews.length > 3 && (
        <button className="see-more-btn" onClick={() => setShowAllReviews(!showAllReviews)}>
          {showAllReviews ? seeLessText : seeMoreText}
        </button>
      )}

      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            placeholder={placeholders.name}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
          
          <input
            type="text"
            value={newReview.city}
            onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
            placeholder={placeholders.city}
          />
          {errors.city && <span className="error-text">{errors.city}</span>}
          
          <textarea
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            placeholder={placeholders.text}
            rows="4"
          />
          {errors.text && <span className="error-text">{errors.text}</span>}
          
          <button type="submit" className="submit-review-btn">{buttonText}</button>
          <button type="button" className="cancel-review-btn" onClick={() => setShowForm(false)}>
            {cancelButtonText}
          </button>
        </form>
      )}

      {!showForm && (
        <button className="add-review-btn" onClick={() => setShowForm(true)}>
          {buttonText}
        </button>
      )}

      {/* Модальное окно */}
      {showModal && (
        <div className="modal active">
          <div className="modal-content">
            <p>{translations[currentLanguage].successMessage}</p>
            <button className="modal-button" onClick={handleCloseModal}>
              ОК
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;


