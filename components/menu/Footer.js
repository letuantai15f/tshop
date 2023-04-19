import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">TSHOP</h5>
                <p>Cửa hàng bán điện thoại uy tín tại HCM</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Thông tin</h5>
                <ul className="list-unstyled">
                    <li>Địa chỉ: Gò Vấp</li>
                    <li>Giờ làm việc: T2-CN</li>
                    <li>SDT: 094932342</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Fanpage</h5>
                <ul className="list-unstyled">
                    <li><a style={{ textDecoration: 'none' }} href="#!">FageBook</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="#!">Intagram</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="#!">Zalo</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="#!">TikTok</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        TSHOP.com
    </div>

</footer>

export default Footer