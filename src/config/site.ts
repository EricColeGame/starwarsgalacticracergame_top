export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Star Wars Galactic Racer Game Wiki",
  shortName: "Galactic Racer",
  logoText: "SW",
  tagline: "Vehicles, Tracks, Builds & Racing Guides",
  description: "A fan-focused guide to Star Wars Galactic Racer Game, covering racing gameplay, vehicles, tracks, progression, updates, and everything players need to know.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://starwarsgalacticracergame.top",
  supportEmail: "support@starwarsgalacticracergame.top",
  gameUrl: "https://starwarsgalacticracer.com/",
  heroVideoId: "scnYJ0afMxM", // STAR WARS: Galactic Racer - Official Gameplay Trailer
  social: {
    discord: "https://discord.gg/starwarsgalacticracer",
    youtube: "https://www.youtube.com/@StarWarsGalacticRacer",
  },
  locales: ["en", "ja", "de", "fr"],
  defaultLocale: "en",
};
