function addDateBirth() {
  const dateBirth = document.getElementById('date-birth');
  const age = document.getElementById('age');
  const date = new Date();
  const year = date.getFullYear();

  dateBirth.addEventListener('focusout', () => {
    var [yearBirth, mouthBirth, dayBirth] = dateBirth.value
      .split('-')
      .map(Number);

    ageCurrent = year - yearBirth;

    if (yearBirth !== 0) {
      age.value = ageCurrent;
    }
  });
}

addDateBirth();
