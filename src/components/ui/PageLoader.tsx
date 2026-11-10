import React from "react";
import Loader from "./Loader-4";

interface PageLoaderProps {
  children?: React.ReactNode;
  isLoading?: boolean;
}

export const PageLoader = ({ children, isLoading = true }: PageLoaderProps) => {
  if (!isLoading && children) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Loader />
    </div>
  );
};

export default PageLoader;