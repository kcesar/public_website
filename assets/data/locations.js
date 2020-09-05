let locationData = [
    {Id: 'TH00001', LocationType: 'Trailhead', LocName: 'annette', FullName: 'Annette Lake Trailhead', Coordinates: '47.392933,-121.474159'},
    {Id: 'LZ00001', LocationType: 'LZ', LocName: 'bandera-lz', FullName: 'Bandera Airstrip', Coordinates: '47.394170,-121.529720'},
    {Id: 'TH00002', LocationType: 'Trailhead', LocName: 'cedar-butte', FullName: 'Cedar Butte Trailhead', Coordinates: '47.432500,-121.766403'},
    {Id: 'TH00003', LocationType: 'Trailhead', LocName: 'cherry', FullName: 'Cherry Creek Falls Trailhead', Coordinates: '47.745910,-121.908272'},
    {Id: 'TH00004', LocationType: 'Trailhead', LocName: 'chirico', FullName: 'Chirico Trailhead', Coordinates: '47.499973,-121.022093'},
    {Id: 'TH00005', LocationType: 'Trailhead', LocName: 'denny', FullName: 'Denny Creek Trailhead', Coordinates: '47.415302,-121.443362'},
    {Id: 'TH00006', LocationType: 'Trailhead', LocName: 'dirty-harry', FullName: 'Dirty Harry\'s Balcony Trailhead', Coordinates: '47.431016,-121.632682'},
    {Id: 'TH00007', LocationType: 'Trailhead', LocName: 'granite-creek', FullName: 'Granite Creek Trailhead', Coordinates: '47.491971,-121.639978'},
    {Id: 'TH00008', LocationType: 'Trailhead', LocName: 'humpback', FullName: 'Humpback Mountain Trailhead', Coordinates: '47.378437,-121.516076'},
    {Id: 'TH00009', LocationType: 'Trailhead', LocName: 'ira', FullName: 'Ira Spring Trailhead', Coordinates: '47.424665,-121.583397'},
    {Id: 'TH00010', LocationType: 'Trailhead', LocName: 'issaquah-rock', FullName: 'Issaquah Rock', Coordinates: '47.513308,-122.078252'},
    {Id: 'TH00011', LocationType: 'Trailhead', LocName: 'little-si', FullName: 'Little Si Trailhead', Coordinates: '47.486716,-121.753506'},
    {Id: 'TH00012', LocationType: 'Trailhead', LocName: 'mailbox', FullName: 'Mailbox Peak Trailhead', Coordinates: '47.466722,-121.673780'},
    {Id: 'TH00013', LocationType: 'Trailhead', LocName: 'middle-fork', FullName: 'Middle Fork Trailhead', Coordinates: '47.548436,-121.537489'},
    {Id: 'TH00014', LocationType: 'Trailhead', LocName: 'mt-si', FullName: 'Mt. Si Trailhead', Coordinates: '47.488006,-121.723208'},
    {Id: 'TH00015', LocationType: 'Trailhead', LocName: 'teneriffe', FullName: 'Mt. Teneriffe Trailhead', Coordinates: '47.486756,-121.710034'},
    {Id: 'TH00016', LocationType: 'Trailhead', LocName: 'teneriffe-sb', FullName: 'Mt. Teneriffe - School Bus Turnaround', Coordinates: '47.486085,-121.701036'},
    {Id: 'TH00017', LocationType: 'Trailhead', LocName: 'washington', FullName: 'Mt. Washington Trailhead', Coordinates: '47.441805,-121.672561'},
    {Id: 'TH00018', LocationType: 'Trailhead', LocName: 'ledge', FullName: 'Rattlesnake Ledge Trailhead', Coordinates: '47.435384,-121.771670'},
    {Id: 'TH00019', LocationType: 'Trailhead', LocName: 'falls', FullName: 'Snoqualmie Falls', Coordinates: '47.543085,-121.836905'},
    {Id: 'TH00020', LocationType: 'Trailhead', LocName: 'snow', FullName: 'Snow Lake Trailhead', Coordinates: '47.445451,-121.423703'},
    {Id: 'TH00021', LocationType: 'Trailhead', LocName: 'talapus', FullName: 'Talapus Lake Trailhead', Coordinates: '47.401153,-121.518396'},
    {Id: 'TH00022', LocationType: 'Trailhead', LocName: 'taylor', FullName: 'Taylor River Trailhead', Coordinates: '47.555894,-121.535797'},
    {Id: 'TH00023', LocationType: 'Trailhead', LocName: 'twin', FullName: 'Twin Falls Trailhead', Coordinates: '47.452903,-121.705403'}
];

let locationMap = new Map();
for (var i=0; i<locationData.length; i++) {
    locationMap.set(locationData[i].LocName, locationData[i]);
}