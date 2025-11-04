import style from "../assets/styles/Header.module.scss";
import ProfileImage from "../assets/images/profile.jpeg";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  return (
    <>
      {" "}
      {isAuthenticated ? (
        <header className={style.header}>
          <form className={style.form} action="">
            <button className={style["form__submit-btn"]}>
              <i className="bxr  bx-search"></i>{" "}
            </button>
            <input
              className={style["form__search-input"]}
              type="text"
              placeholder="Search.."
            />
          </form>
          <div className={style["header-actions"]}>
            <button className={style["header-actions__btn"]}>
              <i className="bxr  bx-bell"></i> <span></span>
            </button>
            <button className={style["header-actions__btn"]}>
              <i className="bxr  bx-message-bubble-reply"></i> <span></span>
            </button>
          </div>
          <div className={style["header-user"]}>
            <div className={style["header-user__img-container"]}>
              <img src={ProfileImage} alt="Profile image" />
            </div>
            <p className={style["header-user__name"]}>Mihail</p>
            <button className={style["header-user__show-menu"]}>
              <i className="bxr  bx-chevron-down"></i>
            </button>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
