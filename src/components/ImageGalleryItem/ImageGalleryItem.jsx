import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

// Функціональний компонент, який відповідає за елемент галереї.
export const ImageGalleryItem = ({ images, togleModal }) => {
  return (
    <>
      {images.map(item => (
        // При кліку на елемент галереї викликаємо функцію togleModal, яка відкриває модальне вікно.
        <li
          key={item.id}
          onClick={evt => {
            togleModal(item.largeImageURL, item.tags);
          }}
          className={css.galleryItem}
        >
          <img
            loading="lazy"
            className={css.ImageGalleryItem}
            src={item.webformatURL}
            alt={item.tags}
          />
        </li>
      ))}
    </>
  );
};

// типизація пропсів
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
