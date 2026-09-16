"use client";

import { useRouter } from "next/navigation";
import EstimateForm from "@/components/EstimateForm";

export default function EstimatePageClient() {
  const router = useRouter();

  return (
    <EstimateForm
      onSubmit={() => {
        router.push("/thank-you");
      }}
    />
  );
}
