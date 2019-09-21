import { decreaseSellIn, increaseQuality, isExpired } from "./operations";
import { ItemsFamily } from "./ItemsFamily";

export class Cheese implements ItemsFamily {
    public update(item): void {
        decreaseSellIn(item);
        increaseQuality(item);
        if (isExpired(item)) {
            increaseQuality(item);
        }
    }
    public isUsefulFor(item): boolean {
        return item.name === 'Aged Brie';
    };
}