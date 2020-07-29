<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ppdbortu extends Model
{
    protected $table = 'ppdbortu';
    protected $fillable = [
        'ppdbuser_id',
        'nama',
        'ttl',
        'pekerjaan',
        'phone',
        'alamat',
        'type'
    ];
    public function ppdbUser()
    {
        return $this->belongsTo('App\Ppdbuser', 'ppdbuser_id');
    }
    public function parentType()
    {
        return $this->belongsTo('App\Parenttype', 'type');
    }
    public function format()
    {
        return [
            'type' => $this->parentType->nama,
            'nama' => $this->nama,
            'ttl' => $this->ttl,
            'pekerjaan' => $this->pekerjaan,
            'phone' => $this->phone,
            'alamat' => $this->alamat,
        ];
    }
}
