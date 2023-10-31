import style from "./container-center.module.scss";

export function ContainerCenter({ children }) {
  return <div className={`${style.page} py-4 bg-gray-50`}>{children}</div>;
}
