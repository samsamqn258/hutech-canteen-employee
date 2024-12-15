import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getCategorySalesOfShop, getBestSellingProductsOfShop } from "../../services/apiOrder";
import { extractCategoryData } from "../../utils/extracter";
import SpinnerMini from "../../ui/SpinnerMini";

import { generateRandomColors } from "../../utils/generator";
import CircleChart from "../../ui/chart/CircleChart";
import LineChartSales from "../../ui/chart/LineChartSales";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategorySales() {
    const [categorySales, setCategorySales] = useState([]);
    const [isCategorySaleLoading, setCategorySaleIsLoading] = useState(true);
    const [bestDishes, setBestDishes] = useState([]);
    const [isBestDishesLoading, setIsBestDishesLoading] = useState(true);

    if (isCategorySaleLoading && isBestDishesLoading) {
        <SpinnerMini />
    }

    useEffect(() => {
        async function fetchOrders() {
            try {
                setCategorySaleIsLoading(true);
                setIsBestDishesLoading(true);

                let data = await getCategorySalesOfShop();
                const extractedData = extractCategoryData(data?.metaData);

                data = await getBestSellingProductsOfShop()

                setCategorySales(extractedData);
                setBestDishes(data)
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setCategorySaleIsLoading(false);
                setIsBestDishesLoading(false)
            }
        }

        fetchOrders();
    }, []);

    const totalRevenue = categorySales
        .reduce((acc, item) => acc + item.categoryRevenue, 0)
        .toLocaleString();
    const highestRevenueCategory =
        categorySales.reduce(
            (max, item) => (item.categoryRevenue > max.categoryRevenue ? item : max),
            categorySales[0]
        )?.categoryName || "N/A";
    const lowestRevenueCategory =
        categorySales.reduce(
            (min, item) => (item.categoryRevenue < min.categoryRevenue ? item : min),
            categorySales[0]
        )?.categoryName || "N/A";
    const colors = generateRandomColors(categorySales.length);
    const chartData = {
        labels: categorySales.map(
            (item) =>
                `${item.categoryName} (${item.categoryRevenue.toLocaleString()} VND)`
        ),
        datasets: [
            {
                data: categorySales.map((item) => item.percentage),
                backgroundColor: colors,
                hoverBackgroundColor: colors,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    boxWidth: 20,
                    padding: 10,
                    font: {
                        size: 16,
                        family: "'Roboto', sans-serif",
                        weight: "semibold",
                    },
                },
            },
        },
    };

    return (
        <>
            <h2 className="my-6 text-5xl font-semibold text-center text-gray-700">
                Doanh Thu Theo Danh Mục
            </h2>
            <div className="p-4 mt-8 bg-white rounded-lg shadow">
                {isBestDishesLoading && isCategorySaleLoading ? (
                    <div className="flex items-center justify-center h-64">
                        <SpinnerMini />
                    </div>
                ) : (
                    <div>
                        <CircleChart
                            categorySales={categorySales}
                            chartData={chartData}
                            chartOptions={chartOptions}
                            highestRevenueCategory={highestRevenueCategory}
                            lowestRevenueCategory={lowestRevenueCategory}
                            totalRevenue={totalRevenue}
                        />
                        <LineChartSales bestDishes={bestDishes} />
                    </div>
                )}
            </div>
        </>
    );
}
