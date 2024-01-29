const nameRegex = /^[a-zA-Z\s]+$/;
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
const dateOfBirthRegex =
  /^(?!0000)[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

export const validateName = (name, errors) => {
  if (!name) {
    errors.name = "Field Required";
  } else if (!name.match(nameRegex)) {
    errors.name = "Name must be a string";
  } else if (name.length > 20) {
    errors.name = "Max name length: 20 characters";
  } else {
    errors.name = "";
  }
};

export const validateSurName = (surname, errors) => {
  if (!surname) {
    errors.surname = "Field Required";
  } else if (!surname.match(nameRegex)) {
    errors.surname = "Surname must be a string";
  } else if (surname.length > 20) {
    errors.surname = "Max Surname length: 20 characters";
  } else {
    errors.surname = "";
  }
};

export const validateImage = (image, errors) => {
  if (!image) {
    errors.image = "Field Required";
  } else if (!image.match(urlRegex)) {
    errors.image = "Invalid URL image format";
  } else {
    errors.image = "";
  }
};

export const validateNationality = (nationality, errors) => {
  if (!nationality) {
    errors.nationality = "Field Required";
  } else if (!nationality.match(nameRegex)) {
    errors.nationality = "Nationality must be a string(Country)";
  } else if (nationality.length > 20) {
    errors.nationality = "Max Nationality length: 20 characters";
  } else {
    errors.nationality = "";
  }
};

export const validateDateOfBirth = (dateOfBirth, errors) => {
  if (!dateOfBirth) {
    errors.dateOfBirth = "Field Required";
  } else if (!dateOfBirth.match(dateOfBirthRegex)) {
    errors.dateOfBirth = "Incorrect Format: YEAR-MONTH-DAY";
  } else if (dateOfBirth <= "1899-12-31") {
    errors.dateOfBirth = "Date exceds Age: no register";
  } else if (dateOfBirth > "2005-12-31") {
    errors.dateOfBirth = "Date exceds Age: too young";
  } else {
    errors.dateOfBirth = "";
  }
};

export const validateDescription = (description, errors) => {
  if (description.length > 700) {
    errors.description = "Max Description length: 200 characters";
  } else {
    errors.description = "";
  }
};

export const validateTeams = (teams, errors) => {
  if (!teams) {
    errors.teams = "Select or Add at least one Team";
  } else {
    errors.teams = "";
  }
};
