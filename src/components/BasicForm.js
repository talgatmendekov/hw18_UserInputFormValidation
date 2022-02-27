import useInput from "../hooks/UseInput";
import { VALID_EMAIL_REGEX, VALID_NAME_REGEX } from "../helpers/constants";

  const BasicForm = () => {

  const inputName = useInput(VALID_NAME_REGEX)
  const inputLastName = useInput(VALID_NAME_REGEX)
  const inputEmail = useInput(VALID_EMAIL_REGEX)
  
  let formIsValid = false;
  if (inputName.valueIsValid && inputLastName.valueIsValid && inputEmail.inputIsValid){
    formIsValid = true;
  }
 
  const formSubmitHandler = (event) => {
    event.preventDefault(event)
    inputName.onClear();
    inputLastName.onClear();
    inputEmail.onClear();
 
  };

  const fnameInputClasses = !inputName.valueIsInValid ? 'form-control' : 'form-control invalid'
  const lnameInputClasses = !inputLastName.valueIsInValid ? 'form-control' : 'form-control invalid'
  const emailInputClasses = !inputEmail.inputIsInValid ? 'form-control' : 'form-control invalid'
  return (
  
    <form onSubmit={formSubmitHandler}>
       <div className= 'control-group'>
        <div className= {fnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input name = 'fname' type='text' id='name' onBlur={inputName.onBlur} onChange={inputName.onChange} value = {inputName.inputValue}/>
          {inputName.valueIsInValid && <p>First Name must not be empty</p>}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input name= 'lname' type='text' id='name' onBlur={inputLastName.onBlur} onChange={inputLastName.onChange} value = {inputLastName.inputValue} />
          {inputLastName.valueIsInValid && <p>Last Name must not be empty </p>}
        </div>
        <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input name = 'email' type='text' id='name'onBlur={inputEmail.onBlur} onChange={inputEmail.onChange} value = {inputEmail.inputValue}/>
         {inputEmail.inputIsInValid && inputEmail.inputValue.length === 0 ? <p>Gmail must not be empty </p> : inputEmail.inputIsInValid ? <p>Gmail is not correct</p> : ''}
      </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
