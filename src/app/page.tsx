import Achievements from "@/components/layout/Home/achievements";
import Header from "@/components/layout/Home/header";
import Navigation from "@/components/layout/navigation";

export default function Home() {
  return (
		<div className='flex flex-col gap-40'>
			<Header />
      <Achievements/>
		</div>
	)
}
