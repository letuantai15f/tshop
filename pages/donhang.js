import React, { useEffect, useState } from 'react'
import Menu from '@/components/menu/Menu'
import { DataGrid } from '@mui/x-data-grid';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { supabase } from '@/client';
export default function Donhang() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
      }, [])
      const fetchData = async () => {
        const { data, erro } = await supabase.from('donhang').select('*')
        setData(data)
      }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'hoten', headerName: 'Họ tên', width: 130 },
        { field: 'sdt', headerName: 'SDT', width: 130 },
        {
            field: 'email',
            headerName: 'Email',
            width: 90,
        },
        {
            field: 'diachi',
            headerName: 'Địa chỉ',
            width: 160,
        },
        {
            field: 'tensp',
            headerName: 'Sản phẩm',
            width: 160,
        },
        {
            field: 'gia',
            headerName: 'Giá',
            width: 160,
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
                    gridTemplateColumns: "auto auto auto auto ",
                    gap: "2rem",
                    backgroundColor: "#F7F7F7",
                    padding: "2rem",
                    borderRadius: "20px",
                    width: "95%",
                }}>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", border: "1px", textAlign: 'center' }}>
                        <FormControl>
                            <InputLabel htmlFor="tensp">Họ tên</InputLabel>
                            <Input id="ho_ten" aria-describedby="my-helper-text" />
                        </FormControl>

                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", border: "1px", textAlign: 'center' }}>
                        <FormControl>
                            <InputLabel htmlFor="gia">SDT</InputLabel>
                            <Input id="sdt" aria-describedby="my-helper-text" />
                        </FormControl>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", border: "1px", textAlign: 'center' }}>
                        <FormControl>
                            <InputLabel htmlFor="gia">Email</InputLabel>
                            <Input id="email" aria-describedby="my-helper-text" />
                        </FormControl>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", border: "1px", textAlign: 'center' }}>
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
                }}>
                    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: '2rem' }} >
                        <div></div>
                        <div>
                            <h2 style={{ color: "#2046A1", fontWeight: "bold" }}>Danh sách đơn hàng</h2>
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
                            rows={data}
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
