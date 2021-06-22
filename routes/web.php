<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ContactFormController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', HomeController::class)->name('home');

Route::get('/about', AboutController::class)->name('about');

Route::get('/contact', ContactController::class)->name('contact');

Route::post('/contact/submit', [ContactFormController::class,'submit'])->name('contact-form');

Route::get('/contact/allData', [ContactController::class, 'allData'])->name('contact-allData');

Route::get('/contact/allData/{id}', [ContactController::class,'showOneMessage'])->name('contact-data-one');

Route::get('/contact/allData/{id}/update',[ContactController::class,'updateMessage'])->name('contact-update');

Route::get('/contact/allData/{id}/delete',[ContactFormController::class,'deleteMessage'])->name('contact-delete');

Route::post('/contact/allData/{id}/update',[ContactFormController::class,'updateMessageSubmit'])->name('contact-update-submit');
