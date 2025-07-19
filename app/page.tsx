import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    // Wrap everything in a single parent div
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 gap-30 p-30">
      <p className="text-4xl font-bold text-blue-600 tracking-wide">
        TheRushMaster: Age of Empires 2 player and streamer
      </p>
      <Link href="https://www.kick.com/therushmaster">
        <Image
          src="/kick.svg"
          alt="logo of twitch"
          width={500}
          height={500}
          className="animate-bounce"
          />
       </Link>
      <Link href="https://www.twitch.tv/therushmaster"> 
      <Image
        src="/twitch.svg"
        alt="logo of twitch"
        width={500}
        height={500}
        className="animate-pulse"
      />
      </Link>
      
      <Link href="https://www.youtube.com/@TheRushMaster">
      <Image
        src="/youtube.svg"
        alt="logo of twitch"
        width={500}
        height={500}
        className="animate-pulse"
      />
      </Link>

    </div>
  );
}

