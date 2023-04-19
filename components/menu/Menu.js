import { Button } from '@mui/material';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Menu(props) {

  const [page] = useState(props.page);
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      position: "fixed",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "1rem",
      }}>
        <h1 style={{ color: "#2046A1", fontWeight: "bold" }}>TSHOP</h1>
      </div>
      <div style={{ margin: "1rem" }}>
        <h2 style={{ color: "#2046A1", fontWeight: "700" }}>Dashboard</h2>
        <Link href='/sanpham' style={{ textDecoration: 'none' }}>
          <div style={{
            margin: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: page === 1 ? "#B3D1F4" : "#fff",
            color: page === 1 ? "#2046A1" : "#575757",
            borderRadius: "1rem",
            padding: "1rem",
          }}>
            <h3 style={{ margin: "0" }}>Quản lý sản phẩm</h3>
          </div>
        </Link>
        <Link href='/donhang' style={{ textDecoration: 'none' }}>
          <div style={{
            margin: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: page === 1 ? "#B3D1F4" : "#fff",
            color: page === 1 ? "#2046A1" : "#575757",
            borderRadius: "1rem",
            padding: "1rem",
          }}>
            <h3 style={{ margin: "0" }}>Quản lý đơn hàng</h3>
          </div>
        </Link>
      </div>
      <div style={{ marginTop: "5rem",alignContent:'center' }}>
          <Button style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "20px",
            backgroundColor: "#2046A1",
            color: "#fff",margin:"1rem"
          }}>Đăng xuất</Button>
      </div>
    </div>
  )
}
