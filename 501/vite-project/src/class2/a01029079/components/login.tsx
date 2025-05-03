// Login.tsx
import React, { useState } from 'react';
import Button from './button';
import Input from './input';

const allowedUsers = [
  { email: 'admin', password: 'admin' },
];

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = allowedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log('Login exitoso:', user.email);
      window.location.href = '/dashboard';
    } else {
      setError('Correo o contraseña inválidos');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Iniciar Sesión</h2>
        <div className="input-group">
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="btn-group">
          <Button text="Entrar" onClick={() => handleSubmit} type="submit" />
        </div>
        <div>
        <a href="../../../../../src/class3/a01029079/public/menu1.html" className='btn'> Return </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;