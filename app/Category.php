<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';
    protected $fillable = [
        'nama'
    ];
    public function attachment()
    {
        return $this->hasMany('App\Attachment');
    }
}
