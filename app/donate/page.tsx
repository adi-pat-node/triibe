"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DonatePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/futures#donate");
  }, [router]);

  return null;
};

export default DonatePage;
