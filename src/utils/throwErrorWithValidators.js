const throwErrorWithValidators = (value, validators) => {
  [...validators].forEach((validator) => {
    validator(value);
  });
};

export default throwErrorWithValidators;
