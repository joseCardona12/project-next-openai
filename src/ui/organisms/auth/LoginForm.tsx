"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { AuthService } from "@/app/infrastructure/services";
import {
  ILoginResponseError,
  ILoginResponseSuccess,
} from "@/app/core/application/dto";
import { useUserState } from "@/app/core/application/global-state";
import { inputAlert } from "@/ui/molecules";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const { setUser } = useUserState((state) => state);

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const userLogged: ILoginResponseError | ILoginResponseSuccess =
      await AuthService.login({ email, password });
    console.log("userLogged", userLogged);
    if ("code" in userLogged) {
      inputAlert(userLogged.message, "error");
      setLoading(false);
      return;
    }
    const { token, user } = userLogged as ILoginResponseSuccess;
    inputAlert(`${user.name}, Successfully logged`, "success");
    setUser({
      token,
      user,
    });
    setLoading(false);
    router.push("/firstHome");
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
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className={styles.inputGroup}>
            <input
              type="text"
              id="name"
              placeholder="Email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? "Cargando..." : "SIGN IN"}
          </button>
          <a href="/firstHome" className={styles.registerLink}>
            Back home
          </a>
        </form>
        <div className={styles.footer}>
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
