import   {useState} from 'react';

const useInput = (REGEX) => {
    const [inputValue, setInputValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false)

    const valueIsValid = inputValue.trim() !== '';
    const valueIsInValid = !valueIsValid && inputTouched;
    const inputIsValid= REGEX.test(inputValue.trim());
    const inputIsInValid = !inputIsValid && inputTouched;

    return {
        inputIsValid,
        inputIsInValid,
        inputValue,
        valueIsInValid,
        valueIsValid,
        onChange: (e) =>  setInputValue(e.target.value),
        onBlur: () => setInputTouched(true),
        onClear: () =>{
            setInputValue('')
            setInputTouched(false)
        } 
    }
};

export default useInput;