import PropTypes from 'prop-types'
import { useState } from 'react'
import s from './Searchbar.module.css'


 

export default function Searchbar ({ onSubmit }) {
    
    const [searchInput, setSearchInput] = useState("");
    
    
    const handlerChange = (e) => {
        setSearchInput(e.target.value)
    };

   const handleSubmit = (e) => {
        
        e.preventDefault()
        if (searchInput.trim() === "") {
            alert('Input something!')
            return              
        }
       onSubmit(searchInput);
       setSearchInput('');
    }

    

        return(
          <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={handleSubmit}>
              <button type="submit" className={s.SearchFormButton}>
                <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
    
        <input
                className={s.SearchFormInput}
          value={searchInput}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies & TV-shows"
          onChange={handlerChange}
        />
      </form>
    </header>
        )
        
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}