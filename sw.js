
self.addEventListener("push", function(event) {
  let data = {
    title: "🎾 Seibranz Court Watcher",
    body: "Ein neuer freier Padel-Platz könnte verfügbar sein!"
  };

  if (event.data) {
    try {
      data = {...data, ...event.data.json()};
    } catch (e) {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "./icon.png",
      badge: "./icon.png",
      vibrate: [200, 100, 200],
      data: {
        url: "./"
      }
    })
  );
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  event.waitUntil(
    clients.openWindow("./")
  );
});
