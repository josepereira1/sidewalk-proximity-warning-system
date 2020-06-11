public class Simulator {

    public static final int TIME = 1000;
    public static final String SPWS_URL = "http://localhost:5007/closestCrosswalk";

    public static void main(String[] args) throws Exception {
        Device.parseDevices("devices/car-x.json").forEach(Thread::start);
        //Device.parseDevices("devices/pedestrian-x.json").forEach(Thread::start);
        //Device.parseDevices("devices/").forEach(Thread::start);
    }
}
