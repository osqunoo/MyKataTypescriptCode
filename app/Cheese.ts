import { decreaseSellIn, increaseQuality, isExpired } from "./operations";
export const isCheese = function (item) {
    return item.name === 'Aged Brie';
};
export const updateCheese = function (item) {
    decreaseSellIn(item);
    increaseQuality(item);
    if (isExpired(item)) {
        increaseQuality(item);
    }
};
