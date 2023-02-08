import s from './Buttons.module.css';
export default function ButtonBack({ onBackClick, location }) {
  return (
    <button className={s.btn_back} type="button" onClick={onBackClick}>
      {location?.state?.from?.label ?? 'Go back'}
    </button>
  );
}
