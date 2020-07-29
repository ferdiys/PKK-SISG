<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Extracurricular extends Model
{
    protected $table = 'extracurricular';
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
    public function extracurricularCoach()
    {
        return $this->hasMany('App\ExtracurricularCoach');
    }
    public function attachment()
    {
        return $this->hasMany('App\Attachment');
    }
}
