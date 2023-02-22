import axios from 'axios';

const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const university = document.querySelector('#university').value;
  const email = document.querySelector('#email').value;

  
  axios.post('/api/signup', {
    name: name,
    university: university,
    email: email,
  })
  .then((response) => { // 성공
    console.log(response);
    window.location.href = './join02.html';
    // 데베에 단순 데이터 저장?
  })
  .catch((error) => { // 실패
    console.error(error);
    alert('Failed!');
  });
});