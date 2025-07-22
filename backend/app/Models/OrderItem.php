<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = [
        'order_id',
        'course_id',
        'course_title',
        'course_thumbnail',
        'course_price',
    ];
}
