import React from "react"
import logo from "./images/CSEA11.png"
export default function Herosection() {

  return (
    <div id="home" className="isolate bg-gradient-to-r from-teal-100 to-white h-[100vh]">
      <main>
        <div className="relative px-6 lg:px-8 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 h-[100vh]">
          <div className="mx-auto max-w-3xl pt-48 pb-30 sm:pt-32 sm:pb-40">
            <div>
              <div >
                {/* <h1 className="my-10 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                   CSEA 
                </h1>
                <p className="my-12 mt-6 text-lg leading-8 text-zinc-800 sm:text-center">
                </h1> */}
                <img src={logo} alt="logo" />
                <p className="my-12 mt-6 text-lg leading-8 text-gray-300 sm:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
          {/* <Event className="relative"/> */}
        </div>
      </main>
    </div>
  )
}