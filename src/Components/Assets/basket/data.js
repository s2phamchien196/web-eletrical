import basket_1 from './1/main.png'
import basket_2 from './2/main.png'
import basket_3 from './3/main.png'
import basket_4 from './4/main.png'

const basket = [
  {
    id: 1,
    label: 'Tôm Hùm Alaska',
    path: basket_1,
    price: [
      {
        unit: '1kg',
        newPrice: 1690000,
        oldPrice: 1790000,
      },
      {
        unit: '2kg',
        newPrice: 2800000,
        oldPrice: 2990000,
      },
    ],
    currency: 'đ',
    note: 'Giá chỉ từ 1.690.000 VND/1kg'
  },
  {
    id: 2,
    label: 'Bao Ngư Hàn Quốc',
    path: basket_2,
    price:
      [
        {
          unit: '1 Con',
          newPrice: 79000,
          oldPrice: 80000,
        },
        {
          unit: '500g',
          newPrice: 550000,
          oldPrice: 595000,
        },
      ],
    currency: 'đ',
    note: '550.000 VND/500g'
  },
  {
    id: 3,
    label: 'Cua Nâu Sống',
    path: basket_3,
    price:
      [
        {
          unit: 'Con 800 gram',
          newPrice: 550000,
          oldPrice: 585000,
        },
        {
          unit: 'Con 1 Cân',
          newPrice: 690000,
          oldPrice: 729000,
        },
      ],
    currency: 'đ',
    note: '550.000 VND/Con 800g'
  },
  {
    id: 4,
    label: 'Bọ Biển Sống',
    path: basket_4,
    price:
      [
        {
          unit: '1 con',
          newPrice: 450000,
          oldPrice: 495000,
        }
      ],
    currency: 'đ',
    note: '450.000 VND/1 Con 600-700g'
  }
]

export default basket;