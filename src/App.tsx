import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndexfbNetflix from "./pages/IndexfbNetflix";
import Register from "./components/fb-netflix/Register";
import ThankYouPage from "./pages/ThankYouPage";
import IndexGa from "./pages/IndexGa";
import ThankYouPageGa from "./pages/ThankYouPageGa";
import IndexFb3 from "./pages/indexfb3";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/fb1" element={<Index />} />
          <Route path="/fb3" element={<IndexFb3 />} />
          <Route path="/ga1" element={<IndexGa/>} />
          <Route path="/ty-fb1" element={<ThankYouPage />}/>
          <Route path="/ty-ga1" element={<ThankYouPageGa />}/>
          <Route path="/" element={<Index/>} />
          <Route path="/register" element={<Register/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
