import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background p-8">
      <h1 className="font-heading text-3xl font-bold text-foreground">
        Dynamic Career Engine
      </h1>
      <p className="max-w-md text-center text-muted-foreground">
        AI portfolio and resume — one vault, infinite variants.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}
