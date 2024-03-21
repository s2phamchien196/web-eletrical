import React from 'react'
import './List.css'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
      <body>
        <div class="content">
          <ul class="exo-menu">
            <li class="drop-down"><a href="#"><i class="fa fa-list"></i>Danh Mục Sản Phẩm</a>
              <ul class="drop-down-ul animated fadeIn">
                <li class="flyout-right"><a href="#">Flyout Right</a>
                </li>
                <li class="flyout-left"><a href="#">Flyout Left</a>
                </li>
                <li><a href="#">No Flyout</a></li>
              </ul>
            </li>
            <li><a class="active" href="/"><i class="fa fa-home"></i> Trang Chủ</a>
            </li>
            <li><a href="/one-sun">Tất Cả Sản Phẩm</a></li>
            <li><a href="#">Truyền Hình</a></li>
            <li class="mega-drop-down"><a href="#">Báo Chí</a>
              <div class="animated fadeIn mega-menu">
                <div class="mega-menu-wrap">
                  <div class="row">
                    <div class="col-md-4">
                      <h4 class="row mega-title">Feature</h4>
                      <img class="img-responsive" src="https://3.bp.blogspot.com/-rUk36pd-LbM/VcLb48X4f-I/AAAAAAAAGCI/Y_UxBAgEqwA/s1600/Magento_themes.jpg" />
                    </div>
                    <div class="col-md-2">
                      <h4 class="row mega-title">Standers</h4>
                      <ul class="stander">
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Computer</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">laptop</a></li>
                        <li><a href="#">Camera</a></li>
                        <li><a href="#">I pad</a></li>
                        <li><a class="view-more btn- btn-sm" href="#">View more</a></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <h4 class="row mega-title">Description</h4>
                      <ul class="description">
                        <li><a href="#">Women</a>
                          <span>Description of Women</span>
                        </li>
                        <li><a href="#">Men</a>
                          <span>Description of men Cloths</span>
                        </li>
                        <li><a href="#">Kids</a>
                          <span>Description of Kids Cloths</span>
                        </li>
                        <li><a href="#">Others</a>
                          <span>Description of Others Cloths</span>
                        </li>
                        <li>
                          <a class="view-more btn btn-sm " href="#">View more</a>

                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <h4 class="row mega-title">Icon + Description</h4>
                      <ul class="icon-des">
                        <li><a href="#"><i class="fa fa-globe"></i>Web</a></li>
                        <li><a href="#"><i class="fa fa-mobile"></i>Mobile</a></li>
                        <li><a href="#"><i class="fa fa-arrows-h"></i>Responsive</a></li>
                        <li><a href="#"><i class="fa fa-desktop"></i>Desktop</a></li>
                        <li><a href="#"><i class="fa fa-paint-brush"></i>UI/UX</a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">Phản Hồi Khách Hàng</a></li>
            <li class="blog-drop-down"><a href="#"><i class="fa fa-bullhorn"></i> Blog</a>
              <div class="Blog animated fadeIn">
                <div class="col-md-4">
                  <img class="img-responsive" src="https://2.bp.blogspot.com/-VG_e0pKfrDo/VcLb6JwZqfI/AAAAAAAAGCk/8ZgA9kZqTQ8/s1600/images3.jpg" />
                  <div class="blog-des">
                    <h4 class="blog-title">Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                      nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                      Duis autem vel eum iriure dolor in hendrerit in vulputate. </p>
                    <a class="view-more btn- btn-sm" href="#">Read More</a>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="img-responsive" src="https://3.bp.blogspot.com/-hUt5FrdZHio/VcLb5dlwTBI/AAAAAAAAGCU/UUH5N1JkoQc/s1600/images1.jpg" />
                  <div class="blog-des">
                    <h4 class="blog-title">Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                      nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                      Duis autem vel eum iriure dolor in hendrerit in vulputate. </p>
                    <a class="view-more btn- btn-sm" href="#">Read More</a>
                  </div>
                </div>
                <div class="col-md-4">
                  <img class="img-responsive" src="https://4.bp.blogspot.com/-A7U1uPlSq6Y/VcLb5kKHCkI/AAAAAAAAGCc/7WghyndTEuY/s1600/images2.jpg" />
                  <div class="blog-des">
                    <h4 class="blog-title">Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                      nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                      Duis autem vel eum iriure dolor in hendrerit in vulputate. </p>
                    <a class="view-more btn- btn-sm" href="#">Read More</a>
                  </div>
                </div>


              </div>
            </li>
          </ul>
        </div>
      </body >
    </div >
  )
}
export default List