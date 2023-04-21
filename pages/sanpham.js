import Menu from '@/components/menu/Menu'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, FormControl, Input, InputLabel, Modal, TextField } from '@mui/material';
import { supabase } from '@/client';

export default function Sanpham() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([])
  const [tensp,setTenSP]=useState('')
  const [gia,setGia]=useState('')
  const [km,setKM]=useState('')
  const [mota,setMota]=useState('')
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #D9D9D9',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const { data, erro } = await supabase.from('sanpham').select('*')
    setData(data)
  }
  const handleSubmit=async(event)=>{
    event.preventDefault();
    const gia_km=(gia*km)/100
    const dataSP={
      tensp,mo_ta:mota,gia,gia_km,hinh:'../public/iphone.png'
    } 
    const data=await supabase.from('sanpham').insert(dataSP)
    if(data.status===201){
      handleClose()
      alert('Thành công')
    }


  }

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
      field: 'hinh',
      headerName: 'URL Hình',
      width: 180,
    },
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
              }} onClick={handleOpen}>Thêm</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div>
                    <h5>Thông tin sản phẩm</h5>
                  </div>
                  <div style={{}}>
                    <form onSubmit={handleSubmit}>
                      <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" name='ten_sp' label="Tên sản phẩm" variant="outlined" value={tensp} onInput={(e)=>setTenSP(e.target.value)} />
                      <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" name='gia' label="Giá" variant="outlined" value={gia} onInput={(e)=>setGia(e.target.value)}/>
                      <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" name='km' label="Khuyến mãi" variant="outlined" value={km} onInput={(e)=>setKM(e.target.value)} />
                      <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" name='mota' label="Mô tả" variant="outlined" value={mota} onInput={(e)=>setMota(e.target.value)} />
                      <Button style={{
                        width: '100%', margin: '10x',
                        height: '30px',
                        padding: "0.8rem",
                        borderRadius: "15px",
                        backgroundColor: "#2046A1",
                        color: "#fff",
                      }} type='submit'>Gửi</Button>
                    </form>


                  </div>

                </Box>
              </Modal>
            </div>

          </div>

          <div style={{ height: 400, width: '100%' }}>

            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              style={{ borderRadius: '20px', }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

