<?php

namespace App\Http\Controllers\Api\Eskul;

use App\Extracurricular;
use App\School;
use App\Http\Controllers\ApiController;
use App\Http\Requests\EskulRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EskulController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $eskul = Extracurricular::with('extracurricularCoach')->orderBy('created_at', 'desc')->get();
        return $this->responseWithData($eskul);
    }

    public function store(EskulRequest $request)
    {
        $eskul = $request->all();
        if ($request->has('image')) {
            $slug = Str::slug($eskul['title']);
            $eskul = storeFile($eskul, 'image', Str::slug(School::find($eskul['school_id'])->nama) . '/ekstrakulikuler', $slug, $slug . '-image.', 'single');
        }
        $store = Extracurricular::create($eskul);
        return $this->responseResourceCreated('Ekstrakulikuler berhasil ditambah');
    }

    public function show($extracurricular)
    {
        $extracurricular = Extracurricular::with('extracurricularCoach')->find($extracurricular);
        return $this->responseWithData($extracurricular);
    }

    public function update(EskulRequest $request, Extracurricular $extracurricular)
    {
        $update = $request->except('_method');
        if ($request->has('image')) {
            Storage::delete(str_replace('/storage', '/public', $extracurricular->image));
            $slug = Str::slug($extracurricular->title);
            $update = storeFile($update, 'image', Str::slug(School::find($extracurricular['school_id'])->nama) . '/ekstrakulikuler', $slug, $slug . '-image', 'single');
        }
        $extracurricular->update($update);
        return $this->responseSuccess('Ekstrakulikuler berhasil diupdate');
    }

    public function destroy(Extracurricular $extracurricular)
    {
        Storage::deleteDirectory('public/' . Str::slug(School::find($extracurricular->school_id)->nama) . '/ekstrakulikuler/' . Str::slug($extracurricular->title));
        $extracurricular->delete();
        return $this->responseSuccess('Ekstrakulikuler berhasil dihapus');
    }
}
