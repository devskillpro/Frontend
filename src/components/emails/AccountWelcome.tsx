import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface AccountWelcomeProps {
  customerName: string;
}

export default function AccountWelcome({
  customerName,
}: AccountWelcomeProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Welcome to Our Store!</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">👋 Welcome, {customerName}!</Heading>
            </Section>
            <Text>
              Thank you for creating an account with us. We're excited to have you as part of our community!
            </Text>
            <Text>
              You can now track your orders, save your favorite products, and enjoy exclusive offers.
            </Text>
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
