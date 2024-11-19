import Logo from "@/components/@page-components/top-nav-bar/logo/page";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import {Button} from "@/components/ui/button";


const TopNavBar = () => {
    return (
        <>
        <div className="top-nav-bar flex content-center items-center bg-white text-black">
            <Button className="bg-white text-black">
                <RxHamburgerMenu />
            </Button>
            <Link href="/"><Logo /></Link>
            <div>
                <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="12" />
            </div>
        </div>
        </>
    )
}

export default TopNavBar