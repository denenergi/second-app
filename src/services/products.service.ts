"use client"
import axios from "axios"
import { IProduct } from "../types/product.interfaces"

const PRODUCTS = "http://localhost:4200/products"

export const ProductService = {
    async getAll() {
        const { data } = await axios<IProduct[]> ({
            url: PRODUCTS,
            method: 'GET'
        })

        return data
    }
}