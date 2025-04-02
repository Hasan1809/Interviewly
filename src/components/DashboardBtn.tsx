"use client";

import { SparklesIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useUserRole } from "@/hooks/useUserRole";

function DashboardBtn() {
  const { isCandidate, isLoading } = useUserRole();
  if (isCandidate || isLoading) return null;
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <SparklesIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}

export default DashboardBtn;
