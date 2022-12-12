import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({handlerLoadMoreBtn}) => {
    return (
        <button type='button' className={css.load__button} onClick={handlerLoadMoreBtn}>Load more</button>
    );
}

export default Button;

Button.propTypes = {
    handlerLoadMoreBtn: PropTypes.func.isRequired
}
