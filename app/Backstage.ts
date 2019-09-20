import { decreaseSellIn, increaseQuality, isExpired } from "./operations";
export const isBackstage = function (item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
};
export const updateBackstage = function (item) {
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
};
