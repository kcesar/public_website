let locationData = [
    {Id: 'TH00001',LocName: 'alpental', FullName: 'ALPENTAL SKI AREA PARKING', Coordinates: '47.445451,-121.423703'},
    {Id: 'TH00002',LocName: 'annette', FullName: 'ANNETTE LAKE TRAILHEAD', Coordinates: '47.392933,-121.474159'},
    {Id: 'TH00003',LocName: 'bandera-lz', FullName: 'BANDERA AIR STRIP', Coordinates: '47.39417, -121.52972'},
    {Id: 'TH00004',LocName: 'cedar-butte', FullName: 'CEDAR BUTTE', Coordinates: '47.432500,-121.766403'},
    {Id: 'TH00005',LocName: 'little-si', FullName: 'LITTLE SI TRAILHEAD', Coordinates: '47.486716,-121.753506'},
    {Id: 'TH00006',LocName: 'big-si', FullName: 'MT SI TRAILHEAD', Coordinates: '47.488006,-121.723208'},
    {Id: 'TH00007',LocName: 'rat-ldg', FullName: 'LITTLE RATTLESNAKE LAKE', Coordinates: '47.435384,-121.771670'},
    {Id: 'TH00008',LocName: 'ten', FullName: 'MT TENERIFFE', Coordinates: '47.486756,-121.710034'},
    {Id: 'TH00009',LocName: 'ten-sb', FullName: 'MT TENERIFFE - SCHOOL BUS TURNAROUND', Coordinates: '47.486085,-121.701036'}
];

let locationMap = new Map();
for (var i=0; i<locationData.length; i++) {
    locationMap.set(locationData[i].LocName, locationData[i]);
}