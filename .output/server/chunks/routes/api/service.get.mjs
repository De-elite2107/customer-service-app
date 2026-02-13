import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'xss';

const service_get = defineEventHandler(() => {
  return {
    "jumpOut": 1,
    "customerButtons": [
      { "title": "WhatsApp Support", "url": "https://wa.me/123456789" },
      { "title": "Live Chat", "url": "https://example.com/live-chat" },
      { "title": "Telegram", "url": "https://t.me/example_support" }
    ]
  };
});

export { service_get as default };
//# sourceMappingURL=service.get.mjs.map
