export const handleFormChange = (setFormInfo) => (e) => {
  const { name, value } = e.target;
  setFormInfo((prevFormInfo) => ({
    ...prevFormInfo,
    [name]: value,
  }));
};
