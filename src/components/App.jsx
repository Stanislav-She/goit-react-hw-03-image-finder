import { Component } from 'react';
import { Serchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isOpenModal: false,
    searchValue: 'lighthous',
    currentImage: null,
  };

  toggleModal = event => {
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  openModal = largeImage => {
    this.setState({
      currentImage: largeImage,
      isOpenModal: true,
    });
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { isOpenModal, currentImage } = this.state;
    return (
      <main>
        <Serchbar onSubmit={this.handleSubmit} />
        {isOpenModal && (
          <Modal onClose={this.toggleModal} currentImage={currentImage} />
        )}
      </main>
    );
  }
}
