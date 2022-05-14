import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import style from "./AddLesson.module.scss";
import FifthStep from "./Steps/FifthStep";
import FirstStep from "./Steps/FirstStep";
import ForthStep from "./Steps/ForthStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";

const AddLesson = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const setNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const setPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = (lesson) => {
    props.addLesson(lesson)
    navigate("/", {replace: true})
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Добавить урок:</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        {currentStep === 1 ? (
          <FirstStep
            register={register}
            trigger={trigger}
            errors={errors}
            setNextStep={setNextStep}
            lessonBlocks={props.lessonBlocks}
          />
        ) : undefined}
        {currentStep === 2 ? (
          <SecondStep
            register={register}
            trigger={trigger}
            errors={errors}
            setNextStep={setNextStep}
            setPreviousStep={setPreviousStep}
          />
        ) : undefined}
        {currentStep === 3 ? (
          <ThirdStep
            register={register}
            trigger={trigger}
            errors={errors}
            setNextStep={setNextStep}
            setPreviousStep={setPreviousStep}
            lessonBlocks={props.lessonBlocks}
          />
        ) : undefined}
        {currentStep === 4 ? (
          <ForthStep
            register={register}
            trigger={trigger}
            errors={errors}
            setNextStep={setNextStep}
            setPreviousStep={setPreviousStep}
            lessonBlocks={props.lessonBlocks}
          />
        ) : undefined}
        {currentStep === 5 ? (
          <FifthStep
            register={register}
            trigger={trigger}
            errors={errors}
            setNextStep={setNextStep}
            setPreviousStep={setPreviousStep}
            lessonBlocks={props.lessonBlocks}
          />
        ) : undefined}
      </form>
    </div>
  );
};

export default AddLesson;
