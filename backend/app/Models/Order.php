<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    const STATUS_PAYMENT_UNPAID         = 'unpaid';
    const STATUS_PAYMENT_PAID         = 'paid';
    
    protected $fillable = [
        'user_id',
        'user_name',
        'user_email',
        'user_phone',
        'total_price',
    ];
    

}
