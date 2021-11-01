import s from './Buttons.module.css'
export default function LoadMoreBtn({ handleClickBM }) {
    return (
        <button className={s.ButtonMore} type="button" id='more' onClick={handleClickBM}>
                  load more
              </button>
    )
};
