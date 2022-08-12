import nats from "node-nats-streaming";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Publisher connected to NATS ");

  const data = JSON.stringify({
    id: "jldfndsj",
    title: "some title",
    price: 32,
  });

  stan.publish("ticket:created", data, () => {
    console.log("Event Published");
  });

  //   for (let i = 0; i < 1000; i++) {
  //     stan.publish("ticket:created", data, () => {
  //       console.log("Event Published");
  //     });
  //   }
});
