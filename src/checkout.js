function assertNonNegativeAmount(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name} harus berupa angka terbatas.`);
  }
  if (value < 0) {
    throw new RangeError(`${name} tidak boleh negatif.`);
  }
}

function calculateOrderTotal(subtotal, discountPercent, shippingFee) {
  assertNonNegativeAmount(subtotal, 'Subtotal');
  assertNonNegativeAmount(shippingFee, 'Ongkos kirim');

  if (typeof discountPercent !== 'number' || !Number.isFinite(discountPercent)) {
    throw new TypeError('Persentase diskon harus berupa angka terbatas.');
  }
  if (discountPercent < 0 || discountPercent > 100) {
    throw new RangeError('Persentase diskon harus berada di antara 0 dan 100.');
  }

  const discount = subtotal * (discountPercent / 100);
  const total = subtotal - discount + shippingFee;
  return Math.round((total + Number.EPSILON) * 100) / 100;
}

module.exports = { calculateOrderTotal };
