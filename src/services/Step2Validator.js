class Step2Validator {
  validate(data) {
    if (!data.email) {
      return "Email is required.";
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return "Invalid email format.";
    }
    return null; // Return null when validation passes
  }
}

export default Step2Validator;
