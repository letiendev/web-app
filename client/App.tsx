import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { BasicInfo } from "./pages/BasicInfo";
import { UsageStatus } from "./pages/UsageStatus";
import { DisplaySettings } from "./pages/DisplaySettings";
import { BoxSettings } from "./pages/BoxSettings";
import { KeyManagement } from "./pages/KeyManagement";
import { UsageHistory } from "./pages/UsageHistory";
import { Security } from "./pages/Security";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { DeliveryBox } from "./pages/DeliveryBox";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/basic-info"
              element={
                <ProtectedRoute>
                  <BasicInfo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/usage-status"
              element={
                <ProtectedRoute>
                  <UsageStatus />
                </ProtectedRoute>
              }
            />
            <Route
              path="/usage-history"
              element={
                <ProtectedRoute>
                  <UsageHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/box-settings"
              element={
                <ProtectedRoute>
                  <BoxSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/key-management"
              element={
                <ProtectedRoute>
                  <KeyManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/delivery-box"
              element={
                <ProtectedRoute>
                  <DeliveryBox />
                </ProtectedRoute>
              }
            />
            <Route
              path="/security"
              element={
                <ProtectedRoute>
                  <Security />
                </ProtectedRoute>
              }
            />
            <Route
              path="/display-settings"
              element={
                <ProtectedRoute>
                  <DisplaySettings />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

createRoot(document.getElementById("root")!).render(<App />);
