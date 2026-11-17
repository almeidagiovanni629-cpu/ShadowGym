const CACHE_NAME = "shadow-gym-v6";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./images/gvnn-header.jpg",
  "./images/exercicios/supino-reto.jpg",
  "./images/exercicios/supino-inclinado.jpg",
  "./images/exercicios/crossover.jpg",
  "./images/exercicios/crucifixo-inverso.jpg",
  "./images/exercicios/desenvolvimento.jpg",
  "./images/exercicios/elevacao-lateral.jpg",
  "./images/exercicios/elevacao-frontal.jpg",
  "./images/exercicios/remada-curvada.jpg",
  "./images/exercicios/puxada-frontal.jpg",
  "./images/exercicios/remada-baixa.jpg",
  "./images/exercicios/puxada-alta.jpg",
  "./images/exercicios/rosca-direta.jpg",
  "./images/exercicios/rosca-alternada.jpg",
  "./images/exercicios/rosca-martelo.jpg",
  "./images/exercicios/triceps-polia.jpg",
  "./images/exercicios/triceps-frances.jpg",
  "./images/exercicios/agachamento.jpg",
  "./images/exercicios/leg-press.jpg",
  "./images/exercicios/cadeira-extensora.jpg",
  "./images/exercicios/cadeira-flexora.jpg",
  "./images/exercicios/panturrilha.jpg"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
  ));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
