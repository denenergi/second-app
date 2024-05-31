import Catalog from "../../components/ui/catalog/Catalog"
import { ProductService } from "../../services/products.service"

async function getProducts() {
    const data = await ProductService.getAll()

    return data
}

export default async function CatalogPage() {
    const data = await getProducts()
    return (
        <Catalog products={data} isFull/>
    )
}