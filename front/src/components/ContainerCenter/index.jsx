import style from "./container-center.module.scss";

export function ContainerCenter({ children }) {
  return <div className={`${style.page} bg-gray-50`}>{children}</div>;
}
