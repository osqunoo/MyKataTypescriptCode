
import { Cheese } from "./Cheese";
import { Legendary } from "./Legendary";
import { Backstage } from "./Backstage";
import { NormalItem } from "./NormalItem";
import { ItemsFamily } from "./ItemsFamily";

export class Item {
    name: string;
    sellIn: number;
    quality: number;
    class: ItemsFamily;
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        switch(name){
            case 'Aged Brie':
                this.class = new Cheese(); 
                break;
            case 'Sulfuras, Hand of Ragnaros':
                this.class = new Legendary(); 
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                this.class = new Backstage(); 
                break;
            default:
                this.class = new NormalItem();
                break;
        }
        
    }
}
