import { decreaseSellIn, increaseQuality, isExpired } from "./operations";
import { ItemsFamily } from "./ItemsFamily";
export class Backstage implements ItemsFamily {
    public update(item): void {
        decreaseSellIn(item);
        increaseQuality(item);
        if (item.sellIn < 10) {
            increaseQuality(item);
        }
        if (item.sellIn < 5) {
            increaseQuality(item);
        }
        if (isExpired(item)) {
            item.quality -= item.quality;
        }
    }
    public isUsefulFor(item): boolean {
        return item.name === 'Backstage passes to a TAFKAL80ETC concert';
    };
}