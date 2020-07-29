<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility', function (Blueprint $table) {
            // $table->bigIncrements('id');
            // $table->unsignedBigInteger('school_id');
            // $table->string('nama');
            // $table->integer('jumlah');
            // $table->timestamps();
            $table->bigIncrements('id');
            $table->unsignedBigInteger('school_id');
            $table->string('title');
            $table->string('image');
            $table->text('description');
            $table->date('dateFormed');
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
        Schema::dropIfExists('facility');
    }
}
