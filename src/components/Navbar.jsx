import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="fixed w-full bg-gray-900 text-white p-4 z-50">
    <div className="max-w-5xl mx-auto flex justify-between">
      <h1 className="text-xl font-bold">Shriyansh</h1>
      <div className="space-x-4">
        {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-300"
          >
            {section}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
