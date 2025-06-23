<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'title',
        'sort_order'
    ];

    public function course()
    {
        return $this->belongsTo(Section::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
