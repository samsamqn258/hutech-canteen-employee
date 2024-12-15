import { useState, useEffect } from "react";
import SpinnerMini from "../../ui/SpinnerMini";
import { getBestSellingProductsOfShop } from "../../services/apiOrder";
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

export default function BestDishes() {
    const [bestDishes, setBestDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchBestDishes() {
            try {
                const data = await getBestSellingProductsOfShop();
                setBestDishes(data);
            } catch (error) {
                console.error("Failed to fetch best dishes:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBestDishes();
    }, []);

    if (isLoading) {
        return <SpinnerMini />;
    }

    return (
        <div className="w-full mt-6 h-96">
            <h3 className="mb-10 text-4xl font-semibold text-center">
                Thống Kê Những Món Bán Chạy
            </h3>
            <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={bestDishes}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_name" />
                        <YAxis
                            yAxisId="quantity"
                            label={{ value: "Quantity", angle: -90, position: "insideLeft" }}
                        />
                     <YAxis
    yAxisId="revenue"
    orientation="right"
    label={{
        value: "Revenue (VND)",
        angle: 90,
        position: "insideRight",
        textAnchor: "middle", // Align label text to the center
        transform: "translate(10, 0)", // Adjust position for better visibility
    }}
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
                            name="Quantity"
                        />
                        <Line
                            yAxisId="revenue"
                            type="monotone"
                            dataKey="totalRevenue"
                            stroke="#82ca9d"
                            name="Revenue"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}