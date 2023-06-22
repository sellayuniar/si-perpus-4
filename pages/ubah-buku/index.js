import React from "react";
import Layout from "@/widget/Layout";
import Judul from "@/components/Judul";

const UbahBuku = () => {
  return (
    <Layout>
      <div className="flex justify-center mx-2 mt-10">
        <div className="w-[550px] rounded-lg shadow-gray-200 shadow-lg p-10">
          {/* judul */}
          <Judul title="Form Ubah Buku" />
          {/* form tambah */}
          <form>
            <div className="mb-3">
              <label className="text-md">Nama Buku</label>
              <input
                type="text"
                className="mt-2 block w-11/12 rounded-xl border px-3 py-2"
              />
            </div>
            <div className="mb-3">
              <label className="text-md">Pengarang</label>
              <input
                type="text"
                className="mt-2 block w-11/12 rounded-xl border px-3 py-2"
              />
            </div>
            <div className="mb-3">
              <label className="text-md">Deskripsi Buku</label>
              <input
                type="text"
                className="mt-2 block w-11/12 rounded-xl border px-3 py-2"
              />
            </div>
            <div className="mb-3">
              <label className="text-md">Tahun Terbit</label>
              <input
                type="text"
                className="mt-2 block w-11/12 rounded-xl border px-3 py-2"
              />
            </div>
            <button className="bg-sky-500 hover:bg-sky-700 px-16 py-2 ml-20 text-white rounded-full mt-3">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UbahBuku;
