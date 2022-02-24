import {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const nameinputRef = useRef(null)
  // const [formIsValid, setFormIsValid] = useState(false)

  const enteredNameIsValid = enteredName.trim() !==''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  let formIsValid = false

  if (enteredNameIsValid) {
      formIsValid = true
  }else {
      formIsValid = false
  }

  // useEffect(() => {
    // if (enteredNameIsValid) {
  //     setFormIsValid(true)
  //   }else {
  //     setFormIsValid(false)
  //   }
  // }, [enteredNameIsValid])

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
    
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
   
  };

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true);
     if(!enteredNameIsValid) return;
      setEnteredName('')
      setEnteredNameTouched(false)
  };

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-contol invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} /* ref = {nameinputRef} */ value={enteredName}/>
        {nameInputIsInvalid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
