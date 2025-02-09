import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>HACK CLUB COMIC GROUP PRESENTS: MULTIVERSE</title>
      <meta name="description" content="Join 75+ leaders from all over the world to build projects and protect the multiverse!" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    
    <div className="w-screen min-h-screen flex flex-col">
      <section className="relative w-full min-h-screen flex justify-center items-center">
        <div className="absolute inset-0">
          <img src="/background.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="bg-[#6A8DC9] py-6 px-6 md:px-16">
          <div className="relative max-w-[90%] md:max-w-5xl flex flex-col items-center z-10">
            <img src="/multiverse.png" alt="Multiverse Logo" className="max-w-full" />

            <button
              className="bg-white text-black px-6 py-3 md:px-10 md:py-5 rounded-lg 
                       border-8 border-black text-2xl md:text-5xl font-black 
                       uppercase tracking-wide 
                       absolute right-4 md:right-10 bottom-2 md:-bottom-5
                       shadow-[6px_6px_0px_black] md:shadow-[8px_8px_0px_black] rotate-[5deg] 
                       transition-all duration-200 
                       hover:shadow-[10px_10px_0px_black] hover:-translate-y-1"
            >
              Enter
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#6A8DC9] py-10 px-6 md:px-16">
        <div className="py-6 px-6 md:px-16">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-12">
            150+ hackers from all over the world come together in San Francisco to...
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F9F3EB] p-6 border-4 border-black rounded-lg shadow-lg">
              <h3 className="text-black text-2xl font-bold flex items-center">
                <span className="mr-2">💬</span> Share Their Knowledge
              </h3>
              <p className="text-gray-800 mt-2">
                At Assemble, you'll be able to give & watch talks from peers, gain experience,
                make connections, and discover yourself. You'll meet new people from around
                the world, get help from peers, and support your fellow hackers.
              </p>
            </div>

            <div>
              <img src="/hackers1.jpg" alt="Hackers sharing knowledge" className="rounded-lg border-4 border-black shadow-lg" />
            </div>

            <div>
              <img src="/hackers2.jpg" alt="Hackers working on projects" className="rounded-lg border-4 border-black shadow-lg" />
            </div>

            <div className="bg-[#F9F3EB] p-6 border-4 border-black rounded-lg shadow-lg">
              <h3 className="text-black text-2xl font-bold flex items-center">
                <span className="mr-2">🔧</span> Build For Themselves
              </h3>
              <p className="text-gray-800 mt-2">
                At Assemble, attendees build projects that have value to themselves. You'll
                build something that's meaningful to you and other hackers, not pitching to
                impress a business-type. Learning and creating is valued far above a
                long-term product plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}