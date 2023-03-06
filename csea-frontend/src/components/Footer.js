import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
function Footer() {
  const form = useRef();
  const [check, setCheck] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9p5bm5', 'template_3md5b6d', form.current, 'lxxfjuINVlMHPmANr').then((result) => {
      if (result.text === 'OK') {
        setCheck(true);
      }
    }, (err) => {
      console.log(err);
    })
  }
  return (
    <footer aria-label="Site Footer" class="bg-[#181818]" id="contact">
      <div class="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-md">
          <strong class="block text-center text-xl font-medium text-[#F5F5F5] sm:text-3xl">
            Want to reach out to us?
          </strong>

          <form class="mt-6" ref={form} onSubmit={sendEmail}>
            <div class="relative max-w-lg text-black text-center">
              <label class="sr-only" for="email">
                {" "}
                Email{" "}
              </label>

              <input
                class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="Your Email Address Here"
                name="user_email"
              />

              <label class="sr-only" for="email">
                {" "}
                Message{" "}
              </label>
              <textarea
                class="w-full rounded-3xl mt-4 border-gray-200 bg-gray-100 p-4 text-sm font-medium"
                id="message"
                type="text"
                placeholder="Message...."
                name="message"
              />

              <button
                class="rounded-full bg-blue-600 px-5 py-3 mt-2 text-sm font-medium text-white transition hover:bg-blue-700"
                type="submit"
                disabled={check}
              >
                Send
              </button>
              {check &&
                <div className="text-green-500">
                  Sent Successfully
                </div>
              }
            </div>
          </form>
        </div>
        {/* <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-[#FFD4B2]">
          Footer content if any
        </p> */}

        {/* <nav aria-label="Footer Nav" class="mt-6">
          <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-xl text-[#fff]">
            <li>
              <a class=" transition hover:text-gray-50/75" href="/">
                About
              </a>
            </li>

            <li>
              <a class=" transition hover:text-gray-50/75" href="/">
                Events
              </a>
            </li>

            <li>
              <a class=" transition hover:text-gray-50/75" href="/">
                Contact
              </a>
            </li>
            <li>
              <a class=" transition hover:text-gray-50/75" href="/">
                Developers
              </a>
            </li>
          </ul>
        </nav> */}

        <ul class="mt-8 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-blue-500 transition hover:text-gray-50/75"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-8 w-8"
                fill="currentColor"
                viewBox="1 1 22 22"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/company/csea-nit-goa"
              rel="noreferrer"
              target="_blank"
              class="text-[#0072b1] transition hover:text-gray-50/75"
            >
            <span class="sr-only">LinkedIn</span>
              <svg
                class="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/csea.nitg/"
              rel="noreferrer"
              target="_blank"
              class="text-red-600 transition hover:text-gray-50/75"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              ><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/CSEA-NIT-GOA"
              rel="noreferrer"
              target="_blank"
              class="text-white transition hover:text-gray-50/75"
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
