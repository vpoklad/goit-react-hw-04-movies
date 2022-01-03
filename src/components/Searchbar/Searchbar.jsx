import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-hot-toast';

export default function Searchbar({ onSubmit, placeHolder }) {
  const [searchInput, setSearchInput] = useState('');

  const handlerChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchInput.trim() === '') {
      toast.error('Input something!');
      return;
    }
    onSubmit(searchInput);
    setSearchInput('');
    e.target.children[1].blur();
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          value={searchInput}
          type="search"
          autoComplete="on"
          autoFocus
          placeholder={placeHolder}
          onChange={handlerChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
