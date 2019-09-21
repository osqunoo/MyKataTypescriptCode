import { Item } from "./Item";


export const MIN_LIMIT = 0;
export const MAX_LIMIT = 50;
let updateItems= function(item) {
    item.class.update();
}
export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item> ) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach(updateItems);
        return this.items;
    }
    
}