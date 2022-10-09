import axios from "axios";
import {v4 as uuid4} from "uuid";


export const ItemsData = [

    {
        id: uuid4(),
        title: "PIKOWANA KURTKA Z KAPTUREM",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/14024.jpeg",
        material: "100% poliester",
        sex: "M",
        price: 199.9,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: true,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "OVERSIZED CHECK BLAZER",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/80470.jpeg",
        material: "63% polyester · 34% viscose · 3% elastane",
        sex: "F",
        price: 69.9,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: true,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "BASIC HOODIE",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/07613.jpeg",
        material: "64% polyester · 36% cotton",
        sex: "M",
        price: 119.9,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: false,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "PUFFER GILET",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/69853.jpeg",
        material: "100% polyester",
        sex: "M",
        price: 199,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: false,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "RECTANGULAR SUNGLASSES",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/27503.jpeg",
        material: "100% acetate",
        sex: "M",
        price: 199,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: true,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: true,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: true,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: true,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "PLATFORM ANKLE BOOTS",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/28010.jpeg",
        material: "100% polyester",
        sex: "F",
        price: 99.9,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: true,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "BASIC HOODIE",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/07612.jpeg",
        material: "63% cotton · 37% polyester",
        sex: "M",
        price: 119.9,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: true,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: true,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: true,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "FADED CAP",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/39203.jpeg",
        material: "84% cotton · 12% polyester · 4% viscose",
        sex: "M",
        price: 69.9,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: true,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "Bomber Levis",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/bomber.png",
        material: "100% cotton",
        sex: "M",
        price: 79.9,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: true,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    },
    {
        id: uuid4(),
        title: "DENIM JACKET",
        imageLink: "https://storage.googleapis.com/kraftdrew_marketplace_assets/43652.jpeg",
        material: "100% cotton",
        sex: "F",
        price: 139,
        size: [
            {
                name: 'XS',
                value: 'xs',
                isDisabled: false,
            },
            {
                name: 'S',
                value: 's',
                isDisabled: false,
            },
            {
                name: 'M',
                value: 'm',
                isDisabled: false,
            },
            {
                name: 'L',
                value: 'l',
                isDisabled: false,
            },
            {
                name: 'XL',
                value: 'xl',
                isDisabled: false,
            }]
    }
]



