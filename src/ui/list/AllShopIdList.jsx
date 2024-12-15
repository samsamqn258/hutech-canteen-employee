export default function AllShopIdList({ data, onChange }) {
    const newData =
        data.map((shop) => ({ label: shop.shop_name, value: shop._id })) || [];

    return (
        <div className="w-full mt-5">
            <h3 className="mb-4 text-xl font-medium">Danh sách cửa hàng</h3>
            <select
                className="w-full px-3 py-5 border border-gray-300 rounded-lg shadow-sm bg-gray-0"
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            >
                {newData.length === 0 ? (
                    <option value="" disabled>
                        {""}
                    </option>
                ) : (
                    newData.map((data, index) => (
                        <option key={index} value={data.value}>
                            {data.label}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
}
