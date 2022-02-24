import { useState } from "react";

const BasicForm = () => {
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false)
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  const [inputValue, setInputValue] = useState({
    fname: '',
    lname: '',
    email: '',
  });
  
  const VALID_EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  const enteredNameIsValid = inputValue.fname.trim() !==''
  const enteredLastNameIsValid = inputValue.lname.trim() !==''
  const enteredEmailIsValid = inputValue.email.trim() !=='' && VALID_EMAIL_REGEX.test(inputValue.email)
  const lnameInputIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched;
  const fnamenameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
      formIsValid = true
  }else {
    formIsValid = false
  }
  
  
  const inputChangeHandler = (event) => {
    const currentInput = event.target.name
    setInputValue((prevState) => {
      return {
        ...prevState,
        [currentInput] : event.target.value,
      }
    })
   
  };

  const fnameBlurHandler = () => {
      setEnteredNameTouched(true)
  };
  const lnameBlurHandler = () => {
      setEnteredLastNameTouched(true)
  };
  const emailBlurHandler = () => {
      setEnteredEmailTouched(true)
  };
  
  const formSubmitHandler = (event) => {
    
    event.preventDefault(event)
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredLastNameTouched(true)
    if (!enteredNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid) {
      return
    }
    setInputValue((prevState) => {
      return {
        ...prevState,
        fname: '',
        lname: '',
        email: '',
      }
    })
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    setEnteredLastNameTouched(false)
  };

 
  const fnameInputClasses = !fnamenameInputIsInvalid ? 'form-control' : 'form-control invalid'
  const lnameInputClasses = !lnameInputIsInvalid ? 'form-control' : 'form-control invalid'
  const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid'
  return (
  
    
    <form onSubmit={formSubmitHandler}>
      
      <div className= 'control-group'>
        <div className= {fnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input name = 'fname' type='text' id='name' onBlur={fnameBlurHandler} onChange={inputChangeHandler} value = {inputValue['fname']}/>
          {fnamenameInputIsInvalid && <p>First Name must not be empty</p>}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input name= 'lname' type='text' id='name' onBlur={lnameBlurHandler} onChange={inputChangeHandler} value = {inputValue['lname']} />
          {lnameInputIsInvalid && <p>Last Name must not be empty </p>}
        </div>
        <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input name = 'email' type='text' id='name'onBlur={emailBlurHandler} onChange={inputChangeHandler} value = {inputValue['email']}/>
         {emailInputIsInvalid && inputValue.email.length === 0 ? <p>Gmail must not be empty </p> : emailInputIsInvalid ? <p>Gmail is not correct</p> : ''}
      </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
