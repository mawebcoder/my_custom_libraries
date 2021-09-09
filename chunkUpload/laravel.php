<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/chunk-upload', function (Request $request) {

    $_uuid = $request->dzuuid;
    $current_index = $request->dzchunkindex;
    $totalChunkCount = $request->dztotalchunkcount;

    $file = $request->file('file');

    if (!Storage::disk('public')->exists('temp')) {
        Storage::disk('public')->makeDirectory('temp');
    }


    File::append(storage_path('app/public/temp/' . $_uuid), $file->get());

    if ($current_index + 1 == $totalChunkCount) {

        $file_extension = $file->getClientOriginalExtension();
        Storage::disk('public')->move('temp/' . $_uuid, 'name/' . $_uuid . '.' . $file_extension);
        Storage::disk('public')->delete('temp/' . $_uuid);
        return response('success');


    }


});


Route::post('/admin/setting', 'Admin\Setting\SettingController@updateSetting')->name('update.setting');


