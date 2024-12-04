const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 'var(--z-decorative)' }}>
      {/* Base Background Color - Sesuaikan dengan warna yang ada */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white" />
      
      {/* Background Patterns */}
      <div className="absolute inset-0"
        style={{
          background: `
            linear-gradient(120deg, #10b98133 0%, transparent 20%),
            linear-gradient(240deg, #0ea5e933 0%, transparent 20%)
          `,
          opacity: 0.3
        }}
      />
      
      {/* Dot Pattern */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.03
        }}
      />

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-xl rotate-12" 
        style={{ background: 'var(--color-primary)', opacity: 0.30 }} 
      />
      <div className="absolute top-40 -left-10 w-72 h-72 rounded-xl -rotate-12" 
        style={{ background: 'var(--color-primary)', opacity: 0.30 }} 
      />
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-xl rotate-45" 
        style={{ background: 'var(--color-primary)', opacity: 0.30 }} 
      />
    </div>
  );
};

export default BackgroundDecorations; 