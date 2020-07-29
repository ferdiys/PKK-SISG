<?php

namespace App\Http\Controllers\PPDB;

use App\Http\Controllers\ApiController;
use App\Http\Requests\NisnRequest;
use App\Http\Requests\PpdbUserRequest;
use App\Ppdbuser;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PPDBUserController extends ApiController
{

    public function index()
    {
        $data = Ppdbuser::All()->map->format();
        return $this->responseWithData($data);
    }

    public function store(PpdbUserRequest $request)
    {
        $data = $request->all();
        if ($request->has('foto')) {
            $slug = Str::slug($data['nama_lengkap']);
            $data = storeFile($data, 'foto', 'ppdb', $slug, $slug . '-foto', 'single');
        }
        $data = Ppdbuser::create($data);
        return $this->responseWithData([
            'ppdbuser_id' => $data->id
        ]);
    }

    public function show(Ppdbuser $ppdbuser)
    {
        $ppdbuser = $ppdbuser->format();
        return response()->json($ppdbuser, 200);
    }

    public function destroy(Ppdbuser $ppdbuser)
    {
        Storage::deleteDirectory('/public/ppdb/' . Str::slug($ppdbuser->nama_lengkap));
        $ppdbuser->delete();
        return $this->responseResourceDeleted('Data Sekolah terhapus');
    }

    public function validasiNisn(NisnRequest $request)
    {
        return $this->responseWithData([
            'nisn' => $request->nisn
        ]);
    }
}
