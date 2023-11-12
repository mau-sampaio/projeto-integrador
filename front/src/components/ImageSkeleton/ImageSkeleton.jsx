import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ImageSkeleton = ({ width, heigth, className }) => (
  <Skeleton
    className={`${className ? className : ""} ${width ? "" : "w-100"} ${
      heigth ? "" : "h-100"
    } d-flex`}
    width={width}
    height={heigth}
  />
);
