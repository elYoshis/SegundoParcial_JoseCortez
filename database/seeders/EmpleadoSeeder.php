<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EmpleadosModel;

class EmpleadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        EmpleadosModel::create(['nombre' => 'Juan', 'apellido' => 'Pérez', 'email' => 'juan.perez@example.com', 'salario' => 5000]);
        EmpleadosModel::create(['nombre' => 'Pedro', 'apellido' => 'Paco', 'email' => 'pedrito.paco@example.com', 'salario' => 4000]);
        EmpleadosModel::create(['nombre' => 'Maria', 'apellido' => 'Gomez', 'email' => 'maria.gomez@example.com', 'salario' => 4500]);
        EmpleadosModel::create(['nombre'=> 'Andrea', 'apellido'=> 'Lopez', 'email'=> 'andrea.lopez@example.com', 'salario'=> 3000]);
        EmpleadosModel::create(['nombre'=> 'Andres', 'apellido'=> 'Martinez', 'email'=> 'andres.martinez@example.com', 'salario'=> 2500]);
        EmpleadosModel::create(['nombre'=> 'Luisa', 'apellido'=> 'Fernandez', 'email'=> 'luisa.fernandez@example.com', 'salario'=> 2700]);
        EmpleadosModel::create(['nombre'=> 'Carlos', 'apellido'=> 'Sanchez', 'email'=> 'carlos.sanchez@example.com', 'salario'=> 2154]);
        EmpleadosModel::create(['nombre'=> 'Sofia', 'apellido'=> 'Ramirez', 'email'=> 'sofia.ramirez@example.com', 'salario'=> 2500]);
        EmpleadosModel::create(['nombre'=> 'Diego', 'apellido'=> 'Torres', 'email'=> 'diego.torres@example.com', 'salario'=> 2500]);
        EmpleadosModel::create(['nombre'=> 'Valentina', 'apellido'=> 'Flores', 'email'=> 'valentina.flores@example.com', 'salario'=> 6000]);
    }
}
