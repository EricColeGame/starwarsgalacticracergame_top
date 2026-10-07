import type { ComponentType, SVGProps } from "react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "vehicles", path: "/vehicles", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
