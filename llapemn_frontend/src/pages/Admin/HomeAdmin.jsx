import React from "react";
import { useAuth } from "../../hooks";
import { Charts1, Charts2, Recent, Low } from "../../components/Admin/Charts";

export function HomeAdmin() {
  return (
    <div>
      <div className="flex w-full flex-row gap-4">
        <Charts1 className="h-full w-full" />
        <Charts2 />
      </div>
      <div className="mt-5 flex w-full flex-row gap-4">
        <Recent />
        <Low />
      </div>
    </div>
  );
}
