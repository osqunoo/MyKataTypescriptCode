import { ItemsFamily } from "./ItemsFamily";
export class Legendary implements ItemsFamily {
    public update(item): void {
        item.name = 'Sulfuras, Hand of Ragnaros';
    }
    public isUsefulFor(item): boolean {
        return item.name === 'Sulfuras, Hand of Ragnaros';
    };
}