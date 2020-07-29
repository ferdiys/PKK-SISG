<?php

namespace App\Http\Controllers\Api\DataPicker;

use App\Http\Controllers\ApiController;
use App\Http\Requests\DataPicker\ParentTypeRequest;
use App\Parenttype;

class ParentTypeController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $data = Parenttype::all();
        return $this->responseWithData($data);
    }

    public function store(ParentTypeRequest $request)
    {
        $data = $request->all();
        $data = Parenttype::create($data);
        return $this->responseResourceCreated('Berhasil menambah data');
    }

    public function show(Parenttype $parenttype)
    {
        return $this->responseWithData($parenttype);
    }

    public function update(ParentTypeRequest $request, Parenttype $parenttype)
    {
        $update = $request->except('_method');
        $parenttype->update($update);
        return $this->responseSuccess('Berhasil mengubah data');
    }

    public function destroy(Parenttype $parenttype)
    {
        $parenttype->delete();
        return $this->responseSuccess('Berhasil menghapus data');
    }
}
