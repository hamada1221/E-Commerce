import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-toastify/dist/ReactToastify.css';
import CounterContextProvider from './Context/CounterContext.jsx'
import AuthContextProvider from './Context/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient({ defaultOptions: { queries:{gcTime:500000,refetchOnWindowFocus:false}}})


createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
            <CounterContextProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                <ToastContainer autoClose={400} position={'bottom-left'}></ToastContainer>
                <App />
            </CounterContextProvider>
        </AuthContextProvider>
    </QueryClientProvider >
)


