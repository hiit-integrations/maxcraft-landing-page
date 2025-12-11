import skyblockBg from "@/assets/skyblock-bg.jpg";
import { Button } from "@/components/ui/button";

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${skyblockBg})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Glass Panel */}
        <div className="glass-panel w-full max-w-2xl rounded-3xl p-8 md:p-12 text-center">
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary animate-float text-glow-cyan mb-4">
            MaxCraft
          </h1>
          
          {/* Subtitle */}
          <p className="font-display text-lg md:text-xl text-secondary text-glow-yellow mb-8">
            Seu servidor Skyblock favorito.
          </p>
          
          {/* Description */}
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Entre no mundo Skyblock da MaxCraft, com eventos semanais, economia 
            ativa e uma comunidade divertida.
          </p>
          
          {/* Discord Button */}
          <a
            href="https://discord.gg/SEU-LINK-AQUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="discord" size="xl">
              <DiscordIcon />
              Entrar no Discord
            </Button>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 py-4 text-center">
        <p className="text-muted-foreground text-sm">
          MaxCraft © 2025 – Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
