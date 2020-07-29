<?php

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

/**
 * Store Single or Multiple File
 * 
 * @param array $array
 * @param string $key
 * @param string $destination
 * @param string $subfolder
 * @param string $name
 * @param string $totalFile
 * @return array
 */

if (!function_exists('storeFile')) {
    function storeFile(array $array, string $key, string $destination, string $subfolder = null, string $name, string $totalFile)
    {
        $file = $array[$key];
        if ($totalFile == "single" || $totalFile == "Single") {
            $filename = Hash::make($name) . '.' . $file->getClientOriginalExtension();
            $filename = str_replace('/', '.', $filename);
            if (isset($subfolder)) {
                $file->storeAs('public/' . $destination . '/' . $subfolder, $filename);
                $array[$key] = Storage::url($destination . '/' . $subfolder . '/' . $filename);
            } else {
                $file->storeAs('public/' . $destination, $filename);
                $array[$key] = Storage::url($destination . '/' . $filename);
            }
        } elseif ($totalFile == "multiple" || $totalFile == "Multiple") {
            $files = [];
            $i = 1;
            foreach ($file as $f) {
                $filename = Hash::make($name . "-" . $i) . '.' . $f->getClientOriginalExtension();
                $filename = str_replace('/', '.', $filename);
                if (isset($subfolder)) {
                    $f->storeAs('public/' . $destination . '/' . $subfolder, $filename);
                    $url = Storage::url($destination . '/' . $subfolder . '/' . $filename);
                } else {
                    $f->storeAs('public/' . $destination, $filename);
                    $url = Storage::url($destination . '/' . $filename);
                }
                $files[] = $url;
                $i += 1;
            }
            $array[$key] = implode(', ', $files);
        } else {
            return "Undefined";
        }
        return $array;
    }
}
