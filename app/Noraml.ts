import { decreaseSellIn, isExpired, decreaseQuality } from "./operations";
export const NoramlUpdate = function (item) {
    decreaseSellIn(item);
    decreaseQuality(item);
    if (isExpired(item)) {
        decreaseQuality(item);
    }
};
