<?php

namespace App\Http\Controllers\Api\DataPicker;

use App\Http\Controllers\ApiController;
use App\Category;
use App\Http\Requests\DataPicker\CategoryRequest;

class CategoryController extends ApiController
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index()
    {
        $data = Category::all();
        return $this->responseWithData($data);
    }

    public function store(CategoryRequest $request)
    {
        $data = $request->all();
        Category::create($data);
        return $this->responseResourceCreated('Berhasil menambah data');
    }

    public function show(Category $category)
    {
        return $this->responseWithData($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $update = $request->except('_method');
        $category->update($update);
        return $this->responseSuccess('Berhasil mengubah data');
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return $this->responseSuccess('Berhasil menghapus data');
    }
}
