// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100003040403030303030503050404030303030304030302030303050503040303030303010101010103030101010101030303030101010101030301010101010303040301010101010303010101010103030303010101010103030101010101030403030101010101030301010101010304050505040203030304040203030303040505030304030303030303030303030303030101010101030301010101010303030301010101010303010101010103030303010101010103040101010101030303030101010101030401010101010303030301010101010304010101010103030302040303030303020303030505040303030304040303030304040505050403`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.tile0,myTiles.tile1,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile0":return tile0;
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
