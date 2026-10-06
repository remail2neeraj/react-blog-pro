export const validateUserForm = (formData) => {
  if (!formData.name.trim()) {
    return "Name is required";
  }

  if (!formData.email.trim()) {
    return "Email is required";
  }

  return "";
};