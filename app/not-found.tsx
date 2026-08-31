import { Container, Button } from "@/components/ui";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Sidan hittades inte</h1>
      <p className="mt-2 text-ink-soft">Sidan du letar efter finns inte eller har flyttats.</p>
      <div className="mt-6">
        <Button href="/">Till startsidan <IconArrow className="h-4 w-4" /></Button>
      </div>
    </Container>
  );
}
