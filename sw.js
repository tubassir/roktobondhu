self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(fetch(e.request).catch(()=>new Response('<meta charset="utf-8"><p style="font:18px sans-serif;padding:24px">অফলাইন। ইন্টারনেট চালু করে আবার চেষ্টা করুন।</p>',{headers:{'Content-Type':'text/html; charset=utf-8'}})))});
