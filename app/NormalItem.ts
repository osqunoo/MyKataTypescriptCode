import { decreaseSellIn, isExpired, decreaseQuality } from "./operations";
import { ItemsFamily } from "./ItemsFamily";
export class NormalItem implements ItemsFamily {
    public update(item): void {
        if(item != undefined){
            decreaseSellIn(item);
            decreaseQuality(item);
            if (isExpired(item)) {
                decreaseQuality(item);
            }
        }
        
    }
    public isUsefulFor(item): boolean {
        return (item.name != 'Sulfuras, Hand of Ragnaros' && item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert');
    };
}