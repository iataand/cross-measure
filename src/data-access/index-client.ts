import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";

Amplify.configure(config);

export const client = generateClient();
