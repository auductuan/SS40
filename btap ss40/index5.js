document.getElementById('text').addEventListener('submit', function(event) {
    event.preventDefault(); 
   let username = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let user = {
      username: username,
      email: email,
      password: password
    };
   let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('text').reset();
    alert('Đăng ký người dùng thành công!');
  });
  