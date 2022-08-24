import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import mainTheme from './ui/style/theme';
import GlobalStyle from './ui/style/GlobalStyle';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from 'react-redux';
import store from './service/store/config';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

class ErrorBoundary extends React.Component {
  constructor(props?: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error?: any) { // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }
}


root.render(
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle/>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        {/* <Suspense fallback={<div>loading</div>}> */}
            {/* <ErrorBoundary> */}
            <Provider store={store}>
              <App />
            </Provider>
            {/* </ErrorBoundary> */}
        {/* </Suspense> */}
      </QueryClientProvider>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
