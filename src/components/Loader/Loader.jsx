import { MagnifyingGlass } from 'react-loader-spinner';
import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader__icon}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#3f51b5"
      />
    </div>
  );
};

export default Loader;
