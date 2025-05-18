import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface OrderCancellationProps {
  orderId: string;
  customerName: string;
  reason?: string;
}

export default function OrderCancellation({
  orderId,
  customerName,
  reason,
}: OrderCancellationProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Your Order Has Been Cancelled</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">❌ Order Cancelled</Heading>
            </Section>
            <Text>Hi {customerName},</Text>
            <Text>Your order <strong>#{orderId}</strong> has been cancelled.</Text>
            {reason && <Text>Reason: {reason}</Text>}
            <Text>If you have any questions, please contact our support team.</Text>
            <Hr className="mb-6" />
            <Text className="text-center text-gray-600">
              Need help? <Link href="mailto:alzamanfragrance@gmail.com" className="text-[#D4AF37]">Contact Support</Link>
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
