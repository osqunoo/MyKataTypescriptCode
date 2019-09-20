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
const MIN_LIMIT = 0;
const MAX_LIMIT = 50;
let updateItems = function(item) {
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > MIN_LIMIT) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality -= 1;
            }
        }
    }
    else {
        if (item.quality < MAX_LIMIT) {
            item.quality = item.quality + 1;
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn < 11) {
                    if (item.quality < MAX_LIMIT) {
                        item.quality += 1;
                    }
                }
                if (item.sellIn < 6) {
                    if (item.quality < MAX_LIMIT) {
                        item.quality += 1;
                    }
                }
            }
        }
    }
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1;
    }
    if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality > MIN_LIMIT) {
                    if (item.name != 'Sulfuras, Hand of Ragnaros') {
                        item.quality -= 1;
                    }
                }
            }
            else {
                item.quality -= item.quality;
            }
        }
        else {
            if (item.quality < MAX_LIMIT) {
                item.quality += 1;
            }
        }
    }
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


