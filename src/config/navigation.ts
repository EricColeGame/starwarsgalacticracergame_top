import type { ComponentType, SVGProps } from "react";

export interface NavItem {
  key: string;
  path: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
