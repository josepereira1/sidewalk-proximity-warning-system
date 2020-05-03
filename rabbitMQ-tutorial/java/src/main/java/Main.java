import com.rabbitmq.client.DeliverCallback;
import com.rabbitmq.client.Delivery;

import java.nio.charset.StandardCharsets;

public class Main {

    public static void main(String[] args) throws Exception {

        DeliverCallback deliverCallback = new DeliverCallback() {
            @Override
            public void handle(String s, Delivery delivery) {
                String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
                System.out.println("Received '" + message + "'");
            }
        };

        Receiver receiver = new Receiver("localhost");
        receiver.setQueue("queue", deliverCallback);

        Sender sender = new Sender("localhost");
        sender.setQueue("queue");

        while (true) {
            Thread.sleep(1000);
            sender.send("Hello from Sender");
        }
    }
}
