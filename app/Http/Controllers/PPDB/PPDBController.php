<?php

namespace App\Http\Controllers\PPDB;

use App\Http\Controllers\ApiController;
use App\Http\Requests\PpdbRequest;
use App\Ppdb;

class PPDBController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $time = Ppdb::all();
        return $this->responseWithData($time);
    }

    public function store(PpdbRequest $request)
    {
        $time = $request->all();
        Ppdb::create($time);
        return $this->responseResourceCreated('Berhasil menambah waktu pendaftaran');
    }

    public function show(Ppdb $ppdb)
    {
        return $this->responseWithData($ppdb);
    }

    public function update(PpdbRequest $request, Ppdb $ppdb)
    {
        $update = $request->except('_method');
        $ppdb->update($update);
        return $this->responseSuccess('Berhasil update waktu pendaftaran');
    }

    public function destroy(Ppdb $ppdb)
    {
        $ppdb->delete();
        return $this->responseSuccess('Berhasil menghapus waktu pendaftaran');
    }
}
