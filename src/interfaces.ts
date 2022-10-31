class Box {
    constructor(){

    }

    sku: SKU;
    width: number;
    height: number;
    length: number;

}

export default class SKU {
    constructor(id: string, name: string, description: string, qtyOnHand: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.qtyOnHand = qtyOnHand;
    }

    id: string;
    name: string;
    description: string;

    qtyOnHand: number;

    supplier?: string;

    cost?: number;

    uuid: string;
}

class Bottle {
    constructor(){

    }

    sku: SKU;
    size: number;
    material: string;

}

class Closure {
    constructor(){

    }

    sku: SKU;
    size: number;
    material?: string;

}

class Label {
    constructor(){

    }

    sku: SKU;
    size: number;
    product: Product;
}

// single bottle finished product
class Product {
    constructor(){

    }

    sku: SKU;
    size: number;
    containerType: string;

    price: number;
}

// full case finished product
class ProductCase {
    constructor(){

    }

    sku: SKU;
    size: number;
    unitsPerCase: number;
    box: Box;
    product: Product;

    price: number;
}