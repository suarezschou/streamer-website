import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    // Wrap everything in a single parent div
    <div className="flex flex-col justify-center items-center min-h-screen bg-black gap-10 p-10">
      <p className="text-2xl font-bold text-blue-600 tracking-wide p-10">
        TheRushMaster: Age of Empires 2 player and streamer
      </p>
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
      <div classname="bg-white">
      <Link href="https://www.youtube.com/@TheRushMaster">
      <Image
        src="/youtube.svg"
        alt="logo of twitch"
        width={200}
        height={200}
        className="animate-pulse"
      />
      </Link>
      </div>

    </div>
  );
}

