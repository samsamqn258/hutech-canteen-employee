import React from 'react'
import { formattedTime } from '../../utils/helpers'

export default function SummaryOrderItem({ order }) {
    const { _id, totalQuantity, productName, product_thumb, generatedAt } = order

    return (
        <article className='p-4 bg-white shadow-lg rounded-md relative '>
            <div className='flex flex-row gap-6 mr-20'>
                <img src={product_thumb} className='w-48 h-48 object-contain' />
                <div className='w-52' >
                    <h2 className=' text-3xl font-semibold'>{productName}</h2>

                    <p className='text-xl mt-4'> {formattedTime(generatedAt)}</p>
                </div>
            </div>
            <p className='absolute text-2xl top-0 right-0 bg-blue-400 text-white font-semibold py-3 px-8'> {totalQuantity}</p>
        </article>
    )
}
