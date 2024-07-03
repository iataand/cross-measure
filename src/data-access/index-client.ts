"use client";

import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";

Amplify.configure(config, { ssr: true });

export function ConfigureAmplifyClientSide() {
  return null;
}

export const client = generateClient();
