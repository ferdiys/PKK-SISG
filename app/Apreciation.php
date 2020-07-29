<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apreciation extends Model
{
    protected $table = 'appreciations';
    protected $fillable = [
        'school_id',
        'name',
        'description',
        'dateRecieved'
    ];

    public function school()
    {
        return $this->belongsTo('App\School', 'school_id');
    }
}
