/** Scientific editorial design: midnight navy, cognition mint, asymmetric layouts, precise motion. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import {
  About,
  Capabilities,
  Contact,
  Government,
  Privacy,
  Projects,
  Research,
} from "./pages/ContentPages";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/research" component={Research} />
        <Route path="/capabilities" component={Capabilities} />
        <Route path="/projects" component={Projects} />
        <Route path="/government" component={Government} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
