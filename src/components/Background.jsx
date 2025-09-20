const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b1055] to-[#7597de] overflow-hidden scroll-smooth">
      {children}
    </div>
  );
};

export default Background;
