"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;
    if (!errorMessage) {
      toast.success("Logged out successfully", {
        description: "You have been logged out",
      });
      router.push("/");
    } else {
      toast.error("Failed to log out", {
        description: errorMessage,
      });
    }
    setLoading(false);
  };

  return (
    <Button
      variant={"outline"}
      onClick={handleLogOut}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;
