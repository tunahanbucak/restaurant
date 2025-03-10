import React, { Suspense } from "react";
import SuccessPageContent from "@/components/SuccessPageContent";

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
