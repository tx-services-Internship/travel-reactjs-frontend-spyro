import style from "./Form.module.css";
import ButtonForm from "../UI/Button";
import { Fragment, useState } from "react";
import Personal from "../components/Personal";
import TravelInfo from "../components/TravelInfo";
import TripInfo from "../components/TripInfo";

function Form() {
  const [formData, setFormData] = useState({});

  function handlerState(data: any) {
    setFormData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  }
  function onSubmitHandler(event: any) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <Fragment>
      <div className={style.divLogo}>
        <img className={style.logo} src="tx-logo-transformed.webp" alt="TX" />
      </div>
      <form className={style.form} onSubmit={onSubmitHandler}>
        <Personal onSavePersonalData={handlerState} />
        <TravelInfo onSaveTravelInfoData={handlerState} />
        <TripInfo onSaveTripInfoData={handlerState} />
        <ButtonForm
          style={{ translate: "100rem 14rem" }}
          name="Reset"
        ></ButtonForm>
        <ButtonForm
          style={{ translate: "100rem 8rem" }}
          name="Go to Home"
        ></ButtonForm>
        <ButtonForm type="submit" name="Submit"></ButtonForm>
      </form>
    </Fragment>
  );
}
export default Form;
