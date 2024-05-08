class ValidationService {
  constructor() {
    this.validators = {};
  }

  registerValidator(step, validator) {
    this.validators[step] = validator;
  }

  validate(step, data) {
    const validator = this.validators[step];
    if (!validator) {
      throw new Error(`Validator for step ${step} not found.`);
    }
    return validator.validate(data);
  }
}

export default new ValidationService();
