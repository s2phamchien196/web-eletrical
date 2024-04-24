import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../assets/cross_icon.png'
import { host, severGET, severPOST } from '../../Components/AppContext';
import menu_data from './menu_data';
import { AddProduct } from '../AddProduct/AddProduct';
import { ButtonDialogShow, showDialog } from '../../Lib/input';

const ListProduct = () => {
  const [selected, setSelected] = useState('all');
  const [allproducts, setAllProducts] = useState([]);
  const [allmenus, setAllMenus] = useState([]);
  useEffect(() => {
    onReloadData();
  }, [])

  const onReloadData = () => {
    severGET('/allproducts', {}, (data) => setAllProducts(data));
    severGET('/allmenus', {}, (data) => {
      setAllMenus(data)
    });
  }

  let onRemoveProduct = (id) => {
    severPOST('/removeproduct', { id: id }, () => {
      let newAllproducts = allproducts.filter(sel => sel.id !== id);
      setAllProducts(newAllproducts);
    });
  }

  const addDefaultRecords = () => {
    severGET('/images', {}, (images) => {
      let records = [];
      for (let sel of menu_data) {
        let code = sel.code;
        for (let image of images) {
          if (image.includes(code)) {
            let groups = image.split('/')
            sel.menu_name = groups[1];
            sel.group = groups[2];
            sel.image = "/" + image;
            severPOST('/addproduct', sel, (bean) => { records.push(bean) })
          }
        }
      }
      setAllProducts(records);
    })
  }

  const onRenderProduct = (product, index) => {
    return (
      <AddProduct product={product} />
    )
  }

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (e.target.value === 'all') {
      severGET('/allproducts', {}, (data) => setAllProducts(data));
    } else {
      severGET('/product', { name: e.target.value, fieldName: 'menu_name' }, (beans) => setAllProducts(beans))
    }
  }

  return (
    <div className='list-product'>
      <div className='flex-hbox w-100'>
        <div>
          <h3>List Product {`(${allproducts.length})`}</h3>
        </div>
        <div className='flex-grow-1' style={{ alignItems: 'end', textAlign: 'end' }}>
          <select style={{ width: 150 }} value={selected} onChange={changeHandler} name='group'>
            <option value={'all'} >{'All'}</option>
            {allmenus.map((sel, index) => {
              return <option value={sel.name} >{sel.name}</option>
            })}
          </select>
        </div>
      </div>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Tên</p>
        <p>Đơn vị</p>
        <p>Giá Vốn</p>
        <p>Giá Bán Lẻ</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <div>
              <div key={index} className='listproduct-format-main listproduct-format '>
                <img src={host + product.image} width={50} alt="" className='listproduct-product-items' />
                <button type="button" className={`btn-link`} data-toggle="modal" data-target="#product" onClick={() => {
                  showDialog('product', 'Detail', <AddProduct product={product} onPostCommit={() => onReloadData()} />)
                }}> {product.label} </button>
                <p>{product.unit}</p>
                <p>{Number(product.capital_price).toLocaleString()} {'đ'}</p>
                <p>{Number(product.retail_price).toLocaleString()} {'đ'}</p>
                <img src={cross_icon} alt="" className='listproduct-remove-icon' onClick={() => onRemoveProduct(product.id)} />
              </div>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct