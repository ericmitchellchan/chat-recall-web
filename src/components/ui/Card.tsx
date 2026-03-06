interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
