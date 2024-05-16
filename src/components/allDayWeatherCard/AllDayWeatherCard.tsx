import css from "./AllDayWeatherCard.module.scss";

export default function AllDayWeatherCard() {
  return (
    <div className={`flex h-[100px] items-end `}>
      <div className={`${css.elem}`}>morning</div>
      <div className={`${css.elem}`}>afternoon</div>
      <div className={`${css.elem}`}>evening</div>
      <div className={`${css.elem}`}>night</div>
    </div>
  );
}
