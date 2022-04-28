import React from "react";
import style from "./Admin.module.scss";
import AdminLessonBlock from "./AdminLessonBlock";

const Admin = (props) => {
  const lessonBlockList = props.lessonBlock.lessonBlocks.map(block => {
    return <AdminLessonBlock key={block.id} block={block} />
  })

  return (
    <div className={style.body}>
      {lessonBlockList}
    </div>
  )
}

export default Admin;