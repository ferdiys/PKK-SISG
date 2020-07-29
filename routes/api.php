<?php

/*
    See route via terminal
    php artisan route:list
    For method put and delete
    Please use POST method on form and add input hidden with name '_method' and value put/delete
*/

// Route Auth
Route::name('auth.')->group(function () {
    Route::post('login', 'Api\Auth\AuthController@login')->name('login');
    Route::post('register', 'Api\Auth\AuthController@register')->name('register');
    Route::post('forgot-password', 'Api\Auth\AuthController@sendPasswordResetLink')->name('forgot-password');
    Route::post('reset/password', 'Api\Auth\AuthController@callResetPassword')->name('reset-password');
    Route::get('getUserLogin', 'Api\Auth\AuthController@getUserLogin')->name('getUserLogin');
    Route::get('refresh', 'Api\Auth\AuthController@refresh')->name('refresh');
    Route::put('change-password', 'Api\Auth\AuthController@changePassword')->name('change-password');
    Route::get('logout', 'Api\Auth\AuthController@logout')->name('logout');
});

// ROUTE FOR MANAGE SCHOOL PROFILE
Route::apiResource('school', 'Api\School\SchoolController');

// ROUTE FOR MANAGE EXTRACURRICULAR
Route::apiResource('extracurricular', 'Api\Eskul\EskulController');

// ROUTE FOR MANAGE KEGIATAN
Route::apiResource('kegiatan', 'Api\Kegiatan\KegiatanController');

// ROUTE FOR MANAGE EXTRACURRICULAR COACH
Route::apiResource('extracurricularCoach', 'Api\Eskul\EskulCoachController');

// ROUTE DATAPICKER

// FOR MANAGE AGAMA
Route::apiResource('agama', 'Api\DataPicker\AgamaController');

// FOR MANAGE PARENT EDUCATE
Route::apiResource('parentedu', 'Api\DataPicker\ParentEduController');

// FOR MANAGE PARENT TYPE
Route::apiResource('parenttype', 'Api\DataPicker\ParentTypeController');

// FOR MANAGE ATTACHMENT CATEGORY
Route::apiResource('category', 'Api\DataPicker\CategoryController');

//ROUTE FOR MANAGE FACILITY
Route::apiResource('facility', 'Api\Fasilitas\FacilityController');

//ROUTE FOR MANAGE PPDB

//TIME
Route::apiResource('ppdb', 'PPDB\PPDBController');

// Validasi NISN
Route::post('validasi-nisn', 'PPDB\PPDBUserController@validasiNisn')->name('ppdb.nisn.validate');

//USER
Route::apiResource('ppdbuser', 'PPDB\PPDBUserController')->except('update');

//PARENT
Route::apiResource('ppdbortu', 'PPDB\PPDBOrtuController')->except('update');

// APRECIATION
Route::apiResource('apreciation', 'Api\Apreciation\ApreciationController');

//ATTACHMENT
Route::apiResource('attachment', 'Api\Attachment\AttachmentController')->except('index');
Route::get('attachment/index/{category}', 'Api\Attachment\AttachmentController@index')->name('attachment.index');
