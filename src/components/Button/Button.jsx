import { PropTypes } from 'prop-types';
import ButtonStyle from './ButtonStyle.module.css';

export const Button = ({ onclick }) => {
  return (
    <button type="button" className={ButtonStyle.button} onClick={onclick}>
      Load more
    </button>
  );
};

Button.prototype = {
  onClick: PropTypes.func.isRequired,
};
