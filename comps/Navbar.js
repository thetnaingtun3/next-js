import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja list</h1>
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/ninjas" legacyBehavior>
        <a> Ninja Lisging</a>
      </Link>
    </nav>
  );
};

export default Navbar;
