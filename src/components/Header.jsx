import style from "../assets/styles/Header.module.scss";
import ProfileImage from "../assets/images/profile.jpeg";

export default function Header() {
  return (
    <header className={style.header}>
      <form className={style.form} action="">
        <button>
          <i class="bxr  bx-search"></i>{" "}
        </button>
        <input type="text" placeholder="Search.." />
      </form>
      <div className={style["header-actions"]}>
        <button>
          <i class="bxr  bx-bell"></i> <span></span>
        </button>
        <button>
          <i class="bxr  bx-message-bubble-reply"></i> <span></span>
        </button>
      </div>
      <div className={style["header-user"]}>
        <div>
          <img src={ProfileImage} alt="Profile image" />
        </div>
        <p>Mihail</p>
        <button>
          <i class="bxr  bx-chevron-down"></i>
        </button>
      </div>
    </header>
  );
}
