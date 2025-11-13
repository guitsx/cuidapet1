import "./globals.css";

export const metadata = {
  title: "CuidaPet.ia — Assistente inteligente para tutores",
  description: "Organize vacinas, rotina e bem-estar do seu pet com IA."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
