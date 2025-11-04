import style from "../assets/styles/Auth.module.scss";
import { Link } from "react-router-dom";

const Authorization = () => {
  return (
    <main className={style["main"]}>
      <section className={style["main_form-container"]}>
        <h1>Authorization</h1>
        <p>Choose one of the option to go</p>
        <form className={style["main_form-container_form"]} action="">
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
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
          <button className={style["main_form-container_form_submit-button"]}>
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
