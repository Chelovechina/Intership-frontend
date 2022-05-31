import React from 'react';

const ProfileSection = ({title}) => {
  return (
    <section class={style.section}>
      <h2 class={style.sectionTitle}>{title}</h2>
      <div class={style.block}>
        <div className={style.avatarBlock}>
          <img src={avatar} alt="Lastname Name" class={style.avatarImg} />
          <h4 class={style.name}>Lastname Name</h4>
          <h5 class={style.status}>Student</h5>
        </div>
        <div class={style.info}>
          <div class={style.infoLeft}>
            <p class={style.key}>Пол:</p>
            <p class={style.value}>XXX</p>
            <p class={style.key}>Дата рождения:</p>
            <p class={style.value}>XX.XX.XXXXг.</p>
            <p class={style.key}>Email:</p>
            <p class={style.value}>XXX@gmail.com</p>
            <p class={style.key}>Номер телефона:</p>
            <p class={style.value}>+996000000000</p>
          </div>
          <div class={style.infoRight}>
            <p class={style.key}>Страна:</p>
            <p class={style.value}>XXX</p>
            <p class={style.key}>Город:</p>
            <p class={style.value}>XXX</p>
            <p class={style.key}>Адрес:</p>
            <p class={style.value}>XXX</p>
            <p class={style.key}>Дата регистрации:</p>
            <p class={style.value}>XX.XX.XXXXг.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
