export const VALIDATION_MESSAGE = {
  REQUIRED_EMAIL: "이메일을 입력해주세요",
  INVALID_EMAIL: "잘못된 이메일 형식입니다.",
  REQUIRED_PASSWORD: "비밀번호를 입력해주세요.",
  WEEK_PASSWORD: "비밀번호를 8자 이상 입력해주세요.",
  MISMATCHED_PASSWORD: "비밀번호가 일치하지 않습니다.",
  REQUIRED_NICKNAME: "닉네임을 입력해주세요.",
};

export const checkEmailValid = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
