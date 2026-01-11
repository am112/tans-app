export default function ProductInformation() {
  const product = {
    name: 'iPhone 17',
    image: 'https://shop.switch.com.my/cdn/shop/files/iPhone_17_Pro_Cosmic_Orange_PDP_Image_Position_1_Cosmic_Orange_Colour__MY-EN.jpg?v=1757619341',
    price: 1199,
    variant: 'Black',
    quantity: 1,
  }

  return (
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md space-y-4">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg shadow object-contain"
      />

      {/* Product Name */}
      <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>

      {/* Price */}
      <p className="text-lg font-bold text-green-600">${product.price.toLocaleString()}</p>

      {/* Variant */}
      <div className="flex justify-between text-gray-700">
        <span className="font-medium">Variant:</span>
        <span>{product.variant}</span>
      </div>

      {/* Quantity */}
      <div className="flex justify-between text-gray-700">
        <span className="font-medium">Quantity:</span>
        <span>{product.quantity}</span>
      </div>
    </div>
  )
}
