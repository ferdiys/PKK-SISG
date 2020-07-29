<?php

namespace App\Http\Controllers\Api\Eskul;

use App\Extracurricular;
use App\ExtracurricularCoach;
use App\Http\Controllers\ApiController;
use App\Http\Requests\EskulCoachRequest;
use App\School;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EskulCoachController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $extracurricularCoach = ExtracurricularCoach::with('extracurricular')->get();
        return $this->responseWithData($extracurricularCoach);
    }

    public function store(EskulCoachRequest $request)
    {
        $eskulCoach = $request->all();
        if ($request->has('photo')) {
            $eskul = Extracurricular::find($eskulCoach['extracurricular_id']);
            $slug = Str::slug($eskul->title);
            $school = Str::slug(School::find($eskul->school_id)->nama);
            $name = Str::slug($eskulCoach['nama']) . '-photo.';
            $eskulCoach = storeFile($eskulCoach, 'photo', $school . '/ekstrakulikuler/' . $slug, 'pelatih', $name, 'single');
        }
        ExtracurricularCoach::create($eskulCoach);
        return $this->responseResourceCreated('Pelatih Ekstrakulikuler berhasil ditambah');
    }

    public function show($extracurricularCoach)
    {
        $extracurricularCoach = ExtracurricularCoach::with('extracurricular')->find($extracurricularCoach);
        return $this->responseWithData($extracurricularCoach);
    }

    public function update(EskulCoachRequest $request, ExtracurricularCoach $extracurricularCoach)
    {
        $eskulCoach = $request->except('_method');
        if ($request->has('photo')) {
            Storage::delete($this->replaceStorage($extracurricularCoach));
            $slug = Str::slug(Extracurricular::find($extracurricularCoach->extracurricular_id)->title);
            $name = Str::slug($eskulCoach['nama']) . '-photo.';
            $eskulCoach = storeFile($eskulCoach, 'photo', 'ekstrakulikuler/' . $slug, 'pelatih', $name, 'single');
        }
        $extracurricularCoach->update($eskulCoach);
        return $this->responseSuccess('Pelatih Ekstrakulikuler berhasil diupdate');
    }

    public function destroy(ExtracurricularCoach $extracurricularCoach)
    {
        Storage::delete($this->replaceStorage($extracurricularCoach));
        $extracurricularCoach->delete();
        return $this->responseSuccess('Pelatih Ekstrakulikuler berhasil dihapus');
    }

    protected function replaceStorage(ExtracurricularCoach $extracurricularCoach)
    {
        return str_replace('/storage', '/public', $extracurricularCoach->photo);
    }
}
