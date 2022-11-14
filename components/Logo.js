import Link from 'next/link'
import Image from 'next/image'
import ImgLogo from '../public/assets/Icons/car.png'

const Logo = () => {
  return (
    <Link href={'/'} className="text-2xl inline-block mt-1 animate-pulse ">
        <Image src={ImgLogo} width={20} height={20} className=" inline-block ml-1 mb-1"  />
        <>خودرویاب</>
    </Link>
  )
}

export default Logo