<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ppdb extends Model
{
    protected $table = 'ppdb';
    protected $fillable = [
        'school_id',
        'tanggal_buka',
        'tanggal_tutup',
    ];
    public function school()
    {
        return $this->belongsTo('App\School', 'school_id');
    }
}
