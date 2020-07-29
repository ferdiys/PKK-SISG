<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('school', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama');
            $table->string('logo');
            $table->text('deskripsi');
            $table->text('alamat');
            $table->text('visi');
            $table->text('misi');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('faximail');
            $table->date('tanggal_berdiri');
            $table->string('facebook');
            $table->string('youtube');
            $table->string('instagram');
            $table->integer('jml_guru');
            $table->integer('jml_staf');
            $table->integer('jml_murid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('school');
    }
}
