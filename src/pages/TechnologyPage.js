import styles from "./technology-page.module.css";
import { Fragment } from "react";
import Header from "../component/Header";
import DescriptionExpand from "../UI/description/DescriptionExpand";
import DescriptionCard from "../UI/description/DescribtionCard";
import img1 from "../assets/show/1/1.png";
import img2 from "../assets/show/1/2.png";
import img3 from "../assets/show/1/3.png";
import img4 from "../assets/show/1/4.png";
import img5 from "../assets/show/1/5.png";
import img6 from "../assets/show/1/6.png";
const TechnologyPage = () => {
  const technologies = [
    {
      img: [img1, img2, img3, img4, img5, img6],
      description: {
        id: "2",
        name: "Объемный логотип с подсветкой",
        face: "молочный акрил 3 мм",
        side: "пвх 3 мм + пленка Oracal 641",
        back: "пвх 5 мм",
        ligth: "светодиодные модули блок питания",
        price: "120",
        mountPrice: "4000",
      },
    },
  ];
  console.log(technologies[0].img);
  return (
    <Fragment>
      <Header />

      <span className={styles.navigation}>Главная / Объемные логотипы</span>
      <span className={styles.title}>ТЕХНОЛОГИИ</span>
      <DescriptionExpand photos={technologies[0].img} />
      {technologies.map((elem) => {
        return (
          <DescriptionCard img={elem.img[0]} description={elem.description} />
        );
      })}
    </Fragment>
  );
};

export default TechnologyPage;
