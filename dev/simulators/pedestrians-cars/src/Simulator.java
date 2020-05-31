public class Simulator {

    public static final int TIME = 1000;
    public static final String SPWS_URL = "http://37.189.223.35:5007/closestCrosswalk";

    public static void main(String[] args) throws Exception {
        Device.parseDevices("devices/").forEach(Thread::start);
    }
}
