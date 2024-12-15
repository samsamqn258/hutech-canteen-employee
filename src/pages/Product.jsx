// import ProductTable from '../features/product/ProductTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
// import AddProduct from '../features/product/AddProduct';
// import SearchProduct from '../features/product/SearchProduct';
export default function Product() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Tất cả các sản phẩm</Heading>
                {/* <Row type="horizontal">
                    <SearchProduct />
                    <AddProduct />
                </Row> */}
            </Row>
            {/* <Row>
                <ProductTable />
            </Row> */}
        </>
    );
}
