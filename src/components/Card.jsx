const Card = () => {
    return (
        <div>
            <div className="overflow-hidden rounded max h-52">
                <img src="https://akcdn.detik.net.id/visual/2023/11/14/pemain-kawakan-mu-sir-bobby-charlton-meninggal-6_169.jpeg?w=360&q=100" 
                     alt="Thumbnails Berita" 
                     className="object-cover w-full h-full"/>
            </div>
            <div className="p-1 mt-3">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Judul Berita</h4>
                    <p className="text-sm text-slate-700">19-01-2025</p>
                </div>
                <p className="text-slate-800">
                    Pemilik saham minoritas Manchester United, Sir Jim Ratcliffe, sedang menyusun rencana ekstrem pada bursa transfer pemain musim panas 2025. Hal itu untuk mempersiapkan tim asuhan Ruben Amorim mengarungi kompetisi musim 2025/2026.
                    Menurut laporan dari Football Transfers, miliarder asal Inggris itu siap mendengarkan semua tawaran yang masuk untuk setiap pemain di skuad utama Setan Merah. Termasuk para pemain rekrutan baru pada pengunjung era Erik ten Hag.
                    Lima pemain yang bergabung dengan Manchester United pada bursa transfer musim panas lalu, yakni Joshua Zirkzee, Leny Yoro, Matthijs de Ligt, Noussair Mazraoui, dan Manuel Ugarte. Mereka ternyata tidak akan terhindar dari keputusan drastis itu.
                    Keputusan tersebut seiring situasi finansial klub yang tengah mengalami kesulitan. Sementara, pelatih Ruben Amorim perlu mencari pemain baru untuk menerapkan filosofi bermain pada musim panas mendatang.
                    Namun, Manchester United saat ini tidak memiliki banyak dana untuk belanja pemain baru. Setan Merah terpaksa harus menjual beberapa pemain bintangnya. Upaya itu agar tidak melanggar aturan Financial Fair Play (FFP) sehingga tetap bisa beraktivitas di bursa transfer.
                </p>
            </div>
        </div>
    )
}

export default Card;