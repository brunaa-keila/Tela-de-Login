import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para validar as credenciais
    if (username === 'usuario' && password === 'senha') {
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="container">
      <h1>Tela de Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default App;
