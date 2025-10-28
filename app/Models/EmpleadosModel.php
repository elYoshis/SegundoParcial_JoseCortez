<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmpleadosModel extends Model
{
    //
    protected $table = 'empleados';
    protected $fillable = ['nombre', 'apellido', 'email', 'salario'];
    public function empleados()
    {
        return $this->hasMany(EmpleadosModel::class);
    }
}
