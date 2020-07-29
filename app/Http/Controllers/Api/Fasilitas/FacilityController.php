<?php

namespace App\Http\Controllers\Api\Fasilitas;

use App\Facility;
use App\School;
use App\Http\Controllers\ApiController;
use App\Http\Requests\FacilityRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FacilityController extends ApiController
{

    public function __construct()
    {
        $this->middleware('auth:api')->except('index');
    }

    public function index()
    {
        $fas = Facility::all();
        return $this->responseWithData($fas);
    }

    public function store(FacilityRequest $request)
    {
        $fas = $request->all();
        if ($request->has('image')) {
            $slug = Str::slug($fas['title']);
            $fas = storeFile($fas, 'image', Str::slug(School::find($fas['school_id'])->nama) . '/facility', $slug, $slug . '-image.', 'single');
        }
        Facility::create($fas);
        return $this->responseResourceCreated('Berhasil menambah fasilitas');
    }

    public function show(Facility $facility)
    {
        return $this->responseWithData($facility);
    }

    public function update(FacilityRequest $request, Facility $facility)
    {
        $update = $request->except('_method');
        if ($request->has('image')) {
            Storage::delete(str_replace('/storage', '/public', $facility->image));
            $slug = Str::slug($update['title']);
            $update = storeFile($update, 'image', Str::slug(School::find($facility['school_id'])->nama) . '/facility', $slug, $slug . '-image.', 'single');
        }
        $facility->update($update);
        return $this->responseSuccess('Berhasil mengupdate fasilitas');
    }

    public function destroy(Facility $facility)
    {
        Storage::deleteDirectory('public/' . Str::slug(School::find($facility->school_id)->nama) . '/facility/' . Str::slug($facility->title));
        $facility->delete();
        return $this->responseSuccess('Berhasil menghapus fasilitas');
    }
}
