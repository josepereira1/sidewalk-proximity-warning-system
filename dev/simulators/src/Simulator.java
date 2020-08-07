public class Simulator {

    public static final int TIME = 1000;
    public static final String IP = "37.189.223.35";
    public static final String SPWS_URL = "http://" + IP + ":5007/closestCrosswalk";

    public static void main(String[] args) throws Exception {
        //Device.parseDevices("devices/car-x.json").forEach(Thread::start);
        //Device.parseDevices("devices/pedestrian-x.json").forEach(Thread::start);
        Device.parseDevices("devices/").forEach(Thread::start);

        //  NOVA CROSSWALK (0,0,0)
        //Device.parseDevices("devices/car-y.json").forEach(Thread::start);
        //Device.parseDevices("devices/pedestrian-y.json").forEach(Thread::start);
    }
}
