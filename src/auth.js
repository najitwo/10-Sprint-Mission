import { VALIDATION_MESSAGE, checkEmailValid } from "./utils/utils.js";

const showMessage = (message, messageElement, inputElement) => {
  messageElement.textContent = message;
  messageElement.style.display = "inline-block";
  inputElement.parentNode.classList.add("validation-focus");
};

const hideMessage = (messageElement, inputElement) => {
  messageElement.style.display = "none";
  inputElement.parentNode.classList.remove("validation-focus");
};

const checkFormComplete = () => {
  const existValidation = document.querySelector(".validation-focus");
  const fields = [...document.querySelectorAll("input")];
  const allCompleted = fields.every((field) => field.value.trim() !== "");

  return allCompleted && !existValidation;
};

const toggleButtonActive = () => {
  const $submitButton = document.querySelector(".auth-form > button");

  if (checkFormComplete()) {
    $submitButton.classList.add("active");
    $submitButton.disabled = false;
    return;
  }

  $submitButton.classList.remove("active");
  $submitButton.disabled = true;
};

export const togglePasswordVisibility = (event) => {
  const $passwordInput = event.target.parentNode.querySelector("input");

  if (event.target.classList.contains("show")) {
    event.target.classList.remove("show");
    $passwordInput.type = "password";
    return;
  }

  event.target.classList.add("show");
  $passwordInput.type = "text";
};

const checkEmailValidation = ({ value }) => {
  if (!value.trim()) {
    return {
      isError: true,
      message: VALIDATION_MESSAGE.REQUIRED_EMAIL,
    };
  }

  if (!checkEmailValid(value)) {
    return {
      isError: true,
      message: VALIDATION_MESSAGE.INVALID_EMAIL,
    };
  }

  return { isError: false };
};

export const validateEmail = (inputElement, messageElement) => {
  const { isError, message } = checkEmailValidation(inputElement);

  if (isError) {
    showMessage(message, messageElement, inputElement);
    toggleButtonActive();
    return;
  }

  hideMessage(messageElement, inputElement);
  toggleButtonActive();
};

const checkPasswordValidation = ({ value }) => {
  if (!value) {
    return {
      isError: true,
      message: VALIDATION_MESSAGE.REQUIRED_PASSWORD,
    };
  }

  if (value.length < 8) {
    return {
      isError: true,
      message: VALIDATION_MESSAGE.WEEK_PASSWORD,
    };
  }

  return { isError: false };
};

export const validatePassword = (inputElement, messageElement) => {
  const { isError, message } = checkPasswordValidation(inputElement);

  if (isError) {
    showMessage(message, messageElement, inputElement);
    toggleButtonActive();
    return;
  }

  hideMessage(messageElement, inputElement);
  toggleButtonActive();
};

const checkNicknameValidation = ({ value }) => {
  if (!value.trim()) {
    return {
      isError: true,
      message: VALIDATION_MESSAGE.REQUIRED_NICKNAME,
    };
  }

  return { isError: false };
};

export const validateNickname = (inputElement, messageElement) => {
  const { isError, message } = checkNicknameValidation(inputElement);

  if (isError) {
    showMessage(message, messageElement, inputElement);
    toggleButtonActive();
    return;
  }

  hideMessage(messageElement, inputElement);
  toggleButtonActive();
};

const checkPasswordConfirmValidation = ({ value }, confirmPassword) => {
  if (value !== confirmPassword) {
    return {
      isError: true,
      message: VALIDATION_MESSAGE.MISMATCHED_PASSWORD,
    };
  }

  return { isError: false };
};

export const validatePasswordConfirm = (
  inputElement,
  messageElement,
  confirmPassword
) => {
  const { isError, message } = checkPasswordConfirmValidation(
    inputElement,
    confirmPassword
  );

  if (isError) {
    showMessage(message, messageElement, inputElement);
    toggleButtonActive();
    return;
  }

  hideMessage(messageElement, inputElement);
  toggleButtonActive();
};

export const handleSubmitButton = (event, url) => {
  event.preventDefault();
  location.href = url;
};
