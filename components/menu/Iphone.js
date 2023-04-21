
import { supabase } from '@/client';
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


export default function Iphone(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [hoTen, setHoTen] = useState('')
    const [sdt, setSDT] = useState('')
    const [email, setEmail] = useState('')
    const [diaChi, setDiaChi] = useState('')
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
    const handleBuy = async (event) => {
        event.preventDefault();
        var phone = '1234567890';
        if (!(phone.match('[0-9]{10}'))) {
            alert('Vui lòng nhập đúng sdt');
        }else {
            
        }
        const data = {
            hoten: hoTen,
            sdt,
            email,
            diachi: diaChi,
            tensp: props.tensp,
            gia: props.gia
        }
        const t = await supabase.from('donhang').insert(data)
        if (t.status === 201) {
            handleClose()
            alert('Thành công')
        }
    }
    return (
        <div>
            <div style={{ width: '150px', height: '250px', margin: '1rem', borderRadius: '10px', boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.25)', padding: '1px', paddingTop: '8px', alignItems: 'center', textAlign: 'center' }}>
                <div>
                    <img src={props.hinh} width='150'></img>
                    <h5 style={{ margin: '5px' }}>{props.tensp}</h5>
                    <h5 style={{ color: 'red', fontSize: '15px', margin: 4 }}>{props.gia}</h5>
                </div>
                <div>
                    <Button style={{
                        width: "80%",
                        height: '20px',
                        padding: "0.8rem",
                        borderRadius: "15px",
                        backgroundColor: "#2046A1",
                        color: "#fff",
                    }} onClick={handleOpen}>Mua</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div>
                                <h5>Thông tin khách hàng</h5>
                            </div>
                            <div style={{}}>
                                <form onSubmit={handleBuy}>
                                    <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" label="Họ tên" variant="outlined"  value={hoTen} onInput={(e) => setHoTen(e.target.value)} />
                                    <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" label="SDT" variant="outlined" required='true' value={sdt} onInput={(e) => setSDT(e.target.value)} />
                                    <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" label="Email" variant="outlined" required='true' value={email} onInput={(e) => setEmail(e.target.value)} />
                                    <TextField style={{ width: '100%', margin: '10px' }} id="outlined-basic" label="Địa chỉ" variant="outlined" value={diaChi} onInput={(e) => setDiaChi(e.target.value)} />
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
        </div>
    )
}
