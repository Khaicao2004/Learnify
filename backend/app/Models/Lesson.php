<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_id',
        'title',
        'video_path',
        'content',
        'sort_order'
    ];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function completions()
    {
        return $this->hasMany(LessonCompletion::class);
    }
}
