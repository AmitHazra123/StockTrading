const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMt300Input(data) {
  let errors = {};
  data.tag = !isEmpty(data.tag) ? data.tag : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.matched = !isEmpty(data.matched) ? data.matched : "";
  data.clientconf = !isEmpty(data.clientconf) ? data.clientconf : "";

  if (Validator.isEmpty(data.tag)) {
    errors.tag = "Tag can't be empty";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (Validator.isEmpty(data.matched)) {
    errors.matched = "Matched or not status is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
