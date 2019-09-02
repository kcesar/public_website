let locationData = [
    {Id: 'TH00001', LocationType: 'Trailhead', LocName: 'annette', FullName: 'Annette Lake Trailhead', Coordinates: '47.392933,-121.474159'},
    {Id: 'TH00002', LocationType: 'LZ', LocName: 'bandera-lz', FullName: 'Bandera Airstrip', Coordinates: '47.394170,-121.529720'},
    {Id: 'TH00003', LocationType: 'Trailhead', LocName: 'cedar', FullName: 'Cedar Butte Trailhead', Coordinates: '47.432500,-121.766403'},
    {Id: 'TH00004', LocationType: 'Trailhead', LocName: 'little-si', FullName: 'Little Si Trailhead', Coordinates: '47.486716,-121.753506'},
    {Id: 'TH00005', LocationType: 'Trailhead', LocName: 'si', FullName: 'Mt. Si Trailhead', Coordinates: '47.488006,-121.723208'},
    {Id: 'TH00006', LocationType: 'Trailhead', LocName: 'ten', FullName: 'Mt. Teneriffe Trailhead', Coordinates: '47.486756,-121.710034'},
    {Id: 'TH00007', LocationType: 'Trailhead', LocName: 'ten-sb', FullName: 'Mt. Teneriffe - School Bus Turnaround', Coordinates: '47.486085,-121.701036'},
    {Id: 'TH00008', LocationType: 'Trailhead', LocName: 'ledge', FullName: 'Rattlesnake Ledge Trailhead', Coordinates: '47.435384,-121.771670'},
    {Id: 'TH00009', LocationType: 'Trailhead', LocName: 'snow', FullName: 'Snow Lake Trailhead', Coordinates: '47.445451,-121.423703'}
];

let locationMap = new Map();
for (var i=0; i<locationData.length; i++) {
    locationMap.set(locationData[i].LocName, locationData[i]);
}