import { useState } from "react";

// Page imports
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPageWrapper";
import { ContactPage } from "./components/ContactPageNew";
import { ServicePage } from "./components/ServicePage";
import { azureEnvironmentAssessment } from "./data/services/azure-environment-assessment";
import { azureLandingZones } from "./data/services/azure-landing-zones";
import { identityAccessManagement } from "./data/services/identity-access-management";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  // Simple router based on hash/state
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage onNavigate={setActivePage} />;
      case "about":
        return <AboutPage onNavigate={setActivePage} />;
      case "contact":
        return <ContactPage onNavigate={setActivePage} />;
      case "service-assessment":
        return <ServicePage service={azureEnvironmentAssessment} onNavigate={setActivePage} />;
      case "service-landing-zones":
        return <ServicePage service={azureLandingZones} onNavigate={setActivePage} />;
      case "service-identity":
        return <ServicePage service={identityAccessManagement} onNavigate={setActivePage} />;
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  };

  return <div className="dark min-h-screen">{renderPage()}</div>;
}