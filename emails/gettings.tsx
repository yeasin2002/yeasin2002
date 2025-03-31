import { Button, Html, Text } from "@react-email/components";
import * as React from "react";

export function GettingEmail() {
  return (
    <Html>
      <Text>Hi there</Text>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
