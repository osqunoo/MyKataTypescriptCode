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

let increaseQuality = function(item) {
    if (item.quality < MAX_LIMIT) {
        item.quality += 1;
    }
}
let isLegendary = function(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
}

let isBackstage = function(item){
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

let isCheese = function(item) {
    return item.name === 'Aged Brie';
}

let updateItems = function(item) {
    if (!(isCheese(item)) && !(isBackstage(item))) {
        if (item.quality > MIN_LIMIT) {
            if (!isLegendary(item)) {
                item.quality -= 1;
            }
        }
    }
    else {
        if (item.quality < MAX_LIMIT) {
            item.quality = item.quality + 1;
            if (isBackstage(item)) {
                if (item.sellIn < 11) {
                    increaseQuality(item);
                }
                if (item.sellIn < 6) {
                    increaseQuality(item);
                }
            }
        }
    }
    if (!(isLegendary(item))) {
        item.sellIn -= 1;
    }
    if (item.sellIn < 0) {
        if (!(isCheese(item))) {
            if (!(isLegendary(item))) {
                if (item.quality > MIN_LIMIT) {
                    if (!(isLegendary(item))) {
                        item.quality -= 1;
                    }
                }
            }
            else {
                item.quality -= item.quality;
            }
        }
        else {
            increaseQuality(item);
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





