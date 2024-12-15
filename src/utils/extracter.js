export function extractOrderDetails(orders) {
    return orders.map(order => ({
        _id: order._id,
        userName: order.order_userId.name,
        finalPrice: order.order_checkout.finalPrice,
        products: order.order_product.map(product => ({
            product_id: product.product_id,
            quantity: product.quantity,
            product_thumb: product.product_thumb,
            product_name: product.product_name,
            extras: product.extra
                ? product.extra.map(extra => ({
                    sideDish_name: extra.sideDish_name,
                    quantity: extra.quantity,
                }))
                : [],
        })),
    }));
}

export function extractCategoryData(metaData) {
    return metaData
        .filter(item => item.categoryRevenue > 0)
        .map(item => ({
            categoryRevenue: item.categoryRevenue,
            percentage: item.percentage,
            categoryName: item.categoryInfo.category_name
        }));
}
