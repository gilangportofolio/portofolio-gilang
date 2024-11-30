import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Oops, Terjadi Kesalahan
          </h2>
          <p className="text-gray-600 mb-4">
            Mohon muat ulang halaman
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Muat Ulang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 