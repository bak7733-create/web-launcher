// 바로가기 런처 서비스워커 — 설치 가능 조건용(캐시 없음, 네트워크 그대로)
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
