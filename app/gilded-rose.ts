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
let decreaseQuality  = function(item) {
    if (item.quality > MIN_LIMIT) {
        item.quality -= 1;
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
let decreaseSellIn = function(item) {
    item.sellIn -= 1;
}

let isExpired = function(item) {
    return item.sellIn < 0;
}
let NoramlUpdate = function(item){
    decreaseSellIn(item);
    decreaseQuality(item);
    if (isExpired(item)) {
        decreaseQuality(item);
    }
}
let updateItems = function(item) {
    if(isLegendary(item)){
        return;
    }

    if(isCheese(item)){
        decreaseSellIn(item);
        increaseQuality(item);
        if (isExpired(item)) {
            increaseQuality(item);
        }
        return;
    }
    if (isBackstage(item)) {
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
        return;
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












