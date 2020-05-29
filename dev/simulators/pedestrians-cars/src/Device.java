import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.List;

public class Device extends Thread {

    private static final String SPWS_URL = "http://0.0.0.0:5007/closestCrosswalk";

    private HttpClient client;
    private String id;
    private List<Coordinate> coordinates;
    private int currentCoordinate;
    private boolean loop;

    public Device(String id, List<Coordinate> coordinates, boolean loop) {
        client = HttpClient.newHttpClient();
        this.id = id;
        this.coordinates = coordinates;
        this.currentCoordinate = 0;
        this.loop = loop;
    }

    private boolean move() throws IOException, InterruptedException {
        if (currentCoordinate == coordinates.size()) {
            if (loop) { // loop for ever
                currentCoordinate = 0;
                return true;
            }
            else return false;
        }
        Coordinate c = coordinates.get(currentCoordinate);
        String json = "{ \"id\":\"" + id + "\", \"latitude\":" + c.latitude + ", \"longitude\":" + c.longitude + ", \"elevation\":" + c.elevation + "}";
        HttpResponse<String> response = Http.post(client, SPWS_URL, json);
        System.out.println(id + ": " + response.body());
        currentCoordinate++;
        return true;
    }

    @Override
    public void run() {
        try {
            // X em X segundos manda as coordenadas
            while (this.move()) {
                Thread.sleep(Simulator.TIME);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
