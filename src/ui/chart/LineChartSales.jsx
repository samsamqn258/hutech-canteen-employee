import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function LineChartSales({ bestDishes }) {
    return (
        <div className="w-full h-[400px]">
            <h3 className="mt-20 mb-10 text-5xl font-semibold text-center">
                Thống Kê Những Món Bán Chạy
            </h3>
            <div className="w-full h-full">
                <ResponsiveContainer className="pb-7" width="100%" height="100%">
                    <LineChart
                        data={bestDishes}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_name" />
                        <YAxis
                            className="text-3xl"
                            yAxisId="quantity"
                            label={{ value: "Số lượng", angle: -90, position: "insideLeft" }}
                        />
                        <YAxis
                            className="text-3xl"
                            yAxisId="revenue"
                            orientation="right"
                            label={{
                                value: "VND",
                                angle: 0,
                                position: "insideRight",
                                textAnchor: "middle",
                                transform: "translate(30, -40)",
                            }}
                            style={{ marginLeft: "20px" }} 
                        />
                        <Tooltip
                            formatter={(value, name) => {
                                if (name === "totalQuantity") return [value, "Quantity"];
                                if (name === "totalRevenue") return [`${value.toLocaleString()} VND`, "Revenue"];
                                return [value, name];
                            }}
                            labelFormatter={(label) =>
                                bestDishes.find((item) => item.product_name === label)?.product_name
                            }
                        />
                        <Legend />
                        <Line
                            yAxisId="quantity"
                            type="monotone"
                            dataKey="totalQuantity"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                            name="Số lượng"
                            className="!mt-5"
                        />
                        <Line
                        
                            yAxisId="revenue"
                            type="monotone"
                            dataKey="totalRevenue"
                            stroke="#82ca9d"
                            name="Doanh thu"
                            className="!mt-5"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}