import { MAX_LIMIT, MIN_LIMIT } from "./gilded-rose";
export const increaseQuality = function (item) {
    if (item.quality < MAX_LIMIT) {
        item.quality += 1;
    }
};
export const decreaseQuality = function (item) {
    if (item.quality > MIN_LIMIT) {
        item.quality -= 1;
    }
};
export const decreaseSellIn = function (item) {
        item.sellIn -= 1;
};
export const isExpired = function (item) {
    return item.sellIn < 0;
};
