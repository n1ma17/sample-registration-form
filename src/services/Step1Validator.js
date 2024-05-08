class Step1Validator {
  validate(data) {
    console.log("Validating step 1 data", data);
    if (!data.username) {
      return "Username is required.";
    }
    return null;
  }
}

export default Step1Validator;
