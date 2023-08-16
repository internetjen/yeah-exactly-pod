import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-3 pt-3 color-opacity-100 backdrop-blur-3xl">
          {/* Yeah, Exactly Podcast&nbsp; */}
          {/* <code className="font-mono font-bold">app/page.tsx</code> */}

      <Image 
        src="/yeahexactlyfavicon.png" 
        alt="Yeah, Exactly Podcast" 
        width={130} 
        height={130} />
        </p>

        <div className="fixed bottom-0 left-0 flex h-18 w-full items-end justify-center from-zinc-200">
          <p className="pointer-events-none flex place-items-center gap-2 p-2 text-[10px] opacity-50">
            © 2023 Yeah, Exactly Podcast. All rights reserved.
          </p>
        </div>
      </div>

      {/* Spotify link */}
      <div className="mb-36 grid text-center">
        <a
          href="https://open.spotify.com/show/3lTfO7doNs9aJsv2k8I4uw?si=c763f6e25e634b87?utm_source=spotify-link&utm_medium=website-link"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Listen on Spotify{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p> */}
        </a>

        {/* YouTube link */}
        <a
          href="https://www.youtube.com/channel/UCyW14xWQuAHVTCdJXqb9yLw?utm_source=youtube-link&utm_medium=website-link"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Watch on YouTube{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
        
        {/* Apple Podcasts link */}
        <a
          href="https://podcasts.apple.com/us/podcast/yeah-exactly/id1701873624?utm_source=apple-podcasts-link&utm_medium=website-link"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Listen on Apple Podcasts{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        {/* Amazon Podcasts link */}
        <a
          href="https://music.amazon.com/podcasts/27caaa1c-1b78-4284-b6c6-b5fc269ae844/yeah-exactly?utm_source=amazon-music-link&utm_medium=website-link"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Listen on Apple Podcasts{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>


      </div>

    </main>
  )
}
