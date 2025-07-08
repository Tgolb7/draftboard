
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Index from "./pages/Index";
import MessageBoard from "./pages/MessageBoard";
import JobBoard from "./pages/JobBoard";
import PlayerBoard from "./pages/PlayerBoard";
import AthleteSurvey from "./pages/AthleteSurvey";
import SurveyResults from "./pages/SurveyResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Index />} />
            <Route path="/message-board" element={<MessageBoard />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/player-board" element={<PlayerBoard />} />
            <Route path="/athlete-survey" element={<AthleteSurvey />} />
            <Route path="/survey-results" element={<SurveyResults />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
