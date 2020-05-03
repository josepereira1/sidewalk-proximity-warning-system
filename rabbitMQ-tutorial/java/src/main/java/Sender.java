import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class Sender {

    private final ConnectionFactory factory;
    private Channel channel;
    private String queue;

    public Sender(String ip) throws IOException, TimeoutException {
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
    public void setQueue(String queue) throws IOException {
        this.queue = queue;
        channel.queueDeclare(queue, false, false, false, null);
    }

    /**
     * Sends the given message to the queue.
     * @param message message to be sent
     * @throws IOException if connection is lost
     */
    public void send(String message) throws IOException {
        channel.basicPublish("", queue, null, message.getBytes(StandardCharsets.UTF_8));
    }
}
