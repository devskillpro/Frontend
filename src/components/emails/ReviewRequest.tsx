import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface ReviewRequestProps {
  customerName: string;
  orderId: string;
  reviewUrl: string;
}

export default function ReviewRequest({
  customerName,
  orderId,
  reviewUrl,
}: ReviewRequestProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>How Was Your Order?</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">⭐ We'd Love Your Feedback!</Heading>
            </Section>
            <Text>Hi {customerName},</Text>
            <Text>
              We hope you enjoyed your order #{orderId}. Would you take a moment to leave a review?
            </Text>
            <Section className="text-center my-6">
              <Link
                href={reviewUrl}
                className="inline-block px-6 py-2 rounded bg-[#D4AF37] text-white font-bold"
              >
                Leave a Review
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
