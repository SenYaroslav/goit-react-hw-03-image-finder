import React, { Component } from 'react';
import { fetchPictures } from 'services/picturesAPI';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    pictures: [],
    searchQuery: '',
    isLoading: false,
    isLoadMoreBtnShown: false,
  };

  onSubmit = query => {
    if (query === '') {
      alert('Please, fill the search form');
      return;
    }
    this.setState({ searchQuery: query, page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const prevPage = prevState.page;
    const { searchQuery, page } = this.state;

    if (prevPage !== page && prevQuery === searchQuery) {
      this.setState({ isLoading: true });

      fetchPictures(searchQuery, page)
        .then(({ data: { hits } }) => {
          if (hits.length === 12) {
            this.setState(prevState => {
              return {
                pictures: [...prevState.pictures, ...hits],
                isLoadMoreBtnShown: true,
              };
            });
          }
          if (hits.length < 12) {
            this.setState({ isLoadMoreBtnShown: false });
          }
          if (hits.length === 0) {
            this.setState({ pictures: [] });
            alert('Bad search, try some else');
          }
        })
        .catch(console.log)
        .finally(() => this.setState({ isLoading: false }));
    }
    if (prevQuery !== searchQuery) {
      this.setState({ isLoading: true });

      fetchPictures(searchQuery, page)
        .then(({ data: { hits } }) => {
          if (hits.length === 12) {
            this.setState({ pictures: [...hits], isLoadMoreBtnShown: true });
          }
          if (hits.length < 12) {
            this.setState({ isLoadMoreBtnShown: false });
          }
          if (hits.length === 0) {
            this.setState({ pictures: [] });
            alert('Bad search, try some else');
          }
        })
        .catch(console.log)
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handlerLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onModalClose = e => {
    if (e.currentTarget === e.target || e.code === 'Escape')
      this.setState({ isModalOpen: false });
  };

  render() {
    const { isLoading, isLoadMoreBtnShown } = this.state;
    return (
      <div className="container">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery pictures={this.state.pictures} />
        {isLoading && <Loader />}
        {isLoadMoreBtnShown && (
          <Button handlerLoadMoreBtn={this.handlerLoadMoreBtn} />
        )}
      </div>
    );
  }
}
