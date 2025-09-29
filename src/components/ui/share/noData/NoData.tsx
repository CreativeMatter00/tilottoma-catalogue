"use client";
import { useState } from "react";
import { Card, CardContent } from "../../card";
import EmptyTableState from "./EmptyTableState";

export default function NoData() {
  const [variant] = useState<"default" | "search" | "filtered" | "loading">(
    "default"
  );
  const [customTitle] = useState("");
  const [customDescription] = useState("");

  return (
    <>
      <Card>
        <CardContent className="bg-gray-50 rounded-md min-h-[300px] flex items-center justify-center">
          <EmptyTableState
            variant={variant}
            title={customTitle || undefined}
            description={customDescription || undefined}
          />
        </CardContent>
      </Card>
    </>
  );
}
