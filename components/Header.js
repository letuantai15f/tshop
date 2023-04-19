import { Link } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/trangchu">TSHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/trangchu">Trang chủ</Nav.Link>
                <Nav.Link href="/sanpham">Sản phẩm</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
