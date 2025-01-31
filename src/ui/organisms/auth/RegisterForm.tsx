"use client";
import React, { useState } from "react";
import styles from "./RegisterForm.module.scss";
import { AuthService } from "@/app/infrastructure/services";
import { useRouter } from "next/navigation";
import { inputAlert } from "@/ui/molecules";

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}
const RegisterForm: React.FC = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [registerData, setRegisterData] = useState<IRegisterForm>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const userRegistered = await AuthService.register({
      ...registerData,
      gender_id: 1,
    });
    console.log(userRegistered);
    if ("code" in userRegistered) {
      inputAlert("User exists!", "error");
      setLoading(false);
      return;
    }
    inputAlert("Created user successfully", "success");
    router.push("/login");
    setLoading(false);
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>
            WELCOME TO <span>SMART UI</span>
          </h2>
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleRegister}>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className={styles.inputGroup}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              required
            />
            <span
              className={styles.icon}
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
          </div>

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Cargando..." : "REGISTER"}
          </button>
        </form>
        <div className={styles.footer}>
          <p>
            Have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
