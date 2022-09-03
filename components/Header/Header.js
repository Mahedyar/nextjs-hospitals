import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import classes from "../../styles/Header.module.css";
import { DesignerInfo } from "./DesignerInfo";

export const Header = () => {
  const windowWidth = useWindowSize();
  return (
    <div className={classes["header-container"]} style={{display : `${(windowWidth > 425 ? "flex" : "")}`}}>
      {windowWidth < 426 && <DesignerInfo/>}
      <div style={{marginTop : `${(windowWidth > 425 ? "" : "1rem")}`}}>
        <div>
          در این سایت اطلاعات مربوط به ۱۴۶ بیمارستان در سراسر شهر تهران جمع آوری
          شده است . این اطلاعات شامل نشانی ،شماره تلفن ، آدرس ، مراکز درمانی هر
          بیمارستان و غیره میشود.
        </div>
        <div>
          در جهت پیدا کردن بیمارستان مورد نظر خود لازم است&nbsp;
          <strong>مراحل زیر را دنبال کنید :</strong>
        </div>
        <ul>
          <li>
            در قسمت جستجو میتوانید نام بیمارستان و یا امکانات درمانی مورد نظر
            خود را وارد نمایید (برای مثال MRI)
          </li>
          <li>
            بیمارستان های نمایش داده شده در این مرحله همگی به موضوع جستجوی شما
            مربوط هستند . برای جستجوی دقیق تر میتوانید منطقه مورد نظر خود را نیز
            وارد کنید تا تنها بیمارستان های آن منطقه نمایش داده شوند.
          </li>
        </ul>
      </div>
      {windowWidth > 425 && <DesignerInfo />}
    </div>
  );
};
