import { isLegendary } from "./Legendary";
import { isBackstage, updateBackstage } from "./Backstage";
import { isCheese, updateCheese } from "./Cheese";
import { NoramlUpdate } from "./Noraml";
export const MIN_LIMIT = 0;
export const MAX_LIMIT = 50;
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
let updateItems = function(item) {
    if(isLegendary(item)){
        return;
    }
    if(isCheese(item)){
        return updateCheese(item);
    }
    if (isBackstage(item)) {
        return updateBackstage(item);
    }
    NoramlUpdate(item);
}
export class GildedRose {
    items: Array<Item>;
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach(updateItems);
        return this.items;
    }
}