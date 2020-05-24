import math

crosswalks = {}
crosswalks[0] = [1,2,3]
crosswalks[1] = [44,33,99]
crosswalks[2] = [1,293,77]

def closestCrosswalk():

    #dic = json.loads(body.decode())

    distances = {}

    #id = dic["id"]
    coords = {}
    coords[0] = 20
    coords[1] = 20
    coords[2] = 20
    # coords[0] = dic["latitude"]
    # coords[1] = dic["longitude"]
    # coords[2] = dic["altitude"]

    for key in crosswalks:
        crosswalk = crosswalks.get(key)
        distances[key] = math.sqrt( ((coords[0]-crosswalk[0])**2)+((coords[1]-crosswalk[1])**2)+((coords[2]-crosswalk[2])**2) )
        
    id_closest_crosswalk = min(distances, key=distances.get)
    print(id_closest_crosswalk)

closestCrosswalk()