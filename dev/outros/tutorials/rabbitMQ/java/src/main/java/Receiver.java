import com.rabbitmq.client.*;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class Receiver {

    private final ConnectionFactory factory;
    private Channel channel;

    public Receiver(String ip) throws IOException, TimeoutException {
        factory = new ConnectionFactory();
        setHost(ip);
    }

    /**
     * At any time the RabbitMQ host can be changed and re-configured.
     * @param ip host ip
     * @throws IOException if connection is lost
     * @throws TimeoutException if connection can not be established
     */
    public void setHost(String ip) throws IOException, TimeoutException {
        factory.setHost(ip);
        Connection connection = factory.newConnection();
        channel = connection.createChannel();
    }

    /**
     * At any time the queue where messages are to be sent can be changed and re-configured.
     * @param queue queue
     */
    public void setQueue(String queue, DeliverCallback deliverCallback) throws IOException {
        channel.basicConsume(queue, true, deliverCallback, (CancelCallback) null);
    }
}
