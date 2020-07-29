<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table = 'school';
    protected $fillable = [
        'nama',
        'logo',
        'deskripsi',
        'alamat',
        'visi',
        'misi',
        'email',
        'facebook',
        'instagram',
        'youtube',
        'phone',
        'faximail',
        'tanggal_berdiri',
        'jml_guru',
        'jml_staf',
        'jml_murid'
    ];
    public function extracurricular()
    {
        return $this->hasMany('App\Extracurricular');
    }
    public function ppdb()
    {
        return $this->hasMany('App\Ppdb');
    }
    public function attachment()
    {
        return $this->hasMany('App\Attachment');
    }
}
