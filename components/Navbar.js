import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/logo-ok.png"
          alt=""
          width={70}
          height={35}
          priority="false"
        />
        <h1 style={{ display: 'inline' }}> F1 Seasons List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/seasons">Seasons</Link>
    </nav>
  );
};

export default Navbar;
