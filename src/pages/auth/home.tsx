import React from 'react'
import { EmptyLayout } from '@/components/layout'
import Link from 'next/link'
import SidebarAdmin from '@/components/sidebar_admin'
import AdminNavDashboard from '@/configs/Admin_Nav'
import NavButton from '@/components/nav_button'

export default function index() {
    return (
        <EmptyLayout pageTitle="Dashboard">
            <div className="w-screen bg-center bg-cover h-fit lg:h-screen" style={{
                backgroundImage: "url('../../bgform.svg')",
            }}>
            <div className="flex w-full h-full mb-4 backdrop-blur-3xl">
                <SidebarAdmin/>
                <div className="w-full pb-16 p-7">
                <h2 className="my-2 text-xl font-bold">Dashboard</h2>
                <div className="h-full grid-cols-3 grid-rows-4 gap-4 lg:grid">
                    <div className="row-span-1 bg-white rounded-[5px] px-3 py-2 my-4 lg:my-0">
                    <div className="my-1">
                        <p className="text-[12px] text-black/60">Perlombaan</p>
                        <p className="text-sm">Belum Ada</p>  
                    </div>
                    <div>
                        <p className="text-[12px] text-black/60">Status Pembayaran</p>
                        <p className="text-sm">Belum Terverifikasi</p>  
                    </div>
                    </div>
                    <div className="row-span-1 row-start-2 overflow-scroll bg-white scrollbar-hide rounded-[5px] p-3 my-4 lg:my-0">
                    <p className="text-[12px] text-black/60">Tugas</p>
                    <div className="my-2 bg-dcf-light-brown/60 rounded-[5px] py-1 px-2">
                        <p className="text-sm font-medium">Lengkapi Profilmu</p>
                        <p className="text-[12px] place-content-end">Sebelum 23 Mei</p>
                    </div>
                    <div className="my-2 bg-dcf-light-brown/60 rounded-[5px] py-1 px-2">
                        <p className="text-sm font-medium">Ayo Daftar Perlombaan</p>
                        <p className="text-[12px] place-content-end">Sebelum 23 Mei</p>
                    </div>
                    </div>
                    <div className="col-span-2 row-span-2 bg-white rounded-[5px] p-3">
                    <p className="text-[12px] text-black/60">Pengumuman</p>
                    <div className="my-2 bg-dcf-light-brown/60 rounded-[5px] py-1 px-2">
                        <p className="text-sm font-medium">Maintenance Telah Usai</p>
                        <p className="text-[12px] place-content-end">Dashboard bisa digunakan kembali</p>
                    </div>
                    </div>
                    <div className="col-span-3 row-span-2 bg-dcf-light-brown rounded-[5px] bg-auto bg-center overflow-hidden my-4 lg:my-0" style={{
                backgroundImage: "url('../../img5.svg')",}}>
                    <div className="w-full h-full bg-gradient-to-r from-dcf-light-brown from-50% to-dcf-light-brown/30 to-100% p-5 flex flex-col justify-end">
                        <h1 className="font-semibold">Diponegoro Chemistry Fair</h1>
                        <p className="w-3/5">Diponegoro Chemistry Fair 2023 merupakan suatu kegiatan Himpunan Mahasiswa Kimia Universitas Diponegoro.</p>  
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    {AdminNavDashboard.map((data) => {
                        return <NavButton data={data} key={data.title}/>
                    })}
                </div>
            </div>
            
            
        </EmptyLayout>
    )
}
