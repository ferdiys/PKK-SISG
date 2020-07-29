<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ppdbuser extends Model
{
    protected $table = 'ppdbuser';
    protected $fillable = [
        'ppdb_id',
        'nama_lengkap',
        'nisn',
        'nem',
        'noijazah',
        'kelamin',
        'tempat_lahir',
        'tl',
        'asal_sekolah',
        'status',
        'saudara_kandung',
        'saudara_tiri',
        'tinggal',
        'jarak',
        'transportasi',
        'lama_sd',
        'alamat',
        'foto',

    ];
    public function ppdb()
    {
        return $this->belongsTo('App\Ppdb', 'ppdb_id');
    }
    public function ppdbOrtu()
    {
        return $this->hasMany(Ppdbortu::class);
    }
    public function format()
    {
        return [
            'id' => $this->id,
            'ppdb_id' => $this->ppdb->tanggal_buka . " - " . $this->ppdb->tanggal_tutup,
            'nama_lengkap' => $this->nama_lengkap,
            'nisn' => $this->nisn,
            'nem' => $this->nem,
            'noijazah' => $this->noijazah,
            'kelamin' => $this->kelamin,
            'tempat_lahir' => $this->tempat_lahir,
            'tl' => $this->tl,
            'asal_sekolah' => $this->asal_sekolah,
            'saudara_kandung' => $this->saudara_kandung,
            'saudara_tiri' => $this->saudara_tiri,
            'tinggal' => $this->tinggal,
            'jarak' => $this->jarak,
            'transportasi' => $this->transportasi,
            'lama_sd' => $this->lama_sd,
            'alamat' => $this->alamat,    
            'foto' => $this->foto,
            'ortu' => $this->ppdbOrtu->map->format()
        ];
    }
}
