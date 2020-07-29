<?php

namespace App\Http\Controllers\PPDB;

use App\Http\Controllers\Controller;
use App\Http\Requests\PpdbOrtuRequest;
use App\Ppdbortu;
use Illuminate\Http\Request;

class PPDBOrtuController extends Controller
{
    public $ayah = [], $ibu = [], $wali = [];

    public function index()
    {
        $data = Ppdbortu::all();

        return response()->json($data);
    }

    public function store(PpdbOrtuRequest $request)
    {
        if ($request->has(['nama_wali', 'ttl_wali', 'pekerjaan_wali'])) {
            $this->getWali($request);
        }
        $this->getAyah($request)->getIbu($request)->storeOrtu();

        return response()->json('Berhasil menambah data ortu');
    }

    public function getAyah(Request $request)
    {
        $ayah = $request->only([
            'ppdbuser_id', 'nama_ayah',
            'ttl_ayah', 'pekerjaan_ayah',
            'alamat', 'phone'
        ]);
        $this->ayah = [
            'ppdbuser_id' => $ayah['ppdbuser_id'],
            'nama' => $ayah['nama_ayah'],
            'ttl' => $ayah['ttl_ayah'],
            'pekerjaan' => $ayah['pekerjaan_ayah'],
            'alamat' => $ayah['alamat'],
            'phone' => $ayah['phone'],
            'type' => 1
        ];
        return $this;
    }

    public function getIbu(Request $request)
    {
        $ibu = $request->only([
            'ppdbuser_id', 'nama_ibu',
            'ttl_ibu', 'pekerjaan_ibu',
            'alamat', 'phone'
        ]);
        $this->ibu = [
            'ppdbuser_id' => $ibu['ppdbuser_id'],
            'nama' => $ibu['nama_ibu'],
            'ttl' => $ibu['ttl_ibu'],
            'pekerjaan' => $ibu['pekerjaan_ibu'],
            'alamat' => $ibu['alamat'],
            'phone' => $ibu['phone'],
            'type' => 2
        ];
        return $this;
    }

    public function getWali(Request $request)
    {
        $wali = $request->only([
            'ppdbuser_id', 'nama_wali',
            'ttl_wali', 'pekerjaan_wali',
            'alamat', 'phone'
        ]);
        $this->wali = [
            'ppdbuser_id' => $wali['ppdbuser_id'],
            'nama' => $wali['nama_wali'],
            'ttl' => $wali['ttl_wali'],
            'pekerjaan' => $wali['pekerjaan_wali'],
            'alamat' => $wali['alamat'],
            'phone' => $wali['phone'],
            'type' => 3
        ];
        return $this;
    }

    public function storeOrtu()
    {
        Ppdbortu::create($this->ayah);
        Ppdbortu::create($this->ibu);
        if (!empty($this->wali)) {
            Ppdbortu::create($this->wali);
        }
        return $this;
    }

    public function show(Ppdbortu $ppdbortu)
    {
        return response()->json($ppdbortu, 200);
    }

    public function destroy(Ppdbortu $ppdbortu)
    {
        $ppdbortu->delete();

        return response()->json('Berhasil Menghapus Waktu Pendaftaran');
    }
}
