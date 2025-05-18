import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Row, Column, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface ShippingConfirmationProps {
  orderId: string;
  customerName: string;
  trackingNumber: string;
  carrier: string;
  trackingUrl: string;
  estimatedDelivery: string;
}

export default function ShippingConfirmation({
  orderId,
  customerName,
  trackingNumber,
  carrier,
  trackingUrl,
  estimatedDelivery,
}: ShippingConfirmationProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Your Order Has Shipped!</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">🚚 Your Order is on the Way!</Heading>
            </Section>
            <Text>Hi {customerName},</Text>
            <Text>Your order <strong>#{orderId}</strong> has shipped via {carrier}.</Text>
            <Text>
              <strong>Tracking Number:</strong> {trackingNumber}<br />
              <Link href={trackingUrl} className="text-[#D4AF37]">Track your shipment</Link>
            </Text>
            <Text>
              <strong>Estimated Delivery:</strong> {estimatedDelivery}
            </Text>
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
