import java.util.Arrays;
import java.util.List;

public class Simulator {

    public static final int TIME = 1000;

    public static void main(String[] args) {

        List<Coordinate> vehicleCoords = Arrays.asList(
                new Coordinate(41.537378, -8.396939, 0),
                new Coordinate(41.537367, -8.396936, 0),
                new Coordinate(41.537358, -8.396934, 0),
                new Coordinate(41.537345, -8.396932,0),
                new Coordinate(41.537337, -8.396930,0),
                new Coordinate(41.537329, -8.396928,0),
                new Coordinate(41.537321, -8.396927,0),
                new Coordinate(41.537312, -8.396925,0),
                new Coordinate(41.537304, -8.396923,0),
                new Coordinate(41.537294, -8.396919,0),
                new Coordinate(41.537281, -8.396919,0),
                new Coordinate(41.537273, -8.396916,0),
                new Coordinate(41.537265, -8.396914,0),
                new Coordinate(41.537254, -8.396912,0),
                new Coordinate(41.537246, -8.396912,0),
                new Coordinate(41.537237, -8.396910,0),
                new Coordinate(41.537228, -8.396907,0),
                new Coordinate(41.537218, -8.396906,0),
                new Coordinate(41.537210, -8.396904,0),
                new Coordinate(41.537204, -8.396902,0),
                new Coordinate(41.537200, -8.396900,0),
                new Coordinate(41.537195, -8.396901,0),
                new Coordinate(41.537187, -8.396900,0),
                new Coordinate(41.537178, -8.396897,0),
                new Coordinate(41.537171, -8.396893,0),
                new Coordinate(41.537163, -8.396891,0),
                new Coordinate(41.537156, -8.396888,0),
                new Coordinate(41.537147, -8.396885,0),
                new Coordinate(41.537139, -8.396883,0),
                new Coordinate(41.537131, -8.396881,0),
                new Coordinate(41.537121, -8.396877,0),
                new Coordinate(41.537110, -8.396875,0),
                new Coordinate(41.537101, -8.396872,0),
                new Coordinate(41.537093, -8.396869,0),
                new Coordinate(41.537083, -8.396867,0)
        );


        List<Coordinate> pedestrainCoords = Arrays.asList(
                new Coordinate(41.536975, -8.397177, 0),
                new Coordinate(41.536980, -8.397167, 0),
                new Coordinate(41.536985, -8.397153, 0),
                new Coordinate(41.536989, -8.397141, 0),
                new Coordinate(41.536995, -8.397134, 0),
                new Coordinate(41.537000, -8.397122, 0),
                new Coordinate(41.537002, -8.397114, 0),
                new Coordinate(41.537008, -8.397101, 0),
                new Coordinate(41.537012, -8.397090, 0),
                new Coordinate(41.537016, -8.397079, 0),
                new Coordinate(41.537020, -8.397069, 0),
                new Coordinate(41.537022, -8.397061, 0),
                new Coordinate(41.537026, -8.397053, 0),
                new Coordinate(41.537031, -8.397043, 0),
                new Coordinate(41.537033, -8.397033, 0),
                new Coordinate(41.537036, -8.397025, 0),
                new Coordinate(41.537040, -8.397016, 0),
                new Coordinate(41.537041, -8.397004, 0),
                new Coordinate(41.537044, -8.396994, 0),
                new Coordinate(41.537046, -8.396984, 0),
                new Coordinate(41.537047, -8.396976, 0),
                new Coordinate(41.537050, -8.396966, 0),
                new Coordinate(41.537053, -8.396955, 0),
                new Coordinate(41.537057, -8.396944, 0),
                new Coordinate(41.537062, -8.396939, 0),
                new Coordinate(41.537064, -8.396930, 0),
                new Coordinate(41.537065, -8.396919, 0),
                new Coordinate(41.537066, -8.396904, 0),
                new Coordinate(41.537066, -8.396892, 0),
                new Coordinate(41.537067, -8.396884, 0),
                new Coordinate(41.537069, -8.396876, 0),
                new Coordinate(41.537069, -8.396860, 0)
        );

        int nvehicles = 1;
        int npedestrians = 1;

        // array com ambos pedestres e carros
        Device[] devices = new Device[nvehicles + npedestrians];
        int i = 0;

        // cria os vehiculos
        for(int k=0 ; k<nvehicles; k++, i++) {
            devices[i] = new Device("v" + k, vehicleCoords, true);
        }

        // cria os pedestres
        for(int k=0 ; k<npedestrians; k++, i++) {
            devices[i] = new Device("p" + k, pedestrainCoords, true);
        }

        for(Device device: devices) {
            device.start();
        }

    }

}
