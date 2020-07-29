<?php

namespace App\Http\Controllers\Api\Kegiatan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\School;
use App\Kegiatan;
use App\Http\Requests\KegiatanRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class KegiatanController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $kegiatan = Kegiatan::get();
        return $this->responseWithData($kegiatan);
    }

    public function store(KegiatanRequest $request)
    {
        $kegiatan = $request->all();
        if ($request->has('image')) {
            $slug = Str::slug($kegiatan['title']);
            $kegiatan = storeFile($kegiatan, 'image', Str::slug(School::find($kegiatan['school_id'])->nama) . '/kegiatan', $slug, $slug . '-image.', 'single');
        }
        $store = Kegiatan::create($kegiatan);
        return $this->responseResourceCreated('Kegiatan berhasil ditambahkan');
    }

    public function show($kegiatan)
    {
        $kegiatan = Kegiatan::find($kegiatan);
        return $this->responseWithData($kegiatan);
    }

    public function update(KegiatanRequest $request, Kegiatan $kegiatan)
    {
        $update = $request->except('_method');
        if ($request->has('image')) {
            Storage::delete(str_replace('/storage', '/public', $kegiatan->image));
            $slug = Str::slug($update['title']);
            $update = storeFile($update, 'image', Str::slug(School::find($kegiatan['school_id'])->nama) . '/kegiatan', $slug, $slug . '-image', 'single');
        }
        $kegiatan->update($update);
        return $this->responseSuccess('Kegiatan berhasil diupdate');
    }

    public function destroy(Kegiatan $kegiatan)
    {
        Storage::deleteDirectory('public/' . Str::slug(School::find($kegiatan->school_id)->nama) . '/kegiatan/' . Str::slug($kegiatan->title));
        $kegiatan->delete();
        return $this->responseSuccess('Kegiatan berhasil dihapus');
    }
}
