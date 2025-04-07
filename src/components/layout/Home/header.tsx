import Image from "next/image";
import background from "@/assets/images/Frame 56.jpg"
import Navigation from "../navigation";

export default function Header(){
  return (
		<header className="relative min-h-screen">
			<Navigation isBgLight={true} />
			<Image
				src={background}
				alt=''
        className="h-full w-full absolute top-0 left-0 -z-50"
			/>
		</header>
	)
}