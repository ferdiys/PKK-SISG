<?php

namespace App\Http\Controllers\Api\Attachment;

use App\Attachment;
use App\Http\Controllers\ApiController;
use App\Http\Requests\AttachmentRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class AttachmentController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index($category)
    {
        $photo = Attachment::where('category_id', $category)->get()->map->format($category);
        return $this->responseWithData($photo);
    }

    public function store(AttachmentRequest $request)
    {
        $photo = $request->all();
        if ($request->has('attachment')) {
            $slug = Str::slug($photo['judul']);
            $photo = storeFile($photo, 'attachment', 'attachment/' .  $request->category_id, null, $slug . '-attachment.', 'single');
        }
        $photo = Attachment::create($photo);
        return $this->responseResourceCreated('Attachment baru ditambahkan');
    }

    public function show(Attachment $attachment)
    {
        return $this->responseWithData($attachment);
    }

    public function update(AttachmentRequest $request, Attachment $attachment)
    {
        $update = $request->except('_method');
        if ($request->has('photo')) {
            Storage::delete(str_replace('/storage', '/public', $attachment->attachment));
            $slug = Str::slug($request['judul'] ?? $attachment->judul);
            $update = storeFile($update, 'attachment',  'attachment/' .  $request->category_id, null, $slug . '-photo.', 'single');
        }
        $attachment->update($update);
        return $this->responseSuccess('Data Attachment berhasil diubah');
    }

    public function destroy(Attachment $attachment)
    {
        Storage::delete(str_replace('/storage', '/public', $attachment->attachment));
        $attachment->delete();
        return $this->responseSuccess('Data Attachment terhapus');
    }
}
