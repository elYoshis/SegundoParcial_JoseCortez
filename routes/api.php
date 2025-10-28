<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmpleadosController;


Route::apiResource('empleados', EmpleadosController::class);

