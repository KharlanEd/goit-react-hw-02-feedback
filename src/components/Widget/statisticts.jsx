import css from '../Widget/interface.module.css'

export const Statistics = ({ good, neutral, bad, total, average }) => {
    const rating = average() <= 50 ? 'red' : 'green'
    return (<div>
        
       <ul>
        <li className={css.statictics_text}>Good: { good}</li>
            
        <li className={css.statictics_text}>Neutral: {neutral }</li>
            
        <li className={css.statictics_text}>Bad: { bad}</li>
            
        <li className={css.statictics_text}>Total:{total()} </li>
            
        <li style={{color:rating}} className={css.statictics_text}>Positiv Feedback:{average()}%</li>
       </ul>
    </div>)
}