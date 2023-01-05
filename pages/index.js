import Show from "../components/Show";

import { initialSeasons } from "../lib/data";

export default function HomePage() {
  return <Show initialSeasons={initialSeasons} />;
}
