function addAge() {
  const clearAge = () => {
    document.getElementById('age').value = '';
  };

  document.getElementById('date-birth').addEventListener('focusout', () => {
    clearAge();
    const dateBirth = document.getElementById('date-birth').value;
    const [yearBirth, mouthBirth, dayBirth] = dateBirth.split('-').map(Number);
    const date = new Date();
    const year = date.getFullYear();

    const ageCurrent = year - yearBirth;

    if (yearBirth !== 0) {
      document.getElementById('age').value = ageCurrent;
    }
  });
}

addAge();
