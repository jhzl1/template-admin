import { FC } from "react";

interface PageContainerProps {
  titlePage: string;
  children: JSX.Element | JSX.Element[];
  bgTransparent?: Boolean;
}

const PageContainer: FC<PageContainerProps> = ({
  children,
  titlePage,
  bgTransparent = false,
}) => {
  return (
    <div className="mt-4 px-4 md:px-0">
      <h2 className="text-2xl mx-5 my-3 font-medium text-slate-700 dark:text-gray-300">
        {titlePage}
      </h2>
      <div
        className={`bg-${
          bgTransparent ? "transparent" : "white shadow-2xl p-5 "
        } rounded-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
