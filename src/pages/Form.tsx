import style from "./Form.module.css";
import ButtonForm from "../UI/Button";
import { Fragment } from "react";
import Personal from "../components/Personal";
import TravelInfo from "../components/TravelInfo";
import TripInfo from "../components/TripInfo";

function Form() {
  let personalData = {};
  let travelInfoData = {};
  let tripInfoData = {};

  function onSubmitHandler(event: any) {
    event.preventDefault();
    const formData = {
      ...personalData,
      ...travelInfoData,
      ...tripInfoData,
      id: Math.random().toString(),
    };
    console.log(formData);
  }
  function onSavePersonal(enteredData: React.ChangeEvent<HTMLInputElement>) {
    personalData = {
      ...enteredData,
    };
  }
  function onSaveTravelInfo(travelInfo: React.ChangeEvent<HTMLInputElement>) {
    travelInfoData = {
      ...travelInfo,
    };
  }
  function onSaveTripInfo(tripInfo: React.ChangeEvent<HTMLInputElement>) {
    tripInfoData = {
      ...tripInfo,
    };
  }

  return (
    <Fragment>
      <div className={style.divLogo}>
        <img className={style.logo} src="tx-logo-transformed.webp" alt="TX" />
      </div>
      <form className={style.form} onSubmit={onSubmitHandler}>
        <Personal onSavePersonalData={onSavePersonal} />
        <TravelInfo onSaveTravelInfoData={onSaveTravelInfo} />
        <TripInfo onSaveTripInfoData={onSaveTripInfo} />
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
