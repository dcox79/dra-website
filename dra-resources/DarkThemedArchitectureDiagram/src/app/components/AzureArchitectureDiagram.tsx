import { Cloud, Database, Server, Shield, Lock, Users, Globe, Network, Layers, Container, Workflow, ShieldCheck, DatabaseZap, ArrowDown, ArrowRight, Activity } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useState } from 'react';
import { getServicesForEnvironment, type EnvironmentType } from './EnvironmentServices';

interface ServiceBoxProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  color: string;
  description: string;
  features?: string[];
  environments?: EnvironmentType[];
}

function ServiceBox({ icon, title, subtitle, color, description, features, environments = ['development', 'production', 'dr'] }: ServiceBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <div 
          className={`relative bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-${color}-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-${color}-500/20 hover:scale-105 cursor-pointer`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`flex items-start gap-3`}>
            <div className={`p-2 rounded-md bg-${color}-500/10 text-${color}-400 transition-all duration-300 ${isHovered ? `bg-${color}-500/20` : ''}`}>
              {icon}
            </div>
            <div className="flex-1">
              <h4 className="text-white mb-1">{title}</h4>
              {subtitle && <p className="text-zinc-400 text-sm">{subtitle}</p>}
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent 
        className="max-w-xs bg-zinc-900 border border-zinc-700 p-4 shadow-xl"
        sideOffset={8}
      >
        <div className="space-y-2">
          <h4 className={`text-${color}-400 font-semibold`}>{title}</h4>
          <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>
          {features && features.length > 0 && (
            <div className="pt-2 border-t border-zinc-700">
              <p className="text-zinc-400 text-xs mb-1">Key Features:</p>
              <ul className="space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx} className="text-zinc-300 text-xs flex items-start gap-1">
                    <span className={`text-${color}-400 mt-0.5`}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

interface LayerSectionProps {
  title: string;
  color: string;
  children: React.ReactNode;
  showFlowBelow?: boolean;
}

function LayerSection({ title, color, children, showFlowBelow = true }: LayerSectionProps) {
  return (
    <div className="mb-6 relative">
      <div className={`flex items-center gap-2 mb-4 pb-2 border-b border-${color}-500/30`}>
        <div className={`w-1 h-6 bg-${color}-500 rounded-full`}></div>
        <h3 className={`text-${color}-400 uppercase tracking-wider`}>{title}</h3>
      </div>
      {children}
      {showFlowBelow && (
        <div className="flex items-center justify-center mt-6 gap-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse delay-75"></div>
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse delay-150"></div>
            </div>
            <ArrowDown className="w-4 h-4 text-blue-400 animate-bounce" />
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse delay-75"></div>
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse delay-150"></div>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>
      )}
    </div>
  );
}

interface DataFlowIndicatorProps {
  type: 'request' | 'security' | 'data' | 'monitoring';
  label: string;
}

function DataFlowIndicator({ type, label }: DataFlowIndicatorProps) {
  const colors = {
    request: 'blue',
    security: 'red',
    data: 'green',
    monitoring: 'orange'
  };
  
  const color = colors[type];
  
  return (
    <div className="flex items-center gap-2 text-xs">
      <div className={`flex items-center gap-1 px-3 py-1 rounded-full bg-${color}-500/10 border border-${color}-500/30`}>
        <Activity className={`w-3 h-3 text-${color}-400`} />
        <span className={`text-${color}-400`}>{label}</span>
        <ArrowRight className={`w-3 h-3 text-${color}-400`} />
      </div>
    </div>
  );
}

export function AzureArchitectureDiagram() {
  const [environment, setEnvironment] = useState<EnvironmentType>('production');
  const services = getServicesForEnvironment(environment);

  const getEnvironmentConfig = (env: EnvironmentType) => {
    switch (env) {
      case 'development':
        return {
          badge: 'Development',
          color: 'blue',
          description: 'Simplified setup for testing and development'
        };
      case 'production':
        return {
          badge: 'Production',
          color: 'green',
          description: 'Full enterprise-grade configuration with high availability'
        };
      case 'dr':
        return {
          badge: 'Disaster Recovery',
          color: 'orange',
          description: 'Geo-redundant backup and failover configuration'
        };
    }
  };

  const config = getEnvironmentConfig(environment);

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cloud className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl text-white">Azure Cloud Transformation</h1>
          </div>
          <p className="text-zinc-400 text-lg">Enterprise Financial Services Architecture</p>
        </div>

        {/* Environment Toggle */}
        <div className="mb-8 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Environment View
              </h3>
              <p className="text-zinc-400 text-sm">{config.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setEnvironment('development')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  environment === 'development'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setEnvironment('production')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  environment === 'production'
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                Production
              </button>
              <button
                onClick={() => setEnvironment('dr')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  environment === 'dr'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                Disaster Recovery
              </button>
            </div>
          </div>
        </div>

        {/* Data Flow Legend */}
        <div className="mb-8 p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
          <h3 className="text-white mb-3 flex items-center gap-2 text-sm">
            <Activity className="w-4 h-4 text-blue-400" />
            Data Flow Legend
          </h3>
          <div className="flex flex-wrap gap-4">
            <DataFlowIndicator type="request" label="User Requests" />
            <DataFlowIndicator type="security" label="Security Checks" />
            <DataFlowIndicator type="data" label="Data Operations" />
            <DataFlowIndicator type="monitoring" label="Monitoring Events" />
          </div>
        </div>

        {/* Main Architecture */}
        <div className="space-y-8">
          {/* Layer 1: Identity & Access Management */}
          <LayerSection title="Identity & Access Management" color="purple">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.identity.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  color={service.color}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </LayerSection>

          {/* Layer 2: Security & Compliance */}
          <LayerSection title="Security & Compliance" color="red">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {services.security.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  color={service.color}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </LayerSection>

          {/* Layer 3: Network Infrastructure */}
          <LayerSection title="Network Infrastructure" color="cyan">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.network.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  color={service.color}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </LayerSection>

          {/* Layer 4: Application Services */}
          <LayerSection title="Application Services" color="blue">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {services.application.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  color={service.color}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </LayerSection>

          {/* Layer 5: Data Platform */}
          <LayerSection title="Data Platform" color="green">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {services.data.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  color={service.color}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </LayerSection>

          {/* Layer 6: Integration & Messaging */}
          <LayerSection title="Integration & Messaging" color="yellow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.integration.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  color={service.color}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </LayerSection>

          {/* Layer 7: Monitoring & Management */}
          <LayerSection title="Monitoring & Management" color="orange" showFlowBelow={false}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {services.monitoring.map((service, idx) => (
                <ServiceBox
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  color={service.color}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          </LayerSection>

          {/* Data Flow Indicators */}
          <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
            <h3 className="text-white mb-4 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-blue-400" />
              Key Architecture Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <h4 className="text-green-400 mb-1">Zero Trust Security</h4>
                  <p className="text-zinc-400 text-sm">Identity-based access with continuous verification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <h4 className="text-blue-400 mb-1">High Availability</h4>
                  <p className="text-zinc-400 text-sm">Multi-region deployment with 99.99% SLA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <h4 className="text-purple-400 mb-1">Compliance Ready</h4>
                  <p className="text-zinc-400 text-sm">PCI-DSS, SOC 2, ISO 27001 certified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                <div>
                  <h4 className="text-orange-400 mb-1">Disaster Recovery</h4>
                  <p className="text-zinc-400 text-sm">Automated backup with geo-redundancy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}