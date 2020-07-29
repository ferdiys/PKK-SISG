<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agama extends Model
{
    protected $table = 'agama';
    protected $fillable = [
        'nama'
    ];
    public function ppdbUser()
    {
        return $this->hasMany('App\Ppdbuser');
    }
}
