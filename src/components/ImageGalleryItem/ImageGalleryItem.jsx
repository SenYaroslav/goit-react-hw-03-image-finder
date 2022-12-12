import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = { largeImageURL: null };

  onImageClick = e => {
    this.setState({ largeImageURL: e.currentTarget.dataset.action });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { largeImageURL } = this.state;
    const { picture } = this.props;
    return (
      <li className={css.gallery__item}>
        <img
          className={css.gallery__item_image}
          src={picture.webformatURL}
          alt={`Pic of ${picture.tags}`}
          data-action={picture.largeImageURL}
          onClick={this.onImageClick}
        />
        {largeImageURL && (
          <Modal largeImage={largeImageURL} closeModal={this.closeModal} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  picture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
