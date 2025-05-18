import {
  Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface PasswordResetProps {
  customerName: string;
  resetUrl: string;
}

export default function PasswordReset({
  customerName,
  resetUrl,
}: PasswordResetProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Password Reset Request</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            <Section className="text-center mb-6">
              <Heading className="text-2xl font-bold mb-4">🔑 Password Reset</Heading>
            </Section>
            <Text>Hi {customerName},</Text>
            <Text>
              We received a request to reset your password. Click the link below to set a new password.
            </Text>
            <Section className="text-center my-6">
              <Link
                href={resetUrl}
                className="inline-block px-6 py-2 rounded bg-[#D4AF37] text-white font-bold"
              >
                Reset Password
              </Link>
            </Section>
            <Text>
              If you did not request this, you can safely ignore this email.
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
