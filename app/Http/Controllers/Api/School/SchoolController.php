<?php

namespace App\Http\Controllers\Api\School;

use App\School;
use App\Http\Controllers\ApiController;
use App\Http\Requests\SchoolRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SchoolController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $school = School::All();
        return $this->responseWithData($school);
    }

    public function store(SchoolRequest $request)
    {
        $school = $request->all();
        if ($request->has('logo')) {
            $slug = Str::slug($school['nama']);
            $school = storeFile($school, 'logo', $slug, null, $slug . '-logo.', 'single');
        }
        $school = School::create($school);
        return $this->responseResourceCreated('Data Sekolah berhasil dibuat');
    }

    public function show(School $school)
    {
        return $this->responseWithData($school);
    }

    public function update(SchoolRequest $request, School $school)
    {
        $update = $request->except('_method');
        if ($request->has('logo')) {
            Storage::delete(str_replace('/storage', '/public', $school->logo));
            $slug = Str::slug($school->nama);
            $update = storeFile($update, 'logo', $slug, null, $slug . '-logo.', 'single');
        }
        if ($school->email == $update['email']) {
            unset($update['email']);
        }
        $school->update($update);
        return $this->responseSuccess('Data Sekolah berhasil diubah');
    }

    public function destroy(School $school)
    {
        Storage::deleteDirectory('public/' . Str::slug($school->nama));
        $school->delete();
        return $this->responseSuccess('Data Sekolah terhapus');
    }
}
