const Intro = () => {
  return (
    <section
      className="bg-black text-white pt-20 pb-10 px-10"
      style={{
        borderBottom: '8px solid #FF3366'
      }}
    >
      <h1
        className="font-black uppercase"
        style={{
          fontSize: '72px',
          fontWeight: 900,
          letterSpacing: '-2px',
          lineHeight: '0.9',
          marginBottom: '15px'
        }}
      >
        LIRANIFY
      </h1>
      <p
        style={{
          fontSize: '18px',
          fontWeight: 400,
          letterSpacing: '0.5px',
          opacity: 0.8
        }}
      >
        Personal insights
      </p>
    </section>
  );
};

export default Intro;
