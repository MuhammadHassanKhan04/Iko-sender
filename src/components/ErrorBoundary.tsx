import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", color: "#e11d48", fontFamily: "system-ui, sans-serif", backgroundColor: "#fff5f5", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ maxWidth: "600px", padding: "30px", background: "white", borderRadius: "16px", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", border: "1px solid #fee2e2" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", color: "#991b1b" }}>Application Render Error</h1>
            <p style={{ color: "#4b5563", marginBottom: "20px" }}>A runtime error occurred in the React application structure. Please see the details below:</p>
            <pre style={{ whiteSpace: "pre-wrap", background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "14px", fontFamily: "monospace", color: "#0f172a" }}>
              {this.state.error?.toString()}
            </pre>
            <details style={{ marginTop: "20px" }}>
              <summary style={{ cursor: "pointer", color: "#2563eb", fontWeight: "600" }}>Stack Trace</summary>
              <pre style={{ whiteSpace: "pre-wrap", background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px", fontFamily: "monospace", color: "#475569", marginTop: "10px", maxHeight: "200px", overflow: "auto" }}>
                {this.state.error?.stack}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
