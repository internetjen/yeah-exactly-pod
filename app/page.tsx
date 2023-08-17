import Image from "next/image";
import { PiApplePodcastsLogoFill } from 'react-icons/pi'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm sm:text-[10px]">
        <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-3 pt-3 color-opacity-100 backdrop-blur-1xl">
          {/* Yeah, Exactly Podcast&nbsp; */}
          {/* <code className="font-mono font-bold">app/page.tsx</code> */}

          <Image
            src="/yeahexactlyfavicon.png"
            alt="Yeah, Exactly Podcast"
            width={140}
            height={140}
          />
        </p>

        <div className="fixed bottom-0 left-0 flex h-18 w-full items-end justify-center from-zinc-200">
          <p className="pointer-events-none flex place-items-center gap-2 p-2 text-[10px] opacity-50">
            © 2023 Yeah, Exactly Podcast. All rights reserved.
          </p>
        </div>
      </div>

      <div className="grid text-center m-10">
        {/* Spotify link */}
        <a
          href="https://open.spotify.com/show/3lTfO7doNs9aJsv2k8I4uw?si=c763f6e25e634b87?utm_source=spotify-link&utm_medium=website-link"
          className="group m-2 rounded-lg px-14 py-2 transition-colors border border-transparent text-white border-b-slate-800 border-r-slate-800 bg-pink-400 hover:border-transparent hover:border-r-slate-800 hover:border-b-slate-800 hover:border-b-2 hover:border-r-2 hover:bg-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-lg font-semibold`}>
            Spotify
            <Image
            src="/spotify.svg"
            alt="spotify icon" 
            className="inline-block ml-2"
            width={30}
            height={30}
            />
            {" "}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p> */}
        </a>

        {/* YouTube link */}
        <a
          href="https://www.youtube.com/channel/UCyW14xWQuAHVTCdJXqb9yLw?utm_source=youtube-link&utm_medium=website-link"
          className="group m-2 rounded-lg px-14 py-2 transition-colors border border-transparent text-white border-b-slate-800 border-r-slate-800 bg-pink-400 hover:border-transparent hover:border-r-slate-800 hover:border-b-slate-800 hover:border-b-2 hover:border-r-2 hover:bg-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-lg font-semibold`}>
            YouTube
            <Image
            src="/youtube.svg"
            alt="youtube icon" 
            className="inline-block ml-2"
            width={30}
            height={30}
            />
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {" "}
        </a>

        {/* Apple Podcasts link */}
        <a
          href="https://podcasts.apple.com/us/podcast/yeah-exactly/id1701873624?utm_source=apple-podcasts-link&utm_medium=website-link"
          className="group m-2 rounded-lg px-14 py-2 transition-colors border border-transparent text-white border-b-slate-800 border-r-slate-800 bg-pink-400 hover:border-transparent hover:border-r-slate-800 hover:border-b-slate-800 hover:border-b-2 hover:border-r-2 hover:bg-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-lg font-semibold`}>
            Apple Podcasts
            <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg"
            alt="podcast icon" 
            className="inline-block ml-2"
            width={30}
            height={30}
            />
          </h2>
        </a>

        {/* Amazon Podcasts link */}
        <a
          href="https://music.amazon.com/podcasts/27caaa1c-1b78-4284-b6c6-b5fc269ae844/yeah-exactly?utm_source=amazon-music-link&utm_medium=website-link"
          className="group m-2 rounded-lg px-14 py-2 transition-colors border border-transparent text-white border-b-slate-800 border-r-slate-800 bg-pink-400 hover:border-transparent hover:border-r-slate-800 hover:border-b-slate-800 hover:border-b-2 hover:border-r-2 hover:bg-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-lg font-semibold`}>
            Amazon
            <Image
            src="/amazon.svg"
            alt="amazon icon" 
            className="inline-block ml-2"
            width={30}
            height={30}
            />
            {" "}
          </h2>
        </a>

        {/* RadioPublic link */}
        <a
          href="https://radiopublic.com/yeah-exactly-8j5gBD?utm_source=radiopublic-link&utm_medium=website-link"
          className="group m-2 rounded-lg px-14 py-2 transition-colors border border-transparent text-white border-b-slate-800 border-r-slate-800 bg-pink-400 hover:border-transparent hover:border-r-slate-800 hover:border-b-slate-800 hover:border-b-2 hover:border-r-2 hover:bg-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-lg font-semibold`}>
            RadioPublic
            <Image
            src="/radiopublic.svg"
            alt="radiopublic icon" 
            className="inline-block ml-2"
            width={30}
            height={30}
            />
            {" "}
          </h2>
        </a>



        {/* TikTok link */}
        <a
          href="https://www.tiktok.com/@yeahexactlypodcast?utm_source=tiktok-link&utm_medium=website-link"
          className="group m-2 rounded-lg px-14 py-2 transition-colors border border-transparent text-white border-b-slate-800 border-r-slate-800 bg-pink-400 hover:border-transparent hover:border-r-slate-800 hover:border-b-slate-800 hover:border-b-2 hover:border-r-2 hover:bg-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-lg font-semibold`}>
            TikTok
            <Image
            src="/tiktok.svg"
            alt="tiktok icon" 
            className="inline-block ml-2"
            width={30}
            height={30}
            />
            {" "}
          </h2>
        </a>


        <a
          href="https://www.instagram.com/yeahexactlypod?utm_source=instagram-link&utm_medium=website-link"
          className="group m-2 rounded-lg px-14 py-2 transition-colors border border-transparent text-white border-b-slate-800 border-r-slate-800 bg-pink-400 hover:border-transparent hover:border-r-slate-800 hover:border-b-slate-800 hover:border-b-2 hover:border-r-2 hover:bg-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-lg font-semibold`}>
            Instagram
            <Image
            src="/instagram.svg"
            alt="instagram icon" 
            className="inline-block ml-2"
            width={30}
            height={30}
            />
            {" "}
          </h2>
        </a>


      </div>
    </main>
  );
}
