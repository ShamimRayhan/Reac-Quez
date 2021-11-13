import classes from '../styles/Answers.module.css'
import Checkbox from './Checkbox'

export default function Quiz() {
  return (
    <div className={classes.answers}>
      <Checkbox text='Test Answers' />
    </div>
  )
}
