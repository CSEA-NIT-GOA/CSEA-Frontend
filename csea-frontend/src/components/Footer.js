import React from "react";
function Footer() {
  return (
    <footer aria-label="Site Footer" class="bg-[#00033F]" id="contact">
      <div class="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-md">
          <strong class="block text-center text-xl font-medium text-[#F5F5F5] sm:text-3xl">
            Want to reach out to us?
          </strong>

          <form class="mt-6">
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
              />

              <button
                class="rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-[#FFD4B2]">
          Footer content if any
        </p>

        <nav aria-label="Footer Nav" class="mt-6">
          <ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-xl text-[#00C803]">
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
        </nav>

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
                viewBox="0 0 24 24"
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
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-blue-400 transition hover:text-gray-50/75"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-1000 transition hover:text-gray-50/75"
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
