import Link from 'next/link';

const Navigation = () => {
  return (
    <nav
      className="flex gap-8 px-10 py-5"
      style={{
        background: '#FF3366'
      }}
    >
      <Link
        href="/"
        style={{
          color: '#000000',
          fontSize: '14px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          textDecoration: 'none'
        }}
      >
        Home
      </Link>
      <Link
        href="/"
        style={{
          color: '#000000',
          fontSize: '14px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          textDecoration: 'none'
        }}
      >
        Articles
      </Link>
    </nav>
  );
};

export default Navigation;
