import style from "../assets/styles/Header.module.scss";
import ProfileImage from "../assets/images/profile.jpeg";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const [isOpened, setIsOpened] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
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
          <div ref={userMenuRef} className={style["header-user"]}>
            <div className={style["header-user__img-container"]}>
              <img src={ProfileImage} alt="Profile image" />
            </div>
            <p className={style["header-user__name"]}>Mihail</p>
            <button
              onClick={() => {
                setIsOpened(!isOpened);
              }}
              className={style["header-user__show-menu"]}
            >
              <i className="bxr  bx-chevron-down"></i>
            </button>

            <div
              className={`${style["header-user__dropdown"]} ${
                isOpened ? style["header-user__dropdown-show"] : ""
              }`}
            >
              <ul className={style["header-user__dropdown__list"]}>
                <li>
                  <i className="bxrd  bx-user"></i> <p>Profile</p>
                </li>
                <li
                  onClick={() => {
                    logout();
                  }}
                >
                  <i class="bxrd  bx-door-open"></i>
                  <p>Log out</p>
                </li>
              </ul>
            </div>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}
