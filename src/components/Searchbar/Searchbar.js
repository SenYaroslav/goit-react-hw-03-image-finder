import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  handleChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.query;

    this.props.onSubmit(value.trim().toLowerCase());
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.form} onSubmit={this.handleChange}>
          <button type="submit" className={css.form__button}>
            <CiSearch size="1.5em" />
            <span className={css.button__label}>Search</span>
          </button>

          <input
            className={css.form__input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
