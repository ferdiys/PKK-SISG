<?php

namespace App\Http\Controllers\Api\Apreciation;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\Apreciation;
use App\School;
use App\Http\Requests\ApreciationRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ApreciationController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $apre = Apreciation::all();
        return $this->responseWithData($apre);
    }

    public function store(ApreciationRequest $request)
    {
        $apreciation = $request->all();

        Apreciation::create($apreciation);
        return $this->responseResourceCreated('Apresiasi berhasil ditambah');
    }

    public function show($apreciation)
    {
        $apreciation = Apreciation::find($apreciation);
        return $this->responseWithData($apreciation);
    }

    public function update(ApreciationRequest $request, Apreciation $apreciation)
    {
        $update = $request->except('_method');

        $apreciation->update($update);
        return $this->responseSuccess('Apresiasi berhasil diupdate');
    }

    public function destroy(Apreciation $apreciation)
    {
        $apreciation->delete();
        return $this->responseSuccess('Apresiasi berhasil dihapus');
    }
}
