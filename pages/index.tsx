import { useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <Head>
        <title>Write title here</title>
        <meta name="description" content="Write description here" />
      </Head>

      <header className="flex flex-col gap-4 lg:flex-row lg:justify-between relative section-content-wrapper">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="material-icons">
              rocket
            </span>
            <h3 className="heading-h3">
              GENERIC STARTUP
            </h3>
          </div>
          <button
            className="icon-3xl icon-gray lg:hidden"
            onClick={() => setShowNav(!showNav)}
          >
            <span className="material-icons icon-lg">
              {showNav ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        <nav
          className={`${showNav ? "flex" : "hidden lg:flex"} flex-col gap-6 absolute top-20 right-8 bg-white border-2 border-gray-900 p-4 w-[calc(100%-4rem)] max-w-md shadow-xl lg:flex-row lg:items-center lg:gap-10 animate-fade-in lg:static lg:max-w-fit lg:p-0 lg:shadow-none lg:border-none`}
        >
          <button className="button-text">
            <a>Product</a>
          </button>
          <button className="button-text">
            <a>About</a>
          </button>
          <button className="button-text">
            <a>Blog</a>
          </button>
          <button className="button-text">
            <a>Log In</a>
          </button>
          <button className="button-standard">
            <a>Request a demo</a>
          </button>
        </nav>
      </header>

      <main>
        <section className="min-h-[40vh] md:min-h-[30vh] lg:min-h-[80vh]">
          <div className="section-content-wrapper lg:min-h-[65vh] grid place-items-center lg:grid-cols-2 lg:gap-4">
            <div className="flex flex-col gap-4 lg:self-center">
              <h1 className="heading-h1 flex flex-col">
                <span>This is what we do.</span>
                <span>And we do it better than <span className="font-extrabold italic">everyone.</span></span>
              </h1>
              <p className="flex flex-wrap gap-1">
                <span>Here is some info about our product.</span>
                <span>And this is some more info about our product.</span>
              </p>
              <div className="flex gap-4 animate-slide-up">
                <button className="button-standard">
                  Request a demo
                </button>
                <button className="button-outlined button-with-icon">
                  <span className="material-icons icon-sm icon-green">
                    play_arrow
                  </span>
                  <span>See how it works</span>
                </button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="hidden lg:block h-96 w-96 shadow-2xl">
                <Image
                  src="/high-five.jpg"
                  alt="high five"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="hidden lg:block h-64 w-64 shadow-2xl absolute top-72 right-64">
                <Image
                  src="/graph.jpg"
                  alt="high five"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-gray-50">
          <div className="section-content-wrapper">
            ANOTHER SECTION
          </div>
        </section>
      </main>

      <footer>
      </footer>
    </div>
  );
};

export default Home;
