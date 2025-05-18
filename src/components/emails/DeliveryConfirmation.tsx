import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface DeliveryConfirmationProps {
  orderId: string;
  customerName: string;
  deliveryDate: string;
}

export default function DeliveryConfirmation({
  orderId,
  customerName,
  deliveryDate,
}: DeliveryConfirmationProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Your Order is Delivered!</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">📦 Delivered!</Heading>
            </Section>
            <Text>Hi {customerName},</Text>
            <Text>Your order <strong>#{orderId}</strong> was delivered on {deliveryDate}.</Text>
            <Text>We hope you enjoy your purchase! If you have any issues, please contact our support.</Text>
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
