export function addOffset(map) {
    // console.log('offset was added');
    const offsetY = map.getSize().y * 0.1;

    map.panBy([0, -offsetY], {animate: false});
}