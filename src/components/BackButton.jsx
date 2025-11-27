"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // Navigate to the homepage and scroll to the #projects section
    router.push("/#projects");
  };

  return (
    <button
      onClick={handleGoBack}
      className="fixed top-4 left-4 flex items-center bg-none border-none text-white text-base cursor-pointer p-0"
    >
      <span className="text-2xl mr-2">←</span>
      Back
    </button>
  );
};

export default BackButton;
