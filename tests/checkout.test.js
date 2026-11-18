const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateOrderTotal } = require('../src/checkout');

test('menghitung subtotal dengan ongkos kirim tanpa diskon', () => {
  assert.equal(calculateOrderTotal(100000, 0, 10000), 110000);
});

test('mengurangi diskon dari subtotal sebelum menambah ongkir', () => {
  assert.equal(calculateOrderTotal(250000, 10, 15000), 240000);
});

test('diskon 100 persen menyisakan ongkos kirim', () => {
  assert.equal(calculateOrderTotal(50000, 100, 8000), 8000);
});

test('membulatkan hasil ke dua angka desimal', () => {
  assert.equal(calculateOrderTotal(120.5, 10, 5), 113.45);
});

test('menerima nilai nol', () => {
  assert.equal(calculateOrderTotal(0, 0, 0), 0);
});

test('menolak subtotal negatif', () => {
  assert.throws(() => calculateOrderTotal(-1, 0, 0), RangeError);
});

test('menolak ongkos kirim negatif', () => {
  assert.throws(() => calculateOrderTotal(100, 0, -1), RangeError);
});

test('menolak diskon di luar rentang 0 sampai 100', () => {
  assert.throws(() => calculateOrderTotal(100, 101, 0), RangeError);
});

test('menolak teks sebagai subtotal', () => {
  assert.throws(() => calculateOrderTotal('100', 0, 0), TypeError);
});

test('menolak angka bukan terbatas', () => {
  assert.throws(() => calculateOrderTotal(Infinity, 0, 0), TypeError);
});
