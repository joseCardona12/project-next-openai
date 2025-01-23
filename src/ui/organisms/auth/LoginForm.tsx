"use client"
import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import { AuthService } from '@/app/infrastructure/services';
import { ILoginResponseError, ILoginResponseSuccess } from '@/app/core/application/dto';
import { useUserState } from '@/app/core/application/global-state';
import { inputAlert } from '@/ui/molecules';
import { useRouter } from 'next/navigation';
import { UtilApplication } from '@/app/core/application/utils';

const   LoginForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {setUser} = useUserState((state)=>state);


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userLogged :ILoginResponseError | ILoginResponseSuccess  = await AuthService.login({email, password});
    console.log("userLogged",userLogged);
    if("code" in userLogged){
      inputAlert(userLogged.message,"error");
      setLoading(false);
      return;
    }
    const {token,user} = userLogged as ILoginResponseSuccess;
    inputAlert(`${user.name}, Successfully logged`,"success");
    setUser({
      token,
      user
    });
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>
            WELCOME TO <span>SMART UI</span>
          </h2>
          <h1>LOGIN</h1>
        </div>
        <form onSubmit={handleLogin}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12A4 4 0 118 12a4 4 0 018 0zM12 14v6m4-6a4 4 0 11-8 0"
                />
              </svg>
            </span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c3.5 0 4.5 2 4.5 3.5 0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5c0-1.5 1-3.5 3.5-3.5zM8 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm10 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </span>
          </div>

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Cargando...' : 'SIGN IN'}
          </button>
        </form>
        <div className={styles.footer}>
          <p>
            DON&apos;T YOU HAVE AN ACCOUNT? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
