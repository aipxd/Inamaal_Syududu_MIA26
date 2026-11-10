import React from "react";
import Loader from "./Loader-4";

interface PageLoaderProps {
  /** Membungkus konten halaman (opsional) */
  children?: React.ReactNode;
  /** State status loading */
  isLoading?: boolean;
}

export const PageLoader = ({ children, isLoading = true }: PageLoaderProps) => {
  // Jika dipakai sebagai wrapper dan isLoading === false, tampilkan isi halaman
  if (!isLoading && children) {
    return <>{children}</>;
  }

  // Tampilan Loading Screen Utama (Full Screen)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Loader />
    </div>
  );
};

export default PageLoader;