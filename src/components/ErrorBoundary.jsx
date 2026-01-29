import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            padding: '2rem',
          }}
          role="alert"
          aria-live="polite"
        >
          <div
            style={{
              maxWidth: '600px',
              backgroundColor: '#fff',
              borderRadius: '0.5rem',
              padding: '2rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#050F2A',
                marginBottom: '1rem',
              }}
            >
              Oops! Something went wrong
            </h1>
            
            <p
              style={{
                fontSize: '1rem',
                color: '#6B7280',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
              }}
            >
              We apologize for the inconvenience. An unexpected error occurred while rendering this page.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details
                style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#FEE2E2',
                  borderRadius: '0.375rem',
                  textAlign: 'left',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    fontWeight: '600',
                    color: '#DC2626',
                    marginBottom: '0.5rem',
                  }}
                >
                  Error Details (Development Only)
                </summary>
                <pre
                  style={{
                    overflow: 'auto',
                    fontSize: '0.75rem',
                    color: '#7F1D1D',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                  }}
                >
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={this.handleReset}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#7BBBFF',
                  color: '#050F2A',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background-color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#6BA3E5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#7BBBFF';
                }}
              >
                Try Again
              </button>

              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#050F2A',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '0.375rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'inline-block',
                  transition: 'background-color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A1940';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#050F2A';
                }}
              >
                Go Home
              </a>
            </div>

            <p
              style={{
                fontSize: '0.875rem',
                color: '#9CA3AF',
                marginTop: '1.5rem',
              }}
            >
              If this problem persists, please contact us at{' '}
              <a
                href="mailto:youthnetwork4@gmail.com"
                style={{
                  color: '#7BBBFF',
                  textDecoration: 'underline',
                }}
              >
                youthnetwork4@gmail.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
