import React from "react"
import logo from "./images/CSEA11.png"
import nit from "./images/NITLogo.png"
export default function Herosection() {

  return (
    <div id="home" className="isolate bg-gradient-to-r from-teal-100 to-white h-[100vh]">
      <main>
        <a href="https://www.nitgoa.ac.in/" target={"_blank"}>
          <img src={nit} alt="nit logo" className=" absolute z-10 h-28 w-28 right-4 mt-4" />
        </a>
        <div className="relative px-6  h-[100vh]" style={{background:"linear-gradient(#18181b,transparent), linear-gradient(to top,#4b9bc0,#18181b)", backgroundBlendMode:"normal"}}>
          <div className="mx-auto max-w-3xl pt-48 pb-30 sm:pt-32 sm:pb-40">
            <div>
              <div className="text-center max-sm:mt-12">
                <img src={logo} alt="logo" />
                <p className="my-6 mt-6 text-3xl lg:ml-20 leading-8 text-gray-300 sm:text-center">
                  Computer Science and Engineering Association
                </p>
                <p className="my-0 text-xl leading-8 lg:ml-20  text-gray-300 sm:text-center">
                  National Institute of Technology, Goa
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}