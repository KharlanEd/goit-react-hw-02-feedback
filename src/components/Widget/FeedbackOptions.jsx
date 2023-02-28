import css from '../Widget/interface.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    if (options.length === 0) return null;
    
    return (<div className={css.container_btn}>
        {options.map(option => {
            return (<button  key={option} className={css.btn} type="button"  onClick={() => { onLeaveFeedback(option); }} >{option}</button>)
        })}
    </div>)
    
}