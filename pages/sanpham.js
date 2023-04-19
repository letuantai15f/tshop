import Menu from '@/components/menu/Menu'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
export default function sanpham() {
  const rowStyle = { background: 'black' };

  // set background colour on even rows again, this looks bad, should be using CSS classes
  const getRowStyle = params => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: 'red' };
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'tensp', headerName: 'Tên sản phẩm', width: 130 },
    { field: 'mo_ta', headerName: 'Mô tả', width: 200 },
    {
      field: 'gia',
      headerName: 'Giá gốc',
      type: 'number',
      width: 90,
    },
    {
      field: 'gia_km',
      headerName: 'Giá khuyến mãi',
      type: 'number',
      width: 160,
    },
    {
      field: 'img',
      headerName: 'Hình chính',
      width: 90,
    },
  ];
  const rows = [
    { id: 1, tensp: 'Iphone', mo_ta: 'Iphone 12pro max', gia: 35000000, gia_km: 30000000 },
    { id: 2, tensp: 'Iphone', mo_ta: 'Iphone 13pro max', gia: 45000000, gia_km: 40000000 },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
    }}>
      <div style={{ flex: "0.2" }}>
        <Menu page={2} />
      </div>
      <div
        style={{
          flex: "0.8",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "2rem",
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto ",
          gap: "2rem",
          backgroundColor: "#F7F7F7",
          padding: "2rem",
          borderRadius: "20px",
          width: "95%",
        }}>
          <div></div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", border: "1px", textAlign: 'center' }}>
            <FormControl>
              <InputLabel htmlFor="tensp">Tên sản phẩm</InputLabel>
              <Input id="tensp" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="gia">Giá tiền</InputLabel>
              <Input id="gia" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <Button style={{
                width: "80px", height: '20px',
                padding: "0.8rem",
                borderRadius: "10px",
                backgroundColor: "#2046A1",
                color: "#fff", margin: "1rem"
              }}>Lọc</Button>
            </FormControl>
          </div>
          
        </div>
        <div style={{
          display: "grid",
          backgroundColor: "#F7F7F7",
          borderRadius: "20px",
          width: "100%",
        }} >
          <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: '2rem' }} >
            <div></div>
            <div>
              <h2 style={{ color: "#2046A1", fontWeight: "bold" }}>Danh sách sản phẩm</h2>
            </div>
            <div>
              <Button style={{
                width: "80px", height: '20px',
                padding: "0.8rem",
                borderRadius: "10px",
                backgroundColor: "#2046A1",
                color: "#fff", margin: "1rem"
              }}>Thêm</Button>
            </div>

          </div>

          <div style={{ height: 400, width: '100%' }}>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              style={{ borderRadius: '20px',}}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
