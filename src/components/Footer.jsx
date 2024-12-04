const Footer = () => {
  return (
    <footer 
      className="relative bottom-0 left-0 right-0 w-full bg-white/80 backdrop-blur-sm border-t h-[80px]" 
      style={{
        borderColor: 'var(--color-primary)',
        zIndex: 40
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="w-full h-full flex flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>@</div>
            <h2 className="text-lg font-bold">Gilang Pratama Putra</h2>
          </div>
          
          <div className="flex items-center">
            <p className="flex items-center gap-2 text-sm text-gray-600">
              Made with <span className="text-red-500">❤️</span> in Bandung
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
