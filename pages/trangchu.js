import { supabase } from '@/client'
import Header from '@/components/Header'
import Footer from '@/components/menu/Footer'
import Iphone from '@/components/menu/Iphone'
import React, { useEffect, useState } from 'react'


export default function Trangchu() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        const { data, erro } = await supabase.from('sanpham').select('*')
        setData(data)
      }
    return (
        <div>
            <div style={{ display: 'grid' }}>
                <Header />
            </div>
            <div>
                <div style={{ margin: '1rem' }}>
                    <h3>Điện thoại</h3>
                </div>
                <div style={{
                    display: 'grid', gridTemplateColumns: "auto auto auto auto ",
                    gap: "2rem"
                }}>
                    {data.map(e=>{
                        return <Iphone key={e.id} tensp={e.tensp} gia={e.gia_km} hinh={e.hinh} />
                         
                    })}
                    
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}
