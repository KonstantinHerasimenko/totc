import AboutUs from "@/components/layout/Home/aboutUs";
import Achievements from "@/components/layout/Home/achievements";
import Advantages from "@/components/layout/Home/advantages";
import Features from "@/components/layout/Home/features";
import Header from "@/components/layout/Home/header";

export default function Home() {
  return (
		<div className='flex flex-col gap-40'>
			<Header />
      <Achievements/>
			<Advantages/>
			<AboutUs/>
			<Features/>
		</div>
	)
}
