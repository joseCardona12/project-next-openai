"use client"
import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import { AuthService } from '@/app/infrastructure/services';
import { useRouter } from 'next/navigation';
import { inputAlert } from '@/ui/molecules';

interface IRegisterForm {
  name:string,
  email:string,
  password:string,
}
const RegisterForm: React.FC = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState<IRegisterForm>({
    name:'',
    email:'',
    password:''
  });
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent):Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userRegistered = await AuthService.register({
      ...registerData,
      gender_id: 1,
    });
    console.log(userRegistered);
    if("code" in userRegistered){
      inputAlert("User exists!","error");
      setLoading(false);
      return;
    }
    inputAlert("Created user successfully","success");
    router.push('/login');
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>
            WELCOME TO <span>SMART UI</span>
          </h2>
          <h1>REGISTER</h1>
        </div>
        <form onSubmit={handleRegister}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
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
              type="email"
              id="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
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
                  d="M16 12A4 4 0 118 12a4 4 0 018 0zM2 6l10 7L22 6"
                />
              </svg>
            </span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
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
            {loading ? 'Cargando...' : 'REGISTER'}
          </button>
        </form>
        <div className={styles.footer}>
          <p>
            DO I ALREADY HAVE AN ACCOUNT? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
