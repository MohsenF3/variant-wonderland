import React from "react";

export interface Variant {
  id: number;
  name: string;
  preview: React.ReactNode;
  code: string;
}

export type Variants = Variant[];
