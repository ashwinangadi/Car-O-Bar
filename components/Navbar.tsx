import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-white shadow-lg'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src="/logo.PNG"
          alt="Car-O-Bar logo"
          width={300}
          height={40}
          className="object-contain"
        />
      </Link>

      <CustomButton
        title='Favourites'
        btnType='button'
        containerStyles=' rounded-full min-w-[130px] bg-primary-blue text-white'
      />
    </nav>
  </header>
);

export default NavBar;
