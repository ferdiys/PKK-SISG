<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExtracurricularCoach extends Model
{
    protected $table = 'extracurricular_coach';
    protected $fillable = [
        'extracurricular_id',
        'nama',
        'gender',
        'dateBorn',
        'photo',
        'profile'
    ];
    public function extracurricular()
    {
        return $this->belongsTo('App\Extracurricular', 'extracurricular_id');
    }
}
