import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class ChangerTrafficLight {
    public static HttpResponse<String> get(HttpClient client, String url) throws IOException, InterruptedException {

        // cria o HTTP Request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .timeout(Duration.ofMinutes(1))
                .header("Content-Type", "application/json")
                .GET()
                .build();

        // executa o Request
        return client.send(request, HttpResponse.BodyHandlers.ofString());
    }

    public static void main(String[] args) {
        String IP = "37.189.223.35";
        String URL = "http://" + IP + ":5003/updateStateLights";
        int TEMPO = 5 * 1000;
        HttpClient client = HttpClient.newHttpClient();
        while(true){
            try {
                Thread.sleep(TEMPO);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            try {
                System.err.println("GET: " + URL);
                ChangerTrafficLight.get(client,  URL);
            } catch (IOException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
