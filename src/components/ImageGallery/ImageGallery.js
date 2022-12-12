import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { pictures } = this.props;
    return (
      <ul className={css.gallery}>
        {pictures.map(picture => (
          <ImageGalleryItem key={picture.id} picture={picture} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
