import dynamic from "next/dynamic";

const OnlyAds = dynamic(
  () => import("../components/OnlyAds"),
  { ssr: false }
);

export default function Home() {
  return <OnlyAds />;
}
