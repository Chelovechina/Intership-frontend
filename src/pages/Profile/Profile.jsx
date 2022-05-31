import React from "react";
import avatar from "./../../assets/img/avatar.jpg";
import style from "./Profile.module.scss";

const Profile = ({ user }) => {
  return (
    <div>
      <h1 className={style.title}>Личный кабинет</h1>
      <div className={style.wrapper}>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Личные данные:</h2>
          <div className={style.block}>
            <div className={style.avatarBlock}>
              <img
                src={avatar}
                alt="Lastname Name"
                className={style.avatarImg}
              />
              <h4 className={style.name}>Lastname Name</h4>
              <h5 className={style.status}>Student</h5>
            </div>
            <div className={style.info}>
              <div className={style.infoWrapper}>
                <div className={style.infoLeft}>
                  <p className={style.key}>Пол:</p>
                  <p className={style.value}>XXX</p>
                  <p className={style.key}>Дата рождения:</p>
                  <p className={style.value}>XX.XX.XXXXг.</p>
                  <p className={style.key}>Email:</p>
                  <p className={style.value}>XXX@gmail.com</p>
                  <p className={style.key}>Номер телефона:</p>
                  <p className={style.value}>+996000000000</p>
                </div>
                <div className={style.infoRight}>
                  <p className={style.key}>Страна:</p>
                  <p className={style.value}>XXX</p>
                  <p className={style.key}>Город:</p>
                  <p className={style.value}>XXX</p>
                  <p className={style.key}>Адрес:</p>
                  <p className={style.value}>XXX</p>
                  <p className={style.key}>Дата регистрации:</p>
                  <p className={style.value}>XX.XX.XXXXг.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Курсы:</h2>
          <div className={style.info}>
            <h5 className={style.infoTitle}>Python - разработчик</h5>
            <div className={style.infoWrapper}>
              <div className={style.infoLeft}>
                <p className={style.key}>ID:</p>
                <p className={style.value}>1</p>
                <p className={style.key}>Дата записи:</p>
                <p className={style.value}>XX.XX.XXXXг.</p>
              </div>
              <div className={style.infoRight}>
                <p className={style.key}>Прогресс:</p>
                <p className={style.value}>XX%</p>
                <p className={style.key}>Выполненные практики:</p>
                <p className={style.value}>XX/XX</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
