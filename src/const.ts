export const routes = ["accounts", "assets"] as const;
export type typeRoutes = (typeof routes)[number];
