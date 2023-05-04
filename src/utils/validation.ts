export default function validate(email, password) {
  let isError = false;
  let errorMessage = "";

  if (email === "" || password === "") {
    isError = true;
    errorMessage = "No email address or password";
  } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
    isError = true;
    errorMessage = "Email is not valid";
  }

  return {
    isError,
    errorMessage,
  };
}
