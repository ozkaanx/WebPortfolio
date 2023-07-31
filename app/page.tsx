import Content from "@/components/Content";
import Container from "@/components/Ui/Container";
import { SWRProvider } from "@/swr/SwrProvider";

export default function Home() {
  return (
    <SWRProvider>
      <Container maxWidth="700px" style={{
        marginTop: '40px'
      }}>
        <Content />
      </Container>
    </SWRProvider>
  );
}
