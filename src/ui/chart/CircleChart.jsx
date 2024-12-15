import {
    FaCheckCircle,
    FaMoneyBillWave,
    FaArrowUp,
    FaArrowDown,
} from "react-icons/fa";
import { Pie } from "react-chartjs-2";

export default function CircleChart({
    categorySales,
    chartData,
    chartOptions,
    totalRevenue,
    highestRevenueCategory,
    lowestRevenueCategory,
}) {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <div className="flex p-6 space-x-4 text-white bg-green-500 rounded-lg shadow-2xl">
                    <div className="flex items-center justify-center w-1/4">
                        <FaCheckCircle className="text-4xl opacity-75" size={60} />
                    </div>
                    <div className="flex flex-col justify-center w-3/4">
                        <h3 className="my-2 text-2xl font-semibold text-end">
                            Đơn đã hoàn thành
                        </h3>
                        <h3 className="text-3xl font-bold text-white text-end">
                            {categorySales.length}
                        </h3>
                    </div>
                </div>
                <div className="flex p-6 space-x-4 text-white bg-blue-500 rounded-lg shadow-2xl">
                    <div className="flex items-center justify-center w-1/4">
                        <FaMoneyBillWave className="text-4xl opacity-75" size={60} />
                    </div>
                    <div className="flex flex-col justify-center w-3/4">
                        <h3 className="my-2 text-2xl font-semibold text-end">
                            Tổng doanh thu
                        </h3>
                        <h3 className="text-3xl font-bold text-white text-end">
                            {totalRevenue} VND
                        </h3>
                    </div>
                </div>
                <div className="flex p-6 space-x-4 text-white bg-yellow-500 rounded-lg shadow-2xl">
                    <div className="flex items-center justify-center w-1/4">
                        <FaArrowUp className="text-4xl opacity-75" size={60} />
                    </div>
                    <div className="flex flex-col justify-center w-3/4">
                        <h3 className="my-2 text-2xl font-semibold text-end">
                            Món nhiều đơn nhất
                        </h3>
                        <h3 className="text-3xl font-bold text-white text-end">
                            {highestRevenueCategory}
                        </h3>
                    </div>
                </div>
                <div className="flex p-6 space-x-4 text-white bg-red-500 rounded-lg shadow-2xl">
                    <div className="flex items-center justify-center w-1/4">
                        <FaArrowDown className="text-4xl opacity-75" size={60} />
                    </div>
                    <div className="flex flex-col justify-center w-3/4">
                        <h3 className="my-2 text-2xl font-semibold text-end">
                            Món ít đơn nhất
                        </h3>
                        <h3 className="text-3xl font-bold text-white text-end">
                            {lowestRevenueCategory}
                        </h3>
                    </div>
                </div>
            </div>

            <div className="h-[400px]">
                <Pie  data={chartData} options={chartOptions} />
            </div>
        </div>
    );
}
