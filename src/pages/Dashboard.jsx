import style from "../assets/styles/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={style["main"]}>
      <div className={style["list-container"]}>
        <div className={style["list-container__header"]}>
          <h2 className={style["list-container__header__list-name"]}>
            Projects
          </h2>
          <div className={style["list-container__header__button-group"]}>
            <button
              className={`${style["list-container__header__button-group__export-btn"]} ${style["list-container__header__button-group__btn"]}`}
            >
              <i class="bxrd  bx-file-plus"></i>
              <p>Export</p>
            </button>
            <button
              className={`${style["list-container__header__button-group__add-btn"]} ${style["list-container__header__button-group__btn"]}`}
            >
              <i class="bxrd  bx-plus"></i>
            </button>
          </div>
        </div>
        <ul className={style["list-container__list"]}>
          <li className={style["list-container__list__item"]}>
            <h3>ОсОО “Energi.kg”</h3>{" "}
            <span>
              <i className="bxrd  bx-calendar-down-arrow"></i>
              <p>12/04/2021</p>
            </span>{" "}
            <span>
              <i className="bxrd  bx-calendar-alt-2"></i>
              <p>12/04/2021</p>
            </span>
            <span>
              <i className="bxrd  bx-people-diversity"></i>
              <p>Adyl, Azhar, Arthur</p>
            </span>
          </li>
          <li className={style["list-container__list__item"]}>
            <h3>ОсОО “Energi.kg”</h3>{" "}
            <span>
              <i className="bxrd  bx-calendar-down-arrow"></i>
              <p>12/04/2021</p>
            </span>{" "}
            <span>
              <i className="bxrd  bx-calendar-alt-2"></i>
              <p>12/04/2021</p>
            </span>
            <span>
              <i className="bxrd  bx-people-diversity"></i>
              <p>Adyl, Azhar, Arthur</p>
            </span>
          </li>
          <li className={style["list-container__list__item"]}>
            <h3>ОсОО “Energi.kg”</h3>{" "}
            <span>
              <i className="bxrd  bx-calendar-down-arrow"></i>
              <p>12/04/2021</p>
            </span>{" "}
            <span>
              <i className="bxrd  bx-calendar-alt-2"></i>
              <p>12/04/2021</p>
            </span>
            <span>
              <i className="bxrd  bx-people-diversity"></i>
              <p>Adyl, Azhar, Arthur</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
