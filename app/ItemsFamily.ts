import { Item } from "./Item";
export interface ItemsFamily {
    update(Item): void;
    isUsefulFor(item): boolean;
}
