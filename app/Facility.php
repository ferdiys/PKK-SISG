<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    protected $table = 'facility';
    protected $fillable = [
        'school_id',
        'title',
        'image',
        'description',
        'dateFormed',
    ];

    public function school()
    {
        return $this->belongsTo('App\School', 'school_id');
    }

    public function attachment()
    {
        return $this->hasMany('App\Attachment');
    }
}
