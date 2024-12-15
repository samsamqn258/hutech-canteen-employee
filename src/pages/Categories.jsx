// import AddCategory from '../features/category/AddCategory';
// import CategoryTable from '../features/category/CategoryTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

export default function Categories() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Tất cả các danh mục</Heading>
                {/* <AddCategory /> */}
            </Row>
            {/* <Row>
                <CategoryTable />
            </Row> */}
        </>
    );
}
