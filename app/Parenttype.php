<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parenttype extends Model
{
    protected $table = 'parent_type';
    protected $fillable = [
        'nama'
    ];
    public function ppdbOrtu()
    {
        return $this->hasMany('App\Ppdbortu');
    }
}
