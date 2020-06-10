import com.google.gson.Gson;

import java.io.File;
import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class Device extends Thread {

    private String id;
    private List<Coordinate> coordinates;
    private HttpClient client;
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
        HttpResponse<String> response = Http.post(client, Simulator.SPWS_URL, json);
        printNotification(response.body());
        currentCoordinate++;
        return true;
    }

    private void printNotification(String notification) {
        if(!notification.equals("no notifications")) {
            NotificationJson notificationJson = new Gson().fromJson(notification, NotificationJson.class);

            String color = "";

            switch (notificationJson.traffic_light) {
                case 0:
                    color = "green";
                    break;
                case 1:
                    color = "yellow";
                    break;
                case 2:
                    color = "red";
                    break;
                default:
                    color = "no info";
                    break;

            }

            if (id.charAt(0) == 'v') {
                System.err.println("[" + id + "] WARNNING: pedestrians nearby - TRAFFIC LIGHT is " + color + " !");
            } else if (id.charAt(0) == 'p') {
                System.err.println("[" + id + "] WARNNING: vehicles nearby - TRAFFIC LIGHT is " + color + " !");
            }
        }else{
            System.err.println("[" + id + "] no notifications");
        }
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

    /**
     * Cria um objeto Device a partir das coordenadas e id definidas no ficheiro .json
     * @param filename nome do ficheiro .json
     * @return retorna um objeto Device
     * @throws IOException caso não consiga abrir o ficheiro .json
     */
    private static Device jsonToDevice(String filename) throws IOException {
        Gson gson = new Gson();
        String json = new String(Files.readAllBytes(Paths.get(filename)));
        CoordinateJson coordinateJson = gson.fromJson(json, CoordinateJson.class);
        List<Coordinate> coordinates = new ArrayList<>();
        for (List<Double> coordinate: coordinateJson.coordinates) {
            double latitude = coordinate.get(1);
            double longitude = coordinate.get(0);
            coordinates.add( new Coordinate(latitude, longitude, 0) );
        }
        return new Device(coordinateJson.id, coordinates, true);
    }

    /**
     * Dada um diretoria ou o nome de um ficheiro, cria uma lista de objetos Device a partir das coordenadas e id definidas no(s) ficheiro(s) .json
     * @param dir nome da diretora ou ficheiro
     * @return retorna uma lista de objetos Device
     * @throws IOException caso não consiga abrir o(s) ficheiro(s) .json
     */
    public static List<Device> parseDevices(String dir) throws IOException {
        File[] files; // files to parse
        File f = new File(dir);
        if (f.isFile()) { // caso seja apenas 1 ficheiro
            files = new File[1];
            files[0] = f;
        }
        else { // caso seja uma diretoria
            files = f.listFiles();
        }
        List<Device> res = new ArrayList<>();
        for(File file : files) {
            if (file.getName().endsWith(".json")) {
                res.add(jsonToDevice(file.getAbsolutePath()));
            }
        }
        return res;
    }

    @Override
    public String toString() {
        return "Device{" +
                "id='" + id + '\'' +
                ", coordinates=" + coordinates +
                '}';
    }
}
