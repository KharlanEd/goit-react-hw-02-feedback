import css from '../Widget/interface.module.css'

export const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
}
