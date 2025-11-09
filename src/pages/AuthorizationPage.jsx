import style from "../assets/styles/Auth.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Authorization = () => {
  const { authorization } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={style["main"]}>
      <section className={style["main_form-container"]}>
        <h1>Authorization</h1>
        <p>Choose one of the option to go</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            authorization(email, password);
          }}
          className={style["main_form-container_form"]}
          action=""
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            name="password"
            placeholder="Password"
          />
          <div className={style["main_form-container_form_another-way"]}>
            <div className={style["main_form-container_form_another-way_line"]}>
              <hr />
              <p>Or continue with</p>
              <hr />
            </div>
            <div
              className={
                style["main_form-container_form_another-way_button-group"]
              }
            >
              <button>
                <i className="bxl  bx-google"></i>
              </button>
              <button>
                <i className="bxl  bx-github"></i>
              </button>
              <button>
                <i className="bxl  bx-telegram"></i>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={style["main_form-container_form_submit-button"]}
          >
            Sign In
          </button>
        </form>
        <div className={style["main_form-container_change-account"]}>
          <p>Don't have account?</p> <Link to="/registration">Sign In</Link>
        </div>
      </section>
    </main>
  );
};

export default Authorization;
