import css from './Button.module.css';

// Функціональний компонент, який відповідає за кнопку "Load more".
export const Button = ({ clickLoad }) => {
  return (
    <button onClick={clickLoad} className={css.Button} type="button">
      Load more
    </button>
  );
};
