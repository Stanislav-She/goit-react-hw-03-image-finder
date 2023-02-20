import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { IcoSerch } from 'react-icons/fi';
import SearchbarStyle from './Searchbar.module.css';

export class Serchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <header className={SearchbarStyle.searchbar}>
        <form className={SearchbarStyle.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={SearchbarStyle.button}>
            <span className={SearchbarStyle.buttonLabel}>
              <IcoSerch />
            </span>
          </button>

          <input
            className={SearchbarStyle.input}
            type="text"
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Serchbar.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};
