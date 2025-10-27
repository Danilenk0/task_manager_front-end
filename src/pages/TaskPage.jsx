import style from "../assets/styles/TaskPage.module.scss";
import Task from "../components/Task.jsx";
export default function TaskPage() {
  return (
    <div className={style.container}>
      <h1 className={style["project-name"]}>Creating task manager</h1>
      <section className={style["project-info"]}>
        <dl
          className={`${style["project-info__deadlines"]} ${style["project-info__card"]}`}
        >
          <dt>Date added:</dt>
          <dd>12/04/2021</dd>

          <dt>Deadline:</dt>
          <dd>21/04/2021</dd>

          <dt>Participants:</dt>
          <dd>Adyl, Azhar, Arthur</dd>
        </dl>
        <div
          className={`${style["project-info__description"]} ${style["project-info__card"]}`}
        >
          <p>
            A manager for internal use, designed for statistics accounting and
            task tracking.
          </p>
        </div>
        <dl
          className={`${style["project-info__task-counter"]} ${style["project-info__card"]}`}
        >
          <dt>All tasks:</dt>
          <dd>6</dd>
          <dt>Done:</dt>
          <dd>0</dd>
          <dt>Frozen:</dt>
          <dd>1</dd>
        </dl>
      </section>
      <section className={style["project-statusbar-container"]}>
        <div className={style["project-statusbar"]}>
          <div className={style["project-statusbar__header"]}>
            <h4>To do</h4>
            <button>
              <i className="bxr  bx-plus"></i>{" "}
            </button>
          </div>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <div className={style["project-statusbar"]}>
          <div className={style["project-statusbar__header"]}>
            <h4>In progress</h4>
          </div>
          <Task />
        </div>
        <div className={style["project-statusbar"]}>
          <div className={style["project-statusbar__header"]}>
            <h4>Closed</h4>
          </div>
        </div>
        <div className={style["project-statusbar"]}>
          <div className={style["project-statusbar__header"]}>
            <h4>Frozen</h4>
          </div>
          <Task />
          <Task />
        </div>
      </section>
    </div>
  );
}
