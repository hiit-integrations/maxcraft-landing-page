import { useState, useEffect, useRef } from "react";
import skyblockBg from "@/assets/skyblock-soft.jpg";
import { Button } from "@/components/ui/button";

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

// Floating pixel block component
const FloatingBlock = ({ 
  className, 
  color, 
  size = 40,
  delay = 0 
}: { 
  className?: string; 
  color: string; 
  size?: number;
  delay?: number;
}) => (
  <div
    className={`absolute floating-block ${className}`}
    style={{
      width: size,
      height: size,
      background: `linear-gradient(135deg, ${color} 0%, ${color}88 100%)`,
      transform: `rotate(15deg)`,
      animationDelay: `${delay}s`,
    }}
  />
);

const Index = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / 50;
      const y = (e.clientY - centerY) / 50;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-page-gradient">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 blur-sm"
        style={{ backgroundImage: `url(${skyblockBg})` }}
      />
      
      {/* Floating Blocks */}
      <FloatingBlock 
        className="top-[15%] left-[10%] animate-drift" 
        color="#22c55e" 
        size={60}
        delay={0}
      />
      <FloatingBlock 
        className="top-[25%] right-[15%] animate-drift-slow" 
        color="#854d0e" 
        size={45}
        delay={2}
      />
      <FloatingBlock 
        className="bottom-[20%] left-[20%] animate-drift" 
        color="#64748b" 
        size={35}
        delay={4}
      />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Card with parallax effect */}
        <div
          ref={cardRef}
          className="w-full max-w-lg bg-card/90 backdrop-blur-md rounded-2xl card-shadow p-8 md:p-12 text-center transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {/* Title with gradient */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gradient animate-breathe mb-3">
            MaxCraft
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground font-medium mb-6">
            Seu servidor Skyblock.
          </p>
          
          {/* Description */}
          <p className="text-subtle text-base leading-relaxed mb-8 max-w-md mx-auto">
            Entre no mundo Skyblock da MaxCraft, com eventos semanais, economia ativa.
          </p>
          
          {/* Discord Button */}
          <a
            href="https://discord.gg/eyvrEYWsMB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="xl">
              <DiscordIcon />
              Entrar no Discord
            </Button>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 py-6 text-center">
        <p className="text-muted-foreground text-sm">
          MaxCraft © 2025 – Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
