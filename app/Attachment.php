<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $table = 'attachment';

    protected $fillable = [
        'parent_id',
        'attachment',
        'category_id',
        'judul',
        'subjudul',
        'deskripsi',
    ];

    public function category()
    {
        return $this->belongsTo('App\Category', 'category_id');
    }

    public function school()
    {
        return $this->belongsTo('App\School', 'parent_id');
    }

    public function facility()
    {
        return $this->belongsTo('App\Facility', 'parent_id');
    }

    public function extracurricular()
    {
        return $this->belongsTo('App\Extracurricular', 'parent_id');
    }

    public function apresiasi()
    {
        return $this->belongsTo('App\Apreciation', 'parent_id');
    }

    public function format($category)
    {
        $array = [
            'attachment' => $this->attachment,
            'category' => $this->category->nama,
            'judul' => $this->judul,
            'subjudul' => $this->subjudul,
            'deskripsi' => $this->deskripsi
        ];
        switch ($category) {
            case '1':
                return array_merge($array, ['parent' => $this->school]);
                break;
            case '2':
                return array_merge($array, ['parent' => $this->extracurricular]);
                break;
            case '3':
                return array_merge($array, ['parent' => $this->facility]);
                break;
            case '4':
                return array_merge($array, ['parent' => $this->apresiasi]);
                break;
            default:
                return 'undefined';
                break;
        }
    }
}
