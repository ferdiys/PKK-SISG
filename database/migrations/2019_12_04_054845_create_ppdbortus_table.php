<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePpdbortusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ppdbortu', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('ppdbuser_id');
            $table->string('nama');
            $table->string('ttl');
            $table->string('pekerjaan');
            $table->string('phone');
            $table->string('alamat');
            $table->unsignedBigInteger('type');
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
        Schema::dropIfExists('ppdbortu');
    }
}
