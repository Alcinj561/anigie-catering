import { createClient } from "@base44/sdk";

// Base44 application IDs identify an app but are not secret credentials.
export const base44 = createClient({
  appId: "6aba018fa0181b859313fe5c",
});
