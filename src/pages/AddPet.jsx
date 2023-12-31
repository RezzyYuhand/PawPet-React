import React, { useEffect, useState, useRef } from 'react'
import { Footer } from "../components";
import { cat1 } from "../assets";
import { NavLink, useNavigate } from "react-router-dom";

const AddPet = () => {
    const navigate = useNavigate();
    const ref = useRef(null);

    const [petImage, SetPetImage] = useState("");
    const [petName, SetPetName] = useState("");
    const [petTipe, SetPetTipe] = useState("");
    const [petRas, SetPetRas] = useState("");
    const [petUmur, SetPetUmur] = useState("");
    const [petGender, SetPetGender] = useState("");
    const [petRiwayat, SetPetRiwayat] = useState("");
    

    function handleImageClick() {
        ref.current.click();
    }

    function handleImageChange(e) {
        console.log(e.target.files[0]);
        SetPetImage(e.target.files[0]);
    }

    return (
    <div>
        <div className="flex justify-center">
            <div className="flex flex-row bg-neutral98 justify-center gap-16 p-20 my-20 w-[80rem] rounded-lg">
                <div className="flex flex-col items-center gap-3">
                    <div onClick={handleImageClick} className="cursor-pointer">
                        {petImage ? (
                            <img src={URL.createObjectURL(petImage)} alt="" className="w-[15rem] h-[15rem] object-cover rounded-full" />
                        ) : (
                            <img src={cat1} alt="" className="w-[15rem] h-[15rem] object-cover rounded-full" />
                        )}
                        <input type="file" ref={ref} onChange={handleImageChange} className="hidden" />
                    </div>
                    <h4 className="h-fit w-fit px-8 py-3 mt-2 bg-secondary80 text-center text-white rounded-full shadow-md">tersedia untuk adopsi</h4>
                </div>
                <div className="flex flex-col">
                    <form action="" className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Nama</label>
                            <input 
                                type="text"
                                value={petName}
                                onChange={(e) => SetPetName(e.target.value)}
                                placeholder="Ex: Antonius" 
                                className="border border-neutral40 rounded-md h-9 px-4 text-[1.5rem] py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Tipe</label>
                                <input 
                                    type="text"
                                    value={petTipe}
                                    onChange={(e) => SetPetTipe(e.target.value)}
                                    placeholder="Anjing" 
                                    className="border border-neutral40 rounded-md h-9 px-4 text-[1.5rem] py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Ras</label>
                                <input 
                                    type="text"
                                    value={petRas}
                                    onChange={(e) => SetPetRas(e.target.value)}
                                    placeholder="Persia" 
                                    className="border border-neutral40 rounded-md h-9 px-4 text-[1.5rem] py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Umur</label>
                                <div className="flex flex-row gap-2 items-center">
                                    <input 
                                        type="number"
                                        min={1}
                                        value={petUmur}
                                        onChange={(e) => SetPetUmur(e.target.value)}
                                        placeholder="4"
                                        className="border border-neutral40 rounded-md h-9 px-4 text-[1.5rem] py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                                    />
                                    <h5 className="text-secondary text-[1.5rem]">Bulan</h5>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 flex-1">
                                <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Jenis Kelamin</label>
                                <input 
                                    type="text"
                                    value={petGender}
                                    onChange={(e) => SetPetGender(e.target.value)}
                                    placeholder="Jantan / Betina" 
                                    className="border border-neutral40 rounded-md h-9 px-4 text-[1.5rem] py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="font-semibold text-[1.75rem] text-secondary">Riwayat Kesehatan</label>
                            <textarea 
                                type="text"
                                value={petRiwayat}
                                onChange={(e) => SetPetRiwayat(e.target.value)}
                                placeholder="Anjing ini memiliki riwayat penyakit mata dan beberapa hal lainnya." 
                                className="h-[10rem] border border-neutral40 rounded-md h-9 px-4 text-[1.5rem] py-6 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                            />
                        </div>
                        <button type="submit" className="text-[1.375rem] h-fit w-fit px-12 py-3 mt-2 bg-[#598AC1] text-center text-white rounded-full shadow-md">
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </div>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default AddPet