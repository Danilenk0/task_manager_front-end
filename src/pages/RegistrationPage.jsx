import style from "../assets/styles/Auth.module.scss";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  const { registration } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <main className={style["main"]}>
      <section className={style["main__form-container"]}>
        <h1>Registration</h1>
        <p>Choose one of the option to go</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registration(name, email, password);
          }}
          className={style["main__form-container__form"]}
          action=""
        >
          <div className={style["main__form-container__form__form-group"]}>
            {" "}
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              placeholder="Fullname"
            />
          </div>

          <div className={style["main__form-container__form__form-group"]}>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className={style["main__form-container__form__form-group"]}>
            {" "}
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={`${isShowPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
            />
            <i
              onClick={() => {
                setIsShowPassword((prev) => !prev);
              }}
              className={`bx  bx-eye${isShowPassword ? "-slash" : ""}`}
            ></i>
          </div>

          <div className={style["main__form-container__form__another-way"]}>
            <div
              className={style["main__form-container__form__another-way__line"]}
            >
              <hr />
              <p>Or continue with</p>
              <hr />
            </div>
            <div
              className={
                style["main__form-container__form__another-way__button-group"]
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
            className={style["main__form-container__form__submit-button"]}
          >
            Sign up
          </button>
        </form>
        <div className={style["main__form-container__change-account"]}>
          <p>Have an account?</p> <Link to="/authorization">Sign Up</Link>
        </div>
      </section>
    </main>
  );
};

export default Registration;
