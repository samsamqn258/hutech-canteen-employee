function Empty({ title }) {
    return (
        <p className="flex h-96 items-center justify-center text-4xl">
            Không có đơn hàng nào {title} được tìm thấy.
        </p>
    );
}

export default Empty;
