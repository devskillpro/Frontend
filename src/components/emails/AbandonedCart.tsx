import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Row, Column, Img, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface AbandonedCartProps {
  customerName: string;
  items: Array<{ name: string; price: number; image: string; }>;
  cartUrl: string;
}

export default function AbandonedCart({
  customerName,
  items,
  cartUrl,
}: AbandonedCartProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>You left something in your cart!</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">🛒 You Left Something Behind!</Heading>
            </Section>
            <Text>Hi {customerName},</Text>
            <Text>Looks like you left these items in your cart:</Text>
            <Section className="border rounded-lg p-4 mb-6">
              {items.map((item, idx) => (
                <Row key={idx} className="mb-4 last:mb-0">
                  <Column className="w-1/4">
                    <Img src={item.image} width="80" alt={item.name} className="rounded" />
                  </Column>
                  <Column className="w-3/4 pl-4">
                    <Text className="font-semibold">{item.name}</Text>
                    <Text>Price: ₹{item.price}</Text>
                  </Column>
                </Row>
              ))}
            </Section>
            <Section className="text-center my-6">
              <Link
                href={cartUrl}
                className="inline-block px-6 py-2 rounded bg-[#D4AF37] text-white font-bold"
              >
                Complete Your Purchase
              </Link>
            </Section>
            <Hr className="mb-6" />
            <Text className="text-center text-gray-600">
              Questions? <Link href="mailto:alzamanfragrance@gmail.com" className="text-[#D4AF37]">Contact Support</Link>
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
