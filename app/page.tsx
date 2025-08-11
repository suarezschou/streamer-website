import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black gap-10">
      <Image
          src="/therushmaster.png"
          alt="logo of TheRushMaster"
          width={200}
          height={200}
          className="mb-20"

          />
      <Link href="https://www.kick.com/therushmaster">
        <Image
          src="/kick.svg"
          alt="logo of twitch"
          width={300}
          height={200}
          className="animate-bounce mb-10"
          />
       </Link>
      <Link href="https://www.twitch.tv/therushmaster"> 
      <Image
        src="/twitch.svg"
        alt="logo of twitch"
        width={150}
        height={100}
        className="animate-pulse"
      />
      </Link>
      
      <Link href="https://www.youtube.com/@TheRushMaster">
      <Image
        src="/youtube.svg"
        alt="logo of twitch"
        width={150}
        height={100}
        className="animate-pulse"
      />
      </Link>

    </div>
  );
}

