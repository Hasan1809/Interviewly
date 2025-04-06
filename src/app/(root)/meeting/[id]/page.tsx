"use client";

import LoaderUI from "@/components/LoaderUI";
import { useUser } from "@clerk/nextjs";
import { StreamCall } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function MeetingPage() {
  const { id } = useParams();
  const { isLoaded } = useUser();
  const isCallLoading = true;
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  if (!isLoaded || isCallLoading) return <LoaderUI />;
  return <StreamCall></StreamCall>;
}

export default MeetingPage;
