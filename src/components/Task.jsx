import style from "../assets/styles/Task.module.scss";

export default function Task() {
  return (
    <container className={style["task-container"]}>
      <header className={style["task-container__header"]}>
        <h5 className={style["task-container__header__title"]}>
          CRM system design
        </h5>
        <p
          className={`${style["task-container__header__status"]} ${style["task-container__header__status__low"]}`}
        >
          Medium
        </p>
      </header>
      <main className={style["task-container__content"]}>
        <dl>
          <dt>Participant:</dt>
          <dd>Azhar</dd>
          <dt>Date added:</dt>
          <dd>12/04/2021</dd>
        </dl>
      </main>
    </container>
  );
}
