import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface RefundReceiptProps {
  orderId: string;
  customerName: string;
  refundAmount: number;
  refundDate: string;
}

export default function RefundReceipt({
  orderId,
  customerName,
  refundAmount,
  refundDate,
}: RefundReceiptProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Your Refund Has Been Processed</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">💸 Refund Processed</Heading>
            </Section>
            <Text>Hi {customerName},</Text>
            <Text>
              Your refund for order <strong>#{orderId}</strong> has been processed.<br />
              Amount: <strong>₹{refundAmount}</strong><br />
              Date: {refundDate}
            </Text>
            <Text>The amount should reflect in your account soon.</Text>
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
