import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { CartProvider } from "./context/CartContext.tsx";
import { OrderProvider } from "./context/OrderContext.tsx";
import { initializeProducts } from "./services/productService.ts";
import { AuthProvider } from "./context/AuthContext.tsx";
import { AdminProvider } from "./context/AdminContext.tsx";
import { ProductProvider } from "./context/ProductContext.tsx";
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";

const initialOptions = {
    "client-id": "",
    currency: "USD",
    intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <ProductProvider>
                <OrderProvider>
                    <AdminProvider>
                        <CartProvider>
                            <PayPalScriptProvider options={initialOptions as unknown as ReactPayPalScriptOptions}>
                                <App />
                            </PayPalScriptProvider>
                        </CartProvider>
                    </AdminProvider>
                </OrderProvider>
            </ProductProvider>
        </AuthProvider>
    </React.StrictMode>

);