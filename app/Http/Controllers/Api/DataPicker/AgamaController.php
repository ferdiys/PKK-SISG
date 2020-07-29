<?php

namespace App\Http\Controllers\Api\DataPicker;

use App\Http\Requests\DataPicker\AgamaRequest;
use App\Agama;
use App\Http\Controllers\ApiController;

class AgamaController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $data = Agama::all();
        return $this->responseWithData($data);
    }

    public function store(AgamaRequest $request)
    {
        $data = $request->all();
        Agama::create($data);
        return $this->responseResourceCreated('Berhasil menambah data');
    }

    public function show(Agama $agama)
    {
        return $this->responseWithData($agama);
    }

    public function update(AgamaRequest $request, Agama $agama)
    {
        $update = $request->except('_method');
        $agama->update($update);
        return $this->responseSuccess('Berhasil mengubah data');
    }

    public function destroy(Agama $agama)
    {
        $agama->delete();
        return $this->responseSuccess('Berhasil menghapus data');
    }
}
