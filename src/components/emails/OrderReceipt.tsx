import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
  Link,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface OrderReceiptProps {
  orderId: string;
  customerName: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  total: number;
  deliveryAddress: string;
}

export default function OrderReceipt({
  orderId,
  customerName,
  items,
  total,
  deliveryAddress,
}: OrderReceiptProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Your Order Confirmation - Shanaya Attars</Preview>
        <Body className="bg-white">
          <Container className="max-w-2xl mx-auto p-4">
            {/* Header */}
            <Section className="text-center mb-6">
              <Img 
                src="https://alzamanfragrance.com/Logo.jpg" 
                width="120"
                alt="Company Logo"
                className="mx-auto"
              />
            </Section>

            {/* Order Confirmation */}
            <Heading className="text-2xl font-bold mb-4">
              🎉 Thank You, {customerName}!
            </Heading>
            <Text className="mb-6">
              Your order <strong>#{orderId}</strong> has been confirmed.
            </Text>

            {/* Order Items */}
            <Section className="border rounded-lg p-4 mb-6">
              {items.map((item, index) => (
                <Row key={index} className="mb-4 last:mb-0">
                  <Column className="w-1/4">
                    <Img
                      src={item.image}
                      width="80"
                      alt={item.name}
                      className="rounded"
                    />
                  </Column>
                  <Column className="w-3/4 pl-4">
                    <Text className="font-semibold">{item.name}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                    <Text>Price: ₹{item.price}</Text>
                  </Column>
                </Row>
              ))}
            </Section>

            {/* Order Summary */}
            <Section className="mb-6">
              <Row>
                <Column>
                  <Text className="font-semibold">Delivery Address:</Text>
                  <Text>{deliveryAddress}</Text>
                </Column>
                <Column>
                  <Text className="font-semibold">Total Amount:</Text>
                  <Text className="text-2xl">₹{total}</Text>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Hr className="mb-6" />
            <Text className="text-center text-gray-600">
              Questions? Contact{"+917276273659"}
              <Link href="mailto:alzamanfragrance@gmail.com" className="text-[#D4AF37]">
                alzamanfragrance@gmail.com
              </Link>
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
