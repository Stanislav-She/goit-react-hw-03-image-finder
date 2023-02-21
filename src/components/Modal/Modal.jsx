import { Component } from 'react';
import PropTypes from 'prop-types';
import ModalStyle from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyCloseModal);
  }

  handleKeyCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={ModalStyle.overlay}>
        <div className={ModalStyle.modal}>
          <img
            className={ModalStyle.image}
            src={this.props.currentImage}
            alt=""
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentImage: PropTypes.string.isRequired,
};
