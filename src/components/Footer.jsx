export default function Footer() {
  return (
    <footer 
      className="footer-main relative bottom-0 left-0 right-0 w-full bg-white/80 backdrop-blur-sm border-t" 
      style={{
        borderColor: 'var(--color-primary)',
        zIndex: 40,
        minHeight: '100px'
      }}
    >
      <div className="footer-container mx-auto px-6 py-6">
        <div className="footer-content w-full flex flex-row justify-between items-center gap-4">
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
}