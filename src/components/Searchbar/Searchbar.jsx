import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import s from './Searchbar.module.css';
import { toast } from 'react-hot-toast';

export default function Searchbar({ onSubmit, placeHolder }) {
  const [searchInput, setSearchInput] = useState('');
  const { pathname } = useLocation();

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
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          value={searchInput}
          type="search"
          autoComplete="on"
          autoFocus={pathname === '/movies'}
          placeholder={placeHolder}
          onChange={handlerChange}
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
