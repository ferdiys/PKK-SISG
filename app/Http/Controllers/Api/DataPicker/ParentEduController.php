<?php

namespace App\Http\Controllers\Api\DataPicker;

use App\Http\Controllers\ApiController;
use App\Http\Requests\DataPicker\ParentEduRequest;
use App\Parentedu;

class ParentEduController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $data = Parentedu::all();
        return $this->responseWithData($data);
    }

    public function store(ParentEduRequest $request)
    {
        $data = $request->all();
        Parentedu::create($data);
        return $this->responseResourceCreated('Berhasil menambah data');
    }

    public function show(Parentedu $parentedu)
    {
        return $this->responseWithData($parentedu);
    }

    public function update(ParentEduRequest $request, Parentedu $parentedu)
    {
        $update = $request->except('_method');
        $parentedu->update($update);
        return $this->responseSuccess('Berhasil mengubah data');
    }

    public function destroy(Parentedu $parentedu)
    {
        $parentedu->delete();
        return $this->responseSuccess('Berhasil menghapus data');
    }
}
