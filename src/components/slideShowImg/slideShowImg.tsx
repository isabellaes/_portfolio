import { useEffect, useState } from "react";
import "./slideShowImg.scss";

interface Props {
  currentImg: string;
  images: string[];
}

const SlideShowImg = (props: Props) => {
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    if (props.currentImg) {
      setCurrentImg(props.currentImg);
    }
  }, [props.currentImg]);

  return (
    <div className="slideShow">
      <div className="img">
        <img src={currentImg} alt={"product"}></img>
      </div>
      <div className="pagination">
        {props.images.flatMap((x, index) => (
          <span
            onClick={() => setCurrentImg(x)}
            className={
              index === props.images.indexOf(currentImg) ? "dot active" : "dot"
            }
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShowImg;
