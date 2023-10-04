export default function Footer() {
  return (
    <footer className="mt-4 bg-gray-700">
      <div className="w-full mx-auto max-w-screen-xl text-gray-300 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023 Qoptars Pvt. Ltd. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
