// import AddSubCategory from '../features/sideDish/AddSubCategory';
// import SubCategoryTable from '../features/sideDish/SubCategoryTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

export default function SideDish() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Tất cả các danh mục phụ</Heading>
                {/* <AddSubCategory /> */}
            </Row>
            {/* <Row>
                <SubCategoryTable />
            </Row> */}
        </>
    );
}
