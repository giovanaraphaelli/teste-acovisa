const fillForm = (address) => {
  document.getElementById('address').value = address.logradouro;
  document.getElementById('address-b').value = address.bairro;
  document.getElementById('address-c').value = address.localidade;
  document.getElementById('address-e').value = address.uf;
};

document.getElementById('cep').addEventListener('focusout', async () => {
  const cep = document.getElementById('cep').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  const data = await fetch(url);
  const address = await data.json();
  if (address.hasOwnProperty('erro')) {
    document.getElementById('address').placeholder = 'CEP não encontrado!';
  } else {
    fillForm(address);
  }
  s;
});
