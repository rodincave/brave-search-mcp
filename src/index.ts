#!/usr/bin/env node

import process from 'node:process';
import { config } from 'dotenv';
import { BraveMcpServer } from './server.js';

// Load environment variables from .env file
config();

// Check for API key
const BRAVE_API_KEY = process.env.BRAVE_API_KEY;
if (!BRAVE_API_KEY) {
  console.log('NO BRAVE_API_KEY detected');
  process.exit(1);
}

const braveMcpServer = new BraveMcpServer(BRAVE_API_KEY);
braveMcpServer.start().catch(() => {
  process.exit(1);
});
